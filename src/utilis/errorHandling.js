// import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import notificationService from './notification';

export const RedirectToLogin = (err) => {

  localStorage.removeItem("user");
  localStorage.removeItem("persist:root");
  window.history.go("/")

  notificationService.error(err);


  return <ToastContainer></ToastContainer>
}

export const handleApiError = (error) => {

  console.log(error, "error");

  if (error.response && error.response.status === 401) {
    // Redirect to login page on unauthorized response
    return RedirectToLogin("jwt expired")

  } else if (error.message === "Network Error") {

    return RedirectToLogin("Network Error")
  }

  if (error.response) {
    // const status = error.response.status;
    const { data } = error.response.data;
    // console.log(data, "weoeoeeoeoeo");
    const errorMsg = data?.error || data;
    throw new Error(errorMsg);
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('No response from the server');
  } else {
    // Something happened in setting up the request that triggered an Error
    // throw new Error(`Request Error: ${error}`);
    throw new Error(`${error}`);
  }
};
