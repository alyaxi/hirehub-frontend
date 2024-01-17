import React, { useState, useEffect } from 'react';
import { Core } from '..';
import { Divider, Radio } from 'antd';

const salaryOptions = [
    { name: "$1000 - $1500", value: "$1000 - $1500" },
    { name: "$1500 - $2000", value: "$1500 - $2000" },
    { name: "$2000 - $2500", value: "$2000 - $2500" },
    { name: "$3000 - $3500", value: "$3000 - $3500" },
    { name: "$3500 - $4000", value: "$3500 - $4000" },
    { name: "$4000 - $4500", value: "$4000 - $4500" },
    { name: "$5000 - $5000", value: "$5000 - $5000" },
];
const rateOptions = [
    { name: "USD/hour", value: "USD/hour" },
    { name: "EUR/hour", value: "EUR/hour" },
    { name: "GBP/hour", value: "GBP/hour" },
    { name: "AUD/hour", value: "AUD/hour" },
    { name: "CAD/hour", value: "CAD/hour" },
    { name: "INR/hour", value: "INR/hour" },
    { name: "JPY/hour", value: "JPY/hour" },
    { name: "CNY/hour", value: "CNY/hour" },
    { name: "CHF/hour", value: "CHF/hour" },
    { name: "SEK/hour", value: "SEK/hour" },
];

function Form2({ handleSalaryChange, handleInput }) {
    const [rate, setRate] = useState('');
    const [salary, setSalary] = useState('');
    const [employmentType, setEmploymentType] = useState(false);

    const handleEmploymentTypeChange = (e) => {
        setEmploymentType(!employmentType);
    };

    const handleRate = ( value) => {
        setRate(value);
    };

    const handleSalary = ( value) => {
        setSalary(value);
    };

    useEffect(() => {
        const handleSalaryFinal = () => {
            let _employmentType = employmentType ? 'single' : "range";
            handleSalaryChange(_employmentType, salary, rate)
        };

        handleSalaryFinal();
    }, [employmentType, salary, rate]);

    return (
        <Core.Card className={'p-5'} w840 border>
            <div className="flex justify-between items-end w-full gap-x-3 mb-4">
                <div className='flex justify-between w-full'>

                    <div className='flex gap-y-5 w-[75%]'>
                        <Radio.Group onChange={handleEmploymentTypeChange} value={employmentType} className="pr-3">
                            <div className="flex flex-col justify-around h-[100%] gap-y-3">
                                <Radio value={false}></Radio>
                                <Radio value={true}></Radio>
                            </div>
                        </Radio.Group>
                        <div className='flex flex-col gap-y-3 w-full'>
                            <div className={`${employmentType && "disable-me"}`}>
                                <Core.SelectWithLabel
                                    name={"salary"}
                                    label
                                    options={salaryOptions}
                                    onChange={(e) => handleSalary("salary", e.target.value)}
                                />
                            </div>
                            <div className={`${!employmentType && "disable-me"}`}>
                                <Core.InputWithLabel
                                    name={"salary"}
                                    label
                                    bgGray
                                    sm
                                    onChange={(e) => handleSalary(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <Divider type="vertical" className='h-[100px] max-h-[100px] self-center mx-[20px]' />
                    <div className='flex flex-col justify-center w-[25%]'>
                        <Core.SelectWithLabel
                            name={"rate"}
                            label
                            options={rateOptions}
                            onChange={(e) => handleRate(e.target.value)}
                        />
                    </div>

                </div>
            </div>
        </Core.Card>
    );
}

export default Form2;
