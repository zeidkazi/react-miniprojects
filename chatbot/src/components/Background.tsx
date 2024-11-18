import { motion } from "motion/react";

const Background = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10 " />

    {/* Animated lines */}
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#e11d48" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {[...Array(10)].map((_, i) => (
        <motion.path
          key={i}
          d={`M0 ${80 + i * 40} Q${window.innerWidth / 2} ${120 + i * 40}, ${
            window.innerWidth
          } ${80 + i * 40}`}
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  </div>
);

export default Background;
