import React from 'react';
import { Select } from 'antd';
import Icon from '../icon';

const MultiSelectInput = ({ label, helperText, name, required, icon,options,onChange }) => {
    const _label = (name) => {
        switch (name) {
            case "benefits":
                return "Benefits";
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
                mode="multiple"
                allowClear
                style={{
                    width: '100%',
                }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={onChange}
                options={options}
            />
        </>
    )
};
export default MultiSelectInput;