import React, { useState, useEffect } from 'react';
import { Core } from '..';

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
            <div className="flex justify-between items-end gap-x-3 mb-4">
                <div className='w-full'>
                    <Core.SelectWithLabel
                        name={"minimum"}
                        label
                        options={minimumOptions}
                        onChange={(e) => handleChange("minimum", e.target.value)}
                    />
                </div>
                <span className='pb-2'>to</span>
                <div className='w-full'>
                    <Core.SelectWithLabel
                        name={"maximum"}
                        label
                        options={maximumOptions}
                        onChange={(e) => handleChange("maximum", e.target.value)}
                    />
                </div>
                <span></span>
                <div className='w-full'>
                    <Core.SelectWithLabel
                        name={"rate"}
                        label
                        options={rateOptions}
                        onChange={(e) => handleChange("rate", e.target.value)}
                    />
                </div>
            </div>
        </Core.Card>
    );
}

export default Form2;
