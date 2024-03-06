import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CandidateJobs from '../../services/Candidates/CandidateJobsService';
import { handleApiError } from '../../utilis/errorHandling';






export const getAllJobsforCandidate = createAsyncThunk('candidate/get-all-jobs', async (_) => {

    try {

        const data = await CandidateJobs.getAlljobs()
        // console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const applyforJob = createAsyncThunk('candidate/apply-for-job', async (dataSend) => {

    try {
        console.log({dataSend})
        const data = await CandidateJobs.ApplyForJob(dataSend)
        // console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});









const CandidateJobsSlice = createSlice({
    name: 'CandidateJobsSlice',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        allJobs: [],
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(getAllJobsforCandidate.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from getting interview interview by employer");
            state.allJobs = payload?.data?.jobs
            state.reload = false
        })
        builder.addCase(applyforJob.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from getting interview interview by employer");
            // state.allJobs = payload?.data?.jobs
            state.reload = true
        })


    }
});

export const { setUser } = CandidateJobsSlice.actions;


export default CandidateJobsSlice.reducer;
