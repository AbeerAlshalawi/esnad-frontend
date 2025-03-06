import { useState } from "react";
import { ChatContext } from "./ChatContext";

// eslint-disable-next-line react/prop-types
export function ChatProvider({ children }) {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <ChatContext.Provider value={{ activeChat, setActiveChat }}>
      {children}
    </ChatContext.Provider>
  );
}
