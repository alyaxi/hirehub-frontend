import api from "../../api/api";


const Questionnaire = {
    async GetQuestionnaire() {
        try {
            console.log("starttt from servie admin");
            const response = await api.get('/get-manage-questionairre');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async CreateQuestionaire(data) {
        try {
            console.log("starttt from servie admin");
            const response = await api.post('/manage-questionairre', data);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },

    async UpdateQuestionaire(data) {
        try {
            const {id, _quesionnaire} = data
            console.log("updateQuestionarre", _quesionnaire)
          
            const response = await api.put(`/update-manage-questionairre/${id}`, _quesionnaire);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async deleteQuestionaire(id) {

        try {
            console.log(id, "deleteIddd");
            const response = await api.delete(`/delete-manage-questionairre/${id}`);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },



};


export default Questionnaire;