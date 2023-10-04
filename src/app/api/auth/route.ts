import { fetchLogin } from "@/services/users";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const loginInput = await request.json();
    const loginResponse = await fetchLogin(loginInput);

    if ("errors" in loginResponse) {
      return NextResponse.json(
        {
          message: loginResponse.errors["email or password"][0],
        },
        { status: 500 },
      );
    }

    const token = loginResponse.user.token;

    setAuthorizationCookie(token);

    return NextResponse.json({ message: "Login Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Unexpected Error" }, { status: 500 });
  }
}

function setAuthorizationCookie(token: string) {
  const secure = process.env.NODE_ENV !== "development";
  const maxAge = 100000;
  const sameSite = "strict";
  const path = "/";

  cookies().set("Authorization", JSON.stringify({ token }), {
    httpOnly: true,
    secure,
    maxAge,
    sameSite,
    path,
  });
}
