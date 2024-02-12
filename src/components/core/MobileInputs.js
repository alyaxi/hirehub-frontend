import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Core, Icons } from '..';
import Icon from '../icon';

function MobileInputs({ onChange, label, name, forgotPassword, required, helperText, className, sm, bgGray, value, setValue, onBlur, error, icon }) {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputType, setInputType] = useState('password');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setInputType(passwordVisible ? 'password' : 'text');
    };

    const countryCallingCodesOptions = [
        { name: "Afghanistan", value: "+93", },
        { name: "Albania", value: "+355", },
        { name: "Algeria", value: "+213", },
        { name: "American Samoa", value: "+1-684", },
        { name: "Andorra", value: "+376", },
        { name: "Angola", value: "+244", },
        { name: "Anguilla", value: "+1-264", },
        { name: "Antarctica", value: "+672", },
        { name: "Antigua and Barbuda", value: "+1-268", },
        { name: "Argentina", value: "+54", },
        { name: "Armenia", value: "+374", },
        { name: "Aruba", value: "+297", },
        { name: "Australia", value: "+61", },
        { name: "Austria", value: "+43", },
        { name: "Azerbaijan", value: "+994", },
        { name: "Bahamas", value: "+1-242", },
        { name: "Bahrain", value: "+973", },
        { name: "Bangladesh", value: "+880", },
        { name: "Barbados", value: "+1-246", },
        { name: "Belarus", value: "+375", },
        { name: "Belgium", value: "+32", },
        { name: "Belize", value: "+501", },
        { name: "Benin", value: "+229", },
        { name: "Bermuda", value: "+1-441", },
        { name: "Bhutan", value: "+975", },
        { name: "Bolivia", value: "+591", },
        { name: "Bosnia and Herzegovina", value: "+387", },
        { name: "Botswana", value: "+267", },
        { name: "Brazil", value: "+55", },
        { name: "British Indian Ocean Territory", value: "+246", },
        { name: "British Virgin Islands", value: "+1-284", },
        { name: "Brunei", value: "+673", },
        { name: "Bulgaria", value: "+359", },
        { name: "Burkina Faso", value: "+226", },
        { name: "Burundi", value: "+257", },
        { name: "Cambodia", value: "+855", },
        { name: "Cameroon", value: "+237", },
        { name: "Canada", value: "+1", },
        { name: "Cape Verde", value: "+238", },
        { name: "Cayman Islands", value: "+1-345", },
        { name: "Central African Republic", value: "+236", },
        { name: "Chad", value: "+235", },
        { name: "Chile", value: "+56", },
        { name: "China", value: "+86", },
        { name: "Christmas Island", value: "+61", },
        { name: "Cocos Islands", value: "+61", },
        { name: "Colombia", value: "+57", },
        { name: "Comoros", value: "+269", },
        { name: "Cook Islands", value: "+682", },
        { name: "Costa Rica", value: "+506", },
        { name: "Croatia", value: "+385", },
        { name: "Cuba", value: "+53", },
        { name: "Curacao", value: "+599", },
        { name: "Cyprus", value: "+357", },
        { name: "Czech Republic", value: "+420", },
        { name: "Democratic Republic of the Congo", value: "+243", },
        { name: "Denmark", value: "+45", },
        { name: "Djibouti", value: "+253", },
        { name: "Dominica", value: "+1-767", },
        { name: "Dominican Republic", value: "+1-809, 1-829, 1-849", },
        { name: "East Timor", value: "+670", },
        { name: "Ecuador", value: "+593", },
        { name: "Egypt", value: "+20", },
        { name: "El Salvador", value: "+503", },
        { name: "Equatorial Guinea", value: "+240", },
        { name: "Eritrea", value: "+291", },
        { name: "Estonia", value: "+372", },
        { name: "Ethiopia", value: "+251", },
        { name: "Falkland Islands", value: "+500", },
        { name: "Faroe Islands", value: "+298", },
        { name: "Fiji", value: "+679", },
        { name: "Finland", value: "+358", },
        { name: "France", value: "+33", },
        { name: "French Polynesia", value: "+689", },
        { name: "Gabon", value: "+241", },
        { name: "Gambia", value: "+220", },
        { name: "Georgia", value: "+995", },
        { name: "Germany", value: "+49", },
        { name: "Ghana", value: "+233", },
        { name: "Gibraltar", value: "+350", },
        { name: "Greece", value: "+30", },
        { name: "Greenland", value: "+299", },
        { name: "Grenada", value: "+1-473", },
        { name: "Guam", value: "+1-671", },
        { name: "Guatemala", value: "+502", },
        { name: "Guernsey", value: "+44-1481", },
        { name: "Guinea", value: "+224", },
        { name: "Guinea-Bissau", value: "+245", },
        { name: "Guyana", value: "+592", },
        { name: "Haiti", value: "+509", },
        { name: "Honduras", value: "+504", },
        { name: "Hong Kong", value: "+852", },
        { name: "Hungary", value: "+36", },
        { name: "Iceland", value: "+354", },
        { name: "India", value: "+91", },
        { name: "Indonesia", value: "+62", },
        { name: "Iran", value: "+98", },
        { name: "Iraq", value: "+964", },
        { name: "Ireland", value: "+353", },
        { name: "Isle of Man", value: "+44-1624", },
        { name: "Israel", value: "+972", },
        { name: "Italy", value: "+39", },
        { name: "Ivory Coast", value: "+225", },
        { name: "Jamaica", value: "+1-876", },
        { name: "Japan", value: "+81", },
        { name: "Jersey", value: "+44-1534", },
        { name: "Jordan", value: "+962", },
        { name: "Kazakhstan", value: "+7", },
        { name: "Kenya", value: "+254", },
        { name: "Kiribati", value: "+686", },
        { name: "Kosovo", value: "+383", },
        { name: "Kuwait", value: "+965", },
        { name: "Kyrgyzstan", value: "+996", },
        { name: "Laos", value: "+856", },
        { name: "Latvia", value: "+371", },
        { name: "Lebanon", value: "+961", },
        { name: "Lesotho", value: "+266", },
        { name: "Liberia", value: "+231", },
        { name: "Libya", value: "+218", },
        { name: "Liechtenstein", value: "+423", },
        { name: "Lithuania", value: "+370", },
        { name: "Luxembourg", value: "+352", },
        { name: "Macau", value: "+853", },
        { name: "Macedonia", value: "+389", },
        { name: "Madagascar", value: "+261", },
        { name: "Malawi", value: "+265", },
        { name: "Malaysia", value: "+60", },
        { name: "Maldives", value: "+960", },
        { name: "Mali", value: "+223", },
        { name: "Malta", value: "+356", },
        { name: "Marshall Islands", value: "+692", },
        { name: "Mauritania", value: "+222", },
        { name: "Mauritius", value: "+230", },
        { name: "Mayotte", value: "+262", },
        { name: "Mexico", value: "+52", },
        { name: "Micronesia", value: "+691", },
        { name: "Moldova", value: "+373", },
        { name: "Monaco", value: "+377", },
        { name: "Mongolia", value: "+976", },
        { name: "Montenegro", value: "+382", },
        { name: "Montserrat", value: "+1-664", },
        { name: "Morocco", value: "+212", },
        { name: "Mozambique", value: "+258", },
        { name: "Myanmar", value: "+95", },
        { name: "Namibia", value: "+264", },
        { name: "Nauru", value: "+674", },
        { name: "Nepal", value: "+977", },
        { name: "Netherlands", value: "+31", },
        { name: "Netherlands Antilles", value: "+599", },
        { name: "New Caledonia", value: "+687", },
        { name: "New Zealand", value: "+64", },
        { name: "Nicaragua", value: "+505", },
        { name: "Niger", value: "+227", },
        { name: "Nigeria", value: "+234", },
        { name: "Niue", value: "+683", },
        { name: "North Korea", value: "+850", },
        { name: "Northern Mariana Islands", value: "+1-670", },
        { name: "Norway", value: "+47", },
        { name: "Oman", value: "+968", },
        { name: "Pakistan", value: "+92", },
        { name: "Palau", value: "+680", },
        { name: "Palestine", value: "+970", },
        { name: "Panama", value: "+507", },
        { name: "Papua New Guinea", value: "+675", },
        { name: "Paraguay", value: "+595", },
        { name: "Peru", value: "+51", },
        { name: "Philippines", value: "+63", },
        { name: "Pitcairn", value: "+64", },
        { name: "Poland", value: "+48", },
        { name: "Portugal", value: "+351", },
        { name: "Puerto Rico", value: "+1-787, 1-939", },
        { name: "Qatar", value: "+974", },
        { name: "Republic of the Congo", value: "+242", },
        { name: "Reunion", value: "+262", },
        { name: "Romania", value: "+40", },
        { name: "Russia", value: "+7", },
        { name: "Rwanda", value: "+250", },
        { name: "Saint Barthelemy", value: "+590", },
        { name: "Saint Helena", value: "+290", },
        { name: "Saint Kitts and Nevis", value: "+1-869", },
        { name: "Saint Lucia", value: "+1-758", },
        { name: "Saint Martin", value: "+590", },
        { name: "Saint Pierre and Miquelon", value: "+508", },
        { name: "Saint Vincent and the Grenadines", value: "+1-784", },
        { name: "Samoa", value: "+685", },
        { name: "San Marino", value: "+378", },
        { name: "Sao Tome and Principe", value: "+239", },
        { name: "Saudi Arabia", value: "+966", },
        { name: "Senegal", value: "+221", },
        { name: "Serbia", value: "+381", },
        { name: "Seychelles", value: "+248", },
        { name: "Sierra Leone", value: "+232", },
        { name: "Singapore", value: "+65", },
        { name: "Sint Maarten", value: "+1-721", },
        { name: "Slovakia", value: "+421", },
        { name: "Slovenia", value: "+386", },
        { name: "Solomon Islands", value: "+677", },
        { name: "Somalia", value: "+252", },
        { name: "South Africa", value: "+27", },
        { name: "South Korea", value: "+82", },
        { name: "South Sudan", value: "+211", },
        { name: "Spain", value: "+34", },
        { name: "Sri Lanka", value: "+94", },
        { name: "Sudan", value: "+249", },
        { name: "Suriname", value: "+597", },
        { name: "Svalbard and Jan Mayen", value: "+47", },
        { name: "Swaziland", value: "+268", },
        { name: "Sweden", value: "+46", },
        { name: "Switzerland", value: "+41", },
        { name: "Syria", value: "+963", },
        { name: "Taiwan", value: "+886", },
        { name: "Tajikistan", value: "+992", },
        { name: "Tanzania", value: "+255", },
        { name: "Thailand", value: "+66", },
        { name: "Togo", value: "+228", },
        { name: "Tokelau", value: "+690", },
        { name: "Tonga", value: "+676", },
        { name: "Trinidad and Tobago", value: "+1-868", },
        { name: "Tunisia", value: "+216", },
        { name: "Turkey", value: "+90", },
        { name: "Turkmenistan", value: "+993", },
        { name: "Turks and Caicos Islands", value: "+1-649", },
        { name: "Tuvalu", value: "+688", },
        { name: "U.S. Virgin Islands", value: "+1-340", },
        { name: "Uganda", value: "+256", },
        { name: "Ukraine", value: "+380", },
        { name: "United Arab Emirates", value: "+971", },
        { name: "United Kingdom", value: "+44", },
        { name: "United States", value: "+1", },
        { name: "Uruguay", value: "+598", },
        { name: "Uzbekistan", value: "+998", },
        { name: "Vanuatu", value: "+678", },
        { name: "Vatican", value: "+379", },
        { name: "Venezuela", value: "+58", },
        { name: "Vietnam", value: "+84", },
        { name: "Wallis and Futuna", value: "+681", },
        { name: "Western Sahara", value: "+212", },
        { name: "Yemen", value: "+967", },
        { name: "Zambia", value: "+260", },
        { name: "Zimbabwe", value: "+263" },
    ];
    const handleChange = (name, event) => {
        const value = event.target.value;
        console.log("value", value)
    };
    return (
        <>
            <div className="flex justify-between items-center">
                {label &&
                    <label htmlFor={'mobile'} className={`
                    flex justify-start text-[14px] font-medium text-gray-2 tracking-wide ${helperText ? 'mb-1' : 'mb-2'} font-semibold capitalize
                    `}>
                        Mobile{required && <span className='text-[red]'>*</span>}
                        <span className='mt-[2px] ml-[3px]'> {icon && <Icon name={icon} />}</span>
                    </label>
                }
            </div>
            <div className={`relative ${name === "SearchProduct" && 'w-full'}`}>
                {helperText &&
                    <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5 '>
                        {helperText}
                    </p>
                }
                <div className='flex justify-between gap-x-2'>


                    <Core.SelectWithLabel
                        name={"countryCallingCodes"}
                        options={countryCallingCodesOptions}
                        onChange={(value) => handleChange("countryCallingCodes", value)}
                    />
                    <Core.InputWithLabel
                        name="2ndNumber"
                        maxLength={3}
                    // required
                    />
                    <Core.InputWithLabel
                        name="3rdNumber"
                        maxLength={7}
                    // required
                    /> 
                </div>
            </div>
            <p className='text-[red] text-[12px]'>{error}</p>
        </>
    )
}

export default MobileInputs