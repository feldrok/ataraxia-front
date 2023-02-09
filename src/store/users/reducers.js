import { createReducer } from "@reduxjs/toolkit";
import userActions from "./actions";

const { signIn, signInToken, addUser, verifyUser } = userActions

const initialState = {
    user: [],
    accessToken: "",
    message: ""
}

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(signIn.fulfilled, (state, action) => {
            let newState = {
                user: action.payload.user,
                accessToken: action.payload.token,
                message: action.payload.message
            }
            return newState
        })
        .addCase(signIn.rejected, (state, action) => {
            let newState = {
                message: "error"
            }
            return newState
        })
        .addCase(signInToken.fulfilled, (state, action) => {
            let newState = {
                user: action.payload.response.user,
                accessToken: localStorage.getItem("token"),
                message: action.payload.message
            }
            return newState
        })
        .addCase(signInToken.rejected, (state, action) => {
            let newState = {
                message: "error"
            }
            return newState
        })
        .addCase(addUser.fulfilled, (state, action) => {
            let newState = {
                user:action.payload.user,
                message: action.payload.message
            }
            return newState
        })
        .addCase(addUser.rejected, (state, action) => {
            let newState = {
                message: "Error!"
            }
            return newState
        })
        .addCase(verifyUser.fulfilled, (state, action) => {
            let newState = {
                message: action.payload.message
            }
            return newState
        })
        .addCase(verifyUser.rejected, (state, action) => {
            let newState = {
                message: action.payload.message
            }
            return newState
        })
})

export default userReducer