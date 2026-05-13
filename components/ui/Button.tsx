'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-neonpurple/40';
    const styles =
      variant === 'primary'
        ? 'border-transparent bg-neonpurple text-slate-950 shadow-neon hover:bg-violet'
        : 'border-white/10 bg-white/5 text-slate-100 hover:border-neonpurple hover:bg-white/10';

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${styles} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
