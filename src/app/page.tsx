// 상위에 client가 있으면 아래 컴포넌트가 전부 클라이언트, 상위에 client가 있으면 자식은 무조건 client로 그래서 명시적으로 넣어주는 것이 가독성이 좋지 않을까?
// 아니면 반대로 하는 방법이 있으니 찾아야 한다

import ArticleList from '../components/ArticleList';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';

// JWT 단점: 탈취 가능하다, 디코딩이 쉽다, 헤쉬랑 다른점(정보가 크면 payload가 커져서 부하가 큼)
// JWT best practice: 쿠키에 넣으면 document로 접근, 그래서 httpOnly로...토근을 받으면 내부 api를 call해서 받게 만들고 던졌으면????
// nextjs api를 활용해서라도 관리를 하면 좋다

// 서버컴포넌트를 모은 폴더를 구분할지, 클라이언트를 구분할지??

/**
 * 배너에 대한 고찰
 * 1. 평상시에는 블로그 이름
 * 2. 상세페이지 진입 시 색이 바뀌며 상세페이지의 1)제목 2)작성자 3)Follow 4)Favorite
 * 3. Banner는 로그인 및 회원가입에서 보이지 않는다
 * 4. 로그인 이후에는 배너가 보이지 않는다.
 */

// 화살표와의 차이점????? 성능적인것??? 응 없음
// const Banner = () => <div>banner</div>;

/**
 * media 제한: 모바일-414px이하, 테블릿-815px이하,
 * 영역 제한: 모바일-full, 테블릿-80%, 테스크탑은 1140px이 최대
 *
 */

export default function Page() {
  return (
    <>
      <Header />
      <Banner />
      <div style={{ width: '100%', display: 'flex', border: 'solid' }}>
        <ArticleList />
      </div>
      <Footer />
    </>
  );
}
