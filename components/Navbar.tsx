'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
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
    <header className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center gap-4">
        <Link
          href="#home"
          className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
        >
          SA
        </Link>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700">
            <motion.path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isMenuOpen ? { d: 'M6 18L18 6M6 6L18 18' } : { d: 'M4 6H20M4 12H20M4 18H20' }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.nav
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 20 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute right-16 top-2 w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-4"
              >
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const active = activeSection === item.href.slice(1);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                            active
                              ? 'bg-slate-900 text-white'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-slate-800"
                  >
                    Let's Talk
                  </Link>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
