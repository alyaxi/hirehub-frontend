import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Forms from '../forms';
import { UpdateCanidateData } from '../../Slices/Candidates/CandidateSlice';
// import Summary from './Summary';
import { useDispatch } from 'react-redux';

function PopupModal({ setIsModalOpen,
    isModalOpen,
    type,
    action,
    id
}) {
    const dispatch = useDispatch()


    const [candidateProfileData, setCandidateProfileData] = useState({})


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

    const cleanAndAppendToFormData = (data) => {
        const formData = new FormData();



        console.log("block 0")
        if (data?.personalInformationData) {
            console.log("block 1")
            for (const key in data.personalInformationData) {
                const value = data.personalInformationData[key];
                if (value !== undefined && value !== '') {
                    formData.append(`personalInformationData[${key}]`, value);
                }
            }
        }
        else if (data?.summery) {
            console.log("block 2")
            for (const key in data.summery) {
                if (data.summery.hasOwnProperty(key)) {
                    formData.append(`summery[${key}]`, data.summery[key]);
                }

            }



            // Check for undefined and non-empty strings

        }

        return formData;
    };



    const [savingForm, setSavingForm] = useState(false);

    const handleSenddata = () => {
        console.log("candidateProfileData", candidateProfileData)
        try {
            // console.log("runingggg")
            const formData = cleanAndAppendToFormData(candidateProfileData);
            // console.log("editttttttt")
            console.log("formData", formData)
            setSavingForm(true);
            dispatch(UpdateCanidateData(formData))
                .unwrap()
                .then(x => { console.log(x, "Ressss") })
                .catch(err => console.log(err, "errorr"))
                .finally(() => {
                    setSavingForm(false);
                    setIsModalOpen(false);
                });
        } catch (error) {
            console.log(error, "catch error")
        }
    }

    useEffect(() => {
        handleSenddata();
    }, [candidateProfileData]);

    return (
        <Modal title={_title} width={715} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} >

            {type === "personalInformationData" && <Forms.PersonalInformations
                handleCancel={handleCancel}
                action={action}
                setCandidateProfileData={setCandidateProfileData}
                handleSenddata={handleSenddata}
                candidateProfileData={candidateProfileData}
                savingForm={savingForm}
            />}

            {type === "summery" &&
                <Forms.Summery
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    handleSenddata={handleSenddata}
                    savingForm={savingForm}
                />}

            {type === "projectsData" &&
                <Forms.Projects
                    handleCancel={handleCancel}
                    action={action}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    id={action === "edit" ? id : null}
                    savingForm={savingForm}
                />}

            {type === "experiencesData" &&
                <Forms.Experiences
                    handleCancel={handleCancel}
                    action={action}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    id={action === "edit" ? id : null}
                    savingForm={savingForm}
                />}

            {type === "educationsData" &&
                <Forms.Educations
                    handleCancel={handleCancel}
                    action={action}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    id={action === "edit" ? id : null}
                    savingForm={savingForm}
                />}



            {(type === "skillsData" && action !== "edit") &&
                <Forms.Skills
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    handleSenddata={handleSenddata}
                    savingForm={savingForm}
                />}

            {(type === "skillsData" && action === "edit") &&
                <Forms.SkillsEdit
                    handleCancel={handleCancel}
                    action={'edit'}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    savingForm={savingForm}
                />}



            {(type === "languagesData" && action !== "edit") &&
                <Forms.Languages
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    handleSenddata={handleSenddata}
                    savingForm={savingForm}
                />}

            {(type === "languagesData" && action === "edit") &&
                <Forms.LanguagesEdit
                    handleCancel={handleCancel}
                    action={'edit'}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    savingForm={savingForm}
                />}



            {(type === "jobPreference" && action === "edit") &&
                <Forms.JobPreference
                    handleCancel={handleCancel}
                    action={'edit'}
                    handleSenddata={handleSenddata}
                    setCandidateProfileData={setCandidateProfileData}
                    savingForm={savingForm}
                />}

        </Modal>
    );
};

export default PopupModal;