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
      className="card-glass group overflow-hidden rounded-3xl border border-white/10 p-6 shadow-strong"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.78rem] text-slate-300">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-neonpurple">{title}</h3>
      <p className="mb-6 text-sm leading-6 text-slate-300">{description}</p>
      <a href={href} className="inline-flex items-center gap-2 text-sm text-violet transition hover:text-neonpurple">
        View Project <span className="transform transition group-hover:translate-x-1">→</span>
      </a>
    </motion.article>
  );
}
