import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://product-assistant-backend-latest.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
})