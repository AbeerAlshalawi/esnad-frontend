import paperplane from "../assets/paperplane.svg";
import paperclip from "../assets/paperclip.svg";

/* eslint-disable react/prop-types */
export default function ChatInput({
  onSend,
  placeholder = "اكتب قضيتك او ارفقها ...",
}) {
  const handleSend = () => {
    if (onSend) onSend();
  };

  return (
    <div className="sticky bottom-0 mx-auto mt-10 w-full max-w-4xl flex-col rounded-2xl border border-border bg-white p-6 shadow-md">
      <div className="flex">
        <textarea
          placeholder={placeholder}
          className="mx-4 flex-grow resize-none bg-transparent p-2 text-gray-800 placeholder-placeholderText outline-none"
          rows={3}
        ></textarea>

        <button className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
          <img src={paperclip} alt="Attachment" />
        </button>
      </div>

      <button
        onClick={handleSend}
        className="hover:bg-primary-dark flex items-center justify-center rounded-full bg-primary px-6 py-2 text-white"
      >
        <span className="ml-2">ارسال</span>
        <img src={paperplane} alt="Send" />
      </button>
    </div>
  );
}
