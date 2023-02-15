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

const addUser = createAsyncThunk('addUser', async (user) => {
    try {
        const response = await axios.post(`${API_URL}/users/signup`, user)
        return {
            user: response.data,
            message: 'Usuario creado con éxito',
        }
    } catch (error) {
        return {
            user: null,
            message: error.response,
        }
    }
})

const verifyUser = createAsyncThunk(
    'verifyUser',
    async ({ user_id, verify_code }) => {
        try {
            console.log(user_id, verify_code)
            const response = await axios.get(`${API_URL}/users/verify_code`, {
                params: { user_id, verify_code },
            })
            return {
                response: {
                    message: 'Usuario verificado!',
                },
            }
        } catch (error) {
            return {
                message: 'Error al crear usuario!',
            }
        }
    }
)

const signIn = createAsyncThunk('signIn', async (user) => {
    try {
        const response = await axios.post(
            `${API_URL}/users/signin`,
            user,
            handleToken()
        )
        return {
            user: response.data,
            message: 'Logueado con éxito',
        }
    } catch (error) {
        return {
            user: null,
            message: error.response.data.response,
        }
    }
})

const signInToken = createAsyncThunk('signInToken', async (token) => {
    try {
        const response = await axios.post(
            `${API_URL}/users/token`,
            token,
            handleToken()
        )
        return {
            user: response.data,
            message: 'Usuario autenticado',
        }
    } catch (error) {
        return {
            user: null,
            message: 'Error al autenticar usuario',
        }
    }
})

const signout = createAsyncThunk('signout', async () => {
    try {
        const response = await axios.get(
            `${API_URL}/users/signout`,
            handleToken()
        )
        return {
            user: response.data,
            message: 'Se ha cerrado sesión',
        }
    } catch (error) {
        return {
            user: null,
            message: error.response.data.response,
        }
    }
})

const getProfile = createAsyncThunk('getProfile', async () => {
    try {
        const response = await axios.get(
            `${API_URL}/users/profile`,
            handleToken()
        )
        return {
            user: response.data,
            message: 'Perfil actualizado',
        }
    } catch (error) {
        return {
            user: null,
            message: error.response.data.response,
        }
    }
})

const userActions = {
    addUser,
    signIn,
    signInToken,
    verifyUser,
    signout,
    getProfile,
}

export default userActions
