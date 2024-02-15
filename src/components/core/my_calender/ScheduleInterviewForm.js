import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Spin } from 'antd';
import { Core } from '../..';
import { useDispatch, useSelector } from 'react-redux';
import { addInterview } from '../../../Slices/Employer/interviewSchuleSlice';
import moment from 'moment';


// data = {
//     attachments: "C:\\fakepath\\Amin Noor (1).pdf",
//     scheduledDate: "2024-02-02",
//     endTime: "16:40",
//     description: "2",
//     location: "2",
//     startTime: "14:40"
// }

function ScheduleInterviewForm({ setIsModalOpen, type, handleCancel, eventToEdit }) {
    // const formattedDate = moment(start).format('MM/DD/YY');
    const formattedStartTime = moment(eventToEdit?.start).format('HH:mm');
    const formattedEndTime = moment(eventToEdit?.end).format('HH:mm');

    const [data] = useState({
        end: formattedEndTime || '',
        start: formattedStartTime || '',
        description: eventToEdit?.description || '',
        title: eventToEdit?.title || '',
        type: eventToEdit?.type || '',
        jobLocation: eventToEdit?.location || '',
        scheduledDate: eventToEdit?.scheduledDate,
        startTime: eventToEdit?.startTime,
        endTime: eventToEdit?.endTime,
    });

    // console.log(data, "data")

    const [savingForm, setSavingForm] = useState(false);
    const [approval, setApproval] = useState(false);
    const AppliedJobCandidate = useSelector((state) => state?.manageCandidate?.jobs);

    // console.log(AppliedJobCandidate, "AppliedJobCandidate")

    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        try {
            console.log(values, "values354")
            if (type !== "candidate") {
                setSavingForm(true);
                // console.log(AppliedJobCandidate, "apllieddataaaaaaaaa")
                // console.log(values, "valuesssss")
                dispatch(addInterview({
                    jobId: AppliedJobCandidate[0]?.jobId,
                    candidateId: AppliedJobCandidate[0]?.candidateId,
                    attachments: values?.attachments,
                    scheduledDate: values?.scheduledDate,
                    endTime: values?.endTime,
                    description: values?.description,
                    location: values?.jobLocation,
                    startTime: values?.startTime
                })).unwrap().then(x => console.log(x)).catch(err => console.log(err));
                // functionality
                setSavingForm(false);
                setIsModalOpen(false);
            }
            else {
                console.log("approval", approval)



                // setSavingForm(false);
                // setIsModalOpen(false);
            }

        } catch (error) {
            console.log(error)
        }
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
                                    disabled={type === "candidate" ? true : false}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="description">
                            {({ field }) => (
                                <Core.TextAreaWithLabel
                                    name="description"
                                    label
                                    {...field}
                                    value={field.value}
                                    rows={5}
                                    disabled={type === "candidate" ? true : false}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="scheduledDate">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="scheduledDate"
                                    label
                                    edit
                                    disabled={type === "candidate" ? true : false}
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
                                            disabled={type === "candidate" ? true : false}
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
                                            disabled={type === "candidate" ? true : false}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Field name="attachments">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="attachments"
                                    label
                                    edit
                                    disabled={type === "candidate" ? true : false}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>
                        {type === "candidate" ?
                            <>
                                {savingForm ?
                                    <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                        <Spin />
                                    </div>
                                    : <Core.Button type="narrow" submit
                                        onClick={() => setApproval(true)}
                                    >Accept</Core.Button>}
                                <Core.Button type="narrow" color="white" submit onClick={() => setApproval(false)}>Decline</Core.Button>
                            </>
                            :
                            <>
                                {savingForm ?
                                    <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                        <Spin />
                                    </div>
                                    : <Core.Button type="narrow" submit>Save</Core.Button>}
                            </>
                        }

                    </div>

                </Form>
            )}
        </Formik >
    );
}

export default ScheduleInterviewForm;
