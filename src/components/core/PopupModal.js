import React, { useState } from 'react';
import { Modal } from 'antd';
import Forms from '../forms';
import Summary from './Summary';
import { UpdateCanidateData} from '../../Slices/Candidates/CandidateSlice';
import { useDispatch, useSelector } from 'react-redux';

function PopupModal({ setIsModalOpen,
    isModalOpen,
    type,
    action,
    id
}) {
    const dispatch = useDispatch()
    console.log("type", type)
    console.log("action", action)
    console.log("id", id)
    // const [candidateProfileData2, setCandidateProfileData2] = useState({
    //     personalInformationData: {
    // profilePicture: "",
    //         careerLevel: "",
    //         city: "",
    //         country: "",
    //         dob: "",
    //         experience: "",
    //         gender: "",
    //         phoneNo: "",
    //         profileCompletion: "",
    //         state: "",
    //         statusLine: "",
    //         zipCode: "",
    //     },
    //     summeryData: '',
    //     projectsData: [
    //         {
    //             id: "1",
    //             associated: "",
    //             currentlyInProcess: true,
    //             name: "",
    //             projectUrl: "",
    //             description: "",
    //             projectImage: "",
    //             startDate: "",
    //             endDate: "",
    //         },

    //     ],
    //     experiencesData: [
    //         {
    //             id: "1",
    //             title: '',
    //             company: '',
    //             industry: '',
    //             directlyManageTeam: '',
    //             noOfPeople: '',
    //             salary: '',
    //             selectedCountry: '',
    //             selectedCity: '',
    //             startDate: '',
    //             agreeTerms: '',
    //             description: '',
    //         },
    //     ],
    //     educationsData: [
    //         {
    //             id: "1",
    //             organization: '',
    //             degree: '',
    //             fieldOfStudy: '',
    //             startDate: '',
    //             endDate: '',
    //             selectedCountry: '',
    //             grade: '',

    //         }
    //     ],
    //     skillsData: [
    //         { id: '1', title: 'Express.js', experience: '6 years' }
    //     ],
    //     languagesData: [
    //         { id: 1, title: 'English', proficiency: 'Basic' }
    //     ],
    //     jobPreferenceData: {
    //         desiredJobTitle: ['abc', 'xyz'],
    //         desiredSalary: "$1000 - $1500",
    //         relocation: {
    //             anywhere: false,
    //             onlyNearMe: {
    //                 locations: ['london']
    //             }
    //         },
    //         relocationPreference: "onlyNearMe",
    //         skills: ['Angular Js'],
    //     },
    // })


    const [candidateProfileData, setCandidateProfileData] = useState({})

    // const [personalInformationData, setPersonalInformationData] = useState({
    //     avatar: "",
    //     name: "",
    //     dob: "",
    // })
    // const [projectsData, setProjectsData] = useState({
    //     avatar: "",
    //     name: "",
    //     dob: "",
    // })
    // const [experiencesData, setExperiencesData] = useState({
    //     title: "",
    //     company: "",
    //     industry: "",
    //     directlyManageATeam: {
    //         status: false,
    //         noOfPeople: ''
    //     },
    //     salary: "",
    //     location: "",
    //     city: "",
    //     startDate: "",
    //     currentlyWorking: false,
    //     description: '',
    // })
    // const [educationsData, setEducationsData] = useState({
    //     school: "",
    //     degree: "",
    //     fieldOfStudy: "",
    //     startDate: "",
    //     endOrExpectedDate: "",
    //     location: "",
    //     grade: "",
    // })
    // const [skillsData, setSkillsData] = useState({
    //     skill: "",
    //     experience: "",
    // })
    // const [languagesData, setLanguagesData] = useState({
    //     languages: "",
    //     languageProficiency: "",
    // })
    // const [summeryData, setSummeryData] = useState({
    // })
    // const [jobPreferenceData, setJobPreferenceData] = useState({
    // })

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    
      
      

    let _action = action === "edit" ? "Edit" : "Add";
    let title = '';

    switch (type) {
        case 'experiencesData':
            title = 'Experience';
            break;
        case 'educationsData':
            title = 'Education';
            break;
        case 'skillsData':
            title = 'Skills';
            break;
        case 'personalInformationData':
            title = 'Personal Informations';
            break;
        case 'summery':
            title = 'Summery';
            break;
        case 'projectsData':
            title = 'Projects';
            break;
        case 'languagesData':
            title = 'Language';
            break;
        case 'jobPreference':
            title = 'Job Preference';
            break;
        case 'resumePrivacySetting':
            title = 'Resume PrivacySetting';
            break;
        default:
            break;
    }
    let _title = _action + " " + title;

    console.log(candidateProfileData, "candidateProfileData")
    
    const convertDataToFormData = (data) => {
        const formData = new FormData();
      
        for (const key in data.ProfileInformationData) {
          if (data.ProfileInformationData.hasOwnProperty(key)) {
            const value = data.ProfileInformationData[key];
            formData.append(key, value);
          }
        }
      
        return formData;
      };
      
      

    const handleSenddata = () => {
       try {
        console.log("runingggg")
        const formData = convertDataToFormData(candidateProfileData);
        console.log("editttttttt")
        dispatch(UpdateCanidateData(candidateProfileData)).unwrap().then(x => {console.log(x, "Ressss")}).catch(err => console.log(err, "errorr"))
       } catch (error) {
        console.log(error, "catch error")
       }
        
        // if (action == "edit") {
        // }
        // if (action == "add") {
        //     console.log("add")
        // }
    }

    return (
        <Modal title={_title} width={715} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} >

            {type === "personalInformationData" && <Forms.PersonalInformations
                handleCancel={handleCancel}
                action={action}
                setCandidateProfileData={setCandidateProfileData}
                handleSenddata={handleSenddata}
            />}

            {type === "summery" &&
                <Forms.Summery
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    handleSenddata={handleSenddata}

                />}

            {type === "projectsData" &&
                <Forms.Projects
                    handleCancel={handleCancel}
                    action={action}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    id={action === "edit" ? id : null}
                />}

            {type === "experiencesData" &&
                <Forms.Experiences
                    handleCancel={handleCancel}
                    action={action}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    id={action === "edit" ? id : null}
                />}

            {type === "educationsData" &&
                <Forms.Educations
                    handleCancel={handleCancel}
                    action={action}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    id={action === "edit" ? id : null}
                />}



            {(type === "skillsData" && action !== "edit") &&
                <Forms.Skills
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    handleSenddata={handleSenddata}

                />}

            {(type === "skillsData" && action === "edit") &&
                <Forms.SkillsEdit
                    handleCancel={handleCancel}
                    action={'edit'}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                   
                />}



            {(type === "languagesData" && action !== "edit") &&
                <Forms.Languages
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    handleSenddata={handleSenddata}

                />}

            {(type === "languagesData" && action === "edit") &&
                <Forms.LanguagesEdit
                    handleCancel={handleCancel}
                    action={'edit'}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                />}



            {(type === "jobPreference" && action === "edit") &&
                <Forms.JobPreference
                    handleCancel={handleCancel}
                    action={'edit'}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                />}

        </Modal>
    );
};

export default PopupModal;