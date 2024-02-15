
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const CandidateinterviewSchdule = {

    async getInterviews() {
        
        try {
            const response = await api.get('/get-interviews');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async UpdateInterviewsStatus() {
        
        try {
            const response = await api.get('/update-interview');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default CandidateinterviewSchdule;
