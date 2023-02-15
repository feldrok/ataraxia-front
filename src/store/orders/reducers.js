import { createReducer } from '@reduxjs/toolkit'
import orderActions from './actions'


const { getUserOrders, getOrders } = orderActions

const initialState = {
    orders: [],
    message: '',
}

const orderReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getUserOrders.fulfilled, (state, action) => {
            let newState = {
                orders: action.payload.orders,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            let newState = {
                orders: action.payload.orders,
                message: action.payload.message,
            }
            return newState
        })
})



export default orderReducer