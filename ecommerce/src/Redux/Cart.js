import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    CartItem:[],
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers:{
        addCart: (state,action) =>{
            state.CartItem = [...state.CartItem,action.payload]
        },
        updateCart: (state,action) =>{
            state.CartItem = action.payload
        },
        clearCart: (state,action) =>{
            state.CartItem = []
        }
    }
})

export const { addCart,updateCart,clearCart } = cartSlice.actions

export default cartSlice.reducer