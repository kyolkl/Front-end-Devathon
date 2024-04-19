import axios from "axios";

export const api = axios.create({
  baseURL: "https://account-service.up.railway.app/api",
});
