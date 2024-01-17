import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';

function Projects({ action, handleCancel }) {
    

    const [data, setData] = useState({
        name: '',
        lastName: '',
        // Add other fields here
    });

    const handleSubmit = (values, actions) => {
        // Handle form submission here using the `values` object
        console.log(values);
        // actions.setSubmitting(false); // Reset the submit state
    };
    console.log("data", data)
    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>

                    upload image

                    <div className='mb-4'>
                        <Field name="name">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    name="name"
                                    // label="Name"
                                    label
                                    placeholder="Enter your name"
                                />
                            )}
                        </Field>
                    </div>
                    <div className='mb-4'>
                        <Field name="projectUrl">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    name="projectUrl"
                                    // label="Project URL"
                                    label
                                />
                            )}
                        </Field>
                    </div>
                    start date
                    end date
                    Associated
                    Description

                    {/* {action === "edit" && */}
                    <div className='flex justify-between  pt-6 mt-8 border-t-[1px]'>
                        <div className='flex justify-start gap-x-3 '>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow" submit>Save</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                        <Core.Button
                            // onClick={handleBack} 
                            type="narrow" color="white" onClick={handleCancel}>Delete Project</Core.Button>
                    </div>
                    {/* } */}

                    {/* </div> */}
                </Form>
            )}
        </Formik>
    );
}

export default Projects;
