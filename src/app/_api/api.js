import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:9999/",
  headers: {
    "Content-Type": "application/json",
  },
});
