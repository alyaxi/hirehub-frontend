import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';


const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Details" },
];

function ViewEmployers() {
    const { tableData } = employersData;    

    const dropdownOptions = [
        'Active',
        'Deactive',
        'On Hold',
    ];
    return (
        <>
            <Breadcrumb
                heading="Employers Details"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} dropdownOptions={dropdownOptions} pageType="view" />
        </>
    );
}

export default ViewEmployers;
