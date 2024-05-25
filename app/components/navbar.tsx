// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">Volundeer</Link>
        <div>
          <Link href="/about" className="mr-4">About</Link>
          <Link href="/create" className="mr-4">Create</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
