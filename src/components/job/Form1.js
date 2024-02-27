// Form1.js
import React from 'react';
import { Core } from '..';
import { Radio } from 'antd';

const noOfPeopleToHireOptions = [
    { name: "10", value: "10" },
    { name: "12", value: "20" },
    { name: "30", value: "30" },
    { name: "50", value: "50" },
    { name: "100", value: "100" },
    { name: "200", value: "200" },
    { name: "Over 200", value: "Over 200" },
];
function Form1({
    // handleShortSummeryChange,
    handleNoOfPeopleToHireChange,
    handleExpiryDateChange,
    handleInput
}) {
    return (
        <Core.Card className={'p-5'} w840 border>
            <div className="mb-4">
                <label className={` flex justify-start text-[14px] text-gray-2 tracking-wide  mb-2 font-semibold capitalize`}>
                    What type of job is it?
                </label>
                <Radio.Group className="w-full" onChange={(e) => handleInput('jobType',e.target.value)} >
                    <div className="flex flex-wrap gap-y-3 w-full max-w-[570px]">
                        <Radio value={"Full Time"} className='w-[20%]'>Full Time</Radio>
                        <Radio value={'Part Time'} className='w-[20%]'>Part Time</Radio>
                        <Radio value={'Temporary'} className='w-[20%]'>Temporary</Radio>
                        <Radio value={'Contract'} className='w-[20%]'>Contract</Radio>
                        <Radio value={'Internship'} className='w-[20%]'>Internship</Radio>
                        <Radio value={'Commission'} className='w-[20%]'>Commission</Radio>
                        <Radio value={'New-Grad'} className='w-[20%]'>New-Grad</Radio>
                    </div>
                </Radio.Group>
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"noOfPeopleToHire"}
                    label
                    options={noOfPeopleToHireOptions}
                    required
                    onChange={(e) => handleNoOfPeopleToHireChange(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Core.InputWithLabel name="expiryDate" label bgGray sm required
                    onChange={(e) => handleExpiryDateChange(e.target.value)}
                />
            </div>
        </Core.Card>
    );
}

export default Form1;
