import React from 'react';
import { Breadcrumb, } from '../../../components/core';
import { Core, } from '../../../components';
import employersData from '../../../data/employersData.json';
import FaqForm from '../../../components/faqs/FaqForm';
import TermAndConditionForm from '../../../components/term_and_condition/TermAndConditionForm';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Terms & Conditions", },
];

function ManageTermAndConditionAdmin() {
    const { tableData } = employersData;

    const dropdownOptions = [
        'activate',
        'inactive',
        'on hold',
    ];
    console.log("dropdownOptions", dropdownOptions)

    return (
        <>
            <Breadcrumb
                heading="Manage Terms And Conditions"
                breadcrumb={breadcrumb}
            />
            <TermAndConditionForm />
        </>
    );
}

export default ManageTermAndConditionAdmin;
