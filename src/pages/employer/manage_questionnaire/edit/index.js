import React, { useState } from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, UserProfile, } from '../../../../components';
// import employersData from '../../../../data/employersData.json';
import { useSelector, useDispatch } from 'react-redux';
import { changeAppliedJobStatusEmployer } from '../../../../Slices/Employer/ManageCandidate';
import notificationService from '../../../../utilis/notification';
import { ToastContainer } from 'react-toastify';
import QuestionnaireForm from '../../../../components/questionaire/QuestionnaireForm';



const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Questionnaire" },
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
