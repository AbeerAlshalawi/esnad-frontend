import { useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

/* eslint-disable react/prop-types */
export default function ChatArea({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ul className="mx-auto flex h-full w-full max-w-4xl flex-col">
      <li className="flex flex-grow flex-col space-y-4 p-4">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            isBot={msg.isBot}
            title={msg.title}
            message={msg.message}
          />
        ))}
        <div ref={bottomRef}></div>
      </li>

      <ChatInput></ChatInput>
    </ul>
  );
}
