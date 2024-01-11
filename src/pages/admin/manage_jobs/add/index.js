import React, { useState } from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { AddJob } from '../../../../components';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Jobs" },
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
