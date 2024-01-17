import React, { useEffect } from 'react';
import { Core, } from '../../../../components';
import adminData from '../../../../data/adminData.json';
import { Breadcrumb, } from '../../../../components/core';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployerById } from '../../../../Slices/Employer/EmployerSlice';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "View Profile" },
];

function ViewProfile() {
    const { profile } = adminData;
    

    return (
        <>
            <Breadcrumb
                breadcrumb={breadcrumb}
            />
            <Core.ViewProfile data={profile} />
        </>
    );
}

export default ViewProfile;
