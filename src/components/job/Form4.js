// Form4.js
import React, { useEffect, useState } from 'react';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';

const options = [
    { label: 'Flexible Work Hours', value: 'Flexible Work Hours' },
    { label: 'Remote Work Opportunities', value: 'Remote Work Opportunities' },
    { label: 'Health Insurance', value: 'Health Insurance' },
    { label: 'Dental Insurance', value: 'Dental Insurance' },
    { label: 'Vision Insurance', value: 'Vision Insurance' },
    { label: '401(k) Retirement Plan', value: '401(k) Retirement Plan' },
    { label: 'Paid Time Off (PTO)', value: 'Paid Time Off (PTO)' },
    { label: 'Paid Holidays', value: 'Paid Holidays' },
    { label: 'Flexible Spending Account (FSA)', value: 'Flexible Spending Account (FSA)' },
    { label: 'Life Insurance', value: 'Life Insurance' },
    { label: 'Employee Assistance Program (EAP)', value: 'Employee Assistance Program (EAP)' },
    { label: 'Professional Development Opportunities', value: 'Professional Development Opportunities' },
    { label: 'Tuition Reimbursement', value: 'Tuition Reimbursement' },
    { label: 'Stock Options or Equity', value: 'Stock Options or Equity' },
    { label: 'Gym Memberships', value: 'Gym Memberships' },
    { label: 'Casual Dress Code', value: 'Casual Dress Code' },
    { label: 'Company Events and Activities', value: 'Company Events and Activities' },
    { label: 'On-site Fitness Facilities', value: 'On-site Fitness Facilities' },
    { label: 'Employee Recognition Programs', value: 'Employee Recognition Programs' },
    { label: 'Maternity and Paternity Leave', value: 'Maternity and Paternity Leave' },
    { label: 'Sick Leave', value: 'Sick Leave' },
    { label: 'Commuter Benefits', value: 'Commuter Benefits' },
];

function Form4({
    multiSelectHandle,
    handleJobUpdate,
}) {
    const [responsibilities, setResponsibilities] = useState('');
    const [qualification, setQualification] = useState('');
    const [skills, setSkills] = useState('');

    useEffect(() => {
        handleJobUpdate('responsibilities', responsibilities)
    }, [responsibilities,]);

    useEffect(() => {
        handleJobUpdate('qualification', qualification)
    }, [qualification]);

    useEffect(() => {
        handleJobUpdate('skills', skills)
    }, [skills]);

    return (
        <Core.Card className={'p-5'} w840 border>
            <div className="mb-4">
                <label className={`flex justify-start text-[16px] font-semibold text-gray-2 tracking-wide capitalize mb-2`}>
                    Job Description:
                </label>
                <Core.TextAreaWithLabel
                    name="position"
                    label
                    onChange={(e) => handleJobUpdate('aboutPosition', e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'responsibilities'} label style={{ height: "84%" }} value={responsibilities} setValue={setResponsibilities} />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'qualification'} label style={{ height: "84%" }} value={qualification} setValue={setQualification} />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'skills'} label style={{ height: "84%" }} value={skills} setValue={setSkills} />
            </div>
            <div className="mb-4">
                <MultiSelectInput name={'benefits'} label options={options} onChange={multiSelectHandle} />
            </div>
        </Core.Card>
    );
}

export default Form4;
