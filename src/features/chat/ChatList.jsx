/* eslint-disable react/prop-types */

import ChatItem from "./ChatItem";

export default function ChatList({ chats }) {
  return (
    <div className="mt-4 space-y-2 border-b border-border py-4">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          title={chat.title}
          onDelete={() => console.log(`Delete chat ${chat.id}`)}
          onEdit={() => console.log(`Edit chat ${chat.id}`)}
          onMore={() => console.log(`More options for chat ${chat.id}`)}
        />
      ))}
    </div>
  );
}
