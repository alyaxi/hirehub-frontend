import React from 'react';

function TextAreaWithLabel({ label, name, required, helperText, onChange, value, maxLength, rows }) {

    const _label = (name) => {
        switch (name) {
            case "companyDiscription":
                return "Company Discription";
            case "position":
                return "The Position";
            case "summery":
                return "Summery";
            case "statusLine":
                return "Status Line";
            case "inviteDescription":
                return "Describe here";
            default:
                return "Label";
        }
    }

    const placeholder = (name) => {
        switch (name) {
            case "companyDiscription":
                return "Describe here";
            case "position":
                return "Brief about The Position";
            case "summery":
                return "Type summery about yourself...";
            case "statusLine":
                return "Type Status Line about yourself...";
            case "inviteDescription":
                return "Type invite description for candidate.";

            default:
                return "";
        }
    }

    return (
        <>
            <div className="flex justify-between items-center">
                {label &&
                    <label htmlFor={name} className={`
                    block text-[14px] text-gray-2 tracking-wide ${helperText ? 'mb-1.5' : 'mb-2'} font-semibold capitalize
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
                <textarea onChange={onChange}
                    className="w-full text-[14px] font-regular leading-[20px] text-gray-700 bg-gray-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
                    rows={rows ? rows : 7}
                    cols={5}
                    id={name}
                    maxLength={maxLength ? maxLength : "5000"}
                    defaultValue={value}
                    name={name}
                    placeholder={placeholder(name)}
                    autoFocus
                />
            </div>
        </>
    )
}

export default TextAreaWithLabel