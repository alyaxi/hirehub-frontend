import React, {  useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

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

function Skills({ action, handleCancel, id, setCandidateProfileData, savingForm, }) {

    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const skills = candidate?.skillsData;

    // console.log("vv skills form action", action)
    // console.log("vv skills form id", id)

    // console.log("vv candidate", candidate)

    const skillToEdit = skills?.find(skill => skill?._id === id);

    // console.log("vv skillToEdit", skillToEdit)

    const [data] = useState(action === "add" ? {} : {
        _id: skillToEdit?._id || "",
        title: skillToEdit?.title || "",
        experience: skillToEdit?.experience || "",
        isDeleted: skillToEdit?.isDeleted || false,
    });

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     const initialData = {
    //         _id: skillToEdit?._id || "",
    //         title: skillToEdit?.title || "",
    //         experience: skillToEdit?.experience || "",
    //         isDeleted: skillToEdit?.isDeleted || false,
    //     };
    //     setData(initialData);
    // }, [action, skillToEdit]);

    // console.log("vv data", data)

    const handleSubmit = (values) => {
        let _skillsData = {
            title: values?.title,
            experience: values?.experience,
            isDeleted: skillToEdit?.isDeleted ? skillToEdit?.isDeleted : false,
        }

        let skillData;

        if (action === "add") {
            // console.log("vv add _skillsData", _skillsData)
            setCandidateProfileData(prevData => ({
                ...prevData,
                skillsData: _skillsData,
            }));
        }
        else {
            // console.log("vv else _skillsData", _skillsData)
            skillData = skills?.map((skill) => {
                if (skill._id === id) {
                    return _skillsData
                } else {
                    return skill
                }
            })
            // console.log("vv else skillData", skillData)
            setCandidateProfileData({
                skillsData: skillData,
            });
        }
    };

    const multiSelectHandle = (title, setFieldValue) => {
        setFieldValue('title', title);
    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={handleSubmit}
        >
            {({ values, setFieldValue }) => {
                // console.log("vv values", values)
                return (
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
                                        defaultValue={values?.title}
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
                                {savingForm ?
                                    <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                        <Spin />
                                    </div>
                                    : <Core.Button type="narrow" submit>Save</Core.Button>}
                                <Core.Button type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                            </div>
                        </div>
                    </Form>
                )
            }
            }
        </Formik >
    );
}

export default Skills;
