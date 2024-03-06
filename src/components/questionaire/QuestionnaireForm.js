import React, { useState } from 'react';
import { Core } from '..';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { CreateQuestionnairee, UpdateQuestionnaire } from "../../Slices/Employer/ManageQuestionairreSlice";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import notificationService from '../../utilis/notification';
import * as Yup from 'yup';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    positionOptions
} = dropdownOptions;

// const questionnaire = [
//     {
//         id: "1",
//         sNo: "01",
//         question: "What did you like most about your last position?",
//         position: "Manager",
//     }, 
// ];

const validationSchema = Yup.object().shape({
    // position: Yup.string().required('Position is required'),
    // emailContent: Yup.string().required('Email content is required'),
});

function QuestionnaireForm({ type }) {

    const questionaaire = useSelector((state) => state?.ManageQuestionaire?.data);

    const { id } = useParams();
    const navigate = useNavigate()

    let questionnaireToEdit;
    if (type === "edit") {
        questionnaireToEdit = questionaaire.find(item => item?._id === id);
    }

    // console.log("questionnaireToEdit", questionnaireToEdit)

    const [emailContent, setEmailContent] = useState(questionnaireToEdit?.question || '');
    const dispatch = useDispatch();

    const [savingForm, setSavingForm] = useState(false);

    const [data] = useState({
        position: questionnaireToEdit?.position || '',
        text: emailContent || '',
    });

    console.log("data", data)

    const handleSubmit = (values, actions) => {
        try {
            setSavingForm(true)

            let _quesionnaire = {
                position: values?.position,
                question: emailContent,
            }

            if (type === "edit") {
                console.log(type, "typeee")
                dispatch(UpdateQuestionnaire({ id: id, _quesionnaire }))
                    .unwrap()
                    .then(res => {
                        setSavingForm(false)
                        if (res.data) {
                            notificationService.success('Questionnaire Updated');
                            setTimeout(() => {
                                navigate("/employer/manage-questionnaire")
                            }, 3000)
                        }
                    })
                    .catch(err => {
                        setSavingForm(false)
                        if (err) {
                            notificationService.error('Uploading Failed');
                        }
                    })
                    .finally(() => { setSavingForm(false) })
            } else {
                dispatch(CreateQuestionnairee(_quesionnaire))
                    .unwrap()
                    .then(res => {
                        setSavingForm(false)
                        if (res) {
                            notificationService.success('Questionnaire Added');
                            setTimeout(() => {
                                navigate("/employer/manage-questionnaire")
                            }, 3000)
                        }
                    })
                    .catch(err => {
                        setSavingForm(false)
                        if (err) {
                            notificationService.error('Uploading Failed');
                        }
                    })
                    .finally(() => { setSavingForm(false) })
            }

        } catch (error) {
            console.log(error)
            setSavingForm(false);
        }
    };

    return (
        <Core.Card className={'p-5'} border>

            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>

                        <div className="mb-4">
                            <div className="max-w-[500px]">
                                <Field name="position">
                                    {({ field }) => (
                                        <Core.SelectWithLabel
                                            {...field}
                                            name={"position"}
                                            label
                                            options={positionOptions}
                                            defaultOption="Select Position"
                                            value={field.value}
                                        />
                                    )}
                                    {/* <ErrorMessage name='position' component='div' className='text-red-500' /> */}
                                </Field>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <Core.TextEditorWithLabel name={'emailContent'} height={"h-[300px]"} style={{ height: "84%" }} value={emailContent} setValue={setEmailContent} />
                            {/* <ErrorMessage name='emailContent' component='div' className='text-red-500' /> */}
                        </div>

                        <div className="mt-5 flex justify-start items-center gap-x-2">
                            {savingForm ?
                                <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                    <Spin />
                                </div>
                                : <Core.Button type="narrow" submit>Submit</Core.Button>}
                        </div>
                    </Form>
                )}
            </Formik>

        </Core.Card>
    );
}

export default QuestionnaireForm