import axiosInstance from "../Axios/Axios";

const signup = (data) => {
  console.log(data);
  return axiosInstance.post("/user/create", data);
};
const post_byLogin = (data) => {
  return axiosInstance.post("/user/login", data);
};
const get_byShoppingCart = () => {
  return axiosInstance.get("/cart/getUserCart");
};
const post_dlt_ByShoppingCart = (pdt_id) => {
  return axiosInstance.post("cart/deleteItem", pdt_id);
};
const post_Increment = (data) => {
  return axiosInstance.post("/cart/increaseQuantity", data);
};
const post_Decrement = (data) => {
  return axiosInstance.post("/cart/decreaseQuantity1", data);
};
const get_UserLoginDetails = () => {
  return axiosInstance.get("/user/getCurrentUserDetails");
};
const put_UpdateLoginDetails = (data) => {
  return axiosInstance.put("/user/updateCurrentUser", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const post_ClearCart = () => {
  return axiosInstance.post("/cart/clearCart");
};
export default {
  signup,
  post_byLogin,
  get_byShoppingCart,
  post_dlt_ByShoppingCart,
  post_Decrement,
  post_Increment,
  get_UserLoginDetails,
  put_UpdateLoginDetails,
  post_ClearCart,
};
