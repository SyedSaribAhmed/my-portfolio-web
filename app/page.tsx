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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    icon: '🤖',
    title: 'AI Agents & Automation',
    description: 'Custom AI agents that automate workflows, handle complex tasks, and integrate seamlessly with your existing systems.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: '⚡',
    title: 'Workflow Optimization',
    description: 'Streamline your business processes with intelligent automation, reducing manual work and increasing efficiency.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '🔍',
    title: 'RAG & Knowledge Systems',
    description: 'Build intelligent knowledge bases with RAG systems that understand and retrieve relevant information from your data.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: '💬',
    title: 'Prompt Engineering',
    description: 'Expert prompt design and optimization to maximize AI performance for your specific use cases and applications.',
    gradient: 'from-orange-500 to-red-500'
  }
];

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 sm:px-8">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.08),_transparent_50%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
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
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm border border-white/10"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance projects
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            AI Automation Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
          >
            I build intelligent systems that automate workflows, reduce manual effort, and help businesses scale with AI-powered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-3"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:from-violet-500 hover:to-purple-500 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/20"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🐍</span>
              <span className="text-sm font-medium">Python</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-lg">🔗</span>
              <span className="text-sm font-medium">LangChain</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-lg">🤖</span>
              <span className="text-sm font-medium">OpenAI</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-lg">⚡</span>
              <span className="text-sm font-medium">n8n</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-10 w-6 rounded-full border border-white/10 p-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What I Do
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Specialized services to help you leverage AI and automation
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 text-2xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5 -z-10`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Passionate about building intelligent systems that make a difference
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-lg leading-relaxed text-slate-300">
                I'm an AI engineer and automation specialist passionate about building systems that reduce manual effort and help teams work smarter.
              </p>
              <p className="text-lg leading-relaxed text-slate-300">
                My work combines machine learning, prompt engineering, and workflow automation to create production-ready solutions that are both powerful and easy to use.
              </p>
              <p className="text-lg leading-relaxed text-slate-300">
                Whether it's automating complex workflows, building AI agents, or optimizing business processes, I focus on delivering practical solutions that drive real results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <h3 className="text-sm font-medium text-slate-400 mb-4">Core Expertise</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 text-sm">🤖</div>
                    <span className="text-white text-sm">AI Agents & Automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-sm">🔗</div>
                    <span className="text-white text-sm">LangChain & RAG</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-sm">⚡</div>
                    <span className="text-white text-sm">Workflow Optimization</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skills.slice(0, 8).map((skill, index) => (
              <div key={skill.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                <p className="text-sm font-medium text-white">{skill.name}</p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="experience" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Experience
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              My professional journey in AI and automation
            </p>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                        {item.role.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                        <p className="text-sm text-slate-400">{item.company}</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-slate-500 whitespace-nowrap">{item.date}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-400 text-sm">
                      <span className="text-violet-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-14 sm:px-8">
        <ProjectsGallery />
      </section>

      <section id="contact" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-12 text-center sm:p-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let's Build Something Amazing Together
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              Whether you need a complete AI automation system, workflow optimization, or want to discuss a project—I'm here to help bring your ideas to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:saribahmed974@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:from-violet-500 hover:to-purple-500 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <span>Get In Touch</span>
                <span>→</span>
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/20"
              >
                View My Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {socialLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="text-violet-400 transform transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
