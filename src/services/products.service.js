import axios from "axios";
export const fetchProducts = () =>
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      return res?.data || [];
    })
    .catch((e) => {
      console.error(e);
      return new Error(e);
    });
