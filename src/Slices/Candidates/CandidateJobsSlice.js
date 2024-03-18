import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CandidateJobs from "../../services/Candidates/CandidateJobsService";
import { handleApiError } from "../../utilis/errorHandling";
import { convertDateFormat } from "../../utilis/convertDateStamp";

export const getAllJobsforCandidate = createAsyncThunk(
  "candidate/get-all-jobs",
  async (_) => {
    try {
      const data = await CandidateJobs.getAlljobs();
      console.log(data, "dataaaaa");
      return data;
    } catch (error) {
      // Handle login error
      console.log(error);
      handleApiError(error);
    }
  }
);

export const applyforJob = createAsyncThunk(
  "candidate/apply-for-job",
  async (dataSend) => {
    try {
      console.log({ dataSend });
      const data = await CandidateJobs.ApplyForJob(dataSend);
      // console.log(data, "dataaaaa")
      return data;
    } catch (error) {
      // Handle login error
      console.log(error);
      handleApiError(error);
    }
  }
);

const CandidateJobsSlice = createSlice({
  name: "CandidateJobsSlice",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")),
    isAuthenticated: JSON.parse(localStorage.getItem("user")) ? true : false,
    role: null,
    error: null,
    allJobs: [],
    reload: false,
  },
  reducers: {
    setUser: (state, action) => {
      // state.user = action.payload;
      // state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobsforCandidate.fulfilled, (state, { payload }) => {
      console.log(
        payload,
        "payloadd from getting interview interview by employer"
      );
    //   state.allJobs = payload?.data?.jobs;

    //   aboutPosition;
    //   applicationCount;
    //   benefits;
    //   careerLevel;
    //   department;
    //   employer;
    //   employerId;
    //   experience;
    //   expirationDate;
    //   gender;
    //   industry;
    //   isDeleted;
    //   jobLocation;
    //   jobShift;
    //   jobStatus;
    //   jobType;
    //   minimumEducation;
    //   noOfOpenings;
    //   positionTitle;
    //   postedDate;
    //   qualification;
    //   responsibilities;
    //   salary;
    //   skills;
    //   _id;

      const modifiedJobs = payload?.data?.jobs.map((job) => {
          console.log(job, "jobssssssssss")
          return {
              _id: job._id,


                aboutPosition:job.aboutPosition,
                applicationCount:job.applicationCount,
                benefits:job.benefits,
                careerLevel:job.careerLevel,
                department:job.department,
                employer:job.employer,
                employerId:job.employerId,
                experience:job.experience,
                expirationDate:job.expirationDate,
                gender:job.gender,
                industry:job.industry,
                isDeleted:job.isDeleted,
                jobLocation:job.jobLocation,
                jobShift:job.jobShift,
                jobStatus:job.jobStatus,
                jobType:job.jobType,
                minimumEducation:job.minimumEducation,
                noOfOpenings:job.noOfOpenings,
                positionTitle:job.positionTitle,
                postedDate:job.postedDate,
                qualification:job.qualification,
                responsibilities:job.responsibilities,
                salary:job.salary,
                skills:job.skills,
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
            //   positionTitle: job.positionTitle,
            //   applicationCount: job.applicationCount,
            //   noOfOpenings: job.noOfOpenings,
            //   expirationDate: job.expirationDate,
            //   salary: job.salary.value,
            //   jobStatus: job.jobStatus,
            //   employer: {
            //       title: job.employerId[0].companyName,
            //       address: job.jobLocation,
            //       logo: job?.employerId[0]?.logo
            //   },
            //   postedDate: job.postedDate,
            //   qualification: job.qualification,
            //   responsibilities:job.qualification,
            //   skills: job.skills,
            //   benefits: job.benefits,
            //   aboutPosition: job.aboutPosition,
            //   shortSummery: [
            //       { title: "industry", value: job.industry },
            //       { title: "gender", value: job.gender },
            //       { title: "package", value: job.salary.value + ' ' + job.salary.rate },
            //       { title: "minimum Education", value: job.minimumEducation },
            //       { title: "total Positions", value: job.noOfOpenings },
            //       { title: "career Level", value: job.careerLevel },
            //       { title: "job Shift", value: job.jobShift },
            //       { title: "experience", value: job.experience },
            //       { title: "job Type", value: job.jobType },
            //       { title: "apply Before", value: convertDateFormat(job.expirationDate) },
            //       { title: "department", value: job.department },
            //       { title: "posting Date", value: job.postedDate },
            //       { title: "job Location", value: job.jobLocation },
            //   ],
          };
      });

      state.allJobs = modifiedJobs
      state.reload = false;
    });
    builder.addCase(applyforJob.fulfilled, (state, { payload }) => {
      console.log(
        payload,
        "payloadd from getting interview interview by employer"
      );
      // state.allJobs = payload?.data?.jobs
      state.reload = true;
    });
  },
});

export const { setUser } = CandidateJobsSlice.actions;

export default CandidateJobsSlice.reducer;
