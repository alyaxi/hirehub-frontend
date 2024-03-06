import React from 'react';
import { Breadcrumb } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';
import { useSelector } from 'react-redux';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Rejected Employers", link: "/admin/rejected-employers" },
    { label: "Edit" },
];

const dropdownOptions = [
    'Approved',
    'Pending',
];

function EditRejectedEmployers() {

    const { tableData } = employersData;
    const employerDetails = useSelector((state) => state?.admin?.employerDetails);

    return (
        <>
            <Breadcrumb
                heading="Edit Rejected Employers"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile selectedState={employerDetails.isVerified} data={tableData} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditRejectedEmployers;
