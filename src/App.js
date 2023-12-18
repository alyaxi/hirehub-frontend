import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  AdminDashboard,
  ChangePassword,
  LoginPage,
  ForgotPasswordPage,
  ManageEmployers,
  ViewEmployers,
  EditEmployers,
  ManageProfile,
  RegisterPage,
  EmployerDashboard,
  ApprovedEmployers,
  ViewApprovedEmployers,
  MainEmployersRequest,
  MainRejectedEmployers,
  EditEmployersRequest,
  ViewEmployersRequest,
  EditRejectedEmployers,
  ViewRejectedEmployers,
  EditApprovedEmployers,
  MainCandidates,
  EditCandidates,
  ViewCandidates,
  ScheduleCandidates,
  NewPasswordPage,
  FourZeroFour,
  ViewProfile,
} from "./pages/index";
import { AdminLayout, EmployerLayout } from "./components";
import PrivateRoute from "./utilis/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="new-password" element={<NewPasswordPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="404" element={<FourZeroFour />} />

        {/* // Admin Routes */}
        <Route path="admin/*" element={<PrivateRoute roles={['admin']}><AdminLayout /></PrivateRoute>} >

          <Route path="dashboard" element={<PrivateRoute roles={['admin']}><AdminDashboard /></PrivateRoute>} />
          <Route path="change-password" element={<PrivateRoute roles={['admin']}><ChangePassword /></PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute roles={['admin']}><ViewProfile /></PrivateRoute>} />

          <Route path="manage-employers" element={<PrivateRoute roles={['admin']}><ManageEmployers /></PrivateRoute>} />
          <Route path="manage-employers/view/:id" element={<PrivateRoute roles={['admin']}><ViewEmployers /></PrivateRoute>} />
          <Route path="manage-employers/edit/:id" element={<PrivateRoute roles={['admin']}><EditEmployers /></PrivateRoute>} />

          <Route path="approved-employers" element={<PrivateRoute roles={['admin']}><ApprovedEmployers /></PrivateRoute>} />
          <Route path="approved-employers/edit/:id" element={<PrivateRoute roles={['admin']}><EditApprovedEmployers /></PrivateRoute>} />
          <Route path="approved-employers/view/:id" element={<PrivateRoute roles={['admin']}><ViewApprovedEmployers /></PrivateRoute>} />

          <Route path="manage-candidates" element={<PrivateRoute roles={['admin']}><MainCandidates /></PrivateRoute>} />
          {/* <Route path="manage-candidates" element={<MainCandidates />} /> */}
          <Route path="manage-candidates/edit/:id" element={<EditCandidates />} />
          <Route path="manage-candidates/view/:id" element={<ViewCandidates />} />
          <Route path="manage-candidates/schedule/:id" element={<ScheduleCandidates />} />

          <Route path="employers-request" element={<PrivateRoute roles={['admin']}><MainEmployersRequest /></PrivateRoute>} />
          <Route path="employers-request/edit/:id" element={<PrivateRoute roles={['admin']}><EditEmployersRequest /></PrivateRoute>} />
          <Route path="employers-request/view/:id" element={<PrivateRoute roles={['admin']}><ViewEmployersRequest /></PrivateRoute>} />

          <Route path="rejected-employers" element={<PrivateRoute roles={['admin']}><MainRejectedEmployers /></PrivateRoute>} />
          <Route path="rejected-employers/edit/:id" element={<PrivateRoute roles={['admin']}><EditRejectedEmployers /></PrivateRoute>} />
          <Route path="rejected-employers/view/:id" element={<PrivateRoute roles={['admin']}><ViewRejectedEmployers /></PrivateRoute>} />

        </Route >

        {/* // Employer Routes */}

        <Route path="employer/*" element={<PrivateRoute roles={['employer']}><EmployerLayout /></PrivateRoute>} >
          <Route path="dashboard" element={<PrivateRoute roles={['employer']}><EmployerDashboard /></PrivateRoute>} />
          <Route path="manage-profile" element={<PrivateRoute roles={['employer']}><ManageProfile /></PrivateRoute>} />
          <Route path="change-password" element={<PrivateRoute roles={['employer']}><ChangePassword /></PrivateRoute>} />

          <Route path="manage-candidates/edit/:id" element={<EditCandidates />} />
          <Route path="manage-candidates/view/:id" element={<ViewCandidates />} />
          <Route path="manage-candidates/schedule/:id" element={<ScheduleCandidates />} />

        </Route>

        <Route path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There was a problem with the link you clicked on. Please try again.</p>
            </main>
          }
        />
      </Routes >

    </BrowserRouter >
  );
}

export default App;
