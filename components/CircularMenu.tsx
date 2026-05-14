'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const menuItems = [
  { label: 'Projects', href: '#projects', icon: 'FolderOpen' },
  { label: 'Services', href: '#services', icon: 'Settings' },
  { label: 'About', href: '#about', icon: 'User' },
  { label: 'Experience', href: '#experience', icon: 'Briefcase' },
  { label: 'Contact', href: '#contact', icon: 'Mail' }
];

const socialItems = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-sarib-ahmed-5a2a471a8/', icon: 'Linkedin' },
  { label: 'GitHub', href: 'https://github.com/SyedSaribAhmed', icon: 'Github' },
  { label: 'Email', href: 'mailto:saribahmed974@gmail.com', icon: 'Mail' }
];

const icons = {
  FolderOpen: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Settings: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
    </svg>
  ),
  User: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
};

interface CircularMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CircularMenu({ isOpen, onClose }: CircularMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const radius = 100;
  const centerX = 50;
  const centerY = 50;

  const getPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90;
    const radians = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radians),
      y: centerY + radius * Math.sin(radians)
    };
  };

  const getSocialPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90;
    const radians = (angle * Math.PI) / 180;
    return {
      x: centerX + (radius + 45) * Math.cos(radians),
      y: centerY + (radius + 45) * Math.sin(radians)
    };
  };

  const IconComponent = icons[(menuItems[0]?.icon as keyof typeof icons) || 'FolderOpen'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="relative h-[360px] w-[360px]">
              <motion.button
                onClick={onClose}
                className="absolute left-1/2 top-1/2 z-50 -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                ✕
              </motion.button>

              {/* Main menu items */}
              {menuItems.map((item, index) => {
                const pos = getPosition(index, menuItems.length);
                const Icon = icons[item.icon as keyof typeof icons];
                const isHovered = hoveredIndex === index;

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      type: 'spring',
                      stiffness: 200
                    }}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`
                    }}
                    className="absolute -ml-7 -mt-7 flex h-14 w-14 transform items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all"
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    whileHover={{
                      scale: 1.15,
                      borderColor: 'rgba(74, 158, 166, 0.6)',
                      backgroundColor: 'rgba(74, 158, 166, 0.2)'
                    }}
                  >
                    <motion.div
                      animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white"
                    >
                      {item.label}
                    </motion.span>
                  </motion.a>
                );
              })}

              {/* Social items - outer ring */}
              {socialItems.map((item, index) => {
                const pos = getSocialPosition(index, socialItems.length);
                const Icon = icons[item.icon as keyof typeof icons];
                const isHovered = hoveredIndex === menuItems.length + index;

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.06,
                      type: 'spring',
                      stiffness: 200
                    }}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`
                    }}
                    className="absolute -ml-5 -mt-5 flex h-10 w-10 transform items-center justify-center rounded-full border border-white/15 bg-white/5 text-white shadow-lg backdrop-blur-md transition-all"
                    onHoverStart={() => setHoveredIndex(menuItems.length + index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    whileHover={{
                      scale: 1.2,
                      borderColor: 'rgba(74, 158, 166, 0.6)',
                      backgroundColor: 'rgba(74, 158, 166, 0.2)'
                    }}
                  >
                    <motion.div
                      animate={isHovered ? {
                        scale: [1, 1.2, 1],
                        rotate: item.icon === 'Linkedin' ? [0, -5, 5, -5, 0] : [0, 360]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon />
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
