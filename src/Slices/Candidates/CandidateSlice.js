import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CandidateService from '../../services/Candidates/CandidateService';
import { handleApiError } from '../../utilis/errorHandling';





export const getCandidate = createAsyncThunk('candidate/get-candidate', async (_) => {

    try {
        // console.log("getemployererrrbyidddd consolee")
        const data = await CandidateService.getCandidateData()
        // console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const UpdateCanidateData = createAsyncThunk('candidate/update-candidate', async (formDataToSend) => {

    try {
        // console.log("updateEmployererrrbyidddd consolee", formDataToSend)
      
        
        const data = await CandidateService.UpdateCandidateData(formDataToSend)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const addProject = createAsyncThunk('candidate/add-project', async (formDataToSend) => {

    try {
        const data = await CandidateService.addprojectService(formDataToSend)
        // console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const addExperience = createAsyncThunk('candidate/add-experience', async ({experiencesData}) => {

    try {
        console.log(experiencesData, "dataaaaa")
        const data = await CandidateService.addExperience(experiencesData)
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});






const CandidateSlice = createSlice({
    name: 'candidate',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        candidate: {},
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(getCandidate.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from view candidate");
            state.candidate = payload?.data?.candidate
            state.reload = false


        })
        builder.addCase(UpdateCanidateData.fulfilled, (state, { payload }) => {
            state.reload = true
            console.log(payload, "payloadd from candidate updtate");
            // state.candidate = payload?.data?.candidate
        })
        builder.addCase(addProject.fulfilled, (state, { payload }) => {
            state.reload = true
            console.log(payload, "payloadd from candidate add project");
            // state.candidate = payload?.data?.candidate
        })
        builder.addCase(addExperience.fulfilled, (state, { payload }) => {
            state.reload = true
            console.log(payload, "payloadd from candidate add experience");
            // state.candidate = payload?.data?.candidate
        })


    }
});

export const { setUser } = CandidateSlice.actions;


export default CandidateSlice.reducer;
