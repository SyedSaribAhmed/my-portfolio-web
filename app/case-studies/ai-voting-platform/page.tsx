'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AIVotingPlatformCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              ← Back to case studies
            </Link>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6bb8c0]/70">Case Study</p>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              AI-Powered Voting Platform
            </h1>
            <p className="text-xl leading-relaxed text-slate-400">
              A secure voting system with role-based access, live WebSocket analytics, and AI sentiment processing for voter comments.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Node.js', 'Express', 'Dashboards', 'WebSockets', 'JWT Auth', 'OpenAI API', 'NLP'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#4a9ea6]/30 bg-[#4a9ea6]/[0.05] p-8"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Outcome</h2>
            <p className="text-base leading-relaxed text-slate-300">
              Real-time vote monitoring with opinion trends surfaced for admins. Built sentiment analysis pipeline processing 10K+ comments with OpenAI API. Reduced moderation workload by 65%.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">The Challenge</h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-400">
              <p>
                Organizations needed a secure, transparent way to conduct voting while maintaining real-time visibility into participation and sentiment. Traditional voting systems lacked:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Real-time analytics for administrators</li>
                <li>Sentiment analysis on voter feedback</li>
                <li>Role-based access control for different user types</li>
                <li>Secure authentication and authorization</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">The Solution</h2>
            <div className="space-y-6 text-base leading-relaxed text-slate-400">
              <p>
                Built a full-stack voting platform with WebSocket-powered real-time updates and OpenAI integration for comment sentiment analysis.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Real-time Analytics</h3>
                  <p className="text-sm text-slate-400">
                    WebSocket connections deliver live vote counts and participation metrics to admin dashboards without page refreshes.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Sentiment Analysis</h3>
                  <p className="text-sm text-slate-400">
                    OpenAI API processes voter comments in real-time, categorizing sentiment and surfacing trending topics for moderators.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Role-based Access</h3>
                  <p className="text-sm text-slate-400">
                    JWT-based authentication with granular permissions for voters, moderators, and administrators.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Secure Infrastructure</h3>
                  <p className="text-sm text-slate-400">
                    Encrypted data storage, rate limiting, and input validation prevent unauthorized access and ensure data integrity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">Results</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <p className="mb-2 text-4xl font-semibold text-[#a8dce1]">65%</p>
                <p className="text-sm text-slate-400">Reduction in moderation workload</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <p className="mb-2 text-4xl font-semibold text-[#a8dce1]">10K+</p>
                <p className="text-sm text-slate-400">Comments processed</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <p className="mb-2 text-4xl font-semibold text-[#a8dce1]">Real-time</p>
                <p className="text-sm text-slate-400">Vote monitoring</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#0c0f11]/80 p-8 text-center"
          >
            <h2 className="mb-4 text-2xl font-semibold text-white">Want to build something similar?</h2>
            <p className="mb-6 text-base text-slate-400">
              Let's discuss how AI-powered automation can transform your voting or feedback systems.
            </p>
            <a
              href="mailto:saribahmed974@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#4a9ea6]/[0.35] bg-[#4a9ea6]/[0.14] px-6 py-3 text-sm font-semibold text-[#a8dce1] transition-all duration-200 hover:border-[#6bb8c0]/60 hover:bg-[#4a9ea6]/20"
            >
              Get in touch
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
