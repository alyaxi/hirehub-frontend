import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Employer's Request" },
];

const actions = {
    view: true,
    edit: true,
    delete: true,
};

function MainEmployersRequest() {

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

    const statusToFilter = 'Pending';

    const filteredData = employersTableData.filter(item => item.isVerified === statusToFilter);

    console.log("filteredData", filteredData)
    const onViewClick = (id) => {
        console.log("onViewClick", id)
        navigate(`/admin/employers-request/view/${id}`);

    };
    const onEditClick = (id) => {
        console.log("onEditClick", id)
        navigate(`/admin/employers-request/edit/${id}`);
    };
    const onMessageClick = (id) => {
        console.log("onMessageClick", id)
    };

    return (
        <>
            <Breadcrumb
                heading="Employer's Request"
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

export default MainEmployersRequest;
