import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product/productSlice.js';

const store = configureStore({
  reducer: {
    product: productReducer
  }
});

export default store;