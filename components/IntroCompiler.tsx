"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function IntroCompiler() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<'form'|'typing'|'idle'>('idle');
  const [opts, setOpts] = useState({ tone: 'Professional', length: 'Medium', achievements: true });

  return (
    <div className="min-h-[320px] w-full">
      {stage === 'idle' && !open && (
        <div className="flex h-full items-center justify-center">
          <motion.button
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: [0.95, 1.06, 1], opacity: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.6 }}
            onClick={() => { setOpen(true); setStage('form'); }}
            className="relative z-10 rounded-3xl border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-10 py-8 text-xl font-semibold text-white shadow-[0_30px_80px_rgba(0,0,0,0.6)] hover:scale-105 focus:outline-none backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="tracking-wide">Click me for intro</span>
              <span className="text-xs text-slate-400">(psuedo-code animated)</span>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#4a9ea6]/20 px-4 py-1 text-xs text-[#a8dce1]">Open</div>
          </motion.button>
        </div>
      )}

      {stage === 'form' && open && (
        <div className="mx-auto max-w-xl rounded-2xl border border-white/[0.06] bg-[#081015]/60 p-6 backdrop-blur-md">
          <h3 className="mb-3 text-lg font-semibold text-white">How would you like your intro?</h3>
          <div className="mb-4 text-sm text-slate-400">Choose tone, length, and whether to highlight achievements.</div>

          <div className="mb-4 flex gap-3">
            <button onClick={() => setOpts(o => ({ ...o, tone: 'Professional' }))} className={`rounded-full px-3 py-2 ${opts.tone === 'Professional' ? 'bg-[#4a9ea6]/20 text-[#a8dce1]' : 'bg-white/[0.03] text-slate-300'}`}>Professional</button>
            <button onClick={() => setOpts(o => ({ ...o, tone: 'Playful' }))} className={`rounded-full px-3 py-2 ${opts.tone === 'Playful' ? 'bg-[#4a9ea6]/20 text-[#a8dce1]' : 'bg-white/[0.03] text-slate-300'}`}>Playful</button>
            <button onClick={() => setOpts(o => ({ ...o, tone: 'Direct' }))} className={`rounded-full px-3 py-2 ${opts.tone === 'Direct' ? 'bg-[#4a9ea6]/20 text-[#a8dce1]' : 'bg-white/[0.03] text-slate-300'}`}>Direct</button>
          </div>

          <div className="mb-4 flex gap-3">
            <button onClick={() => setOpts(o => ({ ...o, length: 'Short' }))} className={`rounded-full px-3 py-2 ${opts.length === 'Short' ? 'bg-[#4a9ea6]/20 text-[#a8dce1]' : 'bg-white/[0.03] text-slate-300'}`}>Short</button>
            <button onClick={() => setOpts(o => ({ ...o, length: 'Medium' }))} className={`rounded-full px-3 py-2 ${opts.length === 'Medium' ? 'bg-[#4a9ea6]/20 text-[#a8dce1]' : 'bg-white/[0.03] text-slate-300'}`}>Medium</button>
            <button onClick={() => setOpts(o => ({ ...o, length: 'Long' }))} className={`rounded-full px-3 py-2 ${opts.length === 'Long' ? 'bg-[#4a9ea6]/20 text-[#a8dce1]' : 'bg-white/[0.03] text-slate-300'}`}>Long</button>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <input id="achievements" checked={opts.achievements} onChange={(e) => setOpts(o => ({ ...o, achievements: e.target.checked }))} type="checkbox" className="h-4 w-4 rounded bg-white/[0.04]" />
            <label htmlFor="achievements" className="text-sm text-slate-300">Highlight key achievements (lead-time reduction, RLHF)</label>
          </div>

          <div className="flex gap-3">
            <button onClick={() => { setStage('typing'); }} className="rounded-full bg-[#4a9ea6]/20 px-5 py-2 text-sm font-semibold text-[#a8dce1]">Generate Intro</button>
            <button onClick={() => { setOpen(false); setStage('idle'); }} className="rounded-full bg-white/[0.03] px-5 py-2 text-sm text-slate-300">Cancel</button>
          </div>
        </div>
      )}

      {stage === 'typing' && open && (
        <CompilerBox onClose={() => { setOpen(false); setStage('idle'); }} opts={opts} />
      )}

    </div>
  );
}

function CompilerBox({ onClose, opts }: { onClose: () => void; opts?: { tone?: string; length?: string; achievements?: boolean } }) {
  // create lines based on opts
  const base = [
    "I'm Syed Sarib Ahmed, a Full-Stack AI Engineer specializing in LLM systems, AI automation, and production-grade backend development.",
    "I've trained frontier language models through RLHF pipelines, built multi-agent automation workflows that cut lead response time by 9x,",
    "and shipped full-stack applications with real-time WebSocket dashboards and OpenAI-powered analytics.",
    "I work across the full AI engineering stack, from prompt engineering and RAG pipelines to Node.js APIs and cloud deployment on AWS and Azure."
  ];

  const tone = opts?.tone || 'Professional';
  const length = opts?.length || 'Medium';
  const achievements = opts?.achievements ?? true;

  const lines: string[] = [];
  lines.push('def intro():');

  const selected = (() => {
    if (length === 'Short') return base.slice(0,1);
    if (length === 'Medium') return base.slice(0,3);
    return base.slice(0,4);
  })();

  selected.forEach((s) => {
    if (tone === 'Playful') {
      lines.push(`    print("${s.replace(/\"/g, '\\"')} 🤖")`);
    } else if (tone === 'Direct') {
      lines.push(`    print("${s.replace(/\"/g, '\\"')}")`);
    } else {
      lines.push(`    print("${s.replace(/\"/g, '\\"')}")`);
    }
  });

  if (achievements && length !== 'Short') {
    lines.splice(2, 0, '    print("Key achievement: 9x faster lead response via multi-agent automation.")');
  }

  lines.push('');
  lines.push('# click anywhere to close');


  const [content, setContent] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      // faster typing speed influenced by chosen tone
      const baseSpeed = opts?.tone === 'Playful' ? 6 : 8;
      const t = setTimeout(() => {
        setContent((c) => c + currentLine.charAt(charIndex));
        setCharIndex((i) => i + 1);
      }, baseSpeed + Math.random() * 10);
      return () => clearTimeout(t);
    }
    // move to next line faster
    const nl = setTimeout(() => {
      setContent((c) => c + '\n');
      setLineIndex((li) => li + 1);
      setCharIndex(0);
    }, 60);
    return () => clearTimeout(nl);
  }, [charIndex, lineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onClick={onClose}
      className="mx-auto max-w-3xl cursor-pointer rounded-3xl border border-white/10 bg-[#071014]/80 p-6 text-sm text-slate-200 shadow-strong sm:p-8"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>

      <pre className="whitespace-pre-wrap break-words font-mono text-[0.95rem] leading-6">
        <code>{content}</code>
      </pre>

      <div className="mt-4 text-xs text-slate-400">Click anywhere to close</div>
    </motion.div>
  );
}
