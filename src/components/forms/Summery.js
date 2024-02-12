import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

function Summery({ action, handleCancel,
    setCandidateProfileData, handleSenddata, savingForm
}) {
    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const summeryDataSavedOnDb = candidate?.summery

    const [data] = useState({
        summery: summeryDataSavedOnDb?.text
    });

    const handleSubmit = (values) => {
        console.log(values, "valuesssss")
        setCandidateProfileData(prevData => ({
            ...prevData,
            summery: { text: values.summery, }
        }));
        // setCandidateProfileData(prevData => ({
        //     ...prevData,

        // }));
        // handleSenddata( {summery: {text: values.summery,}})
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
                            {savingForm ?
                                <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                    <Spin />
                                </div>
                                : <Core.Button type="narrow" submit>Save</Core.Button>}
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>


                            {/* <Core.Button >Cancel</Core.Button>
                            <button>cancel</button> */}
                        </div>
                    }

                </Form>
            )}
        </Formik>
    );
}

export default Summery;
