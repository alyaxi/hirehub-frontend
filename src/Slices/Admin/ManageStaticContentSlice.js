import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import ManageContentStatic from '../../services/Admin/ManageStaticContentService';
import { handleApiError } from '../../utilis/errorHandling';





export const updateFaqs = createAsyncThunk('admin/update-faqs', async (updateData) => {

    try {
        // console.log("getemployererrrbyidddd consolee")
        const data = await ManageContentStatic.UpdateFaqs(updateData)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const ViewFaqs = createAsyncThunk('admin/get-faqs', async (_) => {

    try {
        // console.log("getemployererrrbyidddd consolee")
        const data = await ManageContentStatic.GetFaqs()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});


export const updateTerms = createAsyncThunk('admin/update-terms', async (updateData) => {

    try {
        console.log("updated Faqssss", updateData)
        const data = await ManageContentStatic.UpdateTerms(updateData)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const ViewTerms = createAsyncThunk('admin/view-terms', async (_) => {

    try {
        // console.log("getemployererrrbyidddd consolee")
        const data = await ManageContentStatic.GetTerms()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});











const ManageStaticContent = createSlice({
    name: 'ManageStaticContent',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        faq: {},
        terms: {},
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(updateFaqs.fulfilled, (state, { payload }) => {
            state.reload = true

        })
        builder.addCase(ViewFaqs.fulfilled, (state, { payload }) => {
            state.faq = payload.data.faqs
            state.reload = false

        })
        
        builder.addCase(updateTerms.fulfilled, (state, { payload }) => {
            state.reload = true

        })
        builder.addCase(ViewTerms.fulfilled, (state, { payload }) => {
            state.terms = payload.data.terms
            state.reload = false

        })


    }


});

export const { setUser } = ManageStaticContent.actions;


export default ManageStaticContent.reducer;
