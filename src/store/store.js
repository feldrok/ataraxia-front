import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/reducers'

const store = configureStore({
    reducer: {
        products: productReducer
    },
})

export default store
