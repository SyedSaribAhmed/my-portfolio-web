'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from './ui/Input';

export default function ContactForm() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      console.log('Contact form submitted', state);
      setSubmitting(false);
      setSuccess(true);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/10 bg-[#111827]/90 p-8 shadow-strong">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Name"
          name="name"
          value={state.name}
          onChange={(event) => setState((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Your full name"
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={state.email}
          onChange={(event) => setState((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="you@email.com"
          required
        />
      </div>
      <label className="flex flex-col gap-2 text-sm text-slate-300">
        Message
        <textarea
          className="min-h-[180px] rounded-3xl border border-white/10 bg-[#0f172a]/90 p-4 text-slate-100 outline-none transition focus:border-neonpurple focus:ring-2 focus:ring-neonpurple/20"
          value={state.message}
          onChange={(event) => setState((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Describe your project or opportunity..."
          required
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-neonpurple px-6 py-3 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Sending...' : 'Send Message'}
        </motion.button>
        <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.14)]">
          <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-pulseglow" />
          Available for freelance
        </div>
      </div>
      {success && <p className="text-sm text-emerald-300">Thanks! Your message is received. I will follow up soon.</p>}
    </form>
  );
}
