'use client';

import { motion } from 'framer-motion';

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR-USERNAME' },
  { label: 'GitHub', href: 'https://github.com/YOUR-USERNAME' },
  { label: 'Twitter', href: 'https://twitter.com/YOUR-USERNAME' },
  { label: 'Email', href: 'mailto:your@email.com' }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]/95 px-6 py-8 text-sm text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-slate-500">Crafted for AI automation teams, recruiters, and visionary clients.</p>
        <div className="flex flex-wrap items-center gap-3">
          {socials.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              className="rounded-full border border-white/10 px-3 py-2 text-slate-300 transition hover:border-neonpurple hover:text-white"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
