import FourZeroFour from "./error/404";
// ------------ Auth ------------
import ForgotPasswordPage from "./auth/forgot_password/ForgotPasswordPage";
import NewPasswordPage from "./auth/forgot_password/NewPasswordPage";
import LoginPage from "./auth/login";
import RegisterPage from "./auth/register";
// ------------ Admin ------------
import AdminDashboard from "./admin/dashboard";
import ChangePassword from "./admin/change_password";

import ApprovedEmployers from "./admin/approved_employers/main";
import EditApprovedEmployers from "./admin/approved_employers/edit";
import ViewApprovedEmployers from "./admin/approved_employers/view";

import MainEmployersRequest from "./admin/employers_request/main";
import ViewEmployersRequest from "./admin/employers_request/view";
import EditEmployersRequest from "./admin/employers_request/edit";

import MainRejectedEmployers from "./admin/rejected_employers/main";
import ViewRejectedEmployers from "./admin/rejected_employers/view";
import EditRejectedEmployers from "./admin/rejected_employers/edit";

import ManageEmployers from "./admin/manage_employers/main";
import ViewEmployers from "./admin/manage_employers/view";
import EditEmployers from "./admin/manage_employers/edit";

import MainCandidates from "./admin/manage_candidates/main";
import ViewCandidates from "./admin/manage_candidates/view";
import EditCandidates from "./admin/manage_candidates/edit";
import ViewProfile from "./admin/profile/view";
import ScheduleCandidates from "./admin/manage_candidates/schedule";
// ------------ Employer ------------
import EmployerDashboard from "./employer/dashboard";
import ManageProfile from "./employer/manage_profile";
// ------------ Candidate ------------
import ManageProfileCandidate from "./candidate/manage_profile";
import MainCandidatesEmployer from "./employer/manage_candidates/main";
import ViewCandidatesEmployer from "./employer/manage_candidates/view";
import EditCandidatesEmployer from "./employer/manage_candidates/edit";

export {
    FourZeroFour,
    // ------------ Auth ------------
    RegisterPage,
    ForgotPasswordPage,
    NewPasswordPage,
    LoginPage,
    // ------------ Admin ------------
    AdminDashboard,
    ChangePassword,

    ManageEmployers,
    ViewEmployers,
    EditEmployers,

    ApprovedEmployers,
    ViewApprovedEmployers,
    EditApprovedEmployers,

    MainEmployersRequest,
    EditEmployersRequest,
    ViewEmployersRequest,

    MainRejectedEmployers,
    EditRejectedEmployers,
    ViewRejectedEmployers,

    MainCandidates,
    EditCandidates,
    ViewCandidates,
    ViewProfile,
    ScheduleCandidates,

    // ------------ Employer ------------
    EmployerDashboard,
    ManageProfile,

    // ------------ Candidate ------------
    ManageProfileCandidate,
    MainCandidatesEmployer,
    ViewCandidatesEmployer,
    EditCandidatesEmployer
} 