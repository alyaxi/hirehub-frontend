import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { JobDetails, } from '../../../../components';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Jobs", link: "/employer/manage-jobs" },
    { label: "Job Details" },
];

function ViewJobs() {

    const location = useLocation();
    const parts = location?.pathname.split('/');
    const id = parts[parts.length - 1];
    const jobs = useSelector((state) => state?.jobSlice.jobs);
    const data = jobs.find(job => job.id === id);
    // console.log("data",data)
    
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
