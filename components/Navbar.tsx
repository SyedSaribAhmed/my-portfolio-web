'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CircularMenu from './CircularMenu';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href="#home"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white transition-colors hover:text-[#6bb8c0]"
          aria-label="Go to home"
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.04]">
            <span className="absolute left-2 top-2 h-4 w-4 rotate-45 border-l-2 border-t-2 border-[#4a9ea6]" />
            <span className="absolute bottom-2 right-2 h-3 w-3 bg-white" />
          </span>
          <span className="hidden sm:inline">SA</span>
        </Link>

        <nav className="hidden mx-auto rounded-full border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent px-3 py-2 shadow-[0_12px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block">
          <ul className="flex items-center gap-1 justify-center">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 transform will-change-auto ${
                      active
                        ? 'bg-white text-[#070809] shadow-[0_8px_30px_rgba(74,158,166,0.18)]'
                        : 'text-slate-300 hover:bg-white/[0.06] hover:text-white hover:scale-105 hover:shadow-[0_8px_30px_rgba(74,158,166,0.08)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full border border-[#4a9ea6]/25 bg-[#4a9ea6]/[0.12] px-6 py-3 text-sm font-semibold text-[#a8dce1] shadow-[0_0_35px_rgba(74,158,166,0.12)] transition-all duration-200 hover:border-[#6bb8c0]/50 hover:bg-[#4a9ea6]/[0.18] md:inline-flex"
        >
          Start a project
        </Link>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-[#0d1012]/90 text-white shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-[#4a9ea6]/40 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? '✕' : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </motion.button>

        <CircularMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}
