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
        console.log("updateEmployererrrbyidddd consolee", formDataToSend)


        const data = await CandidateService.UpdateCandidateData(formDataToSend)
        console.log("UpdateCandidateData dataaaaa", data)
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

export const addExperience = createAsyncThunk('candidate/add-experience', async (experiencesData) => {

    try {
        console.log(experiencesData, "dataaaaa")
        const data = await CandidateService.addExperienceService(experiencesData)

        console.log('addExperienceService data', data)

        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});
export const addSkills = createAsyncThunk('candidate/add-skills', async (skillsData) => {

    try {
        // console.log(skillsData, "dataaaaa")
        const data = await CandidateService.addSkillsService(skillsData)
        // console.log('addSkillsService data', data)
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const addEducation = createAsyncThunk('candidate/add-education', async (educationsData) => {

    try {
        // console.log(educationsData, "dataaaaa")
        const data = await CandidateService.addEducationService(educationsData)
        // console.log('addEductaionService data', data)
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});

export const addLanguage = createAsyncThunk('candidate/add-language', async (languagesData) => {

    try {
        console.log(languagesData, "dataaaaa")
        const data = await CandidateService.addLanguageService(languagesData)
        console.log('addSkillsService data', data)
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
        builder.addCase(addEducation.fulfilled, (state, { payload }) => {
            state.reload = true
            console.log(payload, "payloadd from candidate add experience");
            // state.candidate = payload?.data?.candidate
        })
        builder.addCase(addSkills.fulfilled, (state, { payload }) => {
            state.reload = true
            console.log(payload, "payloadd from candidate add experience");
            // state.candidate = payload?.data?.candidate
        })
        builder.addCase(addLanguage.fulfilled, (state, { payload }) => {
            state.reload = true
            console.log(payload, "payloadd from candidate add experience");
            // state.candidate = payload?.data?.candidate
        })


    }
});

export const { setUser } = CandidateSlice.actions;


export default CandidateSlice.reducer;