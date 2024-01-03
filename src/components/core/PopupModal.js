import React from 'react';
import { Modal } from 'antd';

function PopupModal({ setIsModalOpen,
    isModalOpen,
    type,
    action,
}) {

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    console.log("type", type)
    console.log("action", action)
    let _action = action === "edit" ? "Edit" : "Add";
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
    return (
        <>
            <Modal title={_title} width={715} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                type-    {type}
                ACTION- {action}
            </Modal>
        </>
    );
};

export default PopupModal;