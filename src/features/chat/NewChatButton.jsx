import plus from "../assets/plus.svg";

export function NewChatButton() {
  return (
    <button className="bg-primary hover:bg-primary-dark flex items-center justify-center rounded-full px-6 py-3 font-medium text-white">
      <span className="ml-2">إنشاء محادثة</span>
      <img src={plus}></img>
    </button>
  );
}
