// Form2.js
import React, { useState } from 'react';
import { Core } from '../..';
import companyIndustries from '../../../utilis/companyIndustries';
import { Form, Formik, Field } from 'formik';

function Form2({ onNext, profileData }) {

    console.log("profileData", profileData)

    const [data] = useState({
        YourCompanysIndustry: profileData?.companyIndustry || null,
        companyDescription: profileData?.description || null,
    });

    const handleChange = (name, event) => {
        const value = event.target.value;
        onNext({ [name]: value });
    };

    console.log("onNext", onNext.data)

    const handleSubmit = (values) => {    }

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <Core.Card className={'p-5'} w840 boder>
                        <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Create an Employer Account</h5>
                        <div className="mb-4">
                            {/* <Core.SelectWithLabel
                    name={"YourCompanysIndustry"}
                    label="Company Industry"
                    options={companyIndustries}
                    onChange={(value) => handleChange("companyIndustry", value)}
                /> */}
                            <Field name="YourCompanysIndustry">
                                {({ field }) => (
                                    <Core.SelectWithLabel
                                        {...field}
                                        name={"YourCompanysIndustry"}
                                        label
                                        options={companyIndustries}
                                        onChange={(value) => handleChange("companyIndustry", value)}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="mb-4">
                            {/* <Core.TextAreaWithLabel
                    name={"companyDescription"}
                    label="Company Description"
                    helperText="Adding a company description to a job posting can attract candidates who share the organization's values and vision"
                    onChange={(value) => handleChange("description", value)}
                /> */}

                            {/* <Core.TextAreaWithLabel
                    name="summery"
                    label
                    {...field}
                    value={field.value}
                /> */}
                            <Field name="companyDescription">
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
