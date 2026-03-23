import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://product-assistant-backend-28604544957.us-central1.run.app/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});
