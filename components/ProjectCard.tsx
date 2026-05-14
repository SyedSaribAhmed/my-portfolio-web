'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-violet-300">
          {title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <motion.a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300"
          whileHover={{ gap: '0.5rem' }}
        >
          View Project
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </motion.a>
      </div>
    </motion.article>
  );
}
