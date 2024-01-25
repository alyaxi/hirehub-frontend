import api from "../../api/api";

const jobServices = {
    async jobListing() {
        try {
            console.log("starttt from servie employer");
            const response = await api.get('/get-jobs-by-employer');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async addJobs(data) {
        try {
            const response = await api.post('/add-jobs-by-employer', data);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async StatusChange(id,status) {
        try {
            const response = await api.post(`/update-jobs-by-employer/${id}`, {jobStatus:status});
            if (response && response.data && response.status === 200) {
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};


export default jobServices;