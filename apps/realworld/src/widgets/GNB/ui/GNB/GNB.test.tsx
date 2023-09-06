import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GNB from './GNB';

describe('GNB', () => {
  it('GNB에 conduit, Home, Sign in, Sign up 버튼이 표시된다.', () => {
    render(<GNB />);

    const logo = screen.getByTestId('gnbLogo');
    const home = screen.getByTestId('gnbHome');
    const signIn = screen.getByTestId('gnbSignIn');
    const signUp = screen.getByTestId('gnbSignUp');

    expect(logo).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(signIn).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
  });

  // 페이지 이동을 어떻게 테스트할까?
  // 1. url로 테스트 <-- 페이지 이동은 성공했지만 유저가 해당 페이지에서 정상적인 컨텐츠를 볼 수 없을 수 있다. (유저는 url을 확인하지 않는다.)
  // 2. 해당 페이지에 컨텐츠를 테스트 <-- 해당 페이지에 컨텐츠가 바뀔 확률이 있다. (유저는 행동에 가깝다. 그럼 GNB와 하위 컴포넌트를 같이 불러와야하는데? 그럼 그게 GNB테스트는 아니지 않을까? 앱 전체 테스트인것같은데..)
  // 3. ??

  //   it('conduit 버튼을 누르면 루트페이지(/)로 이동한다.', () => {
  //     render(<GNB />);
  //   });
  //   it('Home 버튼을 누르면 루트페이지(/)로 이동한다.', () => {
  //     render(<GNB />);
  //   });
  //   it('Sign in 버튼을 누르면 로그인 페이지로 이동한다.', () => {
  //     render(<GNB />);
  //   });
  //   it('Sign up 버튼을 누르면 로그인 페이지로 이동한다.', () => {
  //     render(<GNB />);
  //   });
});
