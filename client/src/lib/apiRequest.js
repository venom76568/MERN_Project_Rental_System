import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://mern-project-rental-system.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRequest;
