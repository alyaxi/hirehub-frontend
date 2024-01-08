import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { JobDetails, } from '../../../../components';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Jobs" },
    { label: "Job Details" },
];

function ViewJob() {
    const data = {
        name: "Product UX Designer(Retail)",
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        postedDate: 'May 24, 2023',
        salaryRange: '$50k - $70K',
        shortSummery: [
            { title: "industry", value: "Information Technology" },
            { title: "gender", value: "Gender " },
            { title: "package", value: "$75,000 a year" },
            { title: "minimumEducation", value: "Information" },
            { title: "totalPositions", value: "02" },
            { title: "careerLevel", value: "Information" },
            { title: "jobShift", value: "First Shift (Day)" },
            { title: "experience", value: "Information" },
            { title: "jobType", value: "Full Time/Permanent" },
            { title: "applyBefore", value: "Information" },
            { title: "department", value: "UX/UI" },
            { title: "postingDate", value: "Information" },
            { title: "jobLocation", value: "Houston, TX 77060 " },
        ]
    }
    console.log("data", data)
    return (
        <>
            <Breadcrumb
                heading="Job Details"
                breadcrumb={breadcrumb}
            />
            <JobDetails data={data} pageType="view" />
        </>
    );
}

export default ViewJob;
