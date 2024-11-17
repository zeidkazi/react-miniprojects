import { AnimatePresence, motion } from "motion/react";
import { MessageType } from "../App";

interface ChatboxTypes {
  messages: MessageType[];
  isLoading: boolean;
}

const Chatbox = ({ messages, isLoading }: ChatboxTypes) => {
  console.log(isLoading);

  return (
    <div className="flex-1 w-full h-full max-h-full overflow-y-auto  p-2 z-10 flex flex-col gap-3">
      <AnimatePresence mode="wait">
        {messages.map((message) =>
          message.role === "USER" ? (
            <>
              <UserChat text={message.message} />
            </>
          ) : message.role === "CHATBOT" ? (
            <>
              <AiChat text={message.message} />
            </>
          ) : null
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isLoading === true ? (
          <>
            <LoadingChat />
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Chatbox;

const AiChat = ({ text }: { text: string }) => {
  return (
    <>
      <motion.div
        initial={{ x: -240 }}
        animate={{ x: 0 }}
        exit={{ x: -240 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="w-full flex items-center justify-start"
      >
        <div className="bg-white w-fit max-w-[700px]  min-h-11 rounded-tr-xl rounded-br-xl rounded-bl-xl border-2 border-pink-200 flex items-center justify-center text-start  px-2 py-1">
          {text}
        </div>
      </motion.div>
    </>
  );
};

const UserChat = ({ text }: { text: string }) => {
  return (
    <>
      <motion.div
        initial={{ x: 240 }}
        animate={{ x: 0 }}
        exit={{ x: 240 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="w-full flex items-center justify-end"
      >
        <div className="bg-white w-fit max-w-[700px]  min-h-11 rounded-tl-xl rounded-br-xl rounded-bl-xl border-2 border-purple-200 flex items-center justify-center text-start  px-2 py-1">
          {text}
        </div>
      </motion.div>
    </>
  );
};

const LoadingChat = () => {
  return (
    <>
      <motion.div
        initial={{ x: -240 }}
        animate={{ x: 0 }}
        exit={{ x: -240 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="w-full flex items-center justify-start"
      >
        <div className="bg-white w-fit max-w-[700px]  min-h-11 rounded-tr-xl rounded-br-xl rounded-bl-xl border-2 border-pink-200 flex items-center justify-center gap-1 text-start  px-2 py-1">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="size-4 bg-gray-200 rounded-full animate-pulse"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            className="size-4 bg-gray-200 rounded-full animate-pulse"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
            className="size-4 bg-gray-200 rounded-full animate-pulse"
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
};
