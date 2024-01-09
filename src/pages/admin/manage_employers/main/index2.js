import React from 'react';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import { Table } from '../../../../components';
import avatar1 from "../../../../assets/images/avatars/2.png";

const columns = ["name", "plans", "payment", "nextPayment", "account", "action"];
const employees = [
    {
        id: "1",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Silver Plan",
        payment: true,
        nextPayment: "10/19/25 5:45am",
        account: 'active',
    },
    {
        id: "2",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Browns Plan",
        payment: true,
        nextPayment: "10/19/25 5:45am",
        account: 'active',
    },
    {
        id: "3",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Platinum Plan",
        payment: false,
        nextPayment: "10/19/25 5:45am",
        account: 'deactive',
    },
    {
        id: "4",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Silver Plan",
        payment: false,
        nextPayment: "10/19/25 5:45am",
        account: 'deactive',
    },
    {
        id: "5",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Elite Professional Plan",
        payment: true,
        nextPayment: "10/19/25 5:45am",
        account: 'hold',
    },
];
const actions = {
    view: true,
    edit: true,
    message: true,
};

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers" },
];

function ManageEmployers() {
    const statsData = [
        {
            title: "Approved Employers",
            count: "20",
            iconName: "People",
        },
        {
            title: "Employer’s Request",
            count: "50",
            iconName: "Users",
        },
        {
            title: "Rejected Employers",
            count: "10",
            iconName: "ProfileDelete",
        },
    ];

    const onViewClick = (id) => {
        console.log("onViewClick", id)
        // push(
        //   {
        //     pathname: "/departments/view",
        //     // query: { type: "view", id },
        //     query: { id },
        //   },
        //   undefined,
        //   {
        //     shallow: true,
        //   }
        // );
    };
    const onEditClick = (id) => {
        console.log("onEditClick", id)
        // push(
        //   {
        //     pathname: "/departments/edit",
        //     // query: { type: "edit", id },
        //     query: { id },
        //   },
        //   undefined,
        //   {
        //     shallow: true,
        //   }
        // );
    };
    const onDeleteClick = (id) => {
        console.log("onDeleteClick", id)
    };

    return (
        <>
            <Breadcrumb
                heading="Manage Employers"
                breadcrumb={breadcrumb}
            />
            <StatsGroup data={statsData} />
            <Table
                // actionButton={{
                //     name: "Add Department",
                //     link: "/departments/add",
                // }}
                // id="employees-listing"
                data={employees}
                columns={columns}
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
            />
        </>
    );
}

export default ManageEmployers;
