import { Menu } from "lucide-react";
import SpinnerLogo from "./SpinnerLogo";
import { motion } from "motion/react";

interface NavbarTypes {
  OpenSidebar: (input: boolean) => void;
}

const Navbar = ({ OpenSidebar }: NavbarTypes) => {
  return (
    <div className="w-full h-20 border-b flex items-center justify-between p-4 z-10 bg-white">
      <motion.div className="flex items-center justify-center gap-5">
        <motion.div
          onClick={() => OpenSidebar(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Menu />
        </motion.div>
        <p className="text-xl md:text-2xl font-bold leading-relaxed">
          Nebul
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 font-[900] bg-clip-text text-transparent">
            AI
          </span>{" "}
          Chat
        </p>
      </motion.div>
      <div className="flex items-center justify-center gap-5">
        <SpinnerLogo />
      </div>
    </div>
  );
};

export default Navbar;
