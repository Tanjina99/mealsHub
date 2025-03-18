export const likeButtonAnimations = {
  // Particle animation
  particles: {
    initial: { scale: 0, opacity: 0 },
    animate: (liked: boolean, index: number) =>
      liked
        ? {
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: [0, (index % 2 === 0 ? 1 : -1) * (10 + index * 3)],
            y: [0, (index < 3 ? -1 : 1) * (10 + index * 2)],
            transition: {
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            },
          }
        : {},
  },

  // Button container
  container: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.9 },
  },

  // ThumbsUp icon
  thumbsUp: {
    animate: (liked: boolean) =>
      liked
        ? {
            y: [0, -6, 0],
            rotateZ: [0, -15, 15, -8, 0],
            transition: {
              y: { duration: 0.3 },
              rotateZ: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 1] },
            },
          }
        : {},
  },

  // Pulse ring effect
  pulseRing: {
    initial: { scale: 1, opacity: 0 },
    animate: (liked: boolean) =>
      liked
        ? {
            scale: [1, 1.6],
            opacity: [0.5, 0],
            transition: { duration: 0.4, delay: 0.1 },
          }
        : {},
  },

  // Icon scale
  iconScale: {
    initial: { scale: 1 },
    animate: (liked: boolean) =>
      liked
        ? {
            scale: [1, 1.2, 1],
            transition: { duration: 0.4 },
          }
        : {},
  },

  // Like count
  likeCount: {
    animate: (liked: boolean) =>
      liked
        ? {
            scale: [1, 1.2, 1],
            transition: { duration: 0.3, delay: 0.1 },
          }
        : {},
  },
};
