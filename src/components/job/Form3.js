// Form3.js
import React from 'react';
import { Core } from '..';
import { Radio } from 'antd';

const industryOptions = [
    { name: "Accounting", value: "Accounting" },
    { name: "Administration", value: "Administration" },
    { name: "Aerospace and Defense", value: "Aerospace and Defense" },
    { name: "Agriculture", value: "Agriculture" },
    { name: "Architecture", value: "Architecture" },
    { name: "Art and Design", value: "Art and Design" },
    { name: "Automotive", value: "Automotive" },
    { name: "Cleaning & Maintenance", value: "Cleaning & Maintenance" },
    { name: "Customer Service", value: "Customer Service" },
    { name: "Construction and Real Estate", value: "Construction and Real Estate" },
    { name: "Consulting", value: "Consulting" },
    { name: "Education and Training", value: "Education and Training" },
    { name: "Energy and Utilities", value: "Energy and Utilities" },
    { name: "Engineering", value: "Engineering" },
    { name: "Environmental Services", value: "Environmental Services" },
    { name: "Fashion and Apparel", value: "Fashion and Apparel" },
    { name: "Finance and Banking", value: "Finance and Banking" },
    { name: "Food", value: "Food" },
    { name: "Government and Public", value: "Government and Public" },
    { name: "Healthcare and Medical", value: "Healthcare and Medical" },
    { name: "Hospitality and Tourism", value: "Hospitality and Tourism" },
    { name: "Human Resources", value: "Human Resources" },
    { name: "Information Technology (IT)", value: "Information Technology (IT)" },
    { name: "Legal", value: "Legal" },
    { name: "Manufacturing Retail", value: "Manufacturing Retail" },
    { name: "Marketing and Advertising", value: "Marketing and Advertising" },
    { name: "Media and Entertainment", value: "Media and Entertainment" },
    { name: "Non-Profit and Social Services", value: "Non-Profit and Social Services" },
    { name: "Pharmaceuticals and Biotechnology", value: "Pharmaceuticals and Biotechnology" },
    { name: "Sales", value: "Sales" },
    { name: "Sports and Recreation", value: "Sports and Recreation" },
    { name: "Telecommunications", value: "Telecommunications" },
    { name: "Transportation and Logistics", value: "Transportation and Logistics" },
    { name: "Other", value: "Other" },
];

const departmentOptions = [
    { name: "Graphics Designers", value: "Graphics Designers" },
    { name: "Design", value: "Design" },
    { name: "Web/App Development", value: "Web/App Development" },
    { name: "Sales", value: "Sales" },
    { name: "Marketing", value: "Marketing" },
    { name: "Content Writing", value: "Content Writing" },
    { name: "HR", value: "HR" },
    { name: "Administration", value: "Administration" },
];
const careerLevelOptions = [
    { name: "Experienced Professional", value: "Experienced Professional" },
    { name: "Entry Level", value: "Entry Level" },
    { name: "Mid Level", value: "Mid Level" },
    { name: "Senior Level", value: "Senior Level" },
    { name: "Intern/Student", value: "Intern/Student" },
];
const experienceOptions = [
    { name: "Fresh", value: "0" },
    { name: "6 months", value: "6 months" },
    { name: "1 year", value: "1 year" },
    { name: "2 years", value: "2 years" },
    { name: "3 years", value: "3 years" },
    { name: "4 years", value: "4 years" },
    { name: "5 years", value: "5 years" },
    { name: "6 years", value: "6 years" },
    { name: "7 years", value: "7 years" },
    { name: "8 years", value: "8 years" },
    { name: "9 years", value: "9 years" },
    { name: "10 years", value: "10 years" },
    { name: "Over 10 years", value: "Over 10 years" },
];

const minimumEducationOptions = [
    { name: "High School Diploma", value: "High School Diploma" },
    { name: "Associate's Degree", value: "Associate's Degree" },
    { name: "Bachelor's Degree", value: "Bachelor's Degree" },
    { name: "Master's Degree", value: "Master's Degree" },
    { name: "Doctorate/Ph.D.", value: "Doctorate/Ph.D." },
];
const jobShiftOptions = [
    { name: "First Shift (Day)", value: "First Shift (Day)" },
    { name: "Second Shift (Afternoon)", value: "Second Shift (Afternoon)" },
    { name: "Work from Home", value: "Work from Home" },
    { name: "Third Shift (Night)", value: "Third Shift (Night)" },
    { name: "Rotating", value: "Rotating" },
];

function Form3({
    // handleShortSummeryChange,
    handleInput,
}) {
    return (
        <Core.Card className={'p-5'} w840 border>
            <div className="mb-4">
                <Core.InputWithLabel
                    name={"positionTitle"}
                    label
                    bgGray
                    sm
                    onChange={(e) => handleInput('positionTitle', e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"industry"}
                    label
                    options={industryOptions}
                    onChange={(e) => handleInput('industry', e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"department"}
                    label
                    options={departmentOptions}
                    onChange={(e) => handleInput('department', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"careerLevel"}
                    label
                    options={careerLevelOptions}
                    onChange={(e) => handleInput('careerLevel', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"experience"}
                    label
                    options={experienceOptions}
                    onChange={(e) => handleInput('experience', e.target.value)}

                />
            </div>

            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"minimumEducation"}
                    label
                    options={minimumEducationOptions}
                    onChange={(e) => handleInput('minimumEducation', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"jobShift"}
                    label
                    options={jobShiftOptions}
                    onChange={(e) => handleInput('jobShift', e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Core.InputWithLabel
                    name={"jobLocation"}
                    label
                    bgGray
                    sm
                    onChange={(e) => handleInput('jobLocation', e.target.value)}
                />
            </div>
            {/* <div className="mb-4">
                <Core.InputWithLabel
                    name={"package"}
                    label
                    bgGray
                    sm
                    onChange={(e) => handleInput('salary', e.target.value)}
                />
            </div> */}



            <div className="mb-4">
                <label className={` flex justify-start text-[14px] text-gray-2 tracking-wide  mb-2 font-semibold capitalize`}>
                    Gender:
                </label>
                <Radio.Group className="w-full" onChange={(e) => handleInput('gender', e.target.value)}>
                    <div className="flex flex-wrap gap-y-3 w-full max-w-[570px]">
                        <Radio value={"Male"}>Male</Radio>
                        <Radio value={'Female'}>Female</Radio>
                        <Radio value={'No Preference'}>No Preference</Radio>
                    </div>
                </Radio.Group>
            </div>

        </Core.Card>
    );
}

export default Form3;
