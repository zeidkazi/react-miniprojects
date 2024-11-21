import { MessageSquarePlus, Settings, X } from "lucide-react";
import { motion } from "motion/react";

interface SidebarTypes {
  OpenSidebar: (input: boolean) => void;
}
const Sidebar = ({ OpenSidebar }: SidebarTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => OpenSidebar(false)}
      className="absolute inset-0 bg-black/20 z-30 flex items-center overflow-hidden"
    >
      <motion.div
        initial={{
          x: -240,
          borderTopRightRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
        animate={{
          x: 0,
          borderTopRightRadius: "0%",
          borderBottomRightRadius: "0%",
        }}
        exit={{
          x: -240,
          borderTopRightRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        onClick={(e) => e.stopPropagation()}
        className="h-full w-60 bg-white p-4 flex flex-col items-center gap-2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full flex items-center justify-between"
        >
          <p className="text-xl md:text-2xl font-bold leading-relaxed">
            Nebul
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 font-[900] bg-clip-text text-transparent">
              AI
            </span>{" "}
            Chat
          </p>
          <X onClick={() => OpenSidebar(false)} className="cursor-pointer" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col items-center gap-2 pt-5"
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="w-full py-1 px-2 rounded-xl flex items-center justify-start gap-2  md:hover:cursor-pointer md:hover:bg-gray-300 transition-colors delay-75 ease-in-out"
          >
            <MessageSquarePlus />
            <p>New Chat</p>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="w-full py-1 px-2 rounded-xl flex items-center justify-start gap-2 md:hover:cursor-pointer md:hover:bg-gray-300 transition-colors delay-75 ease-in-out"
          >
            <Settings />
            <p>Settings</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
