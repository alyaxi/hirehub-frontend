import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';

function Languages({ action, handleCancel }) {
    const options = [
        { label: 'English', value: 'English' },
        { label: 'Spanish', value: 'Spanish' },
        { label: 'French', value: 'French' },
        { label: 'German', value: 'German' },
        { label: 'Chinese', value: 'Chinese' },
      ];
      
      const languageProficiencyOptions = [
        { name: 'Basic', value: 'basic' },
        { name: 'Intermediate', value: 'intermediate' },
        { name: 'Advanced', value: 'advanced' },
        { name: 'Fluent', value: 'fluent' },
      ];
    
    const [data] = useState({
        languages: '',
        languageProficiency: '',
    });

    const handleSubmit = (values, actions) => {
        console.log(values);
    };

    const multiSelectHandle = (languages, setFieldValue) => {
        setFieldValue('languages', languages);
    };

    console.log("data", data)
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
                        <Field name="languageProficiency">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"languageProficiency"}
                                    label="languageProficiency"
                                    options={languageProficiencyOptions}
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

export default Languages;
