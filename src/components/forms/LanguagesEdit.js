
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

const languagesOptions = [
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
    { name: 'Fluent', value: 'Fluent' }, ,
];

const LanguagesEdit = ({ handleCancel, setCandidateProfileData, savingForm }) => {

    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const languages = candidate.languagesData;
    // console.log("languages", languages)

    const initialValues = {
        languages: languages?.map(language => ({ id: language.id, title: language.title, proficiency: language.proficiency }))
    };

    const multiSelectHandle = (type, selectedItems, setFieldValue, id) => {
        const languageIndex = languages.findIndex(language => language.id === id);

        if (languageIndex !== -1) {
            const updatedlanguages = [...languages];
            updatedlanguages[languageIndex] = {
                ...updatedlanguages[languageIndex],
                title: selectedItems,
            };
            setFieldValue(type, updatedlanguages);
        }
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("values", values)
        
        // const _languagesData = values?.languages?.map(language => ({
        //     id: language?._id,
        //     title: language?.title,
        //     proficiency: language?.proficiency,
        // }));

        // console.log("_languagesData", _languagesData);

        // setCandidateProfileData(prevData => ({
        //     ...prevData,
        //     languagesData: _languagesData,
        // }));

        // handleSenddata()
        // setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ values, isSubmitting, setFieldValue }) => (
                <Form>
                    {values.languages?.map((language, index) => (
                        <div key={index}>
                            <div className='mb-2'>
                                <label
                                    name={`languages.${index}.title`}
                                    className={` flex justify-start text-[14px] font-medium text-gray-2 tracking-wide mb-2 font-semibold capitalize`}
                                >
                                    Language:
                                </label>
                                <Field name={`languages.${index}.title`}>
                                    {({ field }) => (
                                        <MultiSelectInput
                                            {...field}
                                            mode={"single"}
                                            name={`languages.${index}.title`}
                                            options={languagesOptions}
                                            onChange={(selectedItems) => multiSelectHandle("languages", selectedItems, setFieldValue, language?.id)}
                                            value={field.value}
                                            defaultValue={field.value}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className='mb-2'>
                                <label
                                    name={`languages.${index}.title`}
                                    className={` flex justify-start text-[14px] font-medium text-gray-2 tracking-wide mb-2 font-semibold capitalize`}
                                >
                                    Proficiency:
                                </label>
                                <Field name={`languages.${index}.proficiency`}>
                                    {({ field }) => (
                                        <Core.SelectWithLabel
                                            {...field}
                                            name={`languages.${index}.proficiency`}
                                            options={languageProficiencyOptions}
                                            value={field.value}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                    ))}

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
            )}
        </Formik>
    );
};

export default LanguagesEdit;
