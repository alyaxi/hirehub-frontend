// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const CandidateService = {
    async getCandidateData() {
        try {
            // console.log("starttt from servie candidate");
            const response = await api.get('/get-candidate');
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async UpdateCandidateData(formDataToSend) {
        console.log("UpdateCandidateData formDataToSend", formDataToSend)
        try {
            // console.log("updated from servie candidate", formDataToSend);
            // for (var pair of formDataToSend.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1], "forrrrrrrrrrrm dta"); 
            // }
            const response = await api.post('/update-candidate', formDataToSend, {
                // headers: {
                //     'Content-Type': 'multipart/form-data',
                // },
            });
            if (response && response.data && response.status === 200) {
                console.log("starttttttttttt", response.data);
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async addprojectService(formDataToSend) {
        try {

            const response = await api.post('/add-projects', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data boundary=----WebKitFormBoundaryT1kqB5jA8u51YKOC',
                },
            });
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async addExperienceService(formDataToSend) {
        try {

            console.log({ formDataToSend })
            const response = await api.post('/add-experience', formDataToSend);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async addEducationService(formDataToSend) {
        try {

            console.log("educationnnnnnnnnnnnnnnn", formDataToSend)
            const response = await api.post('/add-education', formDataToSend);
            if (response && response.data && response.status === 200) {
                console.log("response", response);
                console.log("response.data", response.data);
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async addSkillsService(formDataToSend) {
        try {
            // console.log(formDataToSend)
            // console.log("skillllllll", formDataToSend)
            const response = await api.post('/add-skills', formDataToSend);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
    async addLanguageService(formDataToSend) {
        try {
            console.log(formDataToSend)
            console.log("languageeeeee", formDataToSend)
            const response = await api.post('/add-language', formDataToSend);
            if (response && response.data && response.status === 200) {
                // console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default CandidateService;