import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';
import { useSelector } from 'react-redux';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Edit" },
];

function EditCandidates() {
    const { tableData } = employersData;
    const  AppliedJobCandidate  = useSelector((state) => state?.manageCandidate?.jobs);


    const dropdownOptions = [
        'activate',
        'inactive',
        'on hold',
    ];

    return (
        <>
            <Breadcrumb
                heading="Edit Employers"
                breadcrumb={breadcrumb}
            />
            <Core.UserProfile data={AppliedJobCandidate} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditCandidates;
