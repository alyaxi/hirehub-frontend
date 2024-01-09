import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
// import employersData from '../../../../data/employersData.json';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";


const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates", link: "/admin/manage-candidates" },
    { label: "Details" },
];

function ViewCandidates() {
    // const { tableData } = employersData;
    const  AppliedAllJobs  = useSelector((state) => state?.manageCandidateAdmin?.jobs);
    const { id } = useParams();
    const extractedData = AppliedAllJobs?.find(item => item.candidate.userId === id);
    console.log(extractedData, "data frm comp")
    const dropdownOptions = [
        "activate",
        "inactive",
        "on hold",
    ];
    return (
        <>
            <Breadcrumb
                heading="Candidates Details"
                breadcrumb={breadcrumb}
            />
            {/* <Core.CompanyProfile data={tableData} dropdownOptions={dropdownOptions} pageType="view" /> */}
            <Core.UserProfile data={extractedData} dropdownOptions={dropdownOptions} pageType="view" />
        </>
    );
}

export default ViewCandidates;
