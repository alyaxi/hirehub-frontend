import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Rejected Employers", link: "/admin/rejected-employers" },
    { label: "Details" },
];

function ViewRejectedEmployers() {
    const { tableData } = employersData;
    return (
        <>
            <Breadcrumb
                heading="Rejected Employers Details"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} pageType="view" />
        </>
    );
}

export default ViewRejectedEmployers;
