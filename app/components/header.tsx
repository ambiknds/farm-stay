'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white py-4 px-6 md:px-12">
      <nav className="flex flex-wrap items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Wapung Farm
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`w-full md:w-auto md:flex md:space-x-8 ${
            isMenuOpen ? 'block' : 'hidden'
          } mt-4 md:mt-0`}
        >
          <li>
            <Link
              href="/farm-to-customer"
              className="block py-2 hover:text-green-200 transition-colors"
            >
              Farm to Customer
            </Link>
          </li>
          <li>
            <Link
              href="/farm-to-business"
              className="block py-2 hover:text-green-200 transition-colors"
            >
              Farm to Business
            </Link>
          </li>
          <li>
            <Link
              href="/stay-with-us"
              className="block py-2 hover:text-green-200 transition-colors"
            >
              Stay With Us
            </Link>
          </li>
          <li>
            <Link
              href="/fpo"
              className="block py-2 hover:text-green-200 transition-colors"
            >
              FPO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
