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

import MainJobsAdmin from "./admin/manage_jobs/main";
import AddJobsAdmin from "./admin/manage_jobs/add";
import ViewJobsAdmin from "./admin/manage_jobs/view";

import ViewProfile from "./admin/profile/view";
import ScheduleCandidatesAdmin from "./admin/manage_candidates/schedule";
import ManageFAQsAdmin from "./admin/manage_faqs";
import EmailTemplatesAdmin from "./admin/email_templates/main";
import ManageTermAndConditionAdmin from "./admin/term_and_condition";
// ------------ Employer ------------
import EmployerDashboard from "./employer/dashboard";
import ManageProfile from "./employer/manage_profile";

import MainJobsEmployer from "./employer/manage_jobs/main";
import AddJobsEmployer from "./employer/manage_jobs/add";
import ViewJobsEmployer from "./employer/manage_jobs/view";
import EditJobsEmployer from "./employer/manage_jobs/edit";

import MainSubscriptionEmployer from "./employer/manage_subscription/main";

import ChatEmployer from "./employer/chat/main";

import NotificationEmployer from "./employer/notification/main";

import ManageEmailEmployer from "./employer/manage_email/main";

import MainQuestionnaireEmployer from "./employer/manage_questionnaire/main";
import AddQuestionnaireEmployer from "./employer/manage_questionnaire/add";
import EditQuestionnaireEmployer from "./employer/manage_questionnaire/edit";
// ------------ Candidate ------------
import ManageProfileCandidate from "./candidate/manage_profile";
import CalenderCandidate from "./candidate/calender";
import MainJobsCandidate from "./candidate/jobs/main";
import MainCandidatesEmployer from "./employer/manage_candidates/main";
import ViewCandidatesEmployer from "./employer/manage_candidates/view";
import EditCandidatesEmployer from "./employer/manage_candidates/edit";
import ScheduleCandidatesEmployer from "./employer/manage_candidates/schedule";

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

    MainJobsAdmin,
    AddJobsAdmin,
    ViewJobsAdmin,

    ViewProfile,

    ScheduleCandidatesAdmin,
    ManageFAQsAdmin,
    EmailTemplatesAdmin,
    ManageTermAndConditionAdmin,
    // ------------ Employer ------------
    EmployerDashboard,

    ManageProfile,

    MainJobsEmployer,
    AddJobsEmployer,
    EditJobsEmployer,
    ViewJobsEmployer,

    MainSubscriptionEmployer,

    ChatEmployer,

    NotificationEmployer,

    ManageEmailEmployer,

    MainQuestionnaireEmployer,
    AddQuestionnaireEmployer,
    EditQuestionnaireEmployer,
    // ------------ Candidate ------------
    ManageProfileCandidate,
    CalenderCandidate,
    MainJobsCandidate,
    MainCandidatesEmployer,
    ViewCandidatesEmployer,
    EditCandidatesEmployer,
    ScheduleCandidatesEmployer
} 