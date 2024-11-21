import { useState } from "react";
import Background from "./components/Background";
import InputField from "./components/InputField";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AnimatePresence } from "motion/react";
import Chatbox from "./components/Chatbox";
import { Analytics } from "@vercel/analytics/react";

export interface MessageType {
  role: string;
  message: string;
}

export interface getResponseType {
  // e:
  //   | React.MouseEvent<HTMLButtonElement>
  //   | React.KeyboardEvent<HTMLInputElement>;
  input: string;
}

const App = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const getResponse = async ({ input }: getResponseType) => {
    if (!input.trim()) {
      return;
    }
    setIsLoading(true);
    const userMessage = { role: "USER", message: input };
    const updatedMessages = [...messages, userMessage];
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("https://api.cohere.com/v1/chat", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_REACT_APP_COHERE_API_KEY
          }`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          model: "command-r-08-2024",
          preamble:
            "You are an AI-assistant chatbot. You are trained to assist users by providing thorough and helpful responses to their queries.",
          chat_history: updatedMessages,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      const chatBotMessage = {
        role: "CHATBOT",
        message: data?.text,
      };
      setMessages((prev) => [...prev, chatBotMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="h-dvh max-h-screen w-full flex flex-col font-geist ">
        <Analytics />
        <Navbar OpenSidebar={setIsSidebar} />
        <AnimatePresence mode="wait">
          {isSidebar && <Sidebar OpenSidebar={setIsSidebar} />}
        </AnimatePresence>
        <div className="w-full flex-1 overflow-hidden flex flex-col">
          <Background />
          <Chatbox messages={messages} isLoading={isLoading} />
        </div>
        <InputField getResponse={getResponse} />
      </div>
    </>
  );
};

export default App;
