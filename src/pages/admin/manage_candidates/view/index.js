import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { UserProfile, } from '../../../../components';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const dropdownOptions = [
    "activate",
    "inactive",
    "on hold",
];

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates" },
    { label: "Details" },
];

function ViewCandidates() {

    const { id } = useParams();
    const AppliedAllJobs = useSelector((state) => state?.manageCandidateAdmin?.jobs);
    const extractedData = AppliedAllJobs?.find(item => item?.candidate?.userId === id);

    return (
        <>
            <Breadcrumb
                heading="Candidates Details"
                breadcrumb={breadcrumb}
            />
            <UserProfile data={extractedData} dropdownOptions={dropdownOptions} pageType="view" />
        </>
    );
}

export default ViewCandidates;
