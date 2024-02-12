import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';
import { Spin } from 'antd';

const options = [
    { label: 'English', value: 'English' },
    { label: 'Spanish', value: 'Spanish' },
    { label: 'French', value: 'French' },
    { label: 'German', value: 'German' },
    { label: 'Chinese', value: 'Chinese' },
];

const languageProficiencyOptions = [
    { name: 'Basic', value: 'Basic' },
    { name: 'Intermediate', value: 'Intermediate' },
    { name: 'Advanced', value: 'Advanced' },
    { name: 'Fluent', value: 'Fluent' },
];

function Languages({ action, handleCancel, setCandidateProfileData, handleSenddata, savingForm }) {

    const [data] = useState({
        // _id: "",
        title: '',
        proficiency: '',
        isDeleted: false,
    });

    const handleSubmit = (values, actions) => {
        let _languagesData = {
            title: values?.title,
            proficiency: values?.proficiency,
            isDeleted: false,
        }
        setCandidateProfileData(prevData => ({
            ...prevData,
            languagesData: _languagesData,
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
                        <Field name="languages">
                            {({ field }) => (
                                <MultiSelectInput
                                    {...field}
                                    mode={"single"}
                                    name={'languages'}
                                    label
                                    options={options}
                                    onChange={(selectedLanguages) => multiSelectHandle(selectedLanguages, setFieldValue)}
                                />
                            )}
                        </Field>
                    </div>
                    <div className='mb-4'>
                        <Field name="proficiency">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"proficiency"}
                                    label
                                    options={languageProficiencyOptions}
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

export default Languages;
