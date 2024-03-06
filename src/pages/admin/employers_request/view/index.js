import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Employer's Request", link: "/admin/employers-request" },
    { label: "Details" },
];

function ViewEmployersRequest() {

    const { tableData } = employersData;

    return (
        <>
            <Breadcrumb
                heading="Employer's Request Details"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} pageType="view" />
        </>
    );
}

export default ViewEmployersRequest;
