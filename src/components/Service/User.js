import axiosInstance from "../Axios/Axios";

const signup = (data) => {
  console.log(data);
  return axiosInstance.post("/user/create", data);
};
export default { signup };
