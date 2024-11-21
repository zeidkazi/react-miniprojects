import { useRef, useEffect, useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { getResponseType } from "../App";

interface InputType {
  getResponse: ({ input }: getResponseType) => void;
}

const InputField = ({ getResponse }: InputType) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  const [inputText, setInputText] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    setInputText(e.target.value);
  };

  const keyDownFunction = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    getResponse({ input: inputText });
    setInputText("");
    setTimeout(() => {
      adjustHeight();
    }, 0);
  };
  

  return (
    <motion.div
      layout
      className="w-full min-h-20 max-h-44 border-t flex items-center justify-between p-4 z-10 bg-white"
    >
      <textarea
        onKeyDown={keyDownFunction}
        ref={textareaRef}
        rows={1}
        onChange={handleOnChange}
        value={inputText}
        className="w-full p-2 border-[2px] rounded-2xl appearance-none resize-none focus:outline-none focus:border-pink-200 focus:placeholder:text-pink-300 transition-colors duration-300 ease-in-out overflow-y-auto"
        placeholder="Ask NebulAI ..."
        style={{ minHeight: "48px", maxHeight: "160px" }}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSubmit}
        className="p-2 text-gray-400 hover:text-pink-300 transition-colors ease-in ml-2 flex-shrink-0"
      >
        <Send />
      </motion.button>
    </motion.div>
  );
};

export default InputField;
