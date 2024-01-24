import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';

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

const LanguagesEdit = ({ handleCancel }) => {
    const [languages] = useState([
        {
            id: 1,
            title: 'English',
            proficiency: 'Basic',
        },
        {
            id: 2,
            title: 'Spanish',
            proficiency: 'Intermediate',
        },
        {
            id: 3,
            title: 'French',
            proficiency: 'Advanced',
        },
        {
            id: 4,
            title: 'German',
            proficiency: 'Advanced',
        },
    ]);

    const initialValues = {
        languages: languages.map(language => ({ id: language.id, title: language.title, proficiency: language.proficiency }))
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
        console.log("submit",values.languages);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ values, isSubmitting, setFieldValue }) => (
                <Form>
                    {values.languages.map((language, index) => (
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
                            <Core.Button
                                // onClick={handleNext}
                                disabled={isSubmitting}
                                type="narrow" submit
                            >Save</Core.Button>
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
