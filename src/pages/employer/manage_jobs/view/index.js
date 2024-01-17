import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { JobDetails, } from '../../../../components';


const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Jobs", link: "/employer/manage-jobs" },
    { label: "Job Details" },
];

function ViewJobs() {
    // const { id } = useParams();
    const data = {
        name: "Product UX Designer(Retail)",
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        postedDate: 'May 24, 2023',
        salaryRange: '$50k - $70K',
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

export default ViewJobs;
