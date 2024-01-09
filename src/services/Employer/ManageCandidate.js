
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const ManageCandidate = {
    async getAppliedJobByCandidate() {
        try {
            console.log("get applied Jobs by Candidate from servie employer");
            const response = await api.get('/get-applied-jobs-by-candidate');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async changeStatusAppliedJobByEmployer(id, statusCheck) {
        try {
            console.log("change status applied employer", id, statusCheck);
            const response = await api.post(`/change-status-applied-jobs-by-candidate?id=${id}`, statusCheck);
            if (response && response.data && response.status === 200) {
                console.log("viewww employererererer, res", response);
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    }
   
};

export default ManageCandidate;
