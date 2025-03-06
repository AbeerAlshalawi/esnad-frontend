import { useNavigate } from "react-router-dom";
import plus from "../../assets/plus.svg";
import { useChat } from "../../context/useChat";

export function NewChatButton() {
  const navigate = useNavigate();
  const { setActiveChat } = useChat();

  const handleClick = () => {
    document.title = "إسناد";
    setActiveChat(null);
    navigate("/chat");
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-primary-dark flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white text-opacity-90 hover:bg-opacity-80"
    >
      <img src={plus}></img>
      <span className="mr-2">إنشاء محادثة</span>
    </button>
  );
}
