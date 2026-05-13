'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  role: string;
  company: string;
  date: string;
  points: string[];
  align: 'left' | 'right';
}

export default function TimelineItem({ role, company, date, points, align }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -60 : 60, y: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative mb-10 flex w-full max-w-4xl items-start gap-6 sm:mx-auto"
    >
      <div className="absolute left-0 top-2 hidden h-full w-0.5 bg-white/10 sm:block" />
      <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-neonpurple bg-[#111827]/90 text-sm text-neonpurple shadow-glow sm:relative sm:left-0">
        ●
      </div>
      <div className="flex-1 rounded-3xl border border-white/10 bg-[#111827]/90 p-6 shadow-neon">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
          <span className="font-semibold text-white">{role}</span>
          <span>{date}</span>
        </div>
        <p className="mb-4 text-sm text-slate-300">{company}</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
