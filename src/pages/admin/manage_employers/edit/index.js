import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';
import { useDispatch, useSelector } from 'react-redux';


const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Edit" },
];

function EditEmployers() {
    const { tableData } = employersData;
    const employerDetails = useSelector((state) => state?.admin?.employerDetails);


    const dropdownOptions = [
        'Active',
        'Deactive',
        'On Hold',
    ];

    return (
        <>
            <Breadcrumb
                heading="Edit Employers"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} selectedState={employerDetails?.accountStatus} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditEmployers;
