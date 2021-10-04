import React from "react";

export const AppContext = React.createContext({
  products: [],
  cart: [],
  setProducts: () => {},
  setCart: () => {},
});
