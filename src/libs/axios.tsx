import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com/ ";

export const api = axios.create({
  baseURL,
});
