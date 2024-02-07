import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Icons } from '..';
import Icon from '../../components/icon';

function InputWithLabel({ onChange, label, name, forgotPassword, required, helperText, className, sm, bgGray, value, setValue, onBlur, error, icon, iconic, maxlength, edit, disabled }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputType, setInputType] = useState('password');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setInputType(passwordVisible ? 'password' : 'text');
    };

    const _label = (name) => {
        switch (name) {
            case "email":
                return "Email";
            case "password":
                return "Password";
            case "username":
                return "Username";
            case "YourCompanysName":
                return "Your Company's Name";
            case "YourPhoneNumber":
                return "Your Phone Number";
            case "name":
                return "Name";
            case "SearchByEmployer":
                return "Employer";
            case "SearchByEligibility":
                return "Eligibility";
            case "projectUrl":
                return "Project URL";

            case "fullName":
                return "Full Name";
            case "lastName":
                return "Last Name";
            case "newPassword":
                return "New Password";
            case "confirmPassword":
                return "Confirm Password";
            case "oldPassword":
                return "Old Password";
            case "calender":
                return "DOB";
            case "ssn":
                return "SSN";
            case "phoneNumber":
                return "Mobile Number";
            case "mobile":
            case "phoneNo":
                return "Mobile";
            case "phoneNumber":
                return "Phone Number";
            case "message":
                return "Message";
            case "zipCode":
                return "Zip Code";
            case "title":
                return "Title";
            case "company":
                return "Company";
            case "organization":
                return "Organization";
            case "grade":
                return "Grade";
            case "jobLocation":
                return "Job Location";
            case "package":
                return "Package";

            case "SearchProduct":
                return "Search Product";
            case "expiryDate":
                return "Job Expiry Date";
            case "salary":
                return "Salary";
            case "positionTitle":
                return "Position Title";
            case "sendTo":
                return "Send To";
            case "SearchByLocation":
                return "Location";


            case "skills1title":
            case "skills2title":
            case "skills3title":
            case "skills4title":
                return "Title";

            default:
                return "Label";
        }
    }

    const placeholder = (name) => {
        switch (name) {
            case "email":
                return "Enter your email";
            case "username":
                return "Enter your username";
            case "password":
            case "newPassword":
            case "confirmPassword":
            case "oldPassword":
                return "••••••••••";
            case "SearchByName":
                return "Search By Name";
            case "SearchByTitle":
                return "Search By Title";
            case "SearchByJobStatus":
                return "Search By Job Status";
            case "SearchByJobTitle":
                // return "Search By Job Title";
                return "Job Title";
            case "YourCompanysName":
                return "Handmade";
            case "YourPhoneNumber":
                return "+34 526 952 689";
            case "name":
                return "Pete Jones";
            case "SearchByEmployer":
                return "Employer";
            case "SearchByEligibility":
                return "Eligibility";

            case "fullName":
                return "Full Name";
            case "lastName":
                return "Last Name";
            case "ssn":
                return "AAA-GG-SSSS";
            case "phoneNumber":
            case "mobile":
            case "phoneNo":
                return "0000-0000000";
            case "phoneNumber":
                return "0000-0000000";
            case "message":
                return "Message";

            case "zip":
                return "123456";
            case "projectUrl":
                return "www.projectname.com";
            case "2ndNumber":
                return "000";
            case "3rdNumber":
                return "000-0000";
            case "title":
                return "Enter Title";
            case "company":
                return "Enter Company Name";
            case "organization":
                return "Enter Organization Name";
            case "jobLocation":
                return "Street# 1, Area abc, City, Country.";
            case "package":
                return "2000";
            case "salary":
                return "Salary";
            case "positionTitle":
                return "Position Title";
            case "sendTo":
                return "Select Reciept";

            case "SearchProduct":
                return "Search Product ...";
            case "SearchByLocation":
                return "Location";
            default:
                return "";
        }
    }
    const type = (name) => {
        switch (name) {
            case "email":
            case "fullName":
            case "ssn":
            case "phoneNumber":
            case "lastName":
            case "message":
            case "phoneNumber":
            case "phoneNo":
            case "mobile":
            case "SearchByName":
            case "SearchByTitle":
            case "SearchByEmployer":
            case "SearchByEligibility":
            case "SearchProduct":
            case "zip":
            case "projectUrl":
            case "2ndNumber":
            case "3rdNumber":
            case "title":
            case "company":
            case "organization":
            case "jobLocation":
            case "package":
            case "salary":
            case "positionTitle":
            case "sendTo":
                return "text";
            case "password":
            case "newPassword":
            case "confirmPassword":
            case "oldPassword":
                return "password";
            case "calender":
            case "expiryDate":
                return "date";
            default:
                return "text";
        }
    }

    return (
        <>
            <div className="flex justify-between items-center">
                {label &&
                    <label htmlFor={name} className={`
                    flex justify-start text-[14px] font-medium text-gray-2 tracking-wide ${helperText ? 'mb-1' : 'mb-2'} font-semibold capitalize
                    `}>
                        {_label(name)}: {required && <span className='text-[red]'>*</span>}
                        <span className='mt-[2px] ml-[3px]'> {icon && <Icon name={icon} />}</span>
                    </label>
                }
                {forgotPassword &&
                    <a className='text-purple-1 text-[14px] mb-2'>
                        <NavLink to="/forgot-password">
                            Forgot Password?
                        </NavLink>
                    </a>
                }
            </div>
            <div className={`relative ${(name === "SearchProduct" || name === "SearchByJobTitle" || name === "SearchByLocation") && 'w-full'}`}>
                {helperText &&
                    <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5 '>
                        {helperText}
                    </p>
                }
                <input
                    disabled={disabled}
                    type={name === "password" || name === "newPassword" || name === "confirmPassword" || name === "oldPassword" ? inputType : type(name)}
                    className={`w-full text-[14px] font-regular leading-[20px] text-gray-6 ${bgGray ? 'bg-gray-3' : 'bg-white'} border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 ${sm ? (name === "calender" ? 'py-[8px]' : 'py-[9px]') : 'py-[14px]'} ${className} ${(name === "SearchProduct" || (name === "SearchByJobTitle" && iconic) || (name === "SearchByLocation" && iconic)) && "pl-10"}`}
                    id={name}
                    name={name}
                    value={edit && value}
                    placeholder={placeholder(name)}
                    autoFocus
                    onBlur={onBlur}
                    // onChange={(e) => setValue(e.target.value)} 
                    onChange={onChange}
                // maxlength={maxlength && maxlength}
                />
                {name === "SearchProduct" &&
                    <span className='absolute left-3 top-[10px] text-gray-6'>
                        <Icon name="Search" />
                    </span>
                }
                {(name === "SearchByLocation" && iconic) &&
                    <span className='absolute left-3 top-[10px] text-gray-6'>
                        <Icon name="Location" />
                    </span>
                }
                {(name === "SearchByJobTitle" && iconic) &&
                    <span className='absolute left-3 top-[10px] text-gray-6'>
                        <Icon name="Search" />
                    </span>
                }
                {/* <input type={name === "password" ? inputType : type(name)} value={value} onChange={onChange} className={`w-full text-[14px] font-regular leading-[20px] text-gray-700 ${bgGray ? 'bg-gray-3' : 'bg-white'} border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 px-3 ${sm ? 'py-[9px]' : 'py-[14px]'} ${className}`} id={name} name={name}
                    placeholder={placeholder(name)} autoFocus /> */}
                {(name === "password" || name === "newPassword" || name === "confirmPassword" || name === "oldPassword") &&
                    <span className="absolute right-3 top-4 text-gray-1 text-[20px] cursor-pointer" onClick={togglePasswordVisibility}>
                        {passwordVisible ? <Icons.IoEyeOutline /> : <Icons.IoEyeOffOutline />}
                    </span>
                }
            </div>
            <p className='text-[red] text-[12px]'>{error}</p>
        </>
    )
}

export default InputWithLabel