import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Forms from '../forms';
import { UpdateCanidateData, addExperience, addEducation, addProject, addSkills, addLanguage } from '../../Slices/Candidates/CandidateSlice';
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

    // let [testImage, setTestImage] = useState()

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
            title = 'Personal Information';
            break;
        case 'summary':
            title = 'Summary';
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
        // console.log("block 0")
        if (data?.personalInformationData) {
            // console.log("block 1")
            for (const key in data.personalInformationData) {
                const value = data.personalInformationData[key];
                if (value !== undefined && value !== '') {
                    formData.append(`personalInformationData[${key}]`, value);
                }
            }
        }
        else if (data?.summary) {
            // console.log("block 2")
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

        // console.log("valuess state", state)
        // console.log(state?.jobPreferenceData, "valuessssssssss")

        const formData = new FormData();

        if (state?.jobPreferenceData) {
            return state?.jobPreferenceData
        }
        // if (state?.experiencesData) {
        //     return state?.experiencesData
        // }


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
            if (action === "add") {
                formData.append("projectImageFile", state?.projectsData[state?.projectsData?.length - 1]?.projectImageFile)
            } else {
                formData.append("projectImageFile", state?.projectsData[index]?.projectImageFile)
            }

        }

        return formData
    };

    const [savingForm, setSavingForm] = useState(false);

    const handleSenddata = (val, file) => {
        console.log("candidateProfileData", candidateProfileData)
        // const candidateProfileData = val;
        const formdata = convertStateToFormData(candidateProfileData);

        try {
            if (action === "edit") {
                // console.log(formdata, "editttttttt")
                setSavingForm(true);
                // console.log(savingForm, "dispatch")
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
                if (type === "projectsData") {
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
                    // console.log(type, "typeeeee")
                    // console.log({ candidateProfileData })
                    dispatch(addExperience(candidateProfileData))
                        .unwrap()
                        .then(x => { console.log(x, "Ressss") })
                        .catch(err => console.log(err, "errorr"))
                        .finally(() => {
                            setSavingForm(false);
                            setIsModalOpen(false);
                        });
                }

                if (type === "educationsData") {
                    // console.log(type, "typeeeee")
                    // console.log({ candidateProfileData })
                    dispatch(addEducation(candidateProfileData))
                        .unwrap()
                        .then(x => { console.log(x, "Ressss") })
                        .catch(err => console.log(err, "errorr"))
                        .finally(() => {
                            setSavingForm(false);
                            setIsModalOpen(false);
                        });
                }
                if (type === "skillsData") {
                    // console.log(type, "typeeeee")
                    // console.log({ candidateProfileData })
                    dispatch(addSkills(candidateProfileData))
                        .unwrap()
                        .then(x => { console.log(x, "Ressss") })
                        .catch(err => console.log(err, "errorr"))
                        .finally(() => {
                            setSavingForm(false);
                            setIsModalOpen(false);
                        });
                }
                if (type === "languagesData") {
                    // console.log(type, "typeeeee")
                    console.log({ candidateProfileData })
                    dispatch(addLanguage(candidateProfileData))
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

            {type === "summary" &&
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



            {/* {(type === "skillsData" && action !== "edit") && */}
            {type === "skillsData" &&
                <Forms.Skills
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    id={action === "edit" ? id : null}
                    // handleSenddata={handleSenddata}
                    savingForm={savingForm}
                />}



            {/* {(type === "languagesData" && action !== "edit") && */}
            {type === "languagesData" &&
                <Forms.Languages
                    handleCancel={handleCancel}
                    action={action}
                    setCandidateProfileData={setCandidateProfileData}
                    id={action === "edit" ? id : null}
                    // handleSenddata={handleSenddata}
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