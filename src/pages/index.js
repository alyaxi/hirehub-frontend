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
import ScheduleCandidatesAdmin from "./admin/manage_candidates/schedule";
// ------------ Employer ------------
import EmployerDashboard from "./employer/dashboard";
import ManageProfile from "./employer/manage_profile";

import MainJobsEmployer from "./employer/manage_jobs/main";
import EditJobsEmployer from "./employer/manage_jobs/view";
import ViewJobsEmployer from "./employer/manage_jobs/edit";

import MainSubscriptionEmployer from "./employer/manage_subscription/main";

import ChatEmployer from "./employer/chat/main";

import NotificationEmployer from "./employer/notification/main";

import ManageEmailEmployer from "./employer/manage_email/main";

import MainQuestionnaireEmployer from "./employer/manage_questionnaire/main";
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

    ScheduleCandidatesAdmin,
    // ------------ Employer ------------
    EmployerDashboard,

    ManageProfile,

    MainJobsEmployer,
    EditJobsEmployer,
    ViewJobsEmployer,

    MainSubscriptionEmployer,

    ChatEmployer,

    NotificationEmployer,

    ManageEmailEmployer,

    MainQuestionnaireEmployer,
    // ------------ Candidate ------------
    ManageProfileCandidate,
    MainCandidatesEmployer,
    ViewCandidatesEmployer,
    EditCandidatesEmployer
} 