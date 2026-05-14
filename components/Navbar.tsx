'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const [isScrolled, setIsScrolled] = useState(false);

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

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm sm:px-8">
        <Link href="#home" className="text-lg font-medium tracking-tight text-white">
          SA<span className="text-violet-400">.</span>
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                      active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 bottom-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500"
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:from-violet-500 hover:to-purple-500 hover:shadow-lg hover:shadow-violet-500/25"
        >
          Let's Talk
        </Link>
      </div>
    </header>
  );
}
