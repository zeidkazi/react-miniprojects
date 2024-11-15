import { Menu, Scale } from "lucide-react";
import SpinnerLogo from "./SpinnerLogo";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div className="w-full h-20 border-b flex items-center justify-between p-4">
      <motion.div className="flex items-center justify-center gap-5">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Menu />
        </motion.div>
        <p className="text-2xl font-bold leading-relaxed">NebulAI Chat</p>
      </motion.div>
      <div className="flex items-center justify-center gap-5">
        <SpinnerLogo />
      </div>
    </div>
  );
};

export default Navbar;
