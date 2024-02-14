
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const interviewSchdule = {
    async addinterviewSchdule(formDataToSend) {
        console.log(formDataToSend, "formdataaaaaaaaaa")
        try {
            const response = await api.post('/schedule-interview', formDataToSend,
                // {
                //     headers: {
                //         'Content-Type': 'multipart/form-data',
                //     },
                // }
            );
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async getInterviewSchdule() {

        try {
            const response = await api.get('/get-schedule-interview');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default interviewSchdule;
