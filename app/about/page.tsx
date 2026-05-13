import SkillPill from '../../components/SkillPill';
import SectionHeading from '../../components/SectionHeading';
import TerminalProfile from '../../components/TerminalProfile';
import { skills } from '../../lib/data';

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden px-6 py-14 sm:px-8">
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
  );
}
