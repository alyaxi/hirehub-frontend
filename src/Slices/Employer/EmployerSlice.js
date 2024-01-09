import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertDateFormat } from '../../utilis/convertDateStamp';
import employerServices from '../../services/Employer/EmployerServices';
import { handleApiError } from '../../utilis/errorHandling';





export const getEmployerById = createAsyncThunk('employer/get-detail-by-id', async (_) => {

    try {
        console.log("getemployererrrbyidddd consolee")
        const data = await employerServices.getEmployerDetailById()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const UpdateEmployerById = createAsyncThunk('employer/update-detail-by-id', async (formDataToSend) => {

    try {
        console.log("updateEmployererrrbyidddd consolee", formDataToSend)
      
        
        const data = await employerServices.UpdateEmployerDetailById(formDataToSend)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});






const employerSlices = createSlice({
    name: 'employer',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        employer: {},
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(getEmployerById.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from view employer by admin");
            state.employer = payload?.data?.employer


        })
        builder.addCase(UpdateEmployerById.fulfilled, (state, { payload }) => {
            state.reload = true
            console.log(payload, "payloadd from change status employer by admin");
            state.employer = payload?.data?.employer
        })


    }
});

export const { setUser } = employerSlices.actions;


export default employerSlices.reducer;
