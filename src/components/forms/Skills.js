import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';

const options = [
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
    { name: "6 months", value: "6months" },
    { name: "1 year", value: "1year" },
    { name: "2 years", value: "2years" },
    { name: "3 years", value: "3years" },
    { name: "4 years", value: "4years" },
    { name: "5 years", value: "5years" },
    { name: "6 years", value: "6years" },
    { name: "7 years", value: "7years" },
    { name: "8 years", value: "8years" },
    { name: "9 years", value: "9years" },
    { name: "10 years", value: "10years" },
    { name: "Over 10 years", value: "Over10" },
];

function Skills({ action, handleCancel, setCandidateProfileData, handleSenddata }) {

    const [data] = useState({
        // _id: "",
        title: '',
        experience: '',
        isDeleted: false,
    });

    const handleSubmit = (values) => {
        let _skillsData = {
            title: values?.title,
            experience: values?.experience,
            isDeleted: false,
        }
        setCandidateProfileData(prevData => ({
            ...prevData,
            skillsData: _skillsData,
        }));
        handleSenddata()
    };

    const multiSelectHandle = (title, setFieldValue) => {
        setFieldValue('title', title);
    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form>
                    <span className="block text-gray-400 opacity-70 my-5"><span className="text-[red] pr-2">*</span>indicates required</span>
                    <div className="mb-4">
                        <Field name="title">
                            {({ field }) => (
                                <MultiSelectInput
                                    {...field}
                                    mode={"single"}
                                    name={'title'}
                                    label
                                    options={options}
                                    onChange={(selectedSkills) => multiSelectHandle(selectedSkills, setFieldValue)}
                                />
                            )}
                        </Field>
                    </div>
                    <div className='mb-4'>
                        <Field name="experience">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"experience"}
                                    label
                                    options={skillExperienceOptions}
                                    defaultOption="Choose any one"
                                />
                            )}
                        </Field>
                    </div>

                    <div className='flex justify-between  pt-6 mt-8 border-t-[1px]'>
                        <div className='flex justify-start gap-x-3 '>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow" submit>Save</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                        {action === "edit" &&
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="red" onClick={handleCancel}>Delete</Core.Button>
                        }
                    </div>


                    {/* </div> */}
                </Form>
            )
            }
        </Formik >
    );
}

export default Skills;
