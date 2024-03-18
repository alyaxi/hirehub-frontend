import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jobServices from '../../services/Employer/ManageJobs';
import { handleApiError } from '../../utilis/errorHandling';
import { convertDateFormat } from '../../utilis/convertDateStamp';






export const GetjobsEmployer = createAsyncThunk('employer/get-jobs-by-employer', async (_) => {

    try {
        console.log("-- get jobsss consolee")
        const data = await jobServices.jobListing()
        console.log(data, "-- dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});


export const AddjobsEmployer = createAsyncThunk('employer/add-jobs-by-employer', async (addJob) => {

    try {
        console.log("add job employer", addJob)
        const data = await jobServices.addJobs(addJob)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});


export const ChangeStatusJob = createAsyncThunk('employer/update-jobs-by-employer/', async ({id,status}) => {

    try {
        console.log("add job employer", status, id)
        const data = await jobServices.StatusChange(id, status)
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
        throw error
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

            const modifiedJobs = payload?.data?.jobs.map((job) => {
                console.log(job, "jobssssssssss")
                return {
                    id: job._id,
                    positionTitle: job.positionTitle,
                    applicationCount: job.applicationCount,
                    noOfOpenings: job.noOfOpenings,
                    expirationDate: job.expirationDate,
                    salary: job.salary.value,
                    jobStatus: job.jobStatus,
                    employer: {
                        title: job.employerId[0].companyName,
                        address: job.jobLocation,
                        logo: job?.employerId[0]?.logo
                    },
                    postedDate: job.postedDate,
                    qualification: job.qualification,
                    responsibilities:job.qualification,
                    skills: job.skills,
                    benefits: job.benefits,
                    aboutPosition: job.aboutPosition,
                    shortSummery: [
                        { title: "industry", value: job.industry },
                        { title: "gender", value: job.gender },
                        { title: "package", value: job.salary.value + ' ' + job.salary.rate },
                        { title: "minimum Education", value: job.minimumEducation },
                        { title: "total Positions", value: job.noOfOpenings },
                        { title: "career Level", value: job.careerLevel },
                        { title: "job Shift", value: job.jobShift },
                        { title: "experience", value: job.experience },
                        { title: "job Type", value: job.jobType },
                        { title: "apply Before", value: convertDateFormat(job.expirationDate) },
                        { title: "department", value: job.department },
                        { title: "posting Date", value: job.postedDate },
                        { title: "job Location", value: job.jobLocation },
                    ],
                };
            });
            console.log(modifiedJobs, "modified jobsss")
            state.jobs = modifiedJobs
            state.reload =false




        })
        builder.addCase(AddjobsEmployer.fulfilled, (state, { payload }) => {
            // Add the new job to existing jobs array

        })
        builder.addCase(ChangeStatusJob.fulfilled, (state, { payload }) => {
            state.reload = true

            
        })



    }
});

export const { setUser } = JobsEmployer.actions;


export default JobsEmployer.reducer;
