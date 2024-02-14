import { combineReducers } from 'redux';
import authSlice from '../Slices/Auth/authSlice';
import adminSlice from '../Slices/Admin/adminSlice';
import employerSlices from '../Slices/Employer/EmployerSlice';
import ManageCandidateEmployer from '../Slices/Employer/ManageCandidate';
import ManageCandidateAdmin from '../Slices/Admin/ManageCandidate';
import JobSlice from '../Slices/Employer/JobSlice';
import AdminJobs from '../Slices/Admin/AdminJobs';
import CandidateSlice from '../Slices/Candidates/CandidateSlice';
import interviewSchuleSlice from '../Slices/Employer/interviewSchuleSlice';
import CandidateInterviewSlice from '../Slices/Candidates/CandidateInterviewSlice';


const rootReducer = combineReducers({
  auth: authSlice,
  admin: adminSlice,
  employer: employerSlices,
  manageCandidate: ManageCandidateEmployer,
  manageCandidateAdmin:ManageCandidateAdmin,
  jobSlice: JobSlice,
  AdminJob: AdminJobs,
  Candidate: CandidateSlice,
  interview: interviewSchuleSlice,
  candidateInterview: CandidateInterviewSlice
 
});

export default rootReducer;
