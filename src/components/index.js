// ------------ Admin ------------
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";
import AuthCard from "./auth/AuthCard";
import ChangePasswordForm from "./change_password/ChangePasswordForm";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Table from "./table/Table";
// ------------ Employer ------------
import EmployerLayout from "./layout/EmployerLayout";
import JobDetails from "./job/JobDetails";

// ------------ Candidate ------------
import CandidateLayout from "./layout/CandidateLayout";
import CandidateProfile from "./profile_view/CandidateProfile";
import UserProfile from "./profile_view/UserProfile";

export * as Core from "./core";
export * as Icons from "./icons";
export * as Icon from "./icon";
export * as Employer from "./employer";
export * as Forms from "./forms";

export {
    // ------------ Admin ------------
    AuthLayout,
    AuthCard,
    AdminLayout,
    ChangePasswordForm,
    Header,
    Sidebar,
    Table,
    UserProfile,
    // ------------ Employer ------------
    EmployerLayout,
    JobDetails,
    // ------------ Candidate ------------
    CandidateLayout,
    CandidateProfile,
}