import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const orderUpdate = createAsyncThunk('updateOrder', async (token) => {
    try {
        let headers = { headers: { Authorization: `Bearer ${token}` } }
        const response = await axios.put(
            `http://localhost:8000/api/checkout/order/:id`,
            headers
        )
        return {
            status: response.status,
            data: response.data,
        }
    } catch (error) {
        return {
            status: error.response.status,
            data: error.response.data,
        }
    }
})

const adminController = { orderUpdate }

export default adminController
