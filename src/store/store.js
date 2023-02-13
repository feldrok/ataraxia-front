import cartReducer from './carts/reducers'
import categoryReducer from './categories/reducers'
import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './orders/reducers'
import productReducer from './products/reducers'
import userReducer from './users/reducers'

const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        cart: cartReducer,
        user: userReducer,
        orders: orderReducer,
    },
})

export default store
