// Form2.js
import React, { useState } from 'react';
import { Core } from '../..';
import { Form, Formik, Field } from 'formik';
import dropdownOptions from '../../../data/dropdownOptions.json';

const {
    companyIndustries,
} = dropdownOptions;

function Form2({ onNext, profileData, validationSchema ,handleFinish}) {

    // console.log("profileData", profileData)

    const [data, setData] = useState({
        companyIndustry: profileData?.companyIndustry || null,
        description: profileData?.description || null,
    });

    const handleChange = (name, event) => {
        const value = event.target.value;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
        onNext({ [name]: value });
    };

    // console.log("onNext", onNext.data)

    // const handleSubmit = (values) => { }

    return (
        <Formik
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={handleFinish}
        >
            {() => (
                <Form>
                    <Core.Card className={'p-5'} w840 border>
                        <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Update Profile</h5>
                        <div className="mb-4">
                            <Field name="companyIndustry" >
                                {({ field }) => (
                                    <Core.SelectWithLabel
                                        {...field}
                                        name={"YourCompanysIndustry"}
                                        label
                                        edit
                                        value={data?.companyIndustry}
                                        options={companyIndustries}
                                        onChange={(value) => handleChange("companyIndustry", value)}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="mb-4">
                            <Field name="description">
                                {({ field }) => (
                                    <Core.TextAreaWithLabel
                                        {...field}
                                        name={"companyDescription"}
                                        label
                                        helperText="Adding a company description to a job posting can attract candidates who share the organization's values and vision"
                                        onChange={(value) => handleChange("description", value)}
                                    />
                                )}
                            </Field>
                        </div>
                    </Core.Card>
                </Form>
            )}
        </Formik >
    );
}

export default Form2;
