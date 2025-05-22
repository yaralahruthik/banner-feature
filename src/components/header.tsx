import Link from 'next/link';

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between gap-2 bg-gray-300 p-4 text-center">
      <Link className="font-semibold" href="/">
        Home
      </Link>
      <Link className="hover:underline" href="/about">
        About
      </Link>
    </header>
  );
}
