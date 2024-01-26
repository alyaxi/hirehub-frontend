import api from "../../api/api";

const MangeJobAdmin = {
    async ManageJob() {
        try {
            console.log("starttt from servie admin");
            const response = await api.get('/admin/get-jobs-by-all');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
  
   
};


export default MangeJobAdmin;