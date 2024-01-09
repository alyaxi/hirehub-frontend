import React, { useState } from 'react';

function SelectWithLabel({ label, name, options, required, helperText, onChange }) {
    const _label = (name) => {
        switch (name) {
            case "userType":
                return "User Type";
            case "YourCompanysIndustry":
                return "Your Company's Industry";
            case "numberofEmployees":
                return "Number of Employees";
            default:
                return "Label";
        }
    }
    return (
        <>
            {label && <label for={name} className={`
                block text-[14px] font-medium text-gray-2 tracking-wide ${helperText ? 'mb-1.5' : 'mb-2'} capitalize`}>
                {_label(name)}{required && <span className='text-[red]'>*</span>}
            </label>}
            {helperText &&
                <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5'>
                    {helperText}
                </p>
            }
            <select id={name} onChange={onChange} className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]">
                <option value="">Select an option...</option>
                {options.map((value) =>
                    <option key={value * 1} value={value?.value}>{value?.name}</option>
                )}
            </select>
        </>
    )
}

export default SelectWithLabel