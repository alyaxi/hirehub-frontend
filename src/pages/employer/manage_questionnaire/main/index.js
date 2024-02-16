import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import { useNavigate } from "react-router-dom"
// import { getAppliedJobByCandidate } from '../../../../Slices/Employer/ManageCandidate';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteQuestionnaire, GetQuestionnaire } from '../../../../Slices/Employer/ManageQuestionairreSlice';


const actions = {
    edit: true,
    delete: true,
};

const columns = [
    {
        title: 'S. No',
        key: 'sNo',
        dataIndex: 'sNo',
        sorter: true,
    }, {
        title: 'Question',
        key: 'question',
        dataIndex: 'question',
    }, {
        title: 'Position',
        key: 'position',
        dataIndex: 'position',
    }, {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
    },
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

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Questionnaire" },
];

function MainQuestionnaireEmployer() {
    const [product, setProduct] = useState("");
    const dispatch = useDispatch();
    const questionaaire = useSelector((state) => state?.ManageQuestionaire?.data);
    const reload = useSelector((state) => state?.ManageQuestionaire?.reload);


    const navigate = useNavigate();


    useEffect(() => {
        try {

            dispatch(GetQuestionnaire()).unwrap().then(res => {
                console.log("Successfully fetched data", res);



            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)

        }


    }, [reload])

    

    // const onViewClick = (id) => {
    //     navigate(`/employer/manage-candidates/view/${id}`);
    // };
    const onEditClick = (id) => {
        console.log(id, "idddededed")
        navigate(`/employer/manage-questionnaire/edit/${id}`);
    };
    const onDeleteClick = (id) => {
        dispatch(DeleteQuestionnaire(id)).unwrap().then(res => {console.log(res)}).catch(err => { console.log(err)})
    };
    const addQuestion = () => {
        navigate(`/employer/manage-questionnaire/add`);
    };

    console.log("product", product);

    return (
        <>
            <Breadcrumb
                heading="Manage Questionnaire"
                breadcrumb={breadcrumb}
            />
            <TableB
                data={questionaaire}
                columns={columns}
                filterBy={[
                    "SearchByProduct",
                ]}
                setProduct={setProduct}
                actions={actions}
                // onViewClick={onViewClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                addQuestion={addQuestion}
            />
        </>
    );
}

export default MainQuestionnaireEmployer;
