import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      layout
      className="absolute z-50 translate-x-20 top-0 left-0  max-w-4xl leading-none flex flex-col items-start gap-2"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-7xl font-black tracking-tighter "
      >
        50 Days Challenge - Framer Motion
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        className="text-[16px]"
      >
        In these 50 days, I will be trying to master myself in framer motion.
      </motion.p>
      <motion.button
        layout
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        className=" bg-[#000101] mt-4 flex items-center justify-center rounded-md h-10 w-fit px-8 hover:bg-opacity-80  active:scale-95"
      >
        Start exploring
      </motion.button>
    </motion.div>
  );
};

export default Title;
