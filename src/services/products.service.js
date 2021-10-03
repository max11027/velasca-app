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
      throw new Error(e);
    });
