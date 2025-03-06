import axios from "axios";

const apiClient = axios.create({
  // AWS EC2 instance
  baseURL: "http://13.60.190.145",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
