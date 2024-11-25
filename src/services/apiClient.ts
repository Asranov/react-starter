import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {},
});

export default apiClient;
