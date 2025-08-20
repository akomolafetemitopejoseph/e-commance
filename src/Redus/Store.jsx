import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlide";
import cartSlice from "./CartSlide";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
