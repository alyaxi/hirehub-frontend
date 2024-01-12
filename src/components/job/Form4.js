// Form4.js
import React from 'react';
import { Core } from '..';

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

function Form4({
    // handleIndustryOptionsChange,
    // handleDepartmentChange,
    // handleCareerLevelChange,
    // handleExperienceChange,
    handleShortSummeryChange,
}) {
    return (
        <Core.Card className={'p-5'} w840 border>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"industry"}
                    label
                    options={industryOptions}
                    required
                    onChange={(e) => handleShortSummeryChange('industry', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"department"}
                    label
                    options={departmentOptions}
                    required
                    onChange={(e) => handleShortSummeryChange('department', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"careerLevel"}
                    label
                    options={careerLevelOptions}
                    required
                    onChange={(e) => handleShortSummeryChange('careerLevel', e.target.value)}

                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"experience"}
                    label
                    options={experienceOptions}
                    required
                    onChange={(e) => handleShortSummeryChange('experience', e.target.value)}

                />
            </div>
        </Core.Card>
    );
}

export default Form4;
