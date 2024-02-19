import api from "../../api/api";

const ManageContentStatic = {
    async UpdateFaqs(data) {
        try {
            console.log("starttt from servie admin");
            const response = await api.post('/admin/create-faqs',data);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async GetFaqs() {
        try {
            console.log("starttt from servie admin");
            const response = await api.get('/admin/view-faqs');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async UpdateTerms(data) {
        try {
            console.log("starttt from servie admin");
            const response = await api.post('/admin/create-manage-terms',data);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async GetTerms() {
        
        try {
            console.log("starttt from servie admin");
            const response = await api.get('/admin/view-manage-terms');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
  
  
   
};


export default ManageContentStatic;