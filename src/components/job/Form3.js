// Form3.js
import React from 'react';
import { Core } from '..';
import { Radio } from 'antd';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    industryOptions,
    departmentOptions,
    careerLevelOptions,
    experienceOptions,
    minimumEducationOptions,
    jobShiftOptions
} = dropdownOptions;

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
                    required
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
