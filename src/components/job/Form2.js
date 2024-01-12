import React, { useState, useEffect } from 'react';
import { Core } from '..';
import { Divider, Radio } from 'antd';

const minimumOptions = [
    { name: "10", value: "10" },
    { name: "20", value: "20" },
    { name: "30", value: "30" },
    { name: "50", value: "50" },
    { name: "100", value: "100" },
    { name: "200", value: "200" },
];
const maximumOptions = [
    { name: "20", value: "20" },
    { name: "30", value: "30" },
    { name: "50", value: "50" },
    { name: "100", value: "100" },
    { name: "200", value: "200" },
    { name: "300", value: "300" },
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

function Form2({ handleSalaryChange }) {
    const [selectedMinimum, setSelectedMinimum] = useState("");
    const [selectedMaximum, setSelectedMaximum] = useState("");
    const [selectedRate, setSelectedRate] = useState("");

    const handleChange = (name, value) => {
        switch (name) {
            case "minimum":
                setSelectedMinimum(value);
                break;
            case "maximum":
                setSelectedMaximum(value);
                break;
            case "rate":
                setSelectedRate(value);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (selectedMinimum && selectedMaximum && selectedRate) {
            handleSalaryChange(selectedMinimum, selectedMaximum, selectedRate);
        }
    }, [selectedMinimum, selectedMaximum, selectedRate]);

    return (
        <Core.Card className={'p-5'} w840 border>
            <div className="flex justify-between items-end w-full gap-x-3 mb-4">
                <div className='flex justify-between w-full'>

                    <div className='fle x flex-col gap-y-5 w-[75%]'>
                        {/* <div className='w-full'>
                            <Core.SelectWithLabel
                                name={"maximum"}
                                label
                                options={maximumOptions}
                                onChange={(e) => handleChange("maximum", e.target.value)}
                            />
                        </div>
                        <div className='w-full'>
                            <Core.SelectWithLabel
                                name={"maximum"}
                                label
                                options={maximumOptions}
                                onChange={(e) => handleChange("maximum", e.target.value)}
                            />
                        </div> */}
                        <Radio.Group className="w-full"  >
                            <div className="flex flex-col gap-y-3 w-full">
                                <Radio value={"Full Time"} className='w-[20%]'>Full Time</Radio>
                                <Radio value={'Part Time'} className='w-[20%]'>Part Time</Radio> 
                            </div>
                        </Radio.Group>
                    </div>
                    <Divider type="vertical" className='h-[100px] max-h-[100px] self-center mx-[20px]' />
                    <div className='flex flex-col justify-center w-[25%]'>
                        <Core.SelectWithLabel
                            name={"rate"}
                            label
                            options={rateOptions}
                            onChange={(e) => handleChange("rate", e.target.value)}
                        />
                    </div>

                </div>
            </div>
        </Core.Card>
    );
}

export default Form2;
