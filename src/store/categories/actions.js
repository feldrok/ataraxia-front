import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = process.env.REACT_APP_API_URL

const getCategories = createAsyncThunk('categories/getCategories', async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`)
        return {
            categories: response.data,
            message: "Categories fetched successfully"
        }
    } catch (error) {
        return {
            categories: [],
            message: error.message
        }
    }
})

const categoryActions = {
    getCategories
}

export default categoryActions