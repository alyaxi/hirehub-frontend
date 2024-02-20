import React, { useState } from 'react';
import { Breadcrumb } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import { useNavigate } from "react-router-dom"

const actions = {
    edit: true,
    view: true,
};

const columns = [
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        align: 'center',
    },
    //  {
    //     title: 'Process',
    //     key: 'process',
    //     dataIndex: 'process',
    // },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        align: 'center',
    },
];

const questionnaire = [
    {
        id: "1",
        sNo: "01",
        status: "active",
        process: "In review",
    },
    {
        id: "2",
        sNo: "02",
        status: "inactive",
        process: "Job Applied",
    },
    {
        id: "3 ",
        sNo: "03",
        status: "active",
        process: "Shortlisted",
    },
    {
        id: "4",
        sNo: "04",
        status: "active",
        process: "Regretted",
    },
    {
        id: "5",
        sNo: "05",
        status: "inactive",
        process: "Interview Process",
    },
    {
        id: "6",
        sNo: "06",
        status: "inactive",
        process: "Regretted",
    },
];

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Email Templates" },
];

function EmailTemplatesAdmin() {
    const [emailProcess, setEmailProcess] = useState("");

    const navigate = useNavigate();

    const onViewClick = (id) => {
        navigate(`/employer/manage-candidates/view/${id}`);
    };
    const onEditClick = (id) => {
        navigate(`/employer/manage-candidates/edit/${id}`);
    };

    console.log("emailProcess", emailProcess);

    return (
        <>
            <Breadcrumb
                heading="Email Templates"
                breadcrumb={breadcrumb}
            />
            <TableB
                data={questionnaire}
                columns={columns}
                filterBy={[
                    // "SearchByProduct",
                    "SearchByEmailProcess",
                ]}
                setEmailProcess={setEmailProcess}
                actions={actions}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                tableId="email_template"
            />
        </>
    );
}

export default EmailTemplatesAdmin;
