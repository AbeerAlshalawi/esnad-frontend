import { NewChatButton } from "./NewChatButton";
import Logo from "./Logo";
import ChatList from "./ChatList";
import { useLogout } from "../features/auth/useLogout";

const chats = [
  { id: 1, title: "نزاع على ملكية أرض بين ورثة ومشتري ثالث" },
  { id: 2, title: "مطالبة بتعويض مالي عن حادث" },
  { id: 3, title: "فسخ عقد إيجار تجاري بسبب عدم التزام المستأجر" },
  { id: 4, title: "دعوى طلاق مع طلب حضانة للأطفال ونفقة شهرية" },
  { id: 5, title: "مطالبة باسترداد مبلغ مالي من شراكة تجارية فاشلة" },
];

export default function Sidebar() {
  const { logout } = useLogout();

  return (
    <aside className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-md">
      {/* Top Section */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8">
          <Logo />

          <div className="flex gap-4">
            <NewChatButton />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-y border-border py-4 text-gray-600">
            <h3 className="font-medium">محادثاتك</h3>
            <button className="text-sm font-medium text-primary hover:underline">
              حذف الكل
            </button>
          </div>

          <ChatList chats={chats}></ChatList>
        </div>
      </div>

      <div>
        <button
          onClick={logout}
          className="hover:bg-primary-dark w-full rounded-md bg-primary px-4 py-2 text-white"
        >
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
