import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';
import { useSelector } from 'react-redux';

const dropdownOptions = [
    'Approved',
    'Pending',
    'Rejected',
];

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Approved Employers", link: "/admin/approved-employers" },
    { label: "Edit" },
];

function EditApprovedEmployers() {

    const { tableData } = employersData;
    const employerDetails = useSelector((state) => state?.admin?.employerDetails);

    return (
        <>
            <Breadcrumb
                heading="Edit Approved Employers"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} selectedState={employerDetails?.isVerified} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditApprovedEmployers;
