import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = process.env.REACT_APP_API_URL

const handleToken = () => {
    const BEARER_TOKEN = localStorage.getItem('token')
    if (BEARER_TOKEN) {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        }
        return config
    }
}

const createCart = createAsyncThunk('cart/createCart', async ({ id, data }) => {
    try {
        const response = await axios.post(
            `${API_URL}/cart/${id}`,
            data,
            handleToken()
        )
        return {
            cart: response.data,
            message: 'Carro creado satisfactoriamente',
        }
    } catch (error) {
        console.log(error)
        return {
            cart: null,
            message: error.message,
        }
    }
})

const getCart = createAsyncThunk('cart/getCart', async (id) => {
    try {
        const response = await axios.get(`${API_URL}/cart/${id}`, handleToken())
        return {
            cart: response.data,
            message: 'Carro cargado satisfactoriamente',
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
    async ({ id, product }) => {
        try {
            const response = await axios.put(
                `${API_URL}/cart/add/${id}`,
                product,
                handleToken()
            )
            return {
                cart: response.data,
                message: 'Producto agregado al carro',
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
    async ({ id, product }) => {
        try {
            const response = await axios.put(
                `${API_URL}/cart/update/${id}`,
                product,
                handleToken()
            )
            return {
                cart: response.data,
                message: 'Cart updated successfully',
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

const deleteItem = createAsyncThunk(
    'cart/deleteItem',
    async ({ id, product_id }) => {
        try {
            const response = await axios.put(
                `${API_URL}/cart/delete/${id}`,
                product_id,
                handleToken()
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

const emptyCart = createAsyncThunk('cart/emptyCart', async () => {
    try {
        const response = await axios.put(`${API_URL}/cart/empty`, handleToken())
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
