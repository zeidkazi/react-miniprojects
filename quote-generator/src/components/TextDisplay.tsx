import { Minus, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { QuoteType } from "./Card";

interface PropsType {
  quote: QuoteType | null;
  isLoading: Boolean;
}

const TextDisplay: React.FC<PropsType> = ({ quote, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="p-6 flex-1 flex justify-center items-center">
          <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className=" p-6 flex-1 flex flex-col">
          <div className="flex flex-1">
            <div className=" w-fit flex flex-col items-center justify-start pl-[10px]">
              <Quote
                size={60}
                strokeWidth={0}
                className="-rotate-180 text-white/20 fill-white/40 shrink-0"
              />
            </div>
            <div className="flex-grow w-fit">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl text-white font-semibold pt-10"
              >
                {quote?.text}
              </motion.p>
            </div>
            <div className=" w-fit flex flex-col items-center justify-end pr-[10px]">
              <Quote
                size={60}
                strokeWidth={0}
                className="text-white/20 fill-white/40 shrink-0"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="px-10  flex items-center justify-end gap-2"
          >
            <Minus className="shrink-0 text-white" />
            <p className="italic text-right text-xl text-white">
              {" "}
              {quote?.author}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default TextDisplay;
