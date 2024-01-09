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

// ------------ Candidate ------------
import CandidateLayout from "./layout/CandidateLayout";

export * as Core from "./core";
export * as Icons from "./icons";
export * as Icon from "./icon";
export * as Employer from "./employer";

export {
    // ------------ Admin ------------
    AuthLayout,
    AuthCard,
    AdminLayout,
    ChangePasswordForm,
    Header,
    Sidebar,
    Table,
    // ------------ Employer ------------
    EmployerLayout,
    // ------------ Candidate ------------
    CandidateLayout
}