
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const employerServices = {
    async getEmployerDetailById() {
        try {
            console.log("starttt from servie employer");
            const response = await api.get('/get-employer-by-id');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async UpdateEmployerDetailById(formDataToSend) {
        try {
            console.log("updated from servie employer", formDataToSend);
            for (var pair of formDataToSend.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }
            const response = await api.post('/update-employer-by-id', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default employerServices;
