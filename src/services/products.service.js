import axios from "axios";
export const fetchProducts = (size) =>
  axios
    .get(
      `https://fakestoreapi.com/products${
        typeof size == "number" ? "?limit=" + size : ""
      }`
    )
    .then((res) => {
      return res?.data || [];
    })
    .catch((e) => {
      console.error(e);
      return new Error(e);
    });
