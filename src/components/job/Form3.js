// Form3.js
import React from 'react';
import { Core } from '..';
import { Radio } from 'antd';

const industryOptions = [
    { name: "Information Technology", value: "Information Technology" },
    { name: "Recruitment / Employment Firms", value: "Recruitment / Employment Firms" },
    { name: "Education/Training", value: "Education/Training" },
    { name: "Services", value: "Services" },
    { name: "Health & Fitness", value: "Health & Fitness" },
    { name: "E-Commerce / E-Business", value: "E-Commerce / E-Business" },
    { name: "Media/Communications", value: "Media/Communications" },
    { name: "N.G.O./Social Services", value: "N.G.O./Social Services" },
    { name: "Healthcare / Hospital / Medical", value: "Healthcare / Hospital / Medical" },
    { name: "Banking/Financial Services", value: "Banking/Financial Services" },
    { name: "Advertising / PR", value: "Advertising / PR" },
    { name: "Manufacturing", value: "Manufacturing" },
    { name: "Publishing/Printing", value: "Publishing/Printing" },
    { name: "Travel/Tourism/Transportation", value: "Travel/Tourism/Transportation" },
    { name: "Retail", value: "Retail" },
    { name: "Engineering", value: "Engineering" },
    { name: "AutoMobile", value: "AutoMobile" },
    { name: "Consultants", value: "Consultants" },
    { name: "Packaging", value: "Packaging" },
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
    { name: "6 Months", value: "0.5" },
    { name: "1 Year", value: "1" },
    { name: "2 Years", value: "2" },
    { name: "3 Years", value: "3" },
    { name: "4 Years", value: "4" },
    { name: "5 Years", value: "5" },
    { name: "6 Years", value: "6" },
    { name: "7 Years", value: "7" },
    { name: "8 Years", value: "8" },
    { name: "9 Years", value: "9" },
    { name: "10+ Years", value: "over 10" },
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
    handleShortSummeryChange,
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
                    onChange={(e) => handleShortSummeryChange('industry', e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"department"}
                    label
                    options={departmentOptions}
                    onChange={(e) => handleShortSummeryChange('department', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"careerLevel"}
                    label
                    options={careerLevelOptions}
                    onChange={(e) => handleShortSummeryChange('careerLevel', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"experience"}
                    label
                    options={experienceOptions}
                    onChange={(e) => handleShortSummeryChange('experience', e.target.value)}

                />
            </div>

            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"minimumEducation"}
                    label
                    options={minimumEducationOptions}
                    onChange={(e) => handleShortSummeryChange('minimumEducation', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"jobShift"}
                    label
                    options={jobShiftOptions}
                    onChange={(e) => handleShortSummeryChange('jobShift', e.target.value)}
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
                <Radio.Group className="w-full" onChange={(e) => handleShortSummeryChange('gender', e.target.value)}>
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
