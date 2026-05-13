'use client';

import { motion } from 'framer-motion';

interface SkillPillProps {
  name: string;
  level: number;
}

export default function SkillPill({ name, level }: SkillPillProps) {
  return (
    <motion.div
      className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-neon"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-3 flex items-center justify-between text-sm text-slate-200">
        <span>{name}</span>
        <span className="text-violet/80">{Math.round(level * 100)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-neonpurple via-violet to-[#6d28d9]"
          style={{ width: `${level * 100}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level * 100}%` }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 14 }}
        />
      </div>
    </motion.div>
  );
}
