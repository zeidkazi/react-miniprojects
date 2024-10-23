import { CheckCheck, Copy, MessageSquareQuote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { QuoteType } from "./Card";

interface ButtonProps {
  quote: QuoteType | null;
  isCopy: boolean;
  setIsCopy: React.Dispatch<React.SetStateAction<boolean>>;
  fetchQuote: () => void;
}

const Buttons: React.FC<ButtonProps> = ({
  fetchQuote,
  quote,
  isCopy,
  setIsCopy,
}) => {
  const handleCopy = () => {
    if (quote) {
      navigator.clipboard
        .writeText(`${quote.text} - ${quote.author}`)
        .then(() => {
          setIsCopy(true);
          setTimeout(() => setIsCopy(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="w-full h-20 p-6 flex items-center justify-between bg-white/10 backdrop-blur-lg"
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={fetchQuote}
        className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-opacity-90 hover:bg-purple-600 hover:text-white transition-colors ease-in duration-200 shadow-lg"
      >
        <MessageSquareQuote className="shrink-0" /> <p>New Quote</p>
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleCopy}
        className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full hover:bg-opacity-90 ${
          isCopy ? "bg-white text-purple-600" : "bg-purple-600 text-white"
        } transition-colors ease-in duration-200 shadow-lg`}
      >
        <motion.div
          key={isCopy ? "check" : "copy"}
          initial={{ opacity: 0, rotate: 180 }}
          animate={{ opacity: 1, rotate: 0 }}
        >
          {isCopy ? (
            <CheckCheck className="shrink-0 " />
          ) : (
            <Copy className="shrink-0" />
          )}
        </motion.div>

        <p>{isCopy ? "Copied" : "Copy"}</p>
      </motion.button>
    </motion.div>
  );
};

export default Buttons;
