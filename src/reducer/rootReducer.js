import { combineReducers } from 'redux';
import authSlice from '../Slices/Auth/authSlice';
import adminSlice from '../Slices/Admin/adminSlice';
import employerSlices from '../Slices/Employer/EmployerSlice';
import ManageCandidateEmployer from '../Slices/Employer/ManageCandidate';
import ManageCandidateAdmin from '../Slices/Admin/ManageCandidate';


const rootReducer = combineReducers({
  auth: authSlice,
  admin: adminSlice,
  employer: employerSlices,
  manageCandidate: ManageCandidateEmployer,
  manageCandidateAdmin:ManageCandidateAdmin
 
});

export default rootReducer;
