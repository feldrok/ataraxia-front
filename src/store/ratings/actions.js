import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = process.env.REACT_APP_API_URL

const handleToken = () => {
    const BEARER_TOKEN = localStorage.getItem('token')

    let config = {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    }
    return config
}

const createRating = createAsyncThunk('rating/createRating', async (data) => {
    try {
        const response = await axios.post(
            `${API_URL}/rating`,
            data,
            handleToken()
        )
        return {
            rating: response.data,
            message: 'Rating creado',
        }
    } catch (error) {
        return {
            rating: null,
            message: error.response.data.message,
        }
    }
})

const getProductRating = createAsyncThunk(
    'rating/getProductRating',
    async (id) => {
        try {
            const response = await axios.get(
                `${API_URL}/rating/${id}`,
                handleToken()
            )
            return {
                rating: response.data,
                message: 'Rating encontrado',
            }
        } catch (error) {
            return {
                rating: null,
                message: error.response.data.message,
            }
        }
    }
)

const getUserRating = createAsyncThunk('rating/getUserRating', async (id) => {
    try {
        const response = await axios.get(
            `${API_URL}/rating/user/${id}`,
            handleToken()
        )
        return {
            rating: response.data,
            message: 'Rating encontrado',
        }
    } catch (error) {
        return {
            rating: null,
            message: error.response.data.message,
        }
    }
})

const ratingActions = {
    createRating,
    getProductRating,
    getUserRating,
}

export default ratingActions
