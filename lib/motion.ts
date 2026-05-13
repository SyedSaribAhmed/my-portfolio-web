export const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};
