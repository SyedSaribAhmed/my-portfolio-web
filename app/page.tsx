import Link from 'next/link';
import { motion } from 'framer-motion';
import ParticleCanvas from '../components/ParticleCanvas';
import Typewriter from '../components/Typewriter';

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-6 py-12 sm:px-8">
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
          <Link href="/projects" scroll={false} className="inline-flex items-center justify-center rounded-full bg-neonpurple px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet">
            View My Work
          </Link>
          <Link href="/contact" scroll={false} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-neonpurple hover:bg-white/10">
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
  );
}
