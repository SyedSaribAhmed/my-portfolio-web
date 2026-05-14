'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../lib/data';
import ProjectCard from './ProjectCard';

const tags = ['All', 'AI Agents', 'Automation', 'RAG', 'APIs'];

export default function ProjectsGallery() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = useMemo(
    () => (activeTag === 'All' ? projects : projects.filter((project) => project.tags.some(tag => tag.toLowerCase().includes(activeTag.toLowerCase()) || activeTag.toLowerCase().includes(tag.toLowerCase())))),
    [activeTag]
  );

  return (
    <section id="projects" className="relative px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Real-world AI and automation solutions I've built
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div className="grid gap-6 md:grid-cols-2">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
