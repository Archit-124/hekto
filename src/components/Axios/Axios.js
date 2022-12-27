import axios from "axios";
const baseUrl = "https://api-ecommerce-dev.devtomaster.com/v1/";
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem("access_token"),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((request) => {
  return request;
});
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
