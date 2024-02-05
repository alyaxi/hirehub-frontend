import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import ManageEmail from '../../../../components/manage_email/ManageEmail';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Email" },
];

function ManageEmailEmployer() {
    return (
        <>
            <Breadcrumb
                heading="Manage Email"
                breadcrumb={breadcrumb}
            />
            <ManageEmail />
        </>
    );
}

export default ManageEmailEmployer;
