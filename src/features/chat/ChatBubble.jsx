import Avatar from "./Avatar";
import BubbleContent from "./BubbleContent";
import sparkle from "../../assets/sparkle.svg";
import user from "../../assets/user.svg";

// eslint-disable-next-line react/prop-types
export default function ChatBubble({ isLoading, isBot, message }) {
  const bubbleClassName = isBot
    ? "flex flex-row-reverse rtl:space-x-reverse"
    : "flex flex-row";

  return (
    <div className={`items-start ${bubbleClassName}`}>
      <Avatar src={isBot ? sparkle : user} />
      <BubbleContent isLoading={isLoading} message={message} />
    </div>
  );
}
