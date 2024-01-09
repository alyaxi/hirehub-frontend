import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertDateFormat } from '../../utilis/convertDateStamp';
import employerServices from '../../services/Employer/EmployerServices';
import { handleApiError } from '../../utilis/errorHandling';
import ManageCandidate from '../../services/Employer/ManageCandidate';





export const getAppliedJobByCandidate = createAsyncThunk('employer/get-applied-jobs-by-candidate', async (_) => {

    try {
        console.log("getemployererrrbyidddd consolee")
        const data = await ManageCandidate.getAppliedJobByCandidate()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});


export const changeAppliedJobStatusEmployer = createAsyncThunk('employer/change-status-applied-jobs-employer', async ({id, statusCheck}) => {

    try {
        console.log("change status job sliceeeee", id, statusCheck)
        const data = await ManageCandidate.changeStatusAppliedJobByEmployer(id, statusCheck)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});






const manageCandidate = createSlice({
    name: 'manage-candidate',
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

        builder.addCase(getAppliedJobByCandidate.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from view employer by admin");
            const appliedJobs1 = payload?.data?.appliedJobs
            const newAppliedJobs = []
            for (let i = 0; i < appliedJobs1?.length; i++) {
                console.log("start consoleee")
                const jobs = appliedJobs1[i];
                const jobTitle = jobs?.Job[0]?.position
                const salary = jobs?.Job[0]?.salary
                const experience = jobs?.Job[0]?.experience;
                const name = jobs.user[0].name
                const candidate = jobs.candidate[0]
                console.log(jobs,"start consoleee")
            


                newAppliedJobs.push({
                    id: jobs._id,
                    candidateId: jobs.candidateId,
                    employerId: jobs.employerId,
                    jobId: jobs.jobId,
                    status: jobs.applicationStatus,
                    stage: jobs.appicaionStage,
                    jobTitle,
                    salary,
                    name,
                    experience,
                    candidate,
                    eligibility: "Yes"

                });

                console.log({ newAppliedJobs });
                state.jobs = newAppliedJobs
            }



        })
        builder.addCase(changeAppliedJobStatusEmployer.fulfilled, (state, {payload}) => {
            state.reload = true
        })
     


    }
});

export const { setUser } = manageCandidate.actions;


export default manageCandidate.reducer;
