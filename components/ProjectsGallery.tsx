'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../lib/data';
import ProjectCard from './ProjectCard';

const tags = ['All', 'Python', 'LangChain', 'n8n', 'OpenAI API', 'Anthropic API', 'RAG', 'AI Agents', 'Prompt Engineering'];

export default function ProjectsGallery() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = useMemo(
    () => (activeTag === 'All' ? projects : projects.filter((project) => project.tags.includes(activeTag))),
    [activeTag]
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet/70">Projects</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Work that amplifies intelligence.</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-2 text-sm transition ${activeTag === tag ? 'border-neonpurple bg-neonpurple/10 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:border-neonpurple hover:bg-white/10'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <motion.div key={project.title} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
