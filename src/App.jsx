import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ui/ProtectedRoute";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <div className="bg-bg">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}> </ReactQueryDevtools>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route index element={<Navigate replace to="chat" />}></Route>
              <Route path="chat" element={<Chat></Chat>}></Route>
            </Route>

            <Route path="login" element={<Auth isLogin={true} />} />
            <Route path="signup" element={<Auth isLogin={false} />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
            <Route
              path="*"
              element={
                <div>
                  <h1>Page Not Found</h1>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#f8f9fa",
              color: "#343a40",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
}
