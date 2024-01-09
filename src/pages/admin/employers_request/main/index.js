import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Table } from '../../../../components';
import companyLogo1 from "../../../../assets/images/company-logos/5.png";
import companyLogo2 from "../../../../assets/images/company-logos/4.png";
import companyLogo3 from "../../../../assets/images/company-logos/7.png";
import TableB from '../../../../components/table/TableB';
import employersData from '../../../../data/employersData.json';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"


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
    const  employersTableData  = useSelector((state) => state?.admin?.employersDataTable);
    const navigate = useNavigate()


    const columns = [
        {
            title: 'Employer Name',
            dataIndex: 'companyName',
            key: 'companyName',
            sorter: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: true,
        },
        {
            title: 'Account Status',
            dataIndex: 'account',
            key: 'account',
            sorter: true,
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
        },
    ];
    const { tableData } = employersData;
    const statusToFilter = 'Pending';
    const filteredData = employersTableData.filter(item => item.isVerified === statusToFilter);
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
