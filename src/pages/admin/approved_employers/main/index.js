import React, { useState } from 'react';
import { Core } from '../../../../components';
import TableB from '../../../../components/table/TableB';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Approved Employers" },
];

const actions = {
    view: true,
    edit: true,
    message: true,
};

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => {
            if (!a.name || !b.name) {
                return 0;
            }
            return a.name.localeCompare(b.name);
        },
    },
    {
        title: 'Plans',
        dataIndex: 'plans',
        key: 'plans',
        sorter: (a, b) => {
            if (!a.plans || !b.plans) {
                return 0;
            }
            return a.plans.localeCompare(b.plans);
        },
    },
    {
        title: 'Payment',
        dataIndex: 'payment',
        key: 'payment',
    },
    {
        title: 'Next Payment',
        dataIndex: 'nextPayment',
        key: 'nextPayment',
    },
    {
        title: 'Account',
        key: 'account',
        dataIndex: 'account',
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

function ApprovedEmployers() {

    const employersTableData = useSelector((state) => state?.admin?.employersDataTable);
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const statusToFilter = 'Approved';
    const filteredData = employersTableData.filter(item => item.isVerified === statusToFilter);

    const onViewClick = (id) => {
        navigate(`/admin/approved-employers/view/${id}`);
    };
    const onEditClick = (id) => {

        navigate(`/admin/approved-employers/edit/${id}`);
    };
    const onMessageClick = (id) => {
        console.log("onMessageClick", id)
    };

    console.log("filtyby name", name)
    console.log("filtyby jobTitle", jobTitle)

    return (
        <>
            <Core.Breadcrumb
                heading="Approved Employers"
                breadcrumb={breadcrumb}
            />
            <TableB
                columns={columns}
                data={filteredData}
                actions={actions}
                filterBy={["SearchByName", "SearchByTitle"]}
                setName={setName}
                setJobTitle={setJobTitle}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onMessageClick={onMessageClick}
            />
        </>
    );
}

export default ApprovedEmployers;
