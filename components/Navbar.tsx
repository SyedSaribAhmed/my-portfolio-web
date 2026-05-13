'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-slate-300 sm:px-8">
        <Link href="/" className="font-semibold text-white/90">AI Automation</Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="relative overflow-hidden">
                  <Link href={item.href} className="transition-colors duration-200 hover:text-white">
                    {item.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 bottom-[-2px] h-0.5 bg-neonpurple"
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
