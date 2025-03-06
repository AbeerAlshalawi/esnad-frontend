import { useState } from "react";
import paperplane from "../../assets/paperplane.svg";

/* eslint-disable react/prop-types */
export default function ChatInput({
  onSend,
  placeholder = "اكتب قضيتك هنا...",
}) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message.trim());
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="sticky bottom-0 mx-auto w-full max-w-4xl flex-col rounded-2xl border border-border bg-white p-6 shadow-md">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="mx-4 w-full flex-grow resize-none bg-transparent p-2 text-gray-800 placeholder-placeholderText outline-none"
        rows={3}
      ></textarea>

      <div className="flex w-full justify-end">
        <button
          onClick={handleSend}
          className="hover:bg-primary-dark ml-2 flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white hover:bg-opacity-80"
        >
          <img src={paperplane} alt="Send" className="opacity-90" />
          <span className="mr-2 opacity-90">ارسال</span>
        </button>
      </div>
    </div>
  );
}
