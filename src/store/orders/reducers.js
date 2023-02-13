import { createReducer } from '@reduxjs/toolkit'
import orderActions from './actions'

const { getUserOrders } = orderActions

const initialState = {
    orders: [],
    message: '',
}

const orderReducer = createReducer(initialState, (builder) => {
    builder.addCase(getUserOrders.fulfilled, (state, action) => {
        let newState = {
            orders: action.payload.orders,
            message: action.payload.message,
        }
        return newState
    })
})


export default orderReducer