import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://d3ff-2806-2f0-64a1-d7b6-451f-fb3e-79ff-f28.ngrok-free.app/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});
