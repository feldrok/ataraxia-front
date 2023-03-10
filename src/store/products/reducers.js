import { createReducer } from '@reduxjs/toolkit'
import productActions from './actions'

const { createProduct, getProducts, getProductById, updateProduct } =
    productActions

const initialState = {
    products: [],
    product: {},
    message: null,
}

const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createProduct.fulfilled, (state, action) => {
            let newState = {
                products: state.products,
                product: action.payload.product,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            let newState = {
                products: action.payload.products,
                product: state.product,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getProductById.fulfilled, (state, action) => {
            let newState = {
                products: state.products,
                product: action.payload.product,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            let newState = {
                products: state.products,
                product: action.payload.product,
                message: action.payload.message,
            }
            return newState
        })
})

export default productReducer
