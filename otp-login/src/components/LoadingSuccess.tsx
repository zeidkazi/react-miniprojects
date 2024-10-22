import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

interface LoadingSuccessProps {
  isSubmit: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const LoadingSuccess: React.FC<LoadingSuccessProps> = ({
  isSubmit,
  isLoading,
  isSuccess,
}) => {
  return (
    <AnimatePresence>
      {isSubmit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute backdrop-filter backdrop-blur-sm bg-white/20 w-full h-full -translate-x-6 -translate-y-6 p-6 flex items-center justify-center"
        >
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.1 }}
                className=" size-[120px] rounded-full border-4 border-[#cfd9df] border-t-[#a1c4fd] border-t-4 animate-spin delay-100"
              ></motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!isLoading && isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.1 }}
                className=" size-[120px] rounded-full bg-green-300 flex items-center justify-center text-white drop-shadow-lg shadow-green-500"
              >
                <Check size={60} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingSuccess;
