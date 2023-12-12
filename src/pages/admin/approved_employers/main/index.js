import React from 'react';
import { Core, Table } from '../../../../components';
import avatar1 from "../../../../assets/images/avatars/2.png";
import TableB from '../../../../components/table/TableB';
import employersData from '../../../../data/employersData.json';

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

function ApprovedEmployers() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
        },
        {
            title: 'Plans',
            dataIndex: 'plans',
            key: 'plans',
            sorter: true,
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
            sorter: true,
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
        },
    ];
    const { tableData } = employersData;
    const statusToFilter = 'approved';
    const filteredData = tableData.filter(item => item.accountStatus === statusToFilter);

    const onViewClick = (id) => {
        window.location.href = `/admin/approved-employers/view/${id}`;
    };
    const onEditClick = (id) => {
        window.location.href = `/admin/approved-employers/edit/${id}`;
    };
    const onMessageClick = (id) => {
        console.log("onMessageClick", id)
    };
    return (
        <>
            <Core.Breadcrumb
                heading="Approved Employers"
                breadcrumb={breadcrumb}
            />
            {/* <Table
                // actionButton={{
                //     name: "Add Department",
                //     link: "/departments/add",
                // }}
                // id="employees-listing"
                data={_employees}
                columns={_columns}
                filterBy={["SearchByName", "SearchByTitle"]}
                actions={actions}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
            // shadow
            // title="Manage Roles"
            // setTableFilters={setTableFilters}
            // dropdwonOptions={dropdwonOptions}
            // manageRoles
            // isLoading={isLoading}
            /> */}
            {/* ------- */}
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

export default ApprovedEmployers;
