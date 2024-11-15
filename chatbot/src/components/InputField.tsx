import { Send } from "lucide-react";
import { motion } from "motion/react";

const InputField = () => {
  return (
    <div className="w-full min-h-20 max-h-44 border-t flex items-center justify-between p-4 z-10 bg-white">
      <textarea
        rows={1}
        className={`w-full max-w-7xl p-2 border-[2px] rounded-2xl appearance-none resize-none focus:outline-none focus:border-pink-200 focus:placeholder:text-pink-300 transition-colors delay-150 overflow-y-scroll`}
        placeholder="Ask NebulAI ..."
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 text-gray-400"
      >
        <Send />
      </motion.button>
    </div>
  );
};

export default InputField;
