'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const profile = `{
  "name": "Syed Sarib Ahmed",
  "title": "AI Automation Specialist",
  "location": "Remote / Hybrid",
  "focus": ["Workflow Automation", "AI Agents", "RAG", "Prompt Engineering"],
  "tools": ["Python", "TypeScript", "LangChain", "OpenAI API", "n8n", "Anthropic API"]
}`;

export default function TerminalProfile() {
  const [output, setOutput] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      setOutput((prev) => prev + profile[index]);
      index += 1;
      if (index >= profile.length) window.clearInterval(interval);
    }, 20);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="terminal-shell relative overflow-hidden rounded-3xl border border-white/10 p-6 text-sm text-slate-200 shadow-strong"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>
      <pre className="whitespace-pre-wrap break-words text-[0.95rem] leading-6"><code>{output}</code></pre>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_15%,rgba(255,255,255,0.03))]" />
    </motion.div>
  );
}
