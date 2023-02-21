import { createReducer } from '@reduxjs/toolkit'
import ratingActions from './actions'

const { createRating, getProductRating, getUserRating } = ratingActions

const initialState = {
    productRating: [],
    userRating: null,
    message: ""
}

const ratingReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getProductRating.fulfilled, (state, action) => {
            let newState = {
                productRating: action.payload.rating,
                userRating: state.userRating,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getUserRating.fulfilled, (state, action) => {
            let newState = {
                productRating: state.productRating,
                userRating: action.payload.rating,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(createRating.fulfilled, (state, action) => {
            let newState = {
                productRating: state.productRating,
                userRating: action.payload.rating,
                message: action.payload.message,
            }
            return newState
        })
})

export default ratingReducer
