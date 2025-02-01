// import { useRef, useEffect } from "react";
// import ChatBubble from "./ChatBubble";
// import ChatInput from "./ChatInput";

// /* eslint-disable react/prop-types */
// export default function ChatArea({ messages }) {
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     if (bottomRef && bottomRef.current) {
//       bottomRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <ul className="mx-auto flex h-full w-full max-w-4xl flex-col">
//       <li className="flex flex-grow flex-col space-y-4 p-4">
//         {messages.map((msg, index) => (
//           <ChatBubble
//             key={index}
//             isBot={msg.isBot}
//             title={msg.title}
//             message={msg.message}
//           />
//         ))}
//         <div ref={bottomRef}></div>
//       </li>

//       <ChatInput></ChatInput>
//     </ul>
//   );
// }

import { useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import axios from "axios";

let chatId;

/* eslint-disable react/prop-types */
export default function ChatArea() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (content) => {
    try {
      const response = await axios.post("http://localhost:3000/messages", {
        content,
      });
      chatId = response.data.chatId;
      setMessages((prevMessages) => [
        ...prevMessages,
        { isBot: false, message: response.data.content },
        { isBot: true, message: response.data.answer },
      ]);
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };

  return (
    <div className="chat-area">
      <ul className="mx-auto flex h-full w-full max-w-4xl flex-col">
        <li className="flex flex-grow flex-col space-y-4 p-4">
          {messages.map((msg, index) => (
            <ChatBubble key={index} isBot={msg.isBot} message={msg.message} />
          ))}
        </li>
      </ul>
      {chatId && <ChatInput chatId={chatId} onSend={handleSendMessage} />}
    </div>
  );
}
