import React, { useState } from 'react';
import { Core } from '..';
import { Formik, Form, Field } from 'formik';
import { Spin } from 'antd';


import { useNavigate, useParams } from "react-router-dom";

const positionOptions = [
    { name: "Manager", value: "Manager" },
    { name: "Sales Manager", value: "Sales Manager" },
    { name: "Business Analyst", value: "Business Analyst" },
    { name: "Engineer", value: "Engineer" },
    { name: "Accounting", value: "Accounting" },
    { name: "Management", value: "Management" },
];

const questionnaire = [
    {
        id: "1",
        sNo: "01",
        question: "What did you like most about your last position?",
        position: "Manager",
    },
    {
        id: "2",
        sNo: "02",
        question: "What did you like least about your last position?",
        position: "Business Analyst",
    },
    {
        id: "3 ",
        sNo: "03",
        question: "Can you tell me about a difficult work situation and how you overcame it?",
        position: "Engineer",
    },
    {
        id: "4",
        sNo: "04",
        question: "How do you respond to stress or change?",
        position: "Sales Manager",
    },
    {
        id: "5",
        sNo: "05",
        question: "How do you handle conflict at work?",
        position: "Accounting",
    },
    {
        id: "6",
        sNo: "06",
        question: "What is your greatest accomplishment?",
        position: "Management",
    },
];

function QuestionnaireForm({ type }) {

    const { id } = useParams();

    let questionnaireToEdit;
    if (type === "edit") {
        questionnaireToEdit = questionnaire.find(item => item?.id === id);
    }

    // console.log("questionnaireToEdit", questionnaireToEdit)

    const [emailContent, setEmailContent] = useState(questionnaireToEdit?.question || '');
    const [savingForm, setSavingForm] = useState(false);

    const [data] = useState({
        position: questionnaireToEdit?.position || '',
        text: emailContent || '',
    });

    console.log("data", data)

    const handleSubmit = (values, actions) => {
        // setSavingForm(true)
        console.log("values", values)

        let _quesionnaire = {
            position: values?.position,
            text: emailContent,
        }

        console.log("_quesionnaire", _quesionnaire)
        // setSavingForm(false)
    };

    return (
        <Core.Card className={'p-5'} border>

            <Formik
                initialValues={data}
                // validationSchema={validationSchema}
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
                                </Field>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <Core.TextEditorWithLabel name={'emailContent'} height={"h-[300px]"} style={{ height: "84%" }} value={emailContent} setValue={setEmailContent} />
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