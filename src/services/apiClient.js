import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
