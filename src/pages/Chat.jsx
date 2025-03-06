import Sidebar from "../features/chat/Sidebar";
import ChatArea from "../features/chat/ChatArea";
import { ChatProvider } from "../context/ChatProvider";

export default function Chat() {
  return (
    <ChatProvider>
      <div className="grid h-screen grid-cols-[24rem_1fr] bg-bg">
        <Sidebar />

        <main className="overflow-y-auto py-14 pl-14 pr-2">
          <ChatArea />
        </main>
      </div>
    </ChatProvider>
  );
}
