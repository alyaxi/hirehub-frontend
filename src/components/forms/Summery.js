import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';

const summery = {
    text: "Including a summery in your job application provides a brief overview of your qualifications, skills, and career goals, helping recruiters assess your fit for the position.",
}

function Summery({ action, handleCancel, setSummeryData }) {

    const [data] = useState({ summery: summery.text });

    const handleSubmit = (values) => {
        console.log('data', values);
        setSummeryData(values)
    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>

                    <Field name="summery">
                        {({ field }) => (
                            <Core.TextAreaWithLabel
                                name="summery"
                                label
                                {...field}
                                value={field.value}
                            />
                        )}
                    </Field>

                    {action === "edit" &&
                        <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow" submit>Save</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                    }
                    
                </Form>
            )
            }
        </Formik >
    );
}

export default Summery;
