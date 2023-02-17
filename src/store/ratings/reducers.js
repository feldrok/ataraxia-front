import { createReducer } from '@reduxjs/toolkit'
import ratingActions from './actions'

const { createRating, getProductRatings, getUserRating } = ratingActions

const initialState = {
    productRating: [],
    userRating: null,
}

const ratingReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getProductRatings.fulfilled, (state, action) => {
            let newState = {
                productRating: action.payload.rating,
                userRating: state.userRating,
            }
            return newState
        })
        .addCase(getUserRating.fulfilled, (state, action) => {
            let newState = {
                productRating: state.productRating,
                userRating: action.payload.rating,
            }
            return newState
        })
        .addCase(createRating.fulfilled, (state, action) => {
            let newState = {
                productRating: state.productRating,
                userRating: action.payload.rating,
            }
            return newState
        })
})

export default ratingReducer
