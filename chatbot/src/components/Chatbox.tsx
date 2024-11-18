import { AnimatePresence, motion } from "motion/react";
import { MessageType } from "../App";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useRef } from "react";

interface ChatboxTypes {
  messages: MessageType[];
  isLoading: boolean;
}

interface CodePropsTypes {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Chatbox = ({ messages, isLoading }: ChatboxTypes) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 w-full h-full max-h-full overflow-y-auto overflow-x-hidden p-2 z-10 flex flex-col gap-3 hidescrollbar">
      <AnimatePresence mode="wait">
        <AiChat text="Hey, how can I help you?" />
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
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chatbox;

const CodeBlock: Components = {
  code({ node, inline, className, children, ...props }: CodePropsTypes) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        className="rounded-lg overflow-x-auto w-full break-words whitespace-pre-wrap"
        wrapLines={true}
        wrapLongLines={true}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code
        className={`${
          className || ""
        } bg-gray-100 p-1 rounded text-sm break-words overflow-wrap`}
        {...props}
      >
        {children}
      </code>
    );
  },
};

const formatAIText = (text: string): string => {
  // Replace unicode escaped characters
  text = text.replace(/\\u003c/g, "<").replace(/\\u003e/g, ">");
  // Clean up excessive newlines
  text = text.replace(/\n{3,}/g, "\n\n");
  // Normalize list formatting
  text = text.replace(/^- /gm, "- ");
  return text.trim();
};

const AiChat = ({ text }: { text: string }) => {
  const processedText = formatAIText(text);

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
        <div className="bg-white w-fit max-w-[300px] md:max-w-5xl min-h-11 rounded-tr-xl rounded-br-xl rounded-bl-xl border-2 border-pink-200 flex items-center justify-center text-start  px-2 py-1">
          <ReactMarkdown
            className="prose w-full overflow-x-auto"
            components={CodeBlock}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {processedText}
          </ReactMarkdown>
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
        <motion.div className="bg-white w-fit max-w-[700px]  min-h-11 rounded-tl-xl rounded-br-xl rounded-bl-xl border-2 border-purple-200 flex items-center justify-center text-start  px-2 py-1">
          {text}
        </motion.div>
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
