import ellipsis from "../assets/ellipsis.svg";
import pencil from "../assets/pencil.svg";
import trash from "../assets/trash.svg";

// eslint-disable-next-line react/prop-types
export default function ChatItem({ title, onDelete, onEdit, onMore }) {
  return (
    <div className="group relative flex items-center justify-between px-2 py-3 hover:bg-bg">
      <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-primary"></div>

      <div className="flex-grow truncate px-4 text-gray-700">{title}</div>

      <div className="hidden flex-shrink-0 items-center gap-2 group-hover:flex">
        <button onClick={onDelete} className="p-1">
          <img src={trash} alt="Delete" className="h-4 w-4 text-red-500" />
        </button>
        <button onClick={onEdit} className="p-1">
          <img src={pencil} alt="Edit" className="h-4 w-4" />
        </button>
        <button onClick={onMore} className="p-1">
          <img src={ellipsis} alt="More Options" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
