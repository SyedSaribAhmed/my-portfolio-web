'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ParticleCanvas from '../components/ParticleCanvas';
import ProjectsGallery from '../components/ProjectsGallery';
import { skills, socialLinks, timeline } from '../lib/data';

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    eyebrow: '01',
    title: 'AI agent systems',
    description: 'Custom agents that research, qualify, route, and execute repeatable work with clear human handoffs.',
    result: 'Agent maps, prompts, tools, QA flow'
  },
  {
    eyebrow: '02',
    title: 'Workflow automation',
    description: 'Lean automation builds across Make, n8n, APIs, CRMs, and data sources that remove manual drag.',
    result: 'Faster response times, fewer handoffs'
  },
  {
    eyebrow: '03',
    title: 'RAG and knowledge tools',
    description: 'Searchable knowledge systems that turn scattered documents into dependable assistant workflows.',
    result: 'Retrieval design, evaluation, deployment'
  }
];

const expertise = [
  'AI Agents & Automation',
  'LangChain & RAG',
  'Workflow Optimization'
];

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_24%,rgba(34,211,238,0.08),transparent_48%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#4a9ea6] shadow-[0_0_16px_rgba(74,158,166,0.8)]" />
              Available for focused automation builds
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              AI automation engineer crafting clear digital systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              I design and build production-ready agents, dashboards, and workflow automations with clean interfaces, sharp logic, and measurable outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-[#4a9ea6]/[0.35] bg-[#4a9ea6]/[0.14] px-8 py-3.5 text-sm font-semibold text-[#a8dce1] shadow-[0_0_30px_rgba(74,158,166,0.12)] transition-all duration-200 hover:border-[#6bb8c0]/60 hover:bg-[#4a9ea6]/20"
              >
                View case studies
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Start a project
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="relative rounded-3xl border border-white/10 bg-[#0c0f11]/75 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-[#6bb8c0]/70">Selected build</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Automation command surface</h2>
              </div>
              <span className="rounded-full border border-[#4a9ea6]/25 bg-[#4a9ea6]/10 px-3 py-1 text-xs text-[#a8dce1]">Live</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                <div className="mb-5 h-2 w-28 rounded-full bg-[#4a9ea6]/50" />
                <div className="space-y-3">
                  {['Lead captured', 'Agent scored', 'CRM routed', 'Follow-up drafted'].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#090b0d] px-3 py-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4a9ea6]/[0.12] text-xs text-[#a8dce1]">
                        {index + 1}
                      </span>
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <p className="text-xs text-slate-500">Response time</p>
                  <p className="mt-2 text-3xl font-semibold text-white">6 hrs</p>
                  <div className="mt-4 h-1.5 rounded-full bg-white/[0.08]">
                    <span className="block h-full w-4/5 rounded-full bg-[#4a9ea6]/80" />
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <p className="text-xs text-slate-500">Workload reduced</p>
                  <p className="mt-2 text-3xl font-semibold text-white">83%</p>
                  <div className="mt-4 h-1.5 rounded-full bg-white/[0.08]">
                    <span className="block h-full w-5/6 rounded-full bg-[#4a9ea6]/80" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24 sm:px-8">
        <ProjectsGallery />
      </section>

      <section id="services" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-end"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6bb8c0]/70">Services</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Practical systems, not template deliverables.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-400 lg:justify-self-end">
              Short engagements focused on automation architecture, usable interfaces, and reliable handoff into your existing tools.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-12">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group rounded-3xl border border-white/10 bg-[#0c0f11]/75 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a9ea6]/25 hover:bg-[#101416] ${
                  index === 0 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-4' : 'lg:col-span-3'
                }`}
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#6bb8c0]">{service.eyebrow}</span>
                  <span className="h-px flex-1 bg-white/10 mx-4" />
                  <span className="h-2 w-2 rounded-full bg-[#4a9ea6]/80" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.22em] text-slate-500">{service.result}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6bb8c0]/70">About</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                I connect AI capability with clean product thinking.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
                <p>
                  I'm an AI engineer and automation specialist focused on systems that reduce manual effort and help teams work smarter.
                </p>
                <p>
                  My work combines machine learning, prompt engineering, workflow automation, and interface clarity so the final product feels useful instead of experimental.
                </p>
                <p>
                  The goal is simple: practical automations that can be understood, trusted, and improved after launch.
                </p>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl border border-white/10 bg-[#0c0f11]/75 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Core expertise</h3>
              <div className="mt-6 space-y-3">
                {expertise.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4a9ea6]/10 text-xs font-semibold text-[#a8dce1]">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skills.slice(0, 12).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 transition-all duration-300 hover:border-[#4a9ea6]/20 hover:bg-white/[0.04]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-medium text-slate-200">{skill.name}</p>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 + 0.5 }}
                    className="text-[10px] font-medium text-[#6bb8c0]/70"
                  >
                    {Math.round(skill.level * 100)}%
                  </motion.span>
                </div>
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.03, ease: 'easeOut' }}
                    className="h-full rounded-full bg-[#4a9ea6]/60 group-hover:bg-[#4a9ea6]/80"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="experience" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6bb8c0]/70">Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Work shaped by production constraints.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#4a9ea6]/50 via-white/10 to-transparent" />
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                className="relative pb-8 pl-14 last:pb-0"
              >
                <span className="absolute left-2.5 top-2 h-5 w-5 rounded-full border-4 border-[#070809] bg-[#4a9ea6]" />
                <article className="rounded-3xl border border-white/10 bg-[#0c0f11]/75 p-6 transition-all duration-300 hover:border-[#4a9ea6]/20 hover:bg-[#101416]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                      <p className="mt-1 text-sm text-[#6bb8c0]/80">{item.company}</p>
                    </div>
                    <span className="w-fit rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1 text-xs text-slate-400">
                      {item.date}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-slate-400">
                        <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#4a9ea6]/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 rounded-3xl border border-white/10 bg-[#0c0f11]/80 p-8 sm:p-10 lg:grid-cols-[1fr_0.72fr] lg:items-center"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6bb8c0]/70">Contact</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Have a workflow that should feel sharper?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                Send the goal, current tools, and where the manual work slows you down.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="mailto:saribahmed974@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-[#4a9ea6]/[0.35] bg-[#4a9ea6]/[0.14] px-7 py-3.5 text-sm font-semibold text-[#a8dce1] transition-all duration-200 hover:border-[#6bb8c0]/60 hover:bg-[#4a9ea6]/20"
              >
                Email me
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Review work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#4a9ea6]/20 hover:bg-white/[0.045]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                    {item.label}
                  </span>
                  <span className="text-[#6bb8c0] transition-transform group-hover:translate-x-1">-&gt;</span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
