"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function IntroCompiler() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[280px] w-full">
      {!open ? (
        <div className="flex h-full items-center justify-center">
          <motion.button
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: [0.95, 1.05, 0.98], opacity: 1 }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6 }}
            onClick={() => setOpen(true)}
            className="relative z-10 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0f1415]/60 to-[#081011]/60 px-8 py-6 text-lg font-semibold text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 focus:outline-none"
          >
            <div className="flex flex-col items-center gap-2">
              <span>Click me for intro</span>
              <span className="text-xs text-slate-400">(psuedo-code animated)</span>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#4a9ea6]/20 px-4 py-1 text-xs text-[#a8dce1]">Open</div>
          </motion.button>
        </div>
      ) : (
        <CompilerBox onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

function CompilerBox({ onClose }: { onClose: () => void }) {
  const lines = [
    'def intro():',
    '    print("I\'m Syed Sarib Ahmed, a Full-Stack AI Engineer specializing in LLM systems, AI automation, and production-grade backend development.")',
    '    print("I\'ve trained frontier language models through RLHF pipelines, built multi-agent automation workflows that cut lead response time by 9x,")',
    '    print("and shipped full-stack applications with real-time WebSocket dashboards and OpenAI-powered analytics.")',
    '    print("I work across the full AI engineering stack, from prompt engineering and RAG pipelines to Node.js APIs and cloud deployment on AWS and Azure.")',
    '',
    '# click anywhere to close'
  ];

  const [content, setContent] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      const t = setTimeout(() => {
        setContent((c) => c + currentLine.charAt(charIndex));
        setCharIndex((i) => i + 1);
      }, 6 + Math.random() * 12);
      return () => clearTimeout(t);
    }
    // move to next line faster
    const nl = setTimeout(() => {
      setContent((c) => c + '\n');
      setLineIndex((li) => li + 1);
      setCharIndex(0);
    }, 80);
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
