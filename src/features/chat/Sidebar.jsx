/* eslint-disable no-unused-vars */
import { NewChatButton } from "./NewChatButton";
import { SearchButton } from "./SearchButton";
import Logo from "../../ui/Logo";
import ChatList from "../chat/ChatList";
import { useLogout } from "../auth/useLogout";
import { useGetChats } from "../chat/useGetChats";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useQueryClient } from "@tanstack/react-query";
import exit from "../../assets/logout.svg";

export default function Sidebar() {
  const { logout } = useLogout();
  const { chats, isLoading } = useGetChats();

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);
  const userEmail = user?.email;

  return (
    <aside className="flex h-full flex-col justify-between bg-white p-8 shadow-md">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8">
          <Logo />

          <div className="flex gap-2">
            <NewChatButton />
            <SearchButton />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-y border-border py-4 text-gray-600">
            <h3 className="font-medium">محادثاتك</h3>
            <button className="text-sm font-medium text-primary hover:underline">
              حذف الكل
            </button>
          </div>

          <div className="mt-4 h-96 overflow-y-auto">
            {isLoading ? (
              <LoadingSpinner size={10}></LoadingSpinner>
            ) : (
              <ChatList chats={chats || []}></ChatList>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-gray-400">{userEmail}</p>
        <div className="flex flex-row">
          <img src={exit} alt="Delete" className="text-red-500" />
          <button
            onClick={logout}
            className="hover:bg-primary-dark w-full rounded-md px-4 py-2 text-gray-600"
          >
            تسجيل الخروج<span></span>
          </button>
        </div>
      </div>
    </aside>
  );
}
