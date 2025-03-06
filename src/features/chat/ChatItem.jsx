import { useNavigate } from "react-router-dom";
import chats from "../../assets/chat.svg";
import ellipsis from "../../assets/ellipsis.svg";
import pencil from "../../assets/pencil.svg";
import trash from "../../assets/trash.svg";
import { useChat } from "../../context/useChat";
import { useDeleteChat } from "./useDeleteChat";

// eslint-disable-next-line react/prop-types
export default function ChatItem({ chat }) {
  const navigate = useNavigate();

  // eslint-disable-next-line react/prop-types
  const { id, title } = chat;

  const { activeChat, setActiveChat } = useChat();
  const isActive = activeChat && id === activeChat.id;

  const { deleteChat } = useDeleteChat(id);

  if (isActive) {
    document.title = title;
  }

  const handleClick = () => {
    setActiveChat(chat);
    navigate("/chat/" + id);
  };

  const handleDelete = () => {
    if (window.confirm("هل أنت متأكد من حذف هذه المحادثة؟")) {
      deleteChat(id);
    }
  };

  return (
    <div
      className={`group relative flex items-start justify-between px-2 py-3 ${isActive ? "bg-gray-100" : "hover:bg-bg"} rounded-lg`}
    >
      <img src={chats} alt="Chat" />

      <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-primary"></div>

      <button
        onClick={handleClick}
        className="flex-grow truncate px-4 text-right text-gray-700"
      >
        {title}
      </button>

      <div className="hidden flex-shrink-0 items-center gap-2 group-hover:flex">
        <button onClick={handleDelete} className="p-1">
          <img src={trash} alt="Delete" className="h-4 w-4 text-red-500" />
        </button>
        <button className="p-1">
          <img src={pencil} alt="Edit" className="h-4 w-4" />
        </button>
        <button className="p-1">
          <img src={ellipsis} alt="More Options" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
