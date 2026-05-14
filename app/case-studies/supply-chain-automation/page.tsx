'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SupplyChainAutomationCaseStudy() {
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
              AI-Powered Supply Chain Lead Qualification & Outreach Automation
            </h1>
            <p className="text-xl leading-relaxed text-slate-400">
              A 5-agent qualification and routing pipeline for inbound supply-chain leads, backed by BANT-S scoring and prompt chaining.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['AI Agents', 'Automation', 'Claude API', 'Apify', 'Apollo.io', 'HubSpot', 'Instantly.ai'].map((tag) => (
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
              Cut response time from 54 hrs to 6 hrs and reduced qualification workload by 83%. Deployed 5 Claude-powered agents with BANT-S scoring. Integrated with HubSpot CRM for automatic lead routing.
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
                Supply chain companies were drowning in inbound leads but couldn't respond quickly enough or qualify effectively. Manual processes resulted in:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>54-hour average response time to new inquiries</li>
                <li>Inconsistent lead qualification criteria</li>
                <li>Lost opportunities to faster competitors</li>
                <li>Manual data entry into CRM systems</li>
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
                Built a multi-agent automation system using Claude API that qualifies, scores, and routes leads with minimal human intervention.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Agent 1: Lead Enrichment</h3>
                  <p className="text-sm text-slate-400">
                    Uses Apify and Apollo.io to enrich lead data with company info, technographics, and decision-maker details.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Agent 2: BANT-S Scoring</h3>
                  <p className="text-sm text-slate-400">
                    Claude-powered agent evaluates Budget, Authority, Need, Timeline, and Strategic fit with custom scoring rubric.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Agent 3: Research Analyst</h3>
                  <p className="text-sm text-slate-400">
                    Deep researches company background, recent news, and pain points to personalize outreach messaging.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Agent 4: Content Generator</h3>
                  <p className="text-sm text-slate-400">
                    Creates personalized outreach emails based on research findings and qualification scores.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Agent 5: CRM Router</h3>
                  <p className="text-sm text-slate-400">
                    Automatically routes qualified leads to HubSpot with proper tagging and assignment to sales reps.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Human Handoff</h3>
                  <p className="text-sm text-slate-400">
                    Low-scoring or complex leads flagged for manual review with full context and recommendations.
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
                <p className="mb-2 text-4xl font-semibold text-[#a8dce1]">83%</p>
                <p className="text-sm text-slate-400">Reduction in qualification workload</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <p className="mb-2 text-4xl font-semibold text-[#a8dce1]">6 hrs</p>
                <p className="text-sm text-slate-400">Response time (down from 54 hrs)</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <p className="mb-2 text-4xl font-semibold text-[#a8dce1]">5</p>
                <p className="text-sm text-slate-400">AI agents deployed</p>
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
            <h2 className="mb-4 text-2xl font-semibold text-white">Want to automate your lead qualification?</h2>
            <p className="mb-6 text-base text-slate-400">
              Let's discuss how AI agents can transform your sales pipeline and response times.
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
