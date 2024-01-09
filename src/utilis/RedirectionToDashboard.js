

export const redirectToDashboard = (role, navigate) => {
  console.log("startttttttttttttttt", role);
 

  switch (role) {
    case 'admin':
      navigate('/admin/dashboard');
      break;
    case 'candidate':
      navigate('/candidate/manage-profile');
      break;
    case 'employer':
      console.log("employerer");
      navigate('/employer/dashboard');
      break;
    default:
      // Redirect to a default route
      navigate('/');
  }
};
