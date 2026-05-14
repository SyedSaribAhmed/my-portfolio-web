'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  outcome?: string;
  visualLabel?: string;
  visualType?: string;
  tags: string[];
  href: string;
  hoverText?: string;
}

function ProjectVisual({ type = 'dashboard', label, isHovered = false }: { type?: string; label?: string; isHovered?: boolean }) {
  const isPipeline = type === 'pipeline';

  return (
    <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#080a0b] p-5 transition-all duration-300">
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_42%)] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
      <div className="relative flex items-center justify-between text-[0.68rem] uppercase tracking-[0.22em] text-slate-500">
        <span>{label}</span>
        <motion.span
          animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className="h-2 w-2 rounded-full bg-[#4a9ea6] shadow-[0_0_16px_rgba(74,158,166,0.8)]"
        />
      </div>

      {isPipeline ? (
        <div className="relative mt-10 grid gap-3">
          {['Capture', 'Score', 'Route', 'Outreach'].map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#4a9ea6]/25 bg-[#4a9ea6]/10 text-xs text-[#a8dce1]">
                {index + 1}
              </span>
              <div className="h-10 flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                <div className="h-2 w-24 rounded-full bg-slate-500/45" />
                <div className="mt-2 h-1.5 w-2/3 rounded-full bg-[#4a9ea6]/[0.35]" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative mt-8 grid grid-cols-[1fr_0.7fr] gap-4">
          <div className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
            <div className="h-3 w-24 rounded-full bg-[#4a9ea6]/55" />
            <div className="h-28 rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#4a9ea6]/[0.18] to-white/[0.03] p-3">
              <div className="flex h-full items-end gap-2">
                {[46, 72, 58, 86, 64].map((height) => (
                  <span key={height} className="flex-1 rounded-t bg-[#6bb8c0]/70" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="h-8 rounded-lg bg-white/[0.05]" />
              <span className="h-8 rounded-lg bg-white/[0.05]" />
              <span className="h-8 rounded-lg bg-[#4a9ea6]/15" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3">
              <div className="h-2 w-16 rounded-full bg-slate-500/50" />
              <div className="mt-4 h-10 w-10 rounded-full border-4 border-[#4a9ea6]/60" />
            </div>
            <div className="h-24 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3">
              <div className="h-2 w-20 rounded-full bg-slate-500/50" />
              <div className="mt-4 space-y-2">
                <span className="block h-2 rounded-full bg-[#4a9ea6]/40" />
                <span className="block h-2 w-2/3 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ title, description, outcome, visualLabel, visualType, tags, href, hoverText }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative grid h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0f11]/80 p-4 transition-all duration-300 hover:border-[#4a9ea6]/25 hover:bg-[#101416] lg:grid-cols-[1.1fr_0.9fr]"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.08),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <ProjectVisual type={visualType} label={visualLabel} isHovered={isHovered} />

      <div className="relative flex flex-col p-4 lg:p-6">
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-3 text-xl font-semibold leading-tight text-white transition-colors group-hover:text-[#a8dce1]">
          {title}
        </h3>

        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.p
              key="description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-sm leading-relaxed text-slate-400"
            >
              {description}
            </motion.p>
          ) : (
            <motion.p
              key="hoverText"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-sm leading-relaxed text-[#a8dce1]"
            >
              {hoverText || outcome || description}
            </motion.p>
          )}
        </AnimatePresence>

        {outcome && !isHovered && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-5 border-l border-[#4a9ea6]/40 pl-4 text-sm leading-relaxed text-slate-200"
          >
            {outcome}
          </motion.p>
        )}

        <Link href={href} className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-[#6bb8c0] transition-colors group-hover:text-white">
          <motion.span
            whileHover={{ gap: '0.5rem' }}
            className="inline-flex items-center gap-2"
          >
            View case study
            <span className="transform transition-transform group-hover:translate-x-1">-&gt;</span>
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
}
