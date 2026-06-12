export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionEaseOut = [0.16, 1, 0.3, 1] as const;

export const springGentle = {
  type: "spring" as const,
  stiffness: 110,
  damping: 22,
  mass: 0.85,
};

export const springPlayful = {
  type: "spring" as const,
  stiffness: 140,
  damping: 18,
  mass: 0.75,
};

export const viewportDefault = { once: true, margin: "-60px" } as const;

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: motionEase },
  },
};

export const fadeUpSpringVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springGentle,
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: motionEase },
  },
};

export const playfulStaggerItemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94, rotate: -0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: springPlayful,
  },
};

export const slideLeftVariants = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: motionEase },
  },
};

export const slideRightVariants = {
  hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: motionEase },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: motionEase },
  },
};
