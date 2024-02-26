import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { AddJob } from '../../../../components';

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Jobs", link: "/employer/manage-jobs" },
    { label: "Job Post" },
]; 

function AddJobs() {
   
    return (
        <>
            <Breadcrumb
                heading="Job Post"
                breadcrumb={breadcrumb}
            />
            <AddJob />
        </>
    );
}

export default AddJobs;
