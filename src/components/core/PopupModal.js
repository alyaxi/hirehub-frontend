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
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    let _action = action === "edit" ? "" : "Add";
    let title = '';
    switch (type) {
        case 'experience':
            title = 'Experience';
            break;
        case 'education':
            title = 'Education';
            break;
        case 'skill':
            title = 'Skill';
            break;
        case 'personalInformation':
            title = 'Personal Information';
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
                {type === "personalInformation" && <Forms.PersonalInformation handleCancel={handleCancel} action={action} setPersonalInformationData={setPersonalInformationData} />}
                {type === "projects" && <Forms.Projects handleCancel={handleCancel} action={action} setProjectsData={setProjectsData} />}
            </Modal>
        </>
    );
};

export default PopupModal;