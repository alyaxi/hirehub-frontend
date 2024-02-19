
import React from 'react';
import { ChangePasswordForm, Core } from '../../../components';
import { useSelector } from 'react-redux';

function ChangePassword({ }) {

    const user = useSelector((state) => state.auth.user);

    const breadcrumb = [
        { label: "Dashboard", link: `/${user?.Role}/dashboard` },
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