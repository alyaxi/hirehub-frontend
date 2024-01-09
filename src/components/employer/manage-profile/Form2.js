// Form2.js
import React from 'react';
import { Core } from '../..';
import companyIndustries from '../../../utilis/companyIndustries';

function Form2({ onNext }) {
  
    const handleChange = (name, event) => {
        const value = event.target.value;
        onNext({ [name]: value });
    };
    console.log("onNext",onNext.data)
    return (
        <Core.Card w840 boder>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Create an Employer Account</h5>
            <div className="mb-4">
                <Core.SelectWithLabel
                   name={"YourCompanysIndustry"}
                    label="Company Industry"
                    options={companyIndustries}
                    onChange={(value) => handleChange("companyIndustry", value)}
                />
            </div>
            <div className="mb-4">
                <Core.TextAreaWithLabel
                    name={"companyDiscription"}
                    label="Company Description"
                    helperText="Adding a company description to a job posting can attract candidates who share the organization's values and vision"
                    onChange={(value) => handleChange("description", value)}
                />
            </div>
        </Core.Card>
    );
}

export default Form2;
