'use client';
import * as styles from '@/styles/layout.css';
import useUserStore from '@/stores/useUserStore';
import LoginNav from './LoginNav';
import NonLoginNav from './NonLoginNav';

const Nav = () => {
  const { token } = useUserStore();
  return <nav className={styles.nav}>{token ? <LoginNav /> : <NonLoginNav />}</nav>;
};

export default Nav;
