import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// const initialState = product;

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        list: []
    },
    reducers: {
        setProductList: (state, action) => {
            state.list = action.payload;
        }
    }
})

export default productSlice.reducer;

export const {setProductList} = productSlice.actions

// export const fetchAllProducts = () => (dispatch) => {
//     axios
//         .get('https://fakestoreapi.com/products')
//         .then(response => {
//             dispatch(setProductList(response.data));
//         })
// }