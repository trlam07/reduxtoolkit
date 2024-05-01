import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: {},
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        },
        removeSelectedProduct: (state) => {
            state.product = {}
        }
    }
})

export const {setProducts, setProduct, removeSelectedProduct} = productSlice.actions;
export default productSlice.reducer;