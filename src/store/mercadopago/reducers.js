import { createReducer } from '@reduxjs/toolkit'
import mpActions from './actions'

const { createOrderMp } = mpActions

const initialState = {
    ordersMp: [],
    message: '',
}

const orderMPReducer = createReducer(initialState, (builder) => {
    builder.addCase(createOrderMp.fulfilled, (state, action) => {
        let newState = {
            orders: action.payload.ordersMp,
            message: action.payload.message,
        }
        return newState
    })
})

export default orderMPReducer
