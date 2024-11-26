import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:8080/api",
  timeout: 10000,
  headers: {},
});

export default apiClient;
