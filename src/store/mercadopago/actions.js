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

const createOrderMp = createAsyncThunk('orderMp/CreateOrders', async (cart) => {
    try {
        const response = await axios.post(`${API_URL}/payment`, cart, 
        handleToken())
        return {
            ordersMp: response.data,
            message: response.data.message,
        }
    } catch (error) {
        return {
            ordersMp: null,
            message: error.response.data.message,
        }
    }
})

const mpActions = {
    createOrderMp,
}

export default mpActions