import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

const messages = [
  {
    isBot: true,
    title: "ملخص القضايا السابقة",
    message:
      "تتعلق القضية رقم 5377 لعام 1440 هـ بدعوى من مصنع ضد المدعى عليه بمطالبة بمستحقات مالية قدرها 503,768.41 ريال نتيجة بيع أوراق. حضر وكيل المدعية، بينما لم يحضر المدعى عليه رغم إبلاغه. أنكر المدعى عليه المستندات المقدمة وطلب مستندات إضافية، لكنه أقر لاحقًا بوجود مستحقات دون تحديد قيمتها بدقة. أُغلق باب المرافعة.",
  },
  {
    isBot: false,
    message: "معرفة نقاط القوة للسوابق لقضائية",
  },
  {
    isBot: true,
    title: "ملخص القضايا السابقة",
    message:
      "تتعلق القضية رقم 5377 لعام 1440 هـ بدعوى من مصنع ضد المدعى عليه بمطالبة بمستحقات مالية قدرها 503,768.41 ريال نتيجة بيع أوراق. حضر وكيل المدعية، بينما لم يحضر المدعى عليه رغم إبلاغه. أنكر المدعى عليه المستندات المقدمة وطلب مستندات إضافية، لكنه أقر لاحقًا بوجود مستحقات دون تحديد قيمتها بدقة. أُغلق باب المرافعة.",
  },
  {
    isBot: false,
    message: "معرفة نقاط القوة للسوابق لقضائية",
  },
  {
    isBot: true,
    title: "ملخص القضايا السابقة",
    message:
      "تتعلق القضية رقم 5377 لعام 1440 هـ بدعوى من مصنع ضد المدعى عليه بمطالبة بمستحقات مالية قدرها 503,768.41 ريال نتيجة بيع أوراق. حضر وكيل المدعية، بينما لم يحضر المدعى عليه رغم إبلاغه. أنكر المدعى عليه المستندات المقدمة وطلب مستندات إضافية، لكنه أقر لاحقًا بوجود مستحقات دون تحديد قيمتها بدقة. أُغلق باب المرافعة.",
  },
  {
    isBot: false,
    message: "معرفة نقاط القوة للسوابق لقضائية",
  },
];

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] bg-bg">
      <div className="rounded-3xl px-8 py-14">
        <Sidebar />
      </div>

      <main className="overflow-y-scroll py-14 pl-14 pr-2">
        <ChatArea messages={messages} />
      </main>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import jwtDecode from "jwt-decode";
// import Sidebar from "./Sidebar";
// import ChatArea from "./ChatArea";
// import AuthForm from "./AuthForm";

// export default function AppLayout() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         const currentTime = Date.now() / 1000;
//         if (decodedToken.exp > currentTime) {
//           setIsAuthenticated(true);
//         } else {
//           handleLogout();
//         }
//       } catch (error) {
//         console.error("Invalid token:", error);
//         handleLogout();
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-bg">
//       {isAuthenticated ? (
//         <div className="grid h-screen grid-cols-[26rem_1fr]">
//           <div className="rounded-3xl px-8 py-14">
//             <Sidebar onLogout={handleLogout} />
//           </div>
//           <main className="overflow-y-scroll py-14 pl-14 pr-2">
//             <ChatArea />
//           </main>
//         </div>
//       ) : (
//         <AuthForm onLoginSuccess={() => setIsAuthenticated(true)} />
//       )}
//     </div>
//   );
// }
