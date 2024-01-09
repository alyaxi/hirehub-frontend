import axios from 'axios';
import getAuthHeader from '../utilis/authHeader';
import { handleApiError } from '../utilis/errorHandling';


const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

api.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    ...getAuthHeader(),
  };
  return config;
})

api.interceptors.response.use(
  (response) => response,
  (error) => handleApiError(error)
);


export default api;
