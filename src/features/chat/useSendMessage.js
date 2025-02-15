import { useMutation } from "@tanstack/react-query";
import { sendMessage as sendMessageApi } from "../../services/apiChat";
import { toast } from "react-hot-toast";

export function useSendMessage(onSuccess) {
  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: sendMessageApi,
    onSuccess,
    onError: (error) => {
      console.error("Error:", error.message);
      toast.error(error.message);
    },
  });

  return { sendMessage, isLoading };
}
