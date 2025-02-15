import { useState } from "react";
import paperplane from "../assets/paperplane.svg";

/* eslint-disable react/prop-types */
export default function ChatInput({
  onSend,
  placeholder = "اكتب قضيتك هنا...",
}) {
  const [message, setMessage] = useState("");

  return (
    <div className="sticky bottom-0 mx-auto mt-10 w-full max-w-4xl flex-col rounded-2xl border border-border bg-white p-6 shadow-md">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        className="mx-4 w-full flex-grow resize-none bg-transparent p-2 text-gray-800 placeholder-placeholderText outline-none"
        rows={3}
      ></textarea>

      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            if (!message.trim()) return;
            onSend(message.trim());
            setMessage("");
          }}
          className="hover:bg-primary-dark ml-2 flex items-center justify-center rounded-full bg-primary px-6 py-2 text-white"
        >
          <img src={paperplane} alt="Send" />
          <span className="ml-2">ارسال</span>
        </button>
      </div>
    </div>
  );
}
