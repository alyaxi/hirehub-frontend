import React, { useState } from 'react';
import { Breadcrumb } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import { useNavigate } from "react-router-dom"
import AddQuestionnaire from '../../../../components/questionaire/AddQuestionaire';
// import { getAppliedJobByCandidate } from '../../../../Slices/Employer/ManageCandidate';
// import { useDispatch, useSelector } from 'react-redux';

// const actions = {
//     edit: true,
//     delete: true,
// };

// const columns = [
//     {
//         title: 'S. No',
//         key: 'sNo',
//         dataIndex: 'sNo',
//         sorter: true,
//     }, {
//         title: 'Question',
//         key: 'question',
//         dataIndex: 'question',
//     }, {
//         title: 'Position',
//         key: 'position',
//         dataIndex: 'position',
//     }, {
//         title: 'Action',
//         key: 'action',
//         dataIndex: 'action',
//     },
// ];

// const questionnaire = [
//     {
//         id: "1",
//         sNo: "01",
//         question: "What did you like most about your last position?",
//         position: "Manager",
//     },
//     {
//         id: "2",
//         sNo: "02",
//         question: "What did you like least about your last position?",
//         position: "Business Analyst",
//     },
//     {
//         id: "3 ",
//         sNo: "03",
//         question: "Can you tell me about a difficult work situation and how you overcame it?",
//         position: "Engineer",
//     },
//     {
//         id: "4",
//         sNo: "04",
//         question: "How do you respond to stress or change?",
//         position: "Sales Manager",
//     },
//     {
//         id: "5",
//         sNo: "05",
//         question: "How do you handle conflict at work?",
//         position: "Accounting",
//     },
//     {
//         id: "6",
//         sNo: "06",
//         question: "What is your greatest accomplishment?",
//         position: "Management",
//     },
// ];

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Questionnaire" },
    { label: "Add" },
];

function AddQuestionnaireEmployer() {
    const [product, setProduct] = useState("");
 

    console.log("product", product);

    return (
        <>
            <Breadcrumb
                heading="Add Questionnaire"
                breadcrumb={breadcrumb}
            />
            <AddQuestionnaire />
        </>
    );
}

export default AddQuestionnaireEmployer;
