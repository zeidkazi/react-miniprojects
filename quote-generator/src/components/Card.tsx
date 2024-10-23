import { AnimatePresence, motion } from "framer-motion";
import Circle from "./Circle";
import TextDisplay from "./TextDisplay";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";

export interface QuoteType {
  text: string;
  author: string;
}

const Card = () => {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const data = await response.json();
    setQuote({ text: data.data.content, author: data.data.author });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={quote ? quote.text : "loading"}
        initial={{
          scale: 0.8,
          opacity: 0,
          rotateY: 90,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          rotateY: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        }}
        exit={{
          scale: 0.8,
          opacity: 0,
          rotateY: -90,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        }}
        className="z-10 relative min-h-[300px] w-full max-w-4xl bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-[30px] shadow-2xl transform-gpu transition-all duration-500 ease-out overflow-hidden flex flex-col"
      >
        <Circle />
        <TextDisplay quote={quote} isLoading={isLoading} />
        <Buttons
          quote={quote ? quote : null}
          fetchQuote={fetchQuote}
          isCopy={isCopy}
          setIsCopy={setIsCopy}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
