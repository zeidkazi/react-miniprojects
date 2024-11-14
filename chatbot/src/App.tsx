import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-10">
      <AiLogoSpinner />
    </div>
  );
};

export default App;

const AiLogoSpinner = () => {
  return (
    <>
      <div className="relative flex items-center justify-center size-16 rounded-full overflow-hidden">
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
          className=" overflow-hidden w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
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
            className="w-9 h-9 rounded-full bg-black"
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
          className="absolute size-[5px] rounded-full bg-white "
        />

        <motion.div
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          className="absolute size-16 rounded-full border-2 border-black -skew-y-12"
        />
        <motion.div
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.3,
          }}
          className="absolute size-16 rounded-full border-2 border-black -skew-y-12"
        />
      </div>
    </>
  );
};
