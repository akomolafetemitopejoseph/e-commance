import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  search: "",
  filteredData: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setsearchterm(state, action) {
      state.setsearchterm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.setsearchterm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setsearchterm } = productSlice.actions;
export default productSlice.reducer;
