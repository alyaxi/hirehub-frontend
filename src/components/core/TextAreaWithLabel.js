import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Icons } from '..';


function TextAreaWithLabel({ label, name, required, helperText, onChange }) {

    const _label = (name) => {
        switch (name) {
            case "companyDiscription":
                return "Company Discription";

            default:
                return "Label";
        }
    }

    const placeholder = (name) => {
        switch (name) {
            case "companyDiscription":
                return "Describe here";

            default:
                return "";
        }
    }
    return (
        <>
            <div className="flex justify-between items-center">
                {label &&
                    <label for={name} className={`
                    block text-[14px] font-medium text-gray-2 tracking-wide ${helperText ? 'mb-1.5' : 'mb-2'} capitalize
                    `}>
                        {_label(name)}{required && <span className='text-[red]'>*</span>}
                    </label>
                }
            </div>
            <div className="relative">
                {helperText &&
                    <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5'>
                        {helperText}
                    </p>
                }
                <textarea onChange={onChange} rows={5} cols={5} className="w-full text-[14px] font-regular leading-[20px] text-gray-700 bg-gray-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]" id={name} name={name}
                    placeholder={placeholder(name)} autofocus />
            </div>
        </>
    )
}

export default TextAreaWithLabel