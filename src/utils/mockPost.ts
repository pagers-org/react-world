export const mockPost = `프로젝트 진행중에 로그인과 회원가입 기능을 jwt 토큰과 쿠키를 이용해서 구현하고 있었다.

1. 메일 인증을 통해서, 전송 받은 인증메일을 클릭해서 회원 정보를 입력해서 완료 버튼을 누르면 / 페이지로 이동하게 된다.

2. / 페이지로 이동하기 전에 서버에서는 액세스 토큰과 리프레시 토큰을 생성해서 쿠키로 브라우저에게 보내준다. 

3. 그래서 / 페이지로 이동했을때 이 받은 액세스 토큰과 리프레시 토큰을 다시 서버로 전달해준다.

4. 서버에서는 Login 컨트롤러가 실행되어서 액세스 토큰을 받아서 회원 정보를 넘겨준다.

5. 만약 액세스 토큰이 만료 됐다면, resendAccessToken 컨트롤러가 실행되어서 새로운 액세스 토큰을 만들어주고 그걸 다시 쿠키로 보내준다.  



---

## - 문제점들

### 1. 인증 메일을 받기 위해, 이메일을 입력하고 전송 버튼을 누르면 네트워크 상에 key 값이 없는 쿠키가 생성된다. 

![사진1](https://velog.velcdn.com/images/brgndy/post/ccfa8e48-c778-4ef4-b7e0-d9bd80677c13/image.png)

jwt 토큰 값인거 같은데, 이게 왜 생기는지 모르겠다

회원가입이 완료 된 후에도 이름 없는 jwt토큰 값을 담은 쿠키가 생성된다. 

![사진](https://velog.velcdn.com/images/brgndy/post/22a34bf2-0f8d-4ded-a568-4a01e2f504c6/image.png)



### - 프론트쪽 이메일 전송하는 함수

~~~typescript
      const res = await fetch("http://localhost:3002/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
          userName: formState.inputs.userName.value,
          userEmail: formState.inputs.userEmail.value,
          userId: formState.inputs.userId.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      console.log(data);

      // 서버에서 쿠키 전송 받은 뒤 바로 메인 페이지로 리다이렉트
      router.push("http://localhost:3000/");
~~~

### - 백엔드쪽 회원가입 완료 후 첫 쿠키 생성 해주는 코드 

~~~typescript
import { Response, Request, NextFunction } from "express";
import { User } from "../../models/users";
import { HttpError } from "../../error/http-error";
import { RefreshToken } from "../../models/refreshTokens";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { hashingToken } from "../../utils/hashing";
import { useEffect } from 'react';

dotenv.config();

const jwtSecret = process.env.JWT_SIGNATURE;

export const userSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userName, userEmail, userId } = req.body;

  let newUser;
  let accessToken;
  let refreshToken;
  let existingUser;

  // 중복 회원 검사해주기
  try {
    existingUser = await User.findOne({
      where: {
        userEmail: userEmail,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "회원가입에 실패하셨습니다. 다시 시도해주세요",
      500
    );

    return next(error);
  }

  // 이미 회원가입 된 유저라면
  if (existingUser) {
    const error = new HttpError(
      "이미 존재하는 회원입니다. 로그인해주세요!",
      422
    );

    return next(error);
  }

  // 회원 정보 Db에 저장해주기
  try {
    newUser = await User.create({
      userName: userName,
      userEmail: userEmail,
      userId: userId,
      isAdmin: false,
      nowLoggedIn: true,
    });

    if (!jwtSecret) {
      throw new Error("JWT 시그니처를 정의해주세요!");
    }

    // 토큰 생성 해주기
    accessToken = jwt.sign(
      { id: newUser.id, userEmail: userEmail },
      jwtSecret,
      {
        algorithm: "HS256",
        expiresIn: "1h",
      }
    );

    refreshToken = jwt.sign({ id: newUser.id }, jwtSecret, {
      algorithm: "HS256",
      expiresIn: "7d",
    });

    // refresh 토큰 해시화
    const hashedToken = await hashingToken(refreshToken);

    // refresh 토큰 테이블에 해시화 된 refresh 토큰 저장
    const newRefreshToken = await RefreshToken.create({
      refreshToken: hashedToken,
      userId: newUser.id,
    });
  } catch (err) {
    const error = new HttpError(
      "회원가입 할 수 없습니다. 나중에 다시 시도하세요.",
      500
    );
    return next(error);
  }

  //  accessToken (test)
  res.cookie("accessToken", accessToken, {
    expires: new Date(Date.now() + 10 * 60 * 1000),
    secure: false,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  // refresh Token (test)
  res.cookie("refreshToken", refreshToken, {
    expires: new Date(Date.now() + 15 * 60 * 1000),
    secure: false,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return res.json({ message: "회원가입이 정상적으로 처리 되었습니다!" });
};
~~~ 


저 프론트쪽에 있는 router.push("http://localhost:3000/"); 코드를 주석처리 하고 그냥 응답처리를 살펴보았다.

처음에 회원가입이 완료 된 후에는 액세스 토큰과 리프레시 토큰이 두개 다 생성 된다. 이때는 Set-Cookie 도 정상적으로 작동한다. 

![](https://velog.velcdn.com/images/brgndy/post/8f1ffd7e-1b06-4205-9095-760c3dfb8cc9/image.png)




하지만 문제는 액세스 토큰이 만료되고, 서버쪽에 리프레시 토큰을 보내서 새로운 액세스 토큰을 발급 받을때, 그 새로운 액세스 토큰이 쿠키가 저장이 안되는 문제가 발생했다.

>테스트 해볼게요

~~텍스트~~`;
