const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    height: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0,
    },
  },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0, staggerDirection: -1 },
  },
};

export { menuItemVariants, navVariants };
