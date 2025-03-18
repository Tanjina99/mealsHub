// LikeButton.tsx
"use client";
import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";
import { likeButtonAnimations } from "./mealCardAnimation";

interface LikeButtonProps {
  liked: boolean;
  likes: number;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked, likes, onClick }) => {
  // Particles animation for when the button is liked
  const particles = Array.from({ length: 6 }).map((_, i) => (
    <motion.div
      key={i}
      className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${
        i % 2 === 0 ? "bg-primary" : "bg-accent"
      }`}
      initial={likeButtonAnimations.particles.initial}
      animate={likeButtonAnimations.particles.animate(liked, i)}
    />
  ));

  return (
    <motion.div
      className="relative"
      onClick={onClick}
      whileHover={likeButtonAnimations.container.whileHover}
      whileTap={likeButtonAnimations.container.whileTap}
    >
      {/* Particle effects */}
      {particles}

      {/* Button container */}
      <motion.div
        className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
          liked
            ? "bg-accent hover:bg-primary/20 shadow-md"
            : "bg-button-primary hover:bg-button-primary-hover"
        } border border-primary transition-colors duration-200`}
      >
        {/* ThumbsUp icon with animation */}
        <motion.div
          animate={likeButtonAnimations.thumbsUp.animate(liked)}
          className="relative"
        >
          {/* Pulse ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={likeButtonAnimations.pulseRing.initial}
            animate={likeButtonAnimations.pulseRing.animate(liked)}
          />

          {/* Main icon */}
          <motion.div
            initial={likeButtonAnimations.iconScale.initial}
            animate={likeButtonAnimations.iconScale.animate(liked)}
          >
            <ThumbsUp
              className={`w-5 h-5 ${liked ? "drop-shadow-sm" : ""}`}
              fill={liked ? "orange" : "none"}
              stroke={liked ? "white" : "white"}
              strokeWidth={liked ? 2 : 1.5}
            />
          </motion.div>
        </motion.div>

        {/* Like count with animation */}
        <motion.span
          className={`text-sm font-medium ${
            liked ? "text-base" : "text-white"
          }`}
          animate={likeButtonAnimations.likeCount.animate(liked)}
        >
          {likes}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default LikeButton;
