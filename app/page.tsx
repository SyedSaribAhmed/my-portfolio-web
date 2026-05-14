'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ParticleCanvas from '../components/ParticleCanvas';
import Typewriter from '../components/Typewriter';
import SkillPill from '../components/SkillPill';
import SectionHeading from '../components/SectionHeading';
import TerminalProfile from '../components/TerminalProfile';
import ProjectsGallery from '../components/ProjectsGallery';
import ContactForm from '../components/ContactForm';
import { skills, socialLinks, timeline } from '../lib/data';

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-6 py-12 sm:px-8">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),_transparent_32%),radial-gradient(circle_at_60%_80%,_rgba(168,85,247,0.1),_transparent_22%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 text-slate-200">
          <motion.div initial="hidden" animate="visible" variants={heroVariants} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-violet/70">AI Automation · Generative Systems · Workflow Design</p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              I build intelligent systems that automate the complex and amplify the possible.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A polished, product-driven portfolio for AI engineers and automation specialists who want to impress hiring teams and freelance clients.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={heroVariants} transition={{ duration: 0.9, delay: 0.2 }} className="flex flex-col gap-4 sm:flex-row">
            <Link href="#projects" className="inline-flex items-center justify-center rounded-full bg-neonpurple px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet">
              View My Work
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-neonpurple hover:bg-white/10">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={heroVariants} transition={{ duration: 0.9, delay: 0.45 }} className="max-w-xl rounded-3xl border border-white/10 bg-[#111827]/70 p-6 shadow-neon">
            <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Current Focus</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-2xl font-semibold text-white">
              <Typewriter />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55 }} className="flex items-center justify-center pt-6 text-sm uppercase tracking-[0.3em] text-slate-500">
            <span className="inline-flex h-12 w-6 items-end justify-center rounded-full border border-white/10">
              <span className="mb-1 h-2 w-2 animate-float rounded-full bg-neonpurple" />
            </span>
            <span className="ml-3">Scroll for more insights</span>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden px-6 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <SectionHeading title="About me" subtitle="Bio" />
            <div className="space-y-6 rounded-3xl border border-white/10 bg-[#111827]/90 p-8 shadow-neon">
              <p className="text-lg leading-8 text-slate-300">
                I am an AI engineer and automation specialist who builds systems that reduce manual effort, increase intelligence, and connect teams with the right data at the right time.
              </p>
              <p className="text-lg leading-8 text-slate-300">
                My work blends machine learning, prompt orchestration, agent automation, and workflow engineering into production-ready solutions that feel both polished and powerful.
              </p>
              <p className="text-lg leading-8 text-slate-300">
                I thrive on solving complex automation challenges for product teams, startups, and organizations that want smarter, faster, AI-driven processes.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <TerminalProfile />
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <SkillPill key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Experience" subtitle="Professional history" />
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={`${item.role}-${item.company}`} className="rounded-3xl border border-white/10 bg-[#111827]/90 p-8 shadow-neon">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-violet/70">{item.company}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                  </div>
                  <span className="text-sm text-slate-400">{item.date}</span>
                </div>
                <ul className="list-disc space-y-3 pl-5 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-14 sm:px-8">
        <ProjectsGallery />
      </section>

      <section id="contact" className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="rounded-3xl border border-white/10 bg-[#111827]/90 p-10 shadow-neon">
            <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let's build something.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Reach out for freelance automation projects, AI engineering roles, or collaboration on intelligent systems.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactForm />
            <div className="space-y-8 rounded-3xl border border-white/10 bg-[#0f172a]/90 p-8 shadow-strong">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Social</p>
                <div className="mt-6 grid gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:border-neonpurple hover:bg-white/10 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span className="text-neonpurple">→</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#111827]/90 p-6 text-sm text-slate-300">
                <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Availability</p>
                <p className="mt-4 leading-7">
                  Available for freelance and full-time opportunities. I deliver AI automation systems, intelligent workflows, and production-ready prompt engineering solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading title="Resume" subtitle="Professional Profile" />
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr]">
            <div className="space-y-6 rounded-3xl border border-white/10 bg-[#111827]/90 p-10 shadow-neon">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Syed Sarib Ahmed</p>
                <h2 className="text-3xl font-semibold text-white">AI Automation Specialist</h2>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Remote / Hybrid</p>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  AI automation engineer with deep experience in generative AI, RAG, prompt orchestration, and workflow engineering. I build production-ready systems that automate manual processes, connect teams with intelligent data, and drive smarter decision-making.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3 rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Focus Areas</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>Workflow Automation</li>
                      <li>AI Agents</li>
                      <li>RAG & Retrieval</li>
                      <li>Prompt Engineering</li>
                    </ul>
                  </div>
                  <div className="space-y-3 rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Tools & Platforms</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>Python</li>
                      <li>TypeScript</li>
                      <li>LangChain</li>
                      <li>n8n / Make / Zapier</li>
                      <li>OpenAI & Anthropic APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#0f172a]/90 p-10 shadow-strong">
                <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Resume</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Download the full resume</h2>
                <p className="mt-4 text-slate-300">
                  Get a complete overview of my AI automation experience, consulting engagements, and project outcomes.
                </p>
                <a
                  href="/SyedSaribAhmed-Resume.pdf"
                  download
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-neonpurple px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet"
                >
                  Download Resume
                </a>
                <p className="mt-6 text-sm text-slate-400">
                  Download the PDF version of my resume.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#111827]/90 p-8 shadow-neon">
                <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Resume highlights</p>
                <ul className="mt-6 space-y-4 text-sm text-slate-300">
                  <li>Led autonomous data and workflow automation systems for enterprise clients.</li>
                  <li>Built generative AI and RAG solutions using OpenAI and Anthropic APIs.</li>
                  <li>Delivered AI agent orchestration and low-code automation platforms.</li>
                  <li>Supported product teams with prompt engineering, vector search, and computer vision prototypes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
