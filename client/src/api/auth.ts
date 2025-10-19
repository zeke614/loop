import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // 👈 backend route
});

// Register user
export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await API.post("/register", { username, email, password });
  return response.data;
};

// Login user
export const loginUser = async (email: string, password: string) => {
  const response = await API.post("/login", { email, password });
  return response.data;
};
