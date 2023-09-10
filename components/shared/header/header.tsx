import Link from "next/link";

export const Header = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-10 w-full justify-center bg-white shadow-md">
      <div className="page flex items-center justify-between">
        <Link className="text-lg font-semibold text-zinc-800" href="/">
          conduit
        </Link>

        <ul className="flex items-center gap-4">
          <li className="text-xs font-normal text-zinc-500 no-underline hover:text-zinc-700">
            <Link href="/">Home</Link>
          </li>

          <li className="text-xs font-normal text-zinc-500 no-underline hover:text-zinc-700">
            <Link href="/login">Sign in</Link>
          </li>

          <li className="text-xs font-normal text-zinc-500 no-underline hover:text-zinc-700">
            <Link href="/register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
