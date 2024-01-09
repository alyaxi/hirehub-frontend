import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Approved Employers", link: "/admin/approved-employers" },
    { label: "Details" },
];

function ViewEmployersRequest() {
    const { tableData } = employersData; 
    return (
        <>
            <Breadcrumb
                heading="Approved Employers Details"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} pageType="view" />
        </>
    );
}

export default ViewEmployersRequest;
