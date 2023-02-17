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

const createOrderMp = createAsyncThunk('orderMp/createOrders', async (cart) => {
    try {
        const response = await axios.post(
            `${API_URL}/payment`,
            cart,
            handleToken()
        )
        return {
            ordersMp: (window.location.href =
                response.data.response.body.init_point),
            message: response.data.message,
        }
    } catch (error) {
        return {
            ordersMp: null,
            message: error.response.data.message,
        }
    }
})

const getOrder = createAsyncThunk('orderMp/getOrder', async (id) => {
    try {
        const response = await axios.get(
            `${API_URL}/payment?preference_id=${id}`,
            handleToken()
        )
        console.log(response)
        return {
            ordersMP: { response: response.data },
            message: 'Orden de MP obtenida correctamente',
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
    getOrder,
}

export default mpActions
