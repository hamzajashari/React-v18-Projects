import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
  timeout: 1000,
  headers: "applications/json",
});

export default customFetch;