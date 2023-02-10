import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = process.env.REACT_APP_API_URL

const createCart = createAsyncThunk('cart/createCart', async (data) => {
    try {
        const response = await axios.post(`${API_URL}/cart`, data)
        return {
            cart: response.data,
            message: 'Cart created successfully',
        }
    } catch (error) {
        return {
            cart: null,
            message: error.message,
        }
    }
})

const getCart = createAsyncThunk('cart/getCart', async (id) => {
    try {
        const response = await axios.get(`${API_URL}/cart/${id}`)
        return {
            cart: response.data,
            message: 'Cart fetched successfully',
        }
    } catch (error) {
        return {
            cart: null,
            message: error.message,
        }
    }
})

const addProductToCart = createAsyncThunk(
    'cart/addProductToCart',
    async ({ id, products }) => {
        try {
            const response = await axios.put(
                `${API_URL}/cart/add/${id}`,
                products
            )
            console.log(response)
            return {
                cart: response.data,
                message: 'Product added to cart successfully',
            }
        } catch (error) {
            console.log(error)
            return {
                cart: null,
                message: error.message,
            }
        }
    }
)

const updateCart = createAsyncThunk(
    'cart/updateCart',
    async ({ id, products }) => {
        try {
            const response = await axios.put(
                `${API_URL}/cart/update/${id}`,
                products
            )
            return {
                cart: response.data,
                message: 'Cart updated successfully',
            }
        } catch (error) {
            return {
                cart: null,
                message: error.message,
            }
        }
    }
)

const deleteItem = createAsyncThunk(
    'cart/deleteItem',
    async ({ id, product_id }) => {
        try {
            const response = await axios.put(
                `${API_URL}/cart/delete/${id}`,
                product_id
            )
            return {
                cart: response.data,
                message: 'Item deleted successfully',
            }
        } catch (error) {
            return {
                cart: null,
                message: error.message,
            }
        }
    }
)

const emptyCart = createAsyncThunk('cart/emptyCart', async (id) => {
    try {
        const response = await axios.put(`${API_URL}/cart/empty/${id}`)
        return {
            cart: response.data,
            message: 'Cart emptied successfully',
        }
    } catch (error) {
        return {
            cart: null,
            message: error.message,
        }
    }
})

const cartActions = {
    createCart,
    getCart,
    addProductToCart,
    updateCart,
    deleteItem,
    emptyCart,
}

export default cartActions
