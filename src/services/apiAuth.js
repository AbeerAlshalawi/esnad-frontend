import apiClient from "./apiClient";

const AUTH_ENDPOINT = "auth";

export async function signup({ email, password }) {
  try {
    const response = await apiClient.post(`${AUTH_ENDPOINT}/register`, {
      email,
      password,
    });

    const { access_token } = response.data;
    localStorage.setItem("jwt", access_token);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
}

export async function login({ email, password }) {
  try {
    const response = await apiClient.post(`${AUTH_ENDPOINT}/login`, {
      email,
      password,
    });

    const { access_token } = response.data;
    localStorage.setItem("jwt", access_token);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
}

export async function getCurrentUser() {
  try {
    const response = await apiClient.get(`${AUTH_ENDPOINT}/validate`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user:", error.response?.data?.message);
    return null;
  }
}

export function logout() {
  localStorage.removeItem("jwt");
}
