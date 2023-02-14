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

const createAddress = createAsyncThunk('user/createAddress', async (data) => {
    try {
        const response = await axios.post(
            `${API_URL}/address`,
            data,
            handleToken()
        )
        return {
            address: response.data,
            message: 'Dirección creada correctamente',
        }
    } catch (error) {
        console.log(error)
        return {
            address: null,
            message: error.message,
        }
    }
})

const getUserAddresses = createAsyncThunk('user/getUserAddresses', async () => {
    try {
        const response = await axios.get(`${API_URL}/address`, handleToken())
        return {
            addresses: response.data,
            message: 'Direcciones cargadas correctamente',
        }
    } catch (error) {
        return {
            addresses: [],
            message: error.message,
        }
    }
})

const getAddress = createAsyncThunk('user/getAddress', async (id) => {
    try {
        const response = await axios.get(
            `${API_URL}/address/${id}`,
            handleToken()
        )
        return {
            address: response.data,
            message: 'Dirección cargada correctamente',
        }
    } catch (error) {
        return {
            address: {},
            message: error.message,
        }
    }
})

const addressActions = {
    createAddress,
    getUserAddresses,
    getAddress,
}

export default addressActions
