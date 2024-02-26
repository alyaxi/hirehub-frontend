import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Rejected Employers" },
];

const actions = {
    view: true,
    edit: true,
    delete: true,
};

function MainRejectedEmployers() {
    const employersTableData = useSelector((state) => state?.admin?.employersDataTable);
    const navigate = useNavigate()


    const columns = [
        {
            title: 'Employer Name',
            dataIndex: 'companyName',
            key: 'companyName',
            sorter: (a, b) => {
                if (!a.companyName || !b.companyName) {
                    return 0;
                }
                return a.companyName.localeCompare(b.companyName);
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => {
                if (!a.email || !b.email) {
                    return 0;
                }
                return a.email.localeCompare(b.email);
            },
        },
        {
            title: 'Account Status',
            dataIndex: 'account',
            key: 'account',
            sorter: (a, b) => {
                if (!a.account || !b.account) {
                    return 0;
                }
                return a.account.localeCompare(b.account);
            },
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
        },
    ];

    const statusToFilter = 'Rejected';
    const filteredData = employersTableData.filter(item => item.isVerified === statusToFilter);
    
    const onViewClick = (id) => {
        navigate(`/admin/rejected-employers/view/${id}`);
    };
    const onEditClick = (id) => {
        navigate(`/admin/rejected-employers/edit/${id}`);
    };
    const onMessageClick = (id) => {
        console.log("onMessageClick", id)
    };

    return (
        <>
            <Breadcrumb
                heading="Rejected Employers"
                breadcrumb={breadcrumb}
            />
            <TableB
                columns={columns}
                data={filteredData}
                actions={actions}
                filterBy={["SearchByName", "SearchByTitle"]}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onMessageClick={onMessageClick}
            />
        </>
    );
}

export default MainRejectedEmployers;
