'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-violet/70">{subtitle ?? 'Section'}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
