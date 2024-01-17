import React, { useEffect, useState } from 'react';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
// import employersData from '../../../../data/employersData';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployers } from '../../../../Slices/Admin/adminSlice';
import { useStatsData } from "../../../../utilis/statsData";
import { useNavigate } from "react-router-dom"

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers" },
];

const actions = {
    view: true,
    edit: true,
    message: true,
};

function ManageEmployers() {
    const employersTableData = useSelector((state) => state?.admin?.employersDataTable);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const statsData = useStatsData()
    console.log({ statsData })

    
    useEffect(() => {
        try {

            dispatch(getEmployers()).unwrap().then(res => {
                console.log("Successfully fetched data", res);



            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)

        }


    }, [])

 

    const _columns = [
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
    const onViewClick = (id) => {
        navigate(`/admin/manage-employers/view/${id}`);
    };
    const onEditClick = (id) => {
        navigate(`/admin/manage-employers/edit/${id}`);
    };
    const onMessageClick = (id) => {
        console.log("onMessageClick", id)
    };
    return (
        <>
            <Breadcrumb
                heading="Manage Employers"
                breadcrumb={breadcrumb}
            />
            <StatsGroup data={statsData} />
            <TableB
                columns={_columns}
                data={employersTableData}
                actions={actions}
                filterBy={["SearchByName", "SearchByTitle"]}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onMessageClick={onMessageClick}
            />
        </>
    );
}

export default ManageEmployers;
