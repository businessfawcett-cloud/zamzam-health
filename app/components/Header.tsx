"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insurance & Patients", href: "/insurance" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-navy tracking-tight">
          Northside<span className="text-green">Primary Care</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 -mr-2 rounded-md text-gray-600 hover:text-navy hover:bg-navy-50 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-navy rounded-md hover:bg-navy-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-green hover:bg-green-dark rounded-md transition-colors"
          >
            Schedule Visit
          </Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white px-4 sm:px-6 pb-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-navy rounded-md hover:bg-navy-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-2.5 text-sm font-semibold text-center text-white bg-green hover:bg-green-dark rounded-md transition-colors"
            >
              Schedule Visit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
