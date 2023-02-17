import addressReducer from './address/reducers'
import cartReducer from './carts/reducers'
import categoryReducer from './categories/reducers'
import { configureStore } from '@reduxjs/toolkit'
import orderMPReducer from './mercadopago/reducers'
import orderReducer from './orders/reducers'
import productReducer from './products/reducers'
import ratingReducer from './ratings/reducers'
import userReducer from './users/reducers'

const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        cart: cartReducer,
        user: userReducer,
        orders: orderReducer,
        address: addressReducer,
        orderMP: orderMPReducer,
        ratings: ratingReducer,
    },
})

export default store
