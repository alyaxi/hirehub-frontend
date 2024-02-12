import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Forms from '../forms';
import { UpdateCanidateData, addExperience, addProject } from '../../Slices/Candidates/CandidateSlice';
// import Summary from './Summary';
import { useDispatch } from 'react-redux';

function PopupModal({ setIsModalOpen,
    isModalOpen,
    type,
    action,
    id,
    index
}) {
    const dispatch = useDispatch()


    const [candidateProfileData, setCandidateProfileData] = useState();


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    let [testImage, setTestImage] = useState()


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

    // console.log(candidateProfileData, "candidateProfileData")

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

        }
        else if (data?.projectsData) {
            for (const project of data.projectsData) {
                for (const key in project) {
                    const value = project[key];
                    if (value !== undefined && value !== '') {
                        if (key === 'projectImage' && value instanceof File) {
                            // Handle file upload differently if needed
                            formData.append(`projectsData[${key}]`, value);
                        } else {
                            formData.append(`projectsData[${key}]`, value);
                        }
                    }
                }
            }
        }


        return formData;
    };

    const convertStateToFormData = (state) => {

        console.log(state, "valuessssssssss")

        const formData = new FormData();


        const flattenObject = (obj, parentKey = '') => { 
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key];
                    const keyName = parentKey ? `${parentKey}[${key}]` : key;

                    if (Array.isArray(value)) {
                        // If the value is an array, iterate through its elements
                        value.forEach((item, index) => {
                            flattenObject(item, `${keyName}[${index}]`);
                        });
                    } else if (typeof value === 'object' && value !== null) {
                        // If the value is an object, recursively flatten it
                        flattenObject(value, keyName);
                    } else {
                        // Append the key-value pair to the FormData
                        formData.append(keyName, value);
                    }
                }
            }
        };

        flattenObject(state);
        formData.append("profilePicture", state?.personalInformationData?.profilePicture)
        if (state && state?.projectsData && state?.projectsData.length) {
            // formData.append("projectImage", state?.projectsData[0]?.projectImage)
            formData.append("projectImageFile", state?.projectsData[index]?.projectImageFile)
        }

        return formData
    };



    console.log({ action })

    const [savingForm, setSavingForm] = useState(false);

    const handleSenddata = (val, file) => {
        console.log("handleSenddata candidateProfileData", candidateProfileData)
        // const candidateProfileData = val;
        const formdata = convertStateToFormData(candidateProfileData);
        console.log("formdata", formdata)
        // console.log({ val })


        // console.log({ candidateProfileData })

        try {
            if (action == "edit") {
                console.log(formdata, "editttttttt")
                setSavingForm(true);
                dispatch(UpdateCanidateData(formdata))
                    .unwrap()
                    .then(x => { console.log(x, "Ressss") })
                    .catch(err => console.log(err, "errorr"))
                    .finally(() => {
                        setSavingForm(false);
                        setIsModalOpen(false);
                    });
            } else if (action === "add") {
                setSavingForm(true);
                if (type == "projectsData") {
                    setSavingForm(true);
                    dispatch(addProject(formdata))
                        .unwrap()
                        .then(x => { console.log(x, "Ressss") })
                        .catch(err => console.log(err, "errorr"))
                        .finally(() => {
                            setSavingForm(false);
                            setIsModalOpen(false);
                        });
                }
                if (type === "experiencesData") {
                    // setSavingForm(true);
                    console.log(type, "typeeeee")
                    console.log({ candidateProfileData })
                    dispatch(addExperience(candidateProfileData))
                        .unwrap()
                        .then(x => { console.log(x, "Ressss") })
                        .catch(err => console.log(err, "errorr"))
                        .finally(() => {
                            setSavingForm(false);
                            setIsModalOpen(false);
                        });
                }
            }
        } catch (error) {
            console.log(error, "catch error")
        }
    }
    // console.log("---- 2 candidateProfileData", candidateProfileData)

    useEffect(() => {
        handleSenddata();
    }, [candidateProfileData]);

    return (
        <Modal title={_title} width={715} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} >

            {type === "personalInformationData" &&
                <Forms.PersonalInformations
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    handleSenddata={handleSenddata}
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
                    index={index}
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