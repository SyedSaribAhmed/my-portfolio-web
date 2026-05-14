'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const menuItems = [
  { label: 'Projects', href: '#projects', icon: '📁' },
  { label: 'Services', href: '#services', icon: '⚙️' },
  { label: 'About', href: '#about', icon: '👤' },
  { label: 'Experience', href: '#experience', icon: '💼' },
  { label: 'Contact', href: '#contact', icon: '✉️' }
];

interface CircularMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CircularMenu({ isOpen, onClose }: CircularMenuProps) {
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
            <div className="relative h-[300px] w-[300px]">
              <motion.button
                onClick={onClose}
                className="absolute left-1/2 top-1/2 z-50 -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
              {menuItems.map((item, index) => {
                const pos = getPosition(index, menuItems.length);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`
                    }}
                    className="absolute -ml-7 -mt-7 flex h-14 w-14 transform items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl shadow-lg backdrop-blur-md transition-all hover:border-[#4a9ea6]/50 hover:bg-[#4a9ea6]/20"
                  >
                    <span className="sr-only">{item.label}</span>
                    {item.icon}
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
