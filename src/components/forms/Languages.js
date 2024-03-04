import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    languagesOptions,
    languageProficiencyOptions
} = dropdownOptions;

function Languages({ action, handleCancel, id, setCandidateProfileData, savingForm }) {

    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const languages = candidate?.languagesData;

    // console.log("vv languages form action", action)
    // console.log("vv languages form id", id)

    // console.log("vv candidate", candidate)

    const languageToEdit = languages?.find(language => language?._id === id);

    // console.log("vv languageToEdit", languageToEdit)
    // console.log("vv languageToEdit.title", languageToEdit?.title)
    // console.log("vv languageToEdit.proficiency", languageToEdit?.proficiency)

    const [data] = useState(action === "add" ? {} : {
        _id: languageToEdit?._id || "",
        title: languageToEdit?.title || "",
        proficiency: languageToEdit?.proficiency || "",
        isDeleted: languageToEdit?.isDeleted || false,
    });

    // const [data] = useState({
    //     // _id: "",
    //     title: '',
    //     proficiency: '',
    //     isDeleted: false,
    // });

    // console.log("vv data", data)

    const handleSubmit = (values) => {
        let _languagesData = {
            title: values?.title,
            proficiency: values?.proficiency,
            isDeleted: languageToEdit?.isDeleted ? languageToEdit?.isDeleted : false,
        }

        let languageData;

        if (action === "add") {
            console.log("vv add _languagesData", _languagesData)
            setCandidateProfileData(prevData => ({
                ...prevData,
                languagesData: _languagesData,
            }));
        }
        else {
            console.log("vv else _languagesData", _languagesData)
            languageData = languages?.map((language) => {
                if (language._id === id) {
                    return _languagesData
                } else {
                    return language
                }
            })
            console.log("vv else languageData", languageData)
            setCandidateProfileData({
                languagesData: languageData,
            });
        }
    };

    const multiSelectHandle = (title, setFieldValue) => {
        setFieldValue('title', title);
    };

    const deleteItem = (id) => {
        console.log('to be deleted', id)
        handleCancel()
    }

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
                        <span className="block text-gray-400 opacity-70 my-5"><span className="text-[red] pr-2">*</span>Required fields</span>
                        <div className="mb-4">
                            <Field name="languages">
                                {({ field }) => (
                                    <MultiSelectInput
                                        {...field}
                                        mode={"single"}
                                        name={'languages'}
                                        label
                                        options={languagesOptions}
                                        onChange={(selectedLanguages) => multiSelectHandle(selectedLanguages, setFieldValue)}
                                        defaultValue={values?.title}
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
                                <Core.Button type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                            </div>
                            {action === "edit" &&
                                <Core.Button onClick={() => deleteItem(id)} type="narrow" color="red" >Delete</Core.Button>
                            }
                        </div>
                    </Form>
                )
            }
            }
        </Formik >
    );
}

export default Languages;
