import React, { useEffect, useState } from 'react'; 
import { Breadcrumb,   } from '../../../../components/core'; 
 
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
        </>
    );
}

export default ManageEmailEmployer;
