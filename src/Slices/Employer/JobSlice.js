import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jobServices from '../../services/Employer/JobServices';
import { handleApiError } from '../../utilis/errorHandling';
import { convertDateFormat } from '../../utilis/convertDateStamp';






export const GetjobsEmployer = createAsyncThunk('employer/get-jobs-by-employer', async (_) => {

    try {
        console.log("get jobsss consolee")
        const data = await jobServices.jobListing()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});


export const AddjobsEmployer = createAsyncThunk('employer/add-jobs-by-employer', async (data) => {

    try {
        console.log("add job employer", data)
        const data = await jobServices(data)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});






const JobsEmployer = createSlice({
    name: 'JobsEmployer',
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

        builder.addCase(GetjobsEmployer.fulfilled, (state, { payload }) => {
            console.log(payload.data.jobs, "payloadd from getJobs employer")
            // const jobsdata = payload.data.jobs.map((i, job) => {
            //     return {
            //         id: job.id,
            //         positionTitle: job.position,
            //         noOfOpenings: job.noOfOpening,
            //         expirationDate: convertDateFormat(job.expirationDate),
            //         salary: job.salary.salary,
            //         jobStatus: job.jobStatus,
            //         employer: {
            //             title: job[i].employerId.companyName,
            //             address: "abc"
            //         },
            //         postedDate: job.postedDate,
            //         applicantCounts: job.applicationCount,
            //         shortSummery: [
            //             { title: "industry", value: job.companyIndustry },
            //             { title: "gender", value: job.gender },
            //             { title: "package", value: job.salary.value + ' ' + job.salary.rate },
            //             { title: "minimum Education", value: job.minimumEducation },
            //             { title: "total Positions", value: job.noOfOpenings },
            //             { title: "career Level", value: job.careerLevel },
            //             { title: "job Shift", value: job.jobShift },
            //             { title: "experience", value: job.experience },
            //             { title: "job Type", value: job.jobType },
            //             { title: "apply Before", value: job.expirationDate },
            //             { title: "department", value: job.department },
            //             { title: "posting Date", value: job.postedDate },
            //             { title: "job Location", value: job.jobLocation },
            //         ],
            //     };
            // });





        })
        builder.addCase(AddjobsEmployer.fulfilled, (state, { payload }) => {

        })



    }
});

export const { setUser } = JobsEmployer.actions;


export default JobsEmployer.reducer;
