import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleApiError } from '../../utilis/errorHandling';
import MangeJobAdmin from '../../services/Admin/ManageJobs';
import { convertDateFormat } from '../../utilis/convertDateStamp';







export const GetjobsAdmin = createAsyncThunk('admin/get-jobs-all-by-admin', async (_) => {

    try {
        console.log("get jobsss consolee")
        const data = await MangeJobAdmin.ManageJob()
        console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        console.log(error);
        handleApiError(error)
    }
});











const AdminJobs = createSlice({
    name: 'AdminJobs',
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

        builder.addCase(GetjobsAdmin.fulfilled, (state, { payload }) => {
            console.log(payload.data.jobs, "payloadd from getJobs admin")

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
                        title: job.employer[0].companyName,
                        address: job.jobLocation,
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
       

    }
});

export const { setUser } = AdminJobs.actions;


export default AdminJobs.reducer;
