import cartReducer from './carts/reducers'
import categoryReducer from './categories/reducers'
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/reducers'
import userReducer from './users/reducers'

const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        user: userReducer,
        cart: cartReducer
    },
})

export default store
