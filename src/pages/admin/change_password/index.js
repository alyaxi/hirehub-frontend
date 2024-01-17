
import React from 'react';
import { ChangePasswordForm, Core } from '../../../components'; 


function ChangePassword({ }) {
    const breadcrumb = [
        { label: "Dashboard", link: "/admin/dashboard" },
        { label: "Change Password" },
    ];
    return (
        <>
            <Core.Breadcrumb
                heading="Change Password"
                breadcrumb={breadcrumb}
            />
            <ChangePasswordForm />
        </>
    )
}

export default ChangePassword