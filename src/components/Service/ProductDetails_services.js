import axiosInstance from "../Axios/Axios";

const ProductDetails_services = (data) => {
  console.log(data);
  return axiosInstance.post("cart/addToCart", data);
};
const get_Product_Byid = (id) => {
  return axiosInstance.get(`product/getProduct/${id}`);
};

export default { ProductDetails_services, get_Product_Byid };
