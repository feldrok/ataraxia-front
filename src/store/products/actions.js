import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = process.env.REACT_APP_API_URL

const getProducts = createAsyncThunk('products/getProducts', async (category_id = "") => {
    try {
        const response = await axios.get(`${API_URL}/products?category_id=${category_id}`)
        return {
            products: response.data,
            message: "Products fetched successfully"
        }
    } catch (error) {
        return {
            products: [],
            message: error.message
        }
    }
})

const getProductById = createAsyncThunk('products/getProductById', async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`)
        return {
            product: response.data,
            message: "Product fetched successfully"
        }
    } catch (error) {
        return {
            product: {},
            message: error.message
        }
    }
})

const productActions = {
    getProducts,
    getProductById
}

export default productActions