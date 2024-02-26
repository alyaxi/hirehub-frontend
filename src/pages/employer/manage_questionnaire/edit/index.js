import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { ToastContainer } from 'react-toastify';
import QuestionnaireForm from '../../../../components/questionaire/QuestionnaireForm';

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Questionnaire", link: "/employer/manage-questionnaire" },
    { label: "Edit" },
];

function EditQuestionnaireEmployer() {
    return (
        <>
            <ToastContainer></ToastContainer>
            <Breadcrumb
                heading="Edit Questionnaire"
                breadcrumb={breadcrumb}
            />
            <QuestionnaireForm type="edit" />
        </>
    );
}

export default EditQuestionnaireEmployer;
