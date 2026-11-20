/** One restrained motion vocabulary for sections, media, badges, and the duck. */
export const motion = {
  entrance: 620,
  easing: 'cubic-bezier(.22,1,.36,1)',
  stagger: 70,
  hover: 260,
  lift: 4,
  perspective: 1000,
  tilt: 4,
  gazeSmoothing: 90,
};

export const motionVariables = {
  '--motion-duration': `${motion.entrance}ms`,
  '--motion-ease': motion.easing,
  '--motion-stagger': `${motion.stagger}ms`,
  '--hover-duration': `${motion.hover}ms`,
  '--motion-lift': `${motion.lift}px`,
  '--motion-perspective': `${motion.perspective}px`,
  '--motion-tilt': `${motion.tilt}deg`,
};
