
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const adminServices = {
    async getEmployersDetail() {
        try {
            console.log("starttt from servie employer");
            const response = await api.get('/admin/manage-employers');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async VieEmployersDetailById(id) {
        try {
            console.log("starttt from servie employer");
            const response = await api.get(`/admin/view-employer-by-id?id=${id}`);
            if (response && response.data && response.status === 200) {
                console.log("viewww employererererer, res", response);
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async EmployerStatusChange(id, status) {
        try {
            console.log("change from servie employer", status);
            const response = await api.post(`/admin/change-status-employers?id=${id}`, status);
            if (response && response.data && response.status === 200) {
                console.log("viewww employererererer, res", response);
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default adminServices;
