"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks } from '../lib/data';

export default function FloatingSocial() {
  const items = socialLinks.filter(s => ['LinkedIn','GitHub','Email'].includes(s.label)).slice(0,3);

  return (
    <div className="fixed left-6 top-1/2 z-40 -translate-y-1/2 hidden flex-col gap-3 md:flex">
      {items.map((item, idx) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * idx }}
          className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] p-2 text-sm text-slate-200 backdrop-blur-md hover:scale-105 hover:shadow-[0_8px_30px_rgba(74,158,166,0.12)] transition-all"
        >
          <span className="sr-only">{item.label}</span>
          {item.label === 'LinkedIn' && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h4v16H4zM6 3a2 2 0 110 4 2 2 0 010-4zM10 8h4v2h.1c.6-1 2.1-2 4.4-2 4.7 0 5.6 3.1 5.6 7.1V20h-4v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V20h-4V8z" fill="currentColor" />
            </svg>
          )}
          {item.label === 'GitHub' && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C7 2 3.3 5.7 3.3 10.7c0 3.4 2.2 6.3 5.2 7.3.4.1.6-.2.6-.5v-1.8c-2.1.5-2.6-1-2.6-1-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.8-1.4-1.7-.2-3.5-.9-3.5-4 0-.9.3-1.6.9-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8A7.6 7.6 0 0112 7.1c.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.9 1.2.9 2.1 0 3.1-1.8 3.8-3.6 4 .4.3.8.9.8 1.8v2.6c0 .3.2.6.6.5 3-1 5.2-4 5.2-7.3C20.7 5.7 17 2 12 2z" fill="currentColor"/>
            </svg>
          )}
          {item.label === 'Email' && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16v16H4zM6 8l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </motion.a>
      ))}
    </div>
  );
}
