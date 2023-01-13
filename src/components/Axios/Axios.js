import axios from "axios";
import { useState } from "react";

const baseUrl = "https://api-ecommerce-dev.devtomaster.com/v1/";
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
    accept: "application/json",
  },
});

// const [isLoading, setIsLoading] = useState(false);
axiosInstance.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  // setIsLoading(true);
  return request;
});
axiosInstance.interceptors.response.use(
  (response) => {
    // setIsLoading(false);
    console.log(response);
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
