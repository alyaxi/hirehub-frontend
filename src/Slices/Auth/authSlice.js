// authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { handleApiError } from '../../utilis/errorHandling';
import authService from '../../services/Auth/authServices';
// import {history} from "react-router-dom"
import { redirect } from "react-router-dom";




export const login = createAsyncThunk('auth/login', async (credentials, { dispatch }) => {
    try {
        const user = await authService.login(credentials);
        console.log({ user });
        return user
    } catch (error) {
        // Handle login error
        handleApiError(error)
    }
});

export const register = createAsyncThunk('auth/register', async (credentials, { dispatch }) => {
    try {
        const data = await authService.register(credentials);
        return data
    } catch (error) {
        // Handle login error
        handleApiError(error)
    }
});

export const forgetPassword = createAsyncThunk('auth/forget-password', async (credentials, { dispatch }) => {
    try {
        const data = await authService.forgetPassword(credentials);
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const changePasswordByUser = createAsyncThunk('auth/change-password', async (credentials, { dispatch }) => {
    try {
        const data = await authService.changePassword(credentials);
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const recoverPasswordOutside = createAsyncThunk('auth/recover-password', async ({token, password}) => {
    try {
        const data = await authService.recoverPassword(token, password);
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user")

        },

    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {

            localStorage.setItem("user", JSON.stringify(action.payload.data))
            const data = action.payload.data
            console.log(data, "payloaddddd");
            state.user = data
            state.role = data.Role
            state.isAuthenticated = true
            state.error = null

        })
            builder.addCase(login.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                localStorage.removeItem("user")
                state.error = action.error.message;
            });
            builder.addCase(register.fulfilled, (state, action) => {
         
                localStorage.setItem("user", JSON.stringify(action.payload.data.user))
                const data = action.payload.data
                console.log(data, "payloaddddd");
                state.user = data?.user
                state.role = data?.user?.role
                state.isAuthenticated = true
                state.error = null
                
            })
            builder.addCase(forgetPassword.fulfilled, (state, payload) => {
                console.log(payload, "payloadd from forgot password");
            })
            builder.addCase(recoverPasswordOutside.fulfilled, (state, payload) => {
                console.log(payload, "payloadd from forgot password");
            })
            
            
    }
});

export const { setUser, logout } = authSlice.actions;


export default authSlice.reducer;
