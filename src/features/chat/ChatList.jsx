/* eslint-disable react/prop-types */

import ChatItem from "./ChatItem";

export default function ChatList({ chats }) {
  return (
    <div className="mt-4 space-y-2 py-4">
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
}
