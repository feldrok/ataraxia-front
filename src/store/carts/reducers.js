import cartActions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const {
    createCart,
    getCart,
    addProductToCart,
    updateCart,
    deleteItem,
    emptyCart,
    applyCoupon,
} = cartActions

const initialState = {
    cart: [],
    message: null,
}

const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createCart.fulfilled, (state, action) => {
            let newState = {
                cart: action.payload,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getCart.fulfilled, (state, action) => {
            let newState = {
                cart: action.payload,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(updateCart.fulfilled, (state, action) => {
            let newState = {
                cart: state.cart,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(emptyCart.fulfilled, (state, action) => {
            let newState = {
                cart: action.payload,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(deleteItem.fulfilled, (state, action) => {
            let newState = {
                cart: state.cart,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(addProductToCart.fulfilled, (state, action) => {
            let newState = {
                cart: state.cart,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(applyCoupon.fulfilled, (state, action) => {
            let newState = {
                cart: state.cart,
                message: action.payload.message,
            }
            return newState
        })
})

export default cartReducer
