import React from 'react';
import { Breadcrumb, } from '../../../../components/core';

const breadcrumb = [
    { label: "Dashboard", link: "/candidate/dashboard" },
    { label: "Alerts" },
];

function MainAlertsCandidate() {
    return (
        <>
            <Breadcrumb
                heading="Alerts"
                breadcrumb={breadcrumb}
            />
            <div className='w-full h-[550px] flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-gray-300 text-[30px]'>Coming soon...</span>
                    <span className='text-gray-300 text-[15px] tracking-[1.5px]'>This page will be developed soon</span>
                </div>
            </div>
        </>
    );
}

export default MainAlertsCandidate;
