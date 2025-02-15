/* eslint-disable no-unused-vars */
import { useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import { useSendMessage } from "../features/chat/useSendMessage";
import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ChatArea() {
  // eslint-disable-next-line no-unused-vars
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);

  const { sendMessage, isLoading } = useSendMessage((chat) => {
    const { createdChatId, answer, chatName } = chat;

    if (!chatId) {
      setChatId(createdChatId);
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { isBot: false, message: chat.query },
      { isBot: true, message: answer },
    ]);
  });

  function handleSendMessage(content) {
    sendMessage({ chatId, content });
  }

  return (
    <div>
      <ul className="mx-auto flex h-full w-full max-w-4xl flex-col">
        <li className="flex flex-grow flex-col space-y-4 p-4">
          {messages.length == 0 && (
            <ChatBubble isBot message="مرحبًا! كيف يمكنني مساعدتك اليوم؟" />
          )}
          {messages.map((msg, index) => (
            <ChatBubble key={index} isBot={msg.isBot} message={msg.message} />
          ))}
        </li>
      </ul>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}
