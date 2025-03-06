import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllChats } from "../../services/apiChat";

export function useGetChats() {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(["user"]);
  const userId = user?.id;

  const {
    data: chats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chats", userId],
    queryFn: () => getAllChats({ userId }),
    staleTime: Infinity,
  });

  return { chats, isLoading, error };
}
