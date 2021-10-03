import axios from "axios";
export const fetchCart = () =>
  axios
    .get(`https://fakestoreapi.com/carts/1`)
    .then((res) => {
      return res?.data || [];
    })
    .catch((e) => {
      throw new Error(e);
    });
