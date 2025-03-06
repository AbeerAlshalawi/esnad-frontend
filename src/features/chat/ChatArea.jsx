/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import { useSendMessage } from "./useSendMessage";
import { useNavigate, useParams } from "react-router-dom";
import { useNewChat } from "./useNewChat";
import { useGetMessages } from "./useGetMessages";
import { useQueryClient } from "@tanstack/react-query";
import { useChat } from "../../context/useChat";

/* eslint-disable react/prop-types */
export default function ChatArea() {
  const { chatId } = useParams();
  const { messages, isLoadingMessages } = useGetMessages(chatId);
  const { setActiveChat } = useChat();

  const queryClient = useQueryClient();

  const { newChat } = useNewChat();
  const navigate = useNavigate();

  const { sendMessage, isPending } = useSendMessage((chat) => {
    const { createdChatId, answer, chatName } = chat;

    if (!chatId) {
      const chat = {
        id: createdChatId,
        title: chatName,
      };

      setActiveChat(chat);
      newChat(chat);

      navigate("/chat/" + createdChatId);
    }

    queryClient.setQueryData(["messages", chatId], (oldMessages = []) => [
      ...oldMessages,
      { isBot: true, content: answer },
    ]);
  });

  function handleSendMessage(content) {
    queryClient.setQueryData(["messages", chatId], (oldMessages = []) => [
      ...oldMessages,
      { isBot: false, content },
    ]);

    sendMessage({ chatId, content });
  }

  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div>
      <ul className="mx-auto flex h-full w-full max-w-4xl flex-col">
        <li className="flex flex-grow flex-col space-y-4 p-4">
          {!messages ? (
            <ChatBubble isBot message="مرحبًا! كيف يمكنني مساعدتك اليوم؟" />
          ) : (
            <>
              {messages.map((msg, index) => (
                <ChatBubble
                  key={index}
                  isBot={msg.isBot}
                  message={msg.content}
                />
              ))}
              {isPending && <ChatBubble isLoading={true} isBot={true} />}
            </>
          )}
          <div ref={endOfMessagesRef} />
        </li>
      </ul>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}
