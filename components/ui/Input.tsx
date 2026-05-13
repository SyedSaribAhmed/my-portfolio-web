'use client';

import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className = '', ...props }, ref) => (
  <label className="flex flex-col gap-2 text-sm text-slate-300">
    {label && <span className="text-slate-400">{label}</span>}
    <input
      ref={ref}
      className={`rounded-xl border border-white/10 bg-[#0f172a]/90 px-4 py-3 text-slate-100 outline-none transition focus:border-neonpurple focus:ring-2 focus:ring-neonpurple/20 ${className}`}
      {...props}
    />
  </label>
));

Input.displayName = 'Input';
export default Input;
