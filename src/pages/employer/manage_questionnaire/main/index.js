import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { DeleteQuestionnaire, GetQuestionnaire } from '../../../../Slices/Employer/ManageQuestionairreSlice';
import notificationService from '../../../../utilis/notification';
import { ToastContainer } from 'react-toastify';

const actions = {
    edit: true,
    delete: true,
};

const columns = [
    {
        title: 'S.No',
        key: 'sNo',
        dataIndex: 'sNo',
        sorter: (a, b) => {
            if (!a.sNo || !b.sNo) {
                return 0;
            }
            return a.sNo - b.sNo;
        },
        defaultSortOrder: 'descend',
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

// const questionnaire = [
//     {
//         id: "1",
//         sNo: "01",
//         question: "What did you like most about your last position?",
//         position: "Manager",
//     }, 
// ];

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Questionnaire" },
];

function MainQuestionnaireEmployer() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const questionaaire = useSelector((state) => state?.ManageQuestionaire?.data);
    const reload = useSelector((state) => state?.ManageQuestionaire?.reload);

    const [product, setProduct] = useState("");

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

    const onEditClick = (id) => {
        console.log(id, "idddededed")
        navigate(`/employer/manage-questionnaire/edit/${id}`);
    };

    const onDeleteClick = (id) => {
        dispatch(DeleteQuestionnaire(id))
            .unwrap()
            .then(res => {
                if (res) {
                    notificationService.success('Questionnaire Deleted.');
                }
            })
            .catch(err => {
                if (err) {
                    notificationService.error('Deletion Failed.');
                }
            })
    };

    const addQuestion = () => {
        navigate(`/employer/manage-questionnaire/add`);
    };

    // console.log("product", product);

    const _questionaaire = questionaaire?.map((item, index) => {
        return {
            ...item,
            sNo: index + 1
        }
    })

    return (
        <>
            <ToastContainer></ToastContainer>
            <Breadcrumb
                heading="Manage Questionnaire"
                breadcrumb={breadcrumb}
            />
            <TableB
                data={_questionaaire}
                columns={columns}
                filterBy={[
                    "SearchByProduct",
                ]}
                setProduct={setProduct}
                actions={actions}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                addQuestion={addQuestion}
            />
        </>
    );
}

export default MainQuestionnaireEmployer;
