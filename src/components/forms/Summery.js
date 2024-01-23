import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';

function Summery({ action, handleCancel }) {

    const [data] = useState({});

    const handleSubmit = (values) => {
        console.log('data', values);
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
                    {/* </div> */}
                </Form>
            )
            }
        </Formik >
    );
}

export default Summery;
