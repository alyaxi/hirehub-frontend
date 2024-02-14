import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleApiError } from '../../utilis/errorHandling';
import interviewSchdule from '../../services/Employer/InterviewSchdule';





export const addInterview = createAsyncThunk('employer/make-interview-schdule', async (formDataToSend) => {

    try {
        console.log("updateEmployererrrbyidddd consolee", formDataToSend)

        const data = await interviewSchdule.addinterviewSchdule(formDataToSend)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const getInterview = createAsyncThunk('employer/get-interview-schdule', async (_) => {

    try {
        // console.log("updateEmployererrrbyidddd consolee")

        const data = await interviewSchdule.getInterviewSchdule()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});






const interviewSchule = createSlice({
    name: 'interviewSchule',
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

        builder.addCase(addInterview.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from view interview by employer");
            state.reload = true
        })
        builder.addCase(getInterview.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from getting interview interview by employer");
            state.interviews = payload?.data?.savedInterviews            
            state.reload = false
        })



    }
});

export const { setUser } = interviewSchule.actions;


export default interviewSchule.reducer;
