import React from 'react';
import { Formik, Field, Form } from 'formik';
// import { useState } from 'react';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

const skillsOptions = [
    { label: 'HTML&CSS', value: 'HTML&CSS' },
    { label: 'Bootstrap', value: 'Bootstrap' },
    { label: 'Illustrator', value: 'Illustrator' },
    { label: 'Photoshop', value: 'Photoshop' },
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'React.js', value: 'React.js' },
    { label: 'Node.js', value: 'Node.js' },
    { label: 'Python', value: 'Python' },
    { label: 'Java', value: 'Java' },
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'SQL', value: 'SQL' },
    { label: 'Angular', value: 'Angular' },
    { label: 'Vue.js', value: 'Vue.js' },
    { label: 'TypeScript', value: 'TypeScript' },
    { label: 'Git', value: 'Git' },
    { label: 'Docker', value: 'Docker' },
    { label: 'AWS', value: 'AWS' },
    { label: 'Redux', value: 'Redux' },
];

const skillExperienceOptions = [
    { name: "Fresh", value: "Fresh" },
    { name: "6 months", value: "6 months" },
    { name: "1 year", value: "1 year" },
    { name: "2 years", value: "2 years" },
    { name: "3 years", value: "3 years" },
    { name: "4 years", value: "4 years" },
    { name: "5 years", value: "5 years" },
    { name: "6 years", value: "6 years" },
    { name: "7 years", value: "7 years" },
    { name: "8 years", value: "8 years" },
    { name: "9 years", value: "9 years" },
    { name: "10 years", value: "10 years" },
    { name: "Over 10 years", value: "Over 10 years" },
];

const SkillsEdit = ({ handleCancel, setCandidateProfileData, savingForm }) => {

    console.log("22 savingForm", savingForm)

    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const skills = candidate?.skillsData;

    console.log("1122 candidate.skillsData", skills)

    // const initialValues = {
    //     skills: skills?.map(skill => ({ id: skill.id, title: skill.title, experience: skill.experience }))
    // };
    const initialValues = {
        skills: skills?.map(skill => ({
            id: skill?.id, // Use the ID from Redux state
            title: skill?.title,
            experience: skill?.experience 
        }))
    };

    // console.log("22 initialValues", initialValues)

    const multiSelectHandle = (type, selectedItems, setFieldValue, id) => {
        // console.log("8888 multiSelectHandle called")
        // console.log("8888 type", type)
        // console.log("8888 selectedItems", selectedItems)
        // console.log("8888 setFieldValue", setFieldValue)
        // console.log("8888 id", id)

        console.log("22 skills", skills)
        console.log("22 id", id)


        const skillIndex = skills?.findIndex(skill => skill?.id === id);

        console.log("22 skillIndex", skillIndex)
        if (skillIndex !== -1) {
            console.log("candidate.skillsData", candidate?.skillsData)
            const updatedSkills = [...skills];
            updatedSkills[skillIndex] = {
                ...updatedSkills[skillIndex],
                title: selectedItems,
            };
            console.log("22 updatedSkills", updatedSkills)
            setFieldValue(type, updatedSkills);
        }
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("11 22 handleSubmit called", values);
        // console.log("8888 values", values);

        // const _skillsData = values?.skills?.map(skill => ({
        //     id: skill?._id,
        //     title: skill?.title,
        //     experience: skill?.experience,
        // }));

        // console.log("11 22 8888 _skillsData", _skillsData);

        setCandidateProfileData(prevData => ({
            ...prevData,
            skillsData: values?.skills,
        }));

        // handleSenddata()
        // setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ values, isSubmitting, setFieldValue }) => {
                console.log("22 values", values)
                return (
                    <Form>
                        {values?.skills?.map((skill, index) => {

                            // console.log("22 values?.skills",values?.skills)
                            // console.log("22 skill",skill)
                            return (

                                <div key={index}>
                                    <div className='mb-2'>
                                        <label
                                            name={`skills.${index}.title`}
                                            className={` flex justify-start text-[14px] font-medium text-gray-2 tracking-wide mb-2 font-semibold capitalize`}
                                        >
                                            Skill:
                                        </label>
                                        <Field name={`skills.${index}.title`}>
                                            {({ field }) => (
                                                <MultiSelectInput
                                                    {...field}
                                                    mode={"single"}
                                                    name={`skills.${index}.title`}
                                                    options={skillsOptions}
                                                    onChange={(selectedItems) => multiSelectHandle("skills", selectedItems, setFieldValue, skill?.id)}
                                                    value={field.value}
                                                    defaultValue={field.value}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className='mb-2'>
                                        <label
                                            name={`skills.${index}.title`}
                                            className={` flex justify-start text-[14px] font-medium text-gray-2 tracking-wide mb-2 font-semibold capitalize`}
                                        >
                                            Experience with this skill:
                                        </label>
                                        <Field name={`skills.${index}.experience`}>
                                            {({ field }) => (
                                                <Core.SelectWithLabel
                                                    {...field}
                                                    name={`skills.${index}.experience`}
                                                    options={skillExperienceOptions}
                                                    value={field.value}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            )
                        })}

                        <div className='flex justify-between  pt-6 mt-8 border-t-[1px]'>
                            <div className='flex justify-start gap-x-3 '>
                                {/* <Core.Button
                                    // onClick={handleNext}
                                    disabled={isSubmitting}
                                    type="narrow" submit
                                >Save</Core.Button> */}

                                {savingForm ?
                                    <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'><Spin /></div>
                                    :
                                    <Core.Button type="narrow" submit disabled={isSubmitting}>Save</Core.Button>
                                }

                                <Core.Button
                                    // onClick={handleBack} 
                                    type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                            </div>
                        </div>

                    </Form>
                )
            }}
        </Formik>
    );
};

export default SkillsEdit;
