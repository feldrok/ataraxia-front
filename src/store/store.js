import categoryReducer from './categories/reducers'
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/reducers'
import userReducer from './users/reducers'

const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        user: userReducer 
    },
})

export default store
