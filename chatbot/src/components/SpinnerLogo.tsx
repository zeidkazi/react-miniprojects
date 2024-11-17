import { motion } from "motion/react";

const SpinnerLogo = () => {
  return (
    <div className="relative flex items-center justify-center size-12 md:size-16 rounded-full overflow-hidden">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className=" overflow-hidden size-8 md:size-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="size-5 md:size-9 rounded-full bg-black"
        />
      </motion.div>

      {/* spiral orbs*/}
      <motion.div
        animate={{
          x: [0, 10, 20, 20, 0, -10, -20, -20, 0],
          y: [0, 10, 0, -10, 0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="absolute size-[4px]  md:size-[5px] rounded-full bg-white "
      />
      {/* rotatingOrbits */}
      <motion.div
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{
          rotateX: { duration: 5, repeat: Infinity, repeatType: "reverse" },
          rotateY: { duration: 3, repeat: Infinity, repeatType: "reverse" },
        }}
        className="absolute size-12 md:size-16 rounded-full border-2 border-black -skew-y-12"
      />
      <motion.div
        animate={{ rotateY: -360, rotateX: -360 }}
        transition={{
          rotateX: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.3,
          },
          rotateY: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.3,
          },
        }}
        className="absolute size-12 md:size-16 rounded-full border-2 border-black -skew-y-12"
      />
    </div>
  );
};

export default SpinnerLogo;
