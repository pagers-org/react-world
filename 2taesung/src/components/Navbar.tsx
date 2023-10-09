import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white" style={{ color: '#5CB85C' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold">
            conduit
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-black hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-black hover:text-gray-400">
                Sign in
              </Link>
            </li>
            <li>
              <Link href="/" className="text-black hover:text-gray-400">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
