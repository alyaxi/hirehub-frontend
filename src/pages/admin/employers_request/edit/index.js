import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';
import { useSelector } from 'react-redux';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Employer's Request", link: "/admin/employers-request" },
    { label: "Edit" },
];

const dropdownOptions = [
    'Approved',
    'Pending',
    'Rejected',
];

function EditEmployersRequest() {

    const { tableData } = employersData;
    const employerDetails = useSelector((state) => state?.admin?.employerDetails);

    return (
        <>
            <Breadcrumb
                heading="Edit Employer's Request"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile selectedState={employerDetails.isVerified} data={tableData} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditEmployersRequest;
