import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleApiError } from '../../utilis/errorHandling';
import Questionnaire from '../../services/Employer/ManageQuestionaire';







export const GetQuestionnaire = createAsyncThunk('employer/get-questionaaire', async (_) => {

    try {
        console.log("get jobsss consolee")
        const data = await Questionnaire.GetQuestionnaire()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const CreateQuestionnairee = createAsyncThunk('employer/create-questionaaire', async (updatedData) => {

    try {
        console.log("get jobsss consolee")
        const data = await Questionnaire.CreateQuestionaire(updatedData)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});


export const UpdateQuestionnaire = createAsyncThunk('employer/update-questionaaire', async (updatedData) => {

    try {
     
        const data = await Questionnaire.UpdateQuestionaire(updatedData)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});


export const DeleteQuestionnaire = createAsyncThunk('employer/delete-questionaaire', async (id) => {

    try {
        console.log("get jobsss consolee")
        const data = await Questionnaire.deleteQuestionaire(id)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});











const ManageQuestionaireSlice = createSlice({
    name: 'ManageQuestionaireSlice',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        data: [],
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {
        builder.addCase(GetQuestionnaire.fulfilled, (state, { payload }) => {
            // Add the new job to existing jobs array
            state.data = payload.data.questionnaires
            state.reload = false

        })
        builder.addCase(CreateQuestionnairee.fulfilled, (state, { payload }) => {
            // Add the new job to existing jobs array

            state.reload = true

        })
        builder.addCase(UpdateQuestionnaire.fulfilled, (state, { payload }) => {
            // Add the new job to existing jobs array

            state.reload = true

        })
        builder.addCase(DeleteQuestionnaire.fulfilled, (state, { payload }) => {
            // Add the new job to existing jobs array

            state.reload = true

        })




    }
});

export const { setUser } = ManageQuestionaireSlice.actions;


export default ManageQuestionaireSlice.reducer;
