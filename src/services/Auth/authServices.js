import api from '../../api/api';
// import localStorageUtils from '../utils/localStorage';

const authService = {
    async login(credentials) {
        try {

            const response = await api.post('/auth/login', credentials);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async register(credentials) {
        try {

            const response = await api.post('/auth/register', credentials);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async forgetPassword(credentials) {
        try {

            const response = await api.post('/auth/forget-password', credentials);
            if (response && response.data && response.status === 200) {
                console.log("forgottttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async changePassword(credentials) {
        try {

            const response = await api.post('/auth/change-password', credentials);
            if (response && response.data && response.status === 200) {
                console.log("reset pass");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async recoverPassword(token, password) {
        try {

            const response = await api.post(`/auth/reset-password/${token}`, { password });
            if (response && response.data && response.status === 200) {
                console.log("recover pass");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default authService;
