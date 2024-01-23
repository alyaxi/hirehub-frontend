import React, { useState } from 'react';
import { Modal } from 'antd';
import Forms from '../forms';
function PopupModal({ setIsModalOpen,
    isModalOpen,
    type,
    action,
}) {
    const [personalInformationData, setPersonalInformationData] = useState({
        avatar: "",
        name: "",
        dob: "",
    })
    const [projectsData, setProjectsData] = useState({
        avatar: "",
        name: "",
        dob: "",
    })
    const [experiencesData, setExperiencesData] = useState({
        title: "",
        company: "",
        industry: "",
        directlyManageATeam: {
            status: false,
            noOfPeople: ''
        },
        salary: "",
        location: "",
        city: "",
        startDate: "",
        currentlyWorking: false,
        description: '',
    })
    const [educationsData, setEducationsData] = useState({
        school: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endOrExpectedDate: "",
        location: "",
        grade: "",
    })
    const [skillsData, setSkillsData] = useState({
        skill: "",
        experience: "",
    })
    const [languagesData, setLanguagesData] = useState({
        languages: "",
        languageProficiency: "",
    })
    const [summeryData, setSummeryData] = useState({
    })
    const [jobPreferenceData, setJobPreferenceData] = useState({
    })
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    let _action = action === "edit" ? "Edit" : "Add";
    let title = '';
    switch (type) {
        case 'experience':
            title = 'Experience';
            break;
        case 'education':
            title = 'Education';
            break;
        case 'skills':
            title = 'Skills';
            break;
        case 'personalInformations':
            title = 'Personal Informations';
            break;
        case 'summery':
            title = 'Summery';
            break;
        case 'projects':
            title = 'Projects';
            break;
        case 'language':
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
    console.log("type", type)
    console.log("action", action)
    return (
        <Modal title={_title} width={715} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} >
            {type === "personalInformations" && <Forms.PersonalInformations handleCancel={handleCancel} action={action} setPersonalInformationData={setPersonalInformationData} />}
            {type === "summery" && <Forms.Summery handleCancel={handleCancel} action={action} setSummeryData={setSummeryData} />}
            {type === "projects" && <Forms.Projects handleCancel={handleCancel} action={action} setProjectsData={setProjectsData} />}
            {type === "experience" && <Forms.Experiences handleCancel={handleCancel} action={action} setExperiencesData={setExperiencesData} />}
            {type === "education" && <Forms.Educations handleCancel={handleCancel} action={action} setEducationsData={setEducationsData} />}


            {(type === "skills" && action !== "edit") && <Forms.Skills handleCancel={handleCancel} action={action} setSkillsData={setSkillsData} />}
            {(type === "skills" && action === "edit") && <Forms.SkillsEdit handleCancel={handleCancel} action={'edit'} setSkillsData={setSkillsData} />}

            {(type === "language" && action !== "edit") && <Forms.Languages handleCancel={handleCancel} action={action} setSkillsData={setSkillsData} />}
            {(type === "language" && action === "edit") && <Forms.LanguagesEdit handleCancel={handleCancel} action={'edit'} setSkillsData={setSkillsData} />}

            {(type === "jobPreference" && action === "edit") && <Forms.JobPreference handleCancel={handleCancel} action={'edit'} setJobPreferenceData={setJobPreferenceData} />}

        </Modal>
    );
};

export default PopupModal;