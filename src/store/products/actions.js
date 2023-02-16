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

const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product) => {
        try {
            const response = await axios.post(
                `${API_URL}/products`,
                product,
                handleToken()
            )
            return {
                product: response.data,
                message: 'Producto creado con éxito',
            }
        } catch (error) {
            console.log(error)
            return {
                product: error.response.data.response,
                message: 'Error al crear el producto',
            }
        }
    }
)

const getProducts = createAsyncThunk(
    'products/getProducts',
    async (category_id = '') => {
        try {
            const response = await axios.get(
                `${API_URL}/products?category_id=${category_id}`
            )
            return {
                products: response.data,
                message: 'Products fetched successfully',
            }
        } catch (error) {
            return {
                products: [],
                message: error.message,
            }
        }
    }
)

const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id) => {
        try {
            const response = await axios.get(`${API_URL}/products/${id}`)
            return {
                product: response.data,
                message: 'Product fetched successfully',
            }
        } catch (error) {
            return {
                product: {},
                message: error.message,
            }
        }
    }
)

const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async ({ id, product }) => {
        try {
            const response = await axios.put(
                `${API_URL}/products/${id}`,
                product,
                handleToken()
            )
            return {
                product: response.data,
                message: 'Producto actualizado con éxito',
            }
        } catch (error) {
            console.log(error)
            return {
                product: error.response.data,
                message: 'Error al actualizar el producto',
            }
        }
    }
)

const productActions = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
}

export default productActions
