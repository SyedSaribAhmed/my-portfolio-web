'use client';

import SectionHeading from '../../components/SectionHeading';
import TimelineItem from '../../components/TimelineItem';
import { timeline } from '../../lib/data';
import { motion } from 'framer-motion';

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1 }
};

export default function ExperiencePage() {
  return (
    <section className="relative px-6 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Experience" subtitle="Timeline" />
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f172a]/80 p-8 shadow-neon">
          <motion.svg
            viewBox="0 0 4 100"
            className="absolute left-7 top-10 h-[calc(100%-5rem)] w-1 stroke-neonpurple/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.line x1="2" y1="0" x2="2" y2="100" variants={lineVariants} transition={{ duration: 1.4, ease: 'easeInOut' }} />
          </motion.svg>
          <div className="relative space-y-10 pl-14 sm:pl-16">
            {timeline.map((entry, index) => (
              <TimelineItem key={entry.role} {...entry} align={index % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
