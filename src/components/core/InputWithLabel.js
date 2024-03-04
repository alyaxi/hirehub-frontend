import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Icons } from '..';
import Icon from '../../components/icon';
import { useNavigate } from 'react-router-dom';

function InputWithLabel({ onChange, label, name, forgotPassword, required, helperText, className, sm, bgGray, value, setValue, onBlur, error, icon, iconic, maxLength, edit, disabled }) {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputType, setInputType] = useState('password');
    const navigate = useNavigate();

    // console.log("name", name)
    // console.log("value", value)
    // console.log("data",data)
    // console.log("data",data)

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
            case "newPassword":
                return "New Password";
            case "confirmPassword":
                return "Confirm Password";
            case "oldPassword":
                return "Old Password";
            case "username":
                return "Username";
            case "companyName":
                return "Your Company's Name";
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
            case "calender":
                return "DOB";
            case "ssn":
                return "SSN";
            case "mobile":
                return "Mobile";
            case "phoneNumber":
            case "phoneNo":
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
                return "Educational Institution";
            case "grade":
                return "Grade";
            case "location":
                return "Job Location";
            case "package":
                return "Package";

            case "SearchProduct":
                return "Search Product";
            case "SearchByEmailProcess":
                return "Search by Email";
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
            case "date":
                return "Date";
            case "scheduledDate":
                return "Scheduled Date";
            case "startTime":
                return "Start Time";
            case "endTime":
                return "End Time";
            case "attachments":
                return "Attach Document";

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
            case "companyName":
                return "Handmade";
            case "phoneNo":
                // return "+34 526 952 689";
                return "0000-0000000";
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
                return "Enter Educational Institution Name";
            case "location":
                // return "Street# 1, Area abc, City, Country.";
                return "Enter here";
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
            case "SearchByEmailProcess":
                return "Search Email Process. . .";
            case "SearchByLocation":
                return "Location";
            default:
                return "";
        }
    }
    const type = (name) => {
        switch (name) {
            case "email":
                return "email";
            case "fullName":
            case "ssn":
            case "phoneNumber":
            case "lastName":
            case "message":
            case "phoneNo":
            case "mobile":
            case "SearchByName":
            case "SearchByTitle":
            case "SearchByEmployer":
            case "SearchByEligibility":
            case "SearchProduct":
            case "SearchByEmailProcess":
            case "zip":
            case "projectUrl":
            case "2ndNumber":
            case "3rdNumber":
            case "title":
            case "company":
            case "organization":
            case "location":
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
            case "scheduledDate":
            case "date":
                return "date";
            case "startTime":
            case "endTime":
                return "time";
            case "attachments":
                return "file";
            default:
                return "text";
        }
    }

    const navigateToForgotPassword = () => {
        navigate("/forgot-password");
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
                    <a className='forgot-link text-purple-1 text-[14px] mb-2'
                        tabIndex="0"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                navigateToForgotPassword();
                            }
                        }}
                    >
                        <NavLink to="/forgot-password">
                            Forgot Password?
                        </NavLink>
                    </a>
                }
            </div>
            <div className={`relative ${(name === "SearchProduct" || name === "SearchByEmailProcess" || name === "SearchByJobTitle" || name === "SearchByLocation") && 'w-full'}`}>
                {helperText &&
                    <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5 '>
                        {helperText}
                    </p>
                }
                <input
                    disabled={disabled}
                    type={name === "password" || name === "newPassword" || name === "confirmPassword" || name === "oldPassword" ? inputType : type(name)}
                    className={`
                        w-full text-[14px] font-regular leading-[20px] text-gray-6 ${bgGray ? 'bg-gray-3' : disabled === true ? 'bg-gray-3 cursor-not-allowed' : "bg-white"} border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 ${sm ? (name === "calender" ? 'py-[8px]' : 'py-[9px]') : 'py-[14px]'} ${className} ${(name === "SearchProduct" || name === "SearchByEmailProcess" || (name === "SearchByJobTitle" && iconic) || (name === "SearchByLocation" && iconic)) && "pl-10"}
                                           
                    `}
                    id={name}
                    name={name}
                    value={edit && value}
                    placeholder={placeholder(name)}
                    autoFocus
                    onBlur={onBlur}
                    // onChange={(e) => setValue(e.target.value)} 
                    onChange={onChange}
                    maxLength={maxLength && maxLength}
                    accept={name === "attachments" ? "application/pdf" : undefined}
                />
                {name === "SearchProduct" &&
                    <span className='absolute left-3 top-[10px] text-gray-6'>
                        <Icon name="Search" />
                    </span>
                }
                {name === "SearchByEmailProcess" &&
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
                    <span className="eye-span absolute right-3 top-4 text-gray-1 text-[20px] cursor-pointer"
                        onClick={togglePasswordVisibility}
                        tabIndex="0"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                togglePasswordVisibility();
                            }
                        }}
                    >
                        {passwordVisible ? <Icons.IoEyeOutline /> : <Icons.IoEyeOffOutline />}
                    </span>
                }
            </div>
            <p className='text-[red] text-[12px]'>{error}</p>
        </>
    )
}

export default InputWithLabel