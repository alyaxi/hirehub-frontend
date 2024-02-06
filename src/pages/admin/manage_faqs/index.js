import React from 'react';
import { Breadcrumb, } from '../../../components/core';
// import { Core, } from '../../../components';
// import employersData from '../../../data/employersData.json';
import FaqForm from '../../../components/faqs/FaqForm';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "FAQs", },
];

function ManageFAQsAdmin() {
    // const { tableData } = employersData;

    const dropdownOptions = [
        'activate',
        'inactive',
        'on hold',
    ];
    console.log("dropdownOptions", dropdownOptions)

    return (
        <>
            <Breadcrumb
                heading="Frequently Asked Question"
                breadcrumb={breadcrumb}
            /> 
            <FaqForm />
        </>
    );
}

export default ManageFAQsAdmin;
