import apiClient from "./apiClient";

const CHAT_ENDPOINT = "chats";
const MESSAGE_ENDPOINT = "messages";

export async function sendMessage({ chatId, content }) {
  try {
    const response = await apiClient.post(
      `${MESSAGE_ENDPOINT}/${chatId ? chatId : ""}`,
      {
        content,
      },
    );

    const {
      chatId: createdChatId,
      query = content,
      answer,
      chatName,
    } = response.data;

    return { createdChatId, query, answer, chatName };
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to send message");
  }
}

export async function getChatMessages({ chatId }) {
  try {
    const response = await apiClient.get(`${MESSAGE_ENDPOINT}/${chatId}`);

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve messages",
    );
  }
}

export async function getAllChats({ userId }) {
  try {
    const response = await apiClient.get(`${CHAT_ENDPOINT}/${userId}`);

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve chats",
    );
  }
}

export async function deleteChat({ chatId }) {
  try {
    const response = await apiClient.delete(`${CHAT_ENDPOINT}/${chatId}`);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete chat");
  }
}
