import categoryReducer from './categories/reducers'
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/reducers'

const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer
    },
})

export default store
