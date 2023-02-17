import { createReducer } from '@reduxjs/toolkit'
import orderActions from './actions'

const { getUserOrders, getOrders, createOrder, getOrder } = orderActions

const initialState = {
    orders: [],
    order: [],
    message: '',
}

const orderReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getUserOrders.fulfilled, (state, action) => {
            let newState = {
                orders: action.payload.orders,
                order: state.order,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            let newState = {
                orders: action.payload.orders,
                order: state.order,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(createOrder.fulfilled, (state, action) => {
            let newState = {
                orders: state.orders,
                order: action.payload.order,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getOrder.fulfilled, (state, action) => {
            let newState = {
                orders: state.orders,
                order: action.payload.order,
                message: action.payload.message,
            }
            return newState
        })
})

export default orderReducer
