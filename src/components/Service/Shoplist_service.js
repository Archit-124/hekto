import axiosInstance from "../Axios/Axios";

const shop_service = (data) => {
  return axiosInstance.get("/product/getProducts/", data);
};
export default { shop_service };
