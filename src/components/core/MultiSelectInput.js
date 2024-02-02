import React from 'react';
import { Select } from 'antd';
import Icon from '../icon';

const MultiSelectInput = ({ label, helperText, name, required, icon, options, onChange, mode, defaultValue }) => {
    const _label = (name) => {
        switch (name) {
            case "benefits":
                return "Benefits";
            case "skills":
                return "Skills";
            case "title":
                return "Title";
            case "languages":
            case "language":
                // return "Add a new language";
                return "Language";
            case "proficiency":
                return "Proficiency";
            case "desiredJobTitle":
                return "Desired Job Title";
            case "willingToLocations":
                return "Enter up to 3 locations you'd be willing to relocate to...";
            default:
                return "Label";
        }
    }

    return (
        <>
            {label &&
                <label htmlFor={name} className={`
                        flex justify-start text-[14px] text-gray-2 tracking-wide ${helperText ? 'mb-1' : 'mb-2'} font-semibold capitalize
                        `}>
                    {_label(name)}: {required && <span className='text-[red]'>*</span>}
                    <span className='mt-[2px] ml-[3px]'> {icon && <Icon name={icon} />}</span>
                </label>
            }
            {helperText &&
                <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5'>
                    {helperText}
                </p>
            }
            <Select
                id={name}
                mode={mode ? mode : "multiple"}
                allowClear
                placeholder="Please select"
                onChange={onChange}
                options={options}
                size="large"
                style={{
                    width: '100%',
                }}
                defaultValue={defaultValue && defaultValue}
            />
        </>
    )
};
export default MultiSelectInput;