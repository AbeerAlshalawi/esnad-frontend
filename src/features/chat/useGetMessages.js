import { useQuery } from "@tanstack/react-query";
import { getChatMessages } from "../../services/apiChat";

export function useGetMessages(chatId) {
  const {
    data: messages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["messages", chatId],
    queryFn: () => getChatMessages({ chatId }),
  });

  return { messages, isLoading, error };
}
