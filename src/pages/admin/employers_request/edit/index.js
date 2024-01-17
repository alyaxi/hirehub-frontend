import React from 'react';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';
import { useDispatch, useSelector } from 'react-redux';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Approved Employers", link: "/admin/approved-employers" },
    { label: "Edit" },
];

function EditEmployersRequest() {
    const { tableData } = employersData;
    const employerDetails = useSelector((state) => state?.admin?.employerDetails);

    const dropdownOptions = [
        'Approved',
        'Pending',
        'Rejected',
    ];
    return (
        <>
            <Breadcrumb
                heading="Edit Approved Employers"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile selectedState={employerDetails.isVerified} data={tableData} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditEmployersRequest;
