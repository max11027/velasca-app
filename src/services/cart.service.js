import axios from "axios";

export const fetchCart = (cartId = 1) =>
  axios
    .get(`https://fakestoreapi.com/carts/${cartId}`)
    .then((res) => {
      return res?.data || [];
    })
    .catch((e) => {
      throw new Error(e);
    });

export const patchCart = (productList, cartId = 1) =>
  axios
    .patch(`https://fakestoreapi.com/carts/${cartId}`, {
      userId: 3,
      date: 2019 - 12 - 10,
      products: productList,
    })
    .then((res) => {
      return res?.data || [];
    })
    .catch((e) => {
      throw new Error(e);
    });
