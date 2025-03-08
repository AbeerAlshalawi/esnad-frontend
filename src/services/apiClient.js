import axios from "axios";

const apiClient = axios.create({
  // AWS EC2 instance
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
