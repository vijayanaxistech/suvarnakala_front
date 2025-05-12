import Link from 'next/link';

const Header = () => (
  <header className="py-4 px-6 bg-gray-100 shadow">
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/product">Products</Link>
      <Link href="/about">About Us</Link>
    </nav>
  </header>
);

export default Header;
