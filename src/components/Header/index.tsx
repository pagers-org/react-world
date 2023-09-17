import { BlogNameStyle, DeskNavigationStyle, HeaderStyle } from './index.css';

const Header = () => (
  <header className={HeaderStyle}>
    <div className={BlogNameStyle}>Conduit</div>
    <div className={DeskNavigationStyle}>
      <div>Home</div>
      <div>Sign in</div>
      <div>Sign up</div>
    </div>
  </header>
);
export default Header;
