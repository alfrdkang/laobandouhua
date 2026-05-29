'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/story' },
  { label: 'Menu', href: '/menu' },
  { label: 'Outlets', href: '/outlets' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ disableLogo = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-LB-yellow flex flex-col">
      <div className="w-full justify-center">
        {/* Top Row */}
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap sm:flex-nowrap items-center justify-between my-7 relative">

          {/* Social Icons */}
          <div className="order-2 flex-1 flex items-center justify-start gap-5 sm:order-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-LB-black hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="text-LB-black hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="text-LB-black hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>

          {/* Logo */}
          {!disableLogo && (
            <div className="order-1 w-full flex p-4 sm:p-0 justify-center mb-4 sm:mb-0 sm:order-2 sm:w-auto sm:flex-1">
              <Link href="/" className="my-4 sm:my-0 w-full sm:w-auto flex items-center select-none justify-center">
                <img src="/images/Navbar/logo.png" alt="Logo" className="w-full h-auto max-w-screen sm:max-w-none sm:h-24 md:h-28 lg:h-32 object-contain" />
              </Link>
            </div>
          )}

          <div className="order-3 flex-1 flex items-center justify-end">
            {/* Order Now */}
            <div className="hidden sm:flex flex-col items-center">
              <a href="https://wa.me/6586862808?text=Hi%20I'm%20interested%20in%20your%20beancurd%20"
                className="bg-white text-LB-black font-bold text-sm px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-150 whitespace-nowrap">
                Order Now
              </a>
              <span className="text-[10px] text-LB-black hidden lg:flex font-medium mt-1.5 text-center leading-snug italic">
                Delivery &amp; Self Collection<br />Available
              </span>
            </div>

            {/* Mobile menu toggle */}
            <div className="sm:hidden flex justify-end">
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="text-LB-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {menuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Nav Links Row */}
      <div>
        {/* Desktop Nav */}
        <nav className="max-w-5xl mx-auto px-6 hidden sm:flex items-center justify-center gap-12 lg:gap-36 py-3 pb-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-xl text-LB-black font-bold hover:underline underline-offset-4 transition-all">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="sm:hidden flex flex-col items-center gap-3 pb-14">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-md text-LB-black font-bold hover:underline my-2">
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
