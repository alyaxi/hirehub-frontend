import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Rejected Employers", link: "/admin/rejected-employers" },
    { label: "Details" },
];

function ViewRejectedEmployers() {
    return (
        <>
            <Breadcrumb
                heading="Rejected Employers Details"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile  pageType="view" />
        </>
    );
}

export default ViewRejectedEmployers;
