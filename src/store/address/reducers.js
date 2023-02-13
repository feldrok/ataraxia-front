import addressActions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const { createAddress, getUserAddresses, getAddress } = addressActions

const initialState = {
    addresses: [],
    address: [],
    message: null,
}

const addressReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getUserAddresses.fulfilled, (state, action) => {
            let newState = {
                addresses: action.payload.addresses,
                address: state.address,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(createAddress.fulfilled, (state, action) => {
            let newState = {
                addresses: state.addresses,
                address: action.payload.address,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getAddress.fulfilled, (state, action) => {
            let newState = {
                addresses: state.addresses,
                address: action.payload.address,
                message: action.payload.message,
            }
            return newState
        })
})

export default addressReducer
