
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";


const interviewsByAdmin = {
    async viewInterviewsByAdmin(data) {
        try {
            // console.log("starttt from servie employer");
            const response = await api.post('/admin/view-interviews', data);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },

};

export default interviewsByAdmin;
