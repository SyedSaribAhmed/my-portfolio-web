'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../../lib/data';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6bb8c0]/70">Case Studies</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Selected automation systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            In-depth looks at production systems that reduced manual work, improved response times, and created measurable business value.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-[#0c0f11]/80 p-8 transition-all duration-300 hover:border-[#4a9ea6]/25 hover:bg-[#101416]"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mb-3 text-2xl font-semibold text-white transition-colors group-hover:text-[#a8dce1]">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-base leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  {project.outcome && (
                    <p className="border-l-2 border-[#4a9ea6]/40 pl-4 text-sm leading-relaxed text-slate-300">
                      {project.outcome}
                    </p>
                  )}
                </div>
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[#4a9ea6]/[0.35] bg-[#4a9ea6]/[0.14] px-6 py-3 text-sm font-semibold text-[#a8dce1] transition-all duration-200 hover:border-[#6bb8c0]/60 hover:bg-[#4a9ea6]/20 lg:self-start"
                >
                  View case study
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
