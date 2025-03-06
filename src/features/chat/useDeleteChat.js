import { useMutation } from "@tanstack/react-query";
import { deleteChat as deleteChatApi } from "../../services/apiChat";
import toast from "react-hot-toast";

export function useDeleteChat() {
  const { deleteChat, isPending } = useMutation({
    mutationFn: deleteChatApi,
    onError: (error) => {
      console.error("Error:", error.message);
      toast.error(error.message);
    },
  });

  return { deleteChat, isPending };
}
