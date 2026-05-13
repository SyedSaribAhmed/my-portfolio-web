'use client';

import { useEffect, useState } from 'react';

const phrases = ['AI Engineer.', 'AI Automation Specialist.', 'AI Automation Engineer.'];

export default function Typewriter() {
  const [display, setDisplay] = useState('AI Engineer.');
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        const nextIndex = (index + 1) % phrases.length;
        setDisplay(phrases[nextIndex]);
        setIndex(nextIndex);
        setVisible(true);
      }, 250);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [index]);

  return (
    <span className="relative inline-flex items-center">
      <span className="text-white/90 transition-opacity duration-300" style={{ opacity: visible ? 1 : 0.2 }}>
        {display}
      </span>
      <span className="ml-2 h-6 w-1 animate-blink rounded bg-neonpurple" />
    </span>
  );
}
