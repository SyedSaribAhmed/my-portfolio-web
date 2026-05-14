'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '../lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070809]/95 px-6 py-8 text-sm text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-slate-500">AI automation systems, crafted with clarity.</p>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              className="rounded-full border border-white/10 px-3 py-2 text-slate-300 transition hover:border-[#4a9ea6]/40 hover:text-white"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
