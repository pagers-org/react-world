import { useLocation } from '@solidjs/router';
import { 라우트_리스트 } from './routes.const';

/**
 * 의사결정 요소
 * 위계: (Route) RouteGuard > (Layout) GlobalLayout > (component) PageTransition
 *
 * 상수로 메뉴와 페이지 애니메이션 관리
 * > 이 경우 페이지 애니메이션이 컴포넌트에 귀속 되면 안 되고 라우트에 귀속 되어야 한다.
 * 컴포넌트 레벨 말고 라우터와 근접해야할듯...? 이럼 해결? 그럼 GlobalLayout이 RouteGuard와 역순 의존성이 되어버리는데?
 */
export const getTransitionType = () => {
  const { pathname } = useLocation();
  return (
    라우트_리스트.find(({ path }) => pathname.startsWith(path)) ?? {
      path: '/home',
      title: 'Home',
      animate: 'fadeIn',
    }
  );
};
