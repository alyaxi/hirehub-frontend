import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Spin } from 'antd';
import { Core } from '../..';
import { useDispatch, useSelector } from 'react-redux';
import { addInterview } from '../../../Slices/Employer/interviewSchuleSlice';
import moment from 'moment';
import { UpdateInterviewsCandidate } from '../../../Slices/Candidates/CandidateInterviewSlice';
import notificationService from '../../../utilis/notification';
import { ToastContainer } from 'react-toastify';


function ScheduleInterviewForm({ setIsModalOpen, type, eventToEdit }) {
    const [savingForm, setSavingForm] = useState(false);
    const [approval, setApproval] = useState(false);
    const AppliedJobCandidate = useSelector((state) => state?.manageCandidate?.jobs);
    const dispatch = useDispatch();
    console.log("eventToEdit", eventToEdit)

    const [initialFormValues, setInitialFormValues] = useState({});

    useEffect(() => {
        if (eventToEdit) {
            setInitialFormValues({
                description: eventToEdit?.description || '',
                location: eventToEdit?.location || '',
                scheduledDate: eventToEdit?.scheduledDate || '',
                startTime: eventToEdit?.startTime || '',
                endTime: eventToEdit?.endTime || '',
            });
        } else {
            setInitialFormValues({});
        }
    }, [eventToEdit]);


    const handleSubmit = (values) => {
        try {
            setSavingForm(true);
            if (type !== "candidate") {
                dispatch(addInterview({
                    jobId: AppliedJobCandidate[0]?.jobId,
                    candidateId: AppliedJobCandidate[0]?.candidateId,
                    attachments: values?.attachments,
                    scheduledDate: values?.scheduledDate,
                    description: values?.description,
                    location: values?.location,
                    startTime: values?.startTime,
                    endTime: values?.endTime
                })).unwrap().then(x => {
                    if (x?.data) {

                        notificationService.success("Interview has been scheduled")
                    }
                }).catch(err => console.log(err));
            } else {
                const actionToDispatch = approval ? "Accepted" : "Declined";
                dispatch(UpdateInterviewsCandidate({ approvalInvite: actionToDispatch, id: eventToEdit?._id })).unwrap().then(x => {
                    if (x?.data) {

                        notificationService.success("Interview has been updated")
                    }
                }).catch(err => console.log(err));
            }
            setSavingForm(false);
            setIsModalOpen(false);
        } catch (error) {
            console.log(error)
        }
    };

    let isDisableFields = type === "candidate" || Object.keys(eventToEdit).length !== 0;

    console.log("isDisableFields", isDisableFields)

    console.log("initialFormValues", initialFormValues)



    // console.log('initialFormValues?.description', initialFormValues?.description)
    // console.log('initialFormValues?.location', initialFormValues?.location)
    // console.log('initialFormValues?.scheduledDate', initialFormValues?.scheduledDate)
    // console.log('initialFormValues?.startTime', initialFormValues?.startTime)
    // console.log('initialFormValues?.endTime', initialFormValues?.endTime)

    // let isDisableButton =
    //     initialFormValues?.description === "" ||
    //     initialFormValues?.location === "" ||
    //     initialFormValues?.scheduledDate === "" ||
    //     initialFormValues?.startTime === "" ||
    //     initialFormValues?.endTime === "";


    // console.log("isDisableButton", isDisableButton)

    return (
        <div>
            
            <Formik
                initialValues={initialFormValues}
                enableReinitialize={true}
                onSubmit={handleSubmit}
            >
                {({ values }) => {
                    console.log("44 values", values)

                    let isDisableButton =
                        (values?.description === "" ||
                            values?.location === "" ||
                            values?.scheduledDate === "" ||
                            values?.startTime === "" ||
                            values?.endTime === "") ? true : false;

                    return (
                        <Form>
                            {/* Your form fields */}
                            <div className='mb-4'>
                                <Field name="location">
                                    {({ field }) => (
                                        <Core.InputWithLabel
                                            {...field}
                                            sm
                                            name="location"
                                            label
                                            edit
                                            value={values?.location}
                                            disabled={isDisableFields ? true : false}
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className='mb-4'>
                                <Field name="description">
                                    {({ field }) => (
                                        <Core.TextAreaWithLabel
                                            rows={5}
                                            {...field}
                                            sm
                                            name="description"
                                            label
                                            value={values?.description}
                                            disabled={isDisableFields ? true : false}
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
                                            value={values?.scheduledDate}
                                            disabled={isDisableFields ? true : false}
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
                                                    // label
                                                    edit
                                                    value={values?.startTime}
                                                    disabled={isDisableFields ? true : false}
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
                                                    value={values?.endTime}
                                                    disabled={isDisableFields ? true : false}
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
                                            // edit 
                                            value={values?.attachments}
                                            disabled={isDisableFields ? true : false}
                                        />
                                    )}
                                </Field>
                            </div>

                            {/* Save/Submit buttons */}
                            <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>
                                {type === "candidate" &&
                                    <>
                                        {savingForm ?
                                            <div className='flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'><Spin /></div>
                                            :
                                            <Core.Button type="narrow" submit onClick={() => setApproval(true)} isDisabled={eventToEdit?.approvalInvite === "Declined"} >Accept</Core.Button>
                                        }
                                        <Core.Button type="narrow" color="white" submit onClick={() => setApproval(false)} isDisabled={eventToEdit?.approvalInvite === "Declined"}>Decline</Core.Button>
                                    </>
                                }
                                {(type !== "candidate" && type !== "admin" && eventToEdit?.approvalInvite !== "Accepted" && eventToEdit?.approvalInvite !== "Declined" && isDisableFields === false) &&
                                    <>
                                        {savingForm ?
                                            <div className='flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                                <Spin />
                                            </div>
                                            : <Core.Button type="narrow" submit isDisabled={isDisableButton}>Save</Core.Button>
                                        }
                                    </>
                                }
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>

    );
}

export default ScheduleInterviewForm;
