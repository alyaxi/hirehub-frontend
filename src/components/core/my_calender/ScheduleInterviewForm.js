import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Spin } from 'antd';
import { Core } from '../..';

// data = {
//     attachDocument: "C:\\fakepath\\Amin Noor (1).pdf",
//     date: "2024-02-02",
//     endTime: "16:40",
//     inviteDescription: "2",
//     jobLocation: "2",
//     startTime: "14:40"
// }

function ScheduleInterviewForm({ setIsModalOpen }) {

    const [data] = useState({});
    const [savingForm, setSavingForm] = useState(false);

    const handleSubmit = (values) => {
        setSavingForm(true);
        console.log(values, "valuesssss")
        // functionality
        setSavingForm(false);
        setIsModalOpen(false);
    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className='mb-4'>
                        <Field name="jobLocation">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="jobLocation"
                                    label
                                    edit
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="inviteDescription">
                            {({ field }) => (
                                <Core.TextAreaWithLabel
                                    name="inviteDescription"
                                    label
                                    {...field}
                                    value={field.value}
                                    rows={5}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="date">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="date"
                                    label
                                    edit
                                />
                            )}
                        </Field>
                    </div>

                    <div className='w-full mb-4'>
                        <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                            Select Time
                        </label>
                        <div className='flex gap-x-2'>
                            <div className='w-[50%]'>
                                <Field name="startTime">
                                    {({ field }) => (
                                        <Core.InputWithLabel
                                            {...field}
                                            sm
                                            name="startTime"
                                            edit
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className='w-[50%]'>
                                <Field name="endTime">
                                    {({ field }) => (
                                        <Core.InputWithLabel
                                            {...field}
                                            sm
                                            name="endTime"
                                            // label
                                            edit
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Field name="attachDocument">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="attachDocument"
                                    label
                                    edit
                                />
                            )}
                        </Field>
                    </div>

                    <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>
                        {savingForm ?
                            <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                <Spin />
                            </div>
                            : <Core.Button type="narrow" submit>Save</Core.Button>}
                        {/* <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button> */}
                    </div>

                </Form>
            )}
        </Formik >
    );
}

export default ScheduleInterviewForm;
