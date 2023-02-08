/* import categoryActions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const { getCategories } = categoryActions

const initialState = {
    categories: [],
    message: null,
}

const categoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCategories.fulfilled, (state, action) => {
            let newState = {
                categories: action.payload.categories,
                message: action.payload.message
            }
            return newState
        })
})

export default categoryReducer */