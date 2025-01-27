import Avatar from "./Avatar";
import BubbleContent from "./BubbleContent";
import sparkle from "../assets/sparkle.svg";
import user from "../assets/user.svg";

// eslint-disable-next-line react/prop-types
export default function ChatBubble({ isBot, title, message }) {
  const bubbleClassName = isBot
    ? "flex flex-row"
    : "flex flex-row-reverse rtl:space-x-reverse";

  return (
    <div className={`items-start ${bubbleClassName}`}>
      <Avatar src={isBot ? sparkle : user} />

      <BubbleContent title={title} message={message} />
    </div>
  );
}
