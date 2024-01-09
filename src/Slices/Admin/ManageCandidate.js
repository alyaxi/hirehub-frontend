import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertDateFormat } from '../../utilis/convertDateStamp';
import employerServices from '../../services/Employer/EmployerServices';
import { handleApiError } from '../../utilis/errorHandling';
import ManageCandidate from '../../services/Employer/ManageCandidate';
import ManageCandidateAdmin from '../../services/Admin/ManageCandidateAdmin';





export const getAllAppliedJob = createAsyncThunk('admin/get-applied-jobs-by-all', async (_) => {

    try {
        console.log("getemployererrrbyidddd consolee")
        const data = await ManageCandidateAdmin.getAppliedAllJobs()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});


export const changeAppliedJobStatusAdmin = createAsyncThunk('admin/change-status-applied-jobs-by-all', async ({id, statusCheck}) => {

    try {
        console.log("change status job sliceeeee", id, statusCheck)
        const data = await ManageCandidateAdmin.changeStatusAppliedJobByAdmin(id, statusCheck)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});








const manageCandidateAdmin = createSlice({
    name: 'manage-candidate-admin',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        jobs: [],
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(getAllAppliedJob.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from view employer by admin");
            const alljobs = payload?.data?.getAllappliedJobs;
            console.log(alljobs, "alljobsssss");
            const newJobCandidates = []
            for (let i = 0; i < alljobs.length; i++) {
                
                const newAllJob = alljobs[i]
                const candidate = newAllJob.candidate[0]
                const name = newAllJob.user[0].name
                const email = newAllJob.user[0].email
                const JobTitle = newAllJob.Job[0].position
                const employerName = newAllJob.employer[0].companyName
                const experience = newAllJob.Job[0].experience
                const salary = newAllJob.Job[0].salary  


                newJobCandidates.push({
                    id: newAllJob.candidateId,
                    status: newAllJob.applicationStatus,
                    stage: newAllJob.appicaionStage,
                    employerId: newAllJob.employerId,
                    jobId: newAllJob.jobId,
                    candidate,
                    name,
                    email,
                    JobTitle,
                    employerName,
                    experience,
                    salary,
                    eligibility: "Yes"

                })

                console.log({newJobCandidates})
            }
            state.jobs = newJobCandidates

        })
        builder.addCase(changeAppliedJobStatusAdmin.fulfilled, (state, {payload}) => {
           state.reload =true
        })
    }
    
    
});

export const { setUser } = manageCandidateAdmin.actions;


export default manageCandidateAdmin.reducer;
