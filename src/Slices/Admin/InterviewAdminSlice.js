import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminServices from '../../services/Admin/adminServices';
import { handleApiError } from '../../utilis/errorHandling';
import { convertDateFormat } from '../../utilis/convertDateStamp';
import interviewsByAdmin from '../../services/Admin/InterviewsAdmin';





export const ViewInterviewAdmin = createAsyncThunk('admin/view-interviews', async (ids) => {

    try {
        console.log("dataaaaa getting interview", ids)
        const data = await interviewsByAdmin.viewInterviewsByAdmin(ids)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        // console.log(error);
        handleApiError(error)
    }
});



const ViewInterviewsAdmin = createSlice({
    name: 'ViewInterviewsAdmin',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        interviewsbyadmin: [],
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(ViewInterviewAdmin.fulfilled, (state, { payload }) => {
            // console.log(payload, "payloadd from getting employer by admin");
            state.interviewsbyadmin = payload.data.interviews
            // state.reload = true
            
        })
        


    }
});

export const { setUser } = ViewInterviewsAdmin.actions;


export default ViewInterviewsAdmin.reducer;
