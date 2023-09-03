import Link from "next/link";
import ActiveLink from "../ActiveLink";

const Header = () => {
  return (
    <nav className="flex max-w-2xl mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-[1200px] px-6 py-4 justify-between">
      <Link href="/" className="font-bold text-primary text-xl">
        conduit
      </Link>
      <ul className="flex gap-4">
        <li>
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/login">Sign in</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/register">Sign up</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
