import { createReducer } from '@reduxjs/toolkit'
import mpActions from './actions'

const { createOrderMp, getOrder } = mpActions

const initialState = {
    ordersMp: [],
    message: '',
}

const orderMPReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createOrderMp.fulfilled, (state, action) => {
            let newState = {
                ordersMp: action.payload.ordersMp,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getOrder.fulfilled, (state, action) => {
            let newState = {
                ordersMp: action.payload.ordersMp,
                message: action.payload.message,
            }
            return newState
        })
})

export default orderMPReducer
