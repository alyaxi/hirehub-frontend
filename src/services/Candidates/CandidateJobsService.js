
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const CandidateJobs = {

    async getAlljobs() {
        
        try {
            const response = await api.get('/get-all-jobs');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    // async UpdateInterviewsStatus(statusUpdate) {
        
    //     try {
    //         const response = await api.post('/update-interview', statusUpdate);
    //         if (response && response.data && response.status === 200) {
    //             // console.log("starttttttttttt");
    //             return response.data;
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // },
};

export default CandidateJobs;
