import { useQueryClient } from "@tanstack/react-query";

export function useNewChat() {
  const queryClient = useQueryClient();

  const newChat = (chat) => {
    const user = queryClient.getQueryData(["user"]);
    const userId = user?.id;

    queryClient.setQueryData(["chats", userId], (oldData) => [
      chat,
      ...oldData,
    ]);
  };

  return { newChat };
}
