'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '../lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070809]/95 px-6 py-8 text-sm text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks
            .filter((item) => ['LinkedIn', 'GitHub', 'Email'].includes(item.label))
            .map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-3 text-slate-200 transition-all duration-200 hover:border-[#4a9ea6]/40 hover:bg-white/[0.08] hover:text-white"
              >
                <span className="text-xs uppercase tracking-[0.28em] text-[#6bb8c0]">{item.label}</span>
                <span className="text-lg">→</span>
              </motion.a>
            ))}
        </div>
      </div>
    </footer>
  );
}
