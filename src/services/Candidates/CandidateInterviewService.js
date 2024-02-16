
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
    async UpdateInterviewsStatus(statusUpdate) {
        
        try {
            const response = await api.post('/update-interview', statusUpdate);
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
