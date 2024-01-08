import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Forms from '../forms';
import Icon from '../icon';
import { Core } from '..';

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
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    let _action = action === "edit" ? "" : "Add";
    let title = '';
    switch (type) {
        case 'experiences':
            title = 'Experiences';
            break;
        case 'educations':
            title = 'Educations';
            break;
        case 'skills':
            title = 'Skills';
            break;
        case 'personalInformations':
            title = 'Personal Informations';
            break;
        case 'summary':
            title = 'Summary';
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

    // console.log("personalInformationData", personalInformationData)
    // console.log("projectsData", projectsData)
    return (
        <>
            <Modal title={_title} width={715} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} >
                {/* type -    {type}
                <br />
                action - {action} */}
                {type === "personalInformations" && <Forms.PersonalInformations handleCancel={handleCancel} action={action} setPersonalInformationData={setPersonalInformationData} />}
                {type === "projects" && <Forms.Projects handleCancel={handleCancel} action={action} setProjectsData={setProjectsData} />}
                {type === "experiences" && <Forms.Experiences handleCancel={handleCancel} action={action} setExperiencesData={setExperiencesData} />}
                {type === "educations" && <Forms.Educations handleCancel={handleCancel} action={action} setEducationsData={setEducationsData} />}
                {type === "skills" && <Forms.Skills handleCancel={handleCancel} action={action} setSkillsData={setSkillsData} />}
            </Modal>
        </>
    );
};

export default PopupModal;