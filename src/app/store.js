import { configureStore } from "@reduxjs/toolkit";

// reducers
import productsReducer from '../features/slices/productSlice'

export const store = configureStore({
    reducer: {
        product: productsReducer
    },
})