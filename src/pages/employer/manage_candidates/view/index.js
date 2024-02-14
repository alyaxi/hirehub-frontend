import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { UserProfile, } from '../../../../components';
// import employersData from '../../../../data/employersData.json';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";


const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates", link: "/admin/manage-candidates" },
    { label: "Details" },
];

function ViewCandidates() {
    const AppliedJobCandidate = useSelector((state) => state?.manageCandidate?.jobs);
    
     console.log(AppliedJobCandidate, "AppliedJobCandidate")

     const { id } = useParams();
    const extractedData = AppliedJobCandidate?.find(item => item?.id === id);
     
    console.log(extractedData, "data frm comp")

    // console.log({AppliedJobCandidate})

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
            <UserProfile data={extractedData} dropdownOptions={dropdownOptions} pageType="view" />
        </>
    );
}

export default ViewCandidates;
