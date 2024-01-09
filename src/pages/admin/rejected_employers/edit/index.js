import React from 'react';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';
import { useDispatch, useSelector } from 'react-redux';


const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Rejected Employers", link: "/admin/rejected-employers" },
    { label: "Edit" },
];
function EditRejectedEmployers() {
    const { tableData } = employersData;
    const employerDetails = useSelector((state) => state?.admin?.employerDetails);

    const dropdownOptions = [
        'Approved',
        'Pending', 
    ];
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
