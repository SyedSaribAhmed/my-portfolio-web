'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../lib/data';
import ProjectCard from './ProjectCard';

const tags = ['All', 'AI Agents', 'Automation', 'APIs', 'Dashboards'];

export default function ProjectsGallery() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = useMemo(
    () => (activeTag === 'All' ? projects : projects.filter((project) => project.tags.some(tag => tag.toLowerCase().includes(activeTag.toLowerCase()) || activeTag.toLowerCase().includes(tag.toLowerCase())))),
    [activeTag]
  );

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6bb8c0]/70">Case studies</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Selected automation systems
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 lg:justify-self-end">
            Project thumbnails lead the story: architecture, interaction, and measurable business value before long marketing copy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? 'border-[#4a9ea6]/50 bg-[#4a9ea6]/[0.14] text-[#a8dce1] shadow-[0_0_24px_rgba(74,158,166,0.1)]'
                  : 'border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div className="grid gap-6">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
              >
                <ProjectCard {...project} hoverText={project.hoverText} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
