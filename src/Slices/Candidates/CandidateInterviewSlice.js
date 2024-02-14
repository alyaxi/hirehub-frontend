import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleApiError } from '../../utilis/errorHandling';
import CandidateinterviewSchdule from '../../services/Candidates/CandidateInterviewService';






export const getInterviewsCandidate = createAsyncThunk('candidate/get-interview-schduled', async (_) => {

    try {

        const data = await CandidateinterviewSchdule.getInterviews()
        // console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});






const CandidateInterviews = createSlice({
    name: 'CandidateInterviews',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        interviews: [],
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(getInterviewsCandidate.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from getting interview interview by employer");
            state.interviews = payload?.data?.interviews            
            state.reload = false
        })



    }
});

export const { setUser } = CandidateInterviews.actions;


export default CandidateInterviews.reducer;
