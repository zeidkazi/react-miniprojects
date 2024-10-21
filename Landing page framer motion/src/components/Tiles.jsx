import React from "react";
import { motion } from "framer-motion";

const Tiles = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const opacityBoxes = [3, 5, 6, 7, 8, 9];
  return (
    <div
      className={` absolute min-w-[700px] max-w-4xl top-0 right-0 -translate-y-32 -translate-x-24 grid grid-cols-3 gap-x-1 gap-y-1`}
    >
      <div className={` size-[280px]  flex items-center justify-center`}></div>
      <div className={` size-[280px]  flex items-center justify-center`}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, ease: "easeInOut" }}
        className={` size-[280px] bg-[#100E0E] flex items-center justify-center`}
      ></motion.div>
      <div className={` size-[280px]  flex items-center justify-center`}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, ease: "easeInOut" }}
        className={` size-[280px] bg-[#100E0E] flex items-center justify-center`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, ease: "easeInOut" }}
        className={` size-[280px] bg-[#100E0E] flex items-center justify-center`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, ease: "easeInOut" }}
        className={` size-[280px] bg-[#100E0E] flex items-center justify-center`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, ease: "easeInOut" }}
        className={` size-[280px] bg-[#100E0E] flex items-center justify-center`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, ease: "easeInOut" }}
        className={` size-[280px] bg-[#100E0E] flex items-center justify-center`}
      ></motion.div>
    </div>
  );
};

export default Tiles;
