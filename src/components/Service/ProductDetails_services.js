import axiosInstance from "../Axios/Axios";

const ProductDetails_services = (data) => {
  console.log(data);
  return axiosInstance.post("/cart/addToCart", data);
};
export default { ProductDetails_services };
