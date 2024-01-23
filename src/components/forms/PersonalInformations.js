import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import Icon from '../icon';

function PersonalInformations({ action, handleCancel }) {
    const careerLevelOptions = [
        { name: "Entry Level", value: "entryLevel" },
        { name: "Mid-Level", value: "midLevel" },
        { name: "Senior", value: "senior" },
        { name: "Lead", value: "lead" },
    ];
    const experienceOptions = [
        { name: "6 months", value: "6months" },
        { name: "1 year", value: "1year" },
        { name: "2 years", value: "2years" },
        { name: "3 years", value: "3years" },
        { name: "4 years", value: "4years" },
        { name: "5 years", value: "5years" },
        { name: "6 years", value: "6years" },
        { name: "7 years", value: "7years" },
        { name: "8 years", value: "8years" },
        { name: "9 years", value: "9years" },
        { name: "10 years", value: "10years" },
        { name: "Over 10 years", value: "Over10" },
    ];
    const expectedSalaryOptions = [
        { name: "$1000 - $1500", value: "1000-1500" },
        { name: "$1500 - $2000", value: "1500-2000" },
        { name: "$2000 - $2500", value: "2000-2500" },
        { name: "$2500 - $3000", value: "2500-3000" },
        { name: "$3000 - $3500", value: "3000-3500" },
        { name: "$3500 - $4000", value: "3500-4000" },
        { name: "$4000 - $4500", value: "4000-4500" },
        { name: "Over $4500", value: "Over4500" },
    ];

    const mobileCodeOptions = [
        { name: "Choose any one", value: "" },
        { name: "United States", value: "+1" },
        { name: "India", value: "+91" },
        { name: "United Kingdom", value: "+44" },
        { name: "China", value: "+86" },
        { name: "Brazil", value: "+55" },
        { name: "Russia", value: "+7" },
        { name: "Germany", value: "+49" },
        { name: "Japan", value: "+81" },
        { name: "Australia", value: "+61" },
        { name: "South Africa", value: "+27" },
    ];

    const genderOptions = [
        { name: "Male", value: "Male" },
        { name: "Female", value: "Female" },
        { name: "No Preference", value: "No Preference" },
    ];

    // const nationalityOptions = [
    //     { name: "Afghanistan", value: "+93", },
    //     { name: "Albania", value: "+355", },
    //     { name: "Algeria", value: "+213", },
    //     { name: "American Samoa", value: "+1-684", },
    //     { name: "Andorra", value: "+376", },
    //     { name: "Angola", value: "+244", },
    //     { name: "Anguilla", value: "+1-264", },
    //     { name: "Antarctica", value: "+672", },
    //     { name: "Antigua and Barbuda", value: "+1-268", },
    //     { name: "Argentina", value: "+54", },
    //     { name: "Armenia", value: "+374", },
    //     { name: "Aruba", value: "+297", },
    //     { name: "Australia", value: "+61", },
    //     { name: "Austria", value: "+43", },
    //     { name: "Azerbaijan", value: "+994", },
    //     { name: "Bahamas", value: "+1-242", },
    //     { name: "Bahrain", value: "+973", },
    //     { name: "Bangladesh", value: "+880", },
    //     { name: "Barbados", value: "+1-246", },
    //     { name: "Belarus", value: "+375", },
    //     { name: "Belgium", value: "+32", },
    //     { name: "Belize", value: "+501", },
    //     { name: "Benin", value: "+229", },
    //     { name: "Bermuda", value: "+1-441", },
    //     { name: "Bhutan", value: "+975", },
    //     { name: "Bolivia", value: "+591", },
    //     { name: "Bosnia and Herzegovina", value: "+387", },
    //     { name: "Botswana", value: "+267", },
    //     { name: "Brazil", value: "+55", },
    //     { name: "British Indian Ocean Territory", value: "+246", },
    //     { name: "British Virgin Islands", value: "+1-284", },
    //     { name: "Brunei", value: "+673", },
    //     { name: "Bulgaria", value: "+359", },
    //     { name: "Burkina Faso", value: "+226", },
    //     { name: "Burundi", value: "+257", },
    //     { name: "Cambodia", value: "+855", },
    //     { name: "Cameroon", value: "+237", },
    //     { name: "Canada", value: "+1", },
    //     { name: "Cape Verde", value: "+238", },
    //     { name: "Cayman Islands", value: "+1-345", },
    //     { name: "Central African Republic", value: "+236", },
    //     { name: "Chad", value: "+235", },
    //     { name: "Chile", value: "+56", },
    //     { name: "China", value: "+86", },
    //     { name: "Christmas Island", value: "+61", },
    //     { name: "Cocos Islands", value: "+61", },
    //     { name: "Colombia", value: "+57", },
    //     { name: "Comoros", value: "+269", },
    //     { name: "Cook Islands", value: "+682", },
    //     { name: "Costa Rica", value: "+506", },
    //     { name: "Croatia", value: "+385", },
    //     { name: "Cuba", value: "+53", },
    //     { name: "Curacao", value: "+599", },
    //     { name: "Cyprus", value: "+357", },
    //     { name: "Czech Republic", value: "+420", },
    //     { name: "Democratic Republic of the Congo", value: "+243", },
    //     { name: "Denmark", value: "+45", },
    //     { name: "Djibouti", value: "+253", },
    //     { name: "Dominica", value: "+1-767", },
    //     { name: "Dominican Republic", value: "+1-809, 1-829, 1-849", },
    //     { name: "East Timor", value: "+670", },
    //     { name: "Ecuador", value: "+593", },
    //     { name: "Egypt", value: "+20", },
    //     { name: "El Salvador", value: "+503", },
    //     { name: "Equatorial Guinea", value: "+240", },
    //     { name: "Eritrea", value: "+291", },
    //     { name: "Estonia", value: "+372", },
    //     { name: "Ethiopia", value: "+251", },
    //     { name: "Falkland Islands", value: "+500", },
    //     { name: "Faroe Islands", value: "+298", },
    //     { name: "Fiji", value: "+679", },
    //     { name: "Finland", value: "+358", },
    //     { name: "France", value: "+33", },
    //     { name: "French Polynesia", value: "+689", },
    //     { name: "Gabon", value: "+241", },
    //     { name: "Gambia", value: "+220", },
    //     { name: "Georgia", value: "+995", },
    //     { name: "Germany", value: "+49", },
    //     { name: "Ghana", value: "+233", },
    //     { name: "Gibraltar", value: "+350", },
    //     { name: "Greece", value: "+30", },
    //     { name: "Greenland", value: "+299", },
    //     { name: "Grenada", value: "+1-473", },
    //     { name: "Guam", value: "+1-671", },
    //     { name: "Guatemala", value: "+502", },
    //     { name: "Guernsey", value: "+44-1481", },
    //     { name: "Guinea", value: "+224", },
    //     { name: "Guinea-Bissau", value: "+245", },
    //     { name: "Guyana", value: "+592", },
    //     { name: "Haiti", value: "+509", },
    //     { name: "Honduras", value: "+504", },
    //     { name: "Hong Kong", value: "+852", },
    //     { name: "Hungary", value: "+36", },
    //     { name: "Iceland", value: "+354", },
    //     { name: "India", value: "+91", },
    //     { name: "Indonesia", value: "+62", },
    //     { name: "Iran", value: "+98", },
    //     { name: "Iraq", value: "+964", },
    //     { name: "Ireland", value: "+353", },
    //     { name: "Isle of Man", value: "+44-1624", },
    //     { name: "Israel", value: "+972", },
    //     { name: "Italy", value: "+39", },
    //     { name: "Ivory Coast", value: "+225", },
    //     { name: "Jamaica", value: "+1-876", },
    //     { name: "Japan", value: "+81", },
    //     { name: "Jersey", value: "+44-1534", },
    //     { name: "Jordan", value: "+962", },
    //     { name: "Kazakhstan", value: "+7", },
    //     { name: "Kenya", value: "+254", },
    //     { name: "Kiribati", value: "+686", },
    //     { name: "Kosovo", value: "+383", },
    //     { name: "Kuwait", value: "+965", },
    //     { name: "Kyrgyzstan", value: "+996", },
    //     { name: "Laos", value: "+856", },
    //     { name: "Latvia", value: "+371", },
    //     { name: "Lebanon", value: "+961", },
    //     { name: "Lesotho", value: "+266", },
    //     { name: "Liberia", value: "+231", },
    //     { name: "Libya", value: "+218", },
    //     { name: "Liechtenstein", value: "+423", },
    //     { name: "Lithuania", value: "+370", },
    //     { name: "Luxembourg", value: "+352", },
    //     { name: "Macau", value: "+853", },
    //     { name: "Macedonia", value: "+389", },
    //     { name: "Madagascar", value: "+261", },
    //     { name: "Malawi", value: "+265", },
    //     { name: "Malaysia", value: "+60", },
    //     { name: "Maldives", value: "+960", },
    //     { name: "Mali", value: "+223", },
    //     { name: "Malta", value: "+356", },
    //     { name: "Marshall Islands", value: "+692", },
    //     { name: "Mauritania", value: "+222", },
    //     { name: "Mauritius", value: "+230", },
    //     { name: "Mayotte", value: "+262", },
    //     { name: "Mexico", value: "+52", },
    //     { name: "Micronesia", value: "+691", },
    //     { name: "Moldova", value: "+373", },
    //     { name: "Monaco", value: "+377", },
    //     { name: "Mongolia", value: "+976", },
    //     { name: "Montenegro", value: "+382", },
    //     { name: "Montserrat", value: "+1-664", },
    //     { name: "Morocco", value: "+212", },
    //     { name: "Mozambique", value: "+258", },
    //     { name: "Myanmar", value: "+95", },
    //     { name: "Namibia", value: "+264", },
    //     { name: "Nauru", value: "+674", },
    //     { name: "Nepal", value: "+977", },
    //     { name: "Netherlands", value: "+31", },
    //     { name: "Netherlands Antilles", value: "+599", },
    //     { name: "New Caledonia", value: "+687", },
    //     { name: "New Zealand", value: "+64", },
    //     { name: "Nicaragua", value: "+505", },
    //     { name: "Niger", value: "+227", },
    //     { name: "Nigeria", value: "+234", },
    //     { name: "Niue", value: "+683", },
    //     { name: "North Korea", value: "+850", },
    //     { name: "Northern Mariana Islands", value: "+1-670", },
    //     { name: "Norway", value: "+47", },
    //     { name: "Oman", value: "+968", },
    //     { name: "Pakistan", value: "+92", },
    //     { name: "Palau", value: "+680", },
    //     { name: "Palestine", value: "+970", },
    //     { name: "Panama", value: "+507", },
    //     { name: "Papua New Guinea", value: "+675", },
    //     { name: "Paraguay", value: "+595", },
    //     { name: "Peru", value: "+51", },
    //     { name: "Philippines", value: "+63", },
    //     { name: "Pitcairn", value: "+64", },
    //     { name: "Poland", value: "+48", },
    //     { name: "Portugal", value: "+351", },
    //     { name: "Puerto Rico", value: "+1-787, 1-939", },
    //     { name: "Qatar", value: "+974", },
    //     { name: "Republic of the Congo", value: "+242", },
    //     { name: "Reunion", value: "+262", },
    //     { name: "Romania", value: "+40", },
    //     { name: "Russia", value: "+7", },
    //     { name: "Rwanda", value: "+250", },
    //     { name: "Saint Barthelemy", value: "+590", },
    //     { name: "Saint Helena", value: "+290", },
    //     { name: "Saint Kitts and Nevis", value: "+1-869", },
    //     { name: "Saint Lucia", value: "+1-758", },
    //     { name: "Saint Martin", value: "+590", },
    //     { name: "Saint Pierre and Miquelon", value: "+508", },
    //     { name: "Saint Vincent and the Grenadines", value: "+1-784", },
    //     { name: "Samoa", value: "+685", },
    //     { name: "San Marino", value: "+378", },
    //     { name: "Sao Tome and Principe", value: "+239", },
    //     { name: "Saudi Arabia", value: "+966", },
    //     { name: "Senegal", value: "+221", },
    //     { name: "Serbia", value: "+381", },
    //     { name: "Seychelles", value: "+248", },
    //     { name: "Sierra Leone", value: "+232", },
    //     { name: "Singapore", value: "+65", },
    //     { name: "Sint Maarten", value: "+1-721", },
    //     { name: "Slovakia", value: "+421", },
    //     { name: "Slovenia", value: "+386", },
    //     { name: "Solomon Islands", value: "+677", },
    //     { name: "Somalia", value: "+252", },
    //     { name: "South Africa", value: "+27", },
    //     { name: "South Korea", value: "+82", },
    //     { name: "South Sudan", value: "+211", },
    //     { name: "Spain", value: "+34", },
    //     { name: "Sri Lanka", value: "+94", },
    //     { name: "Sudan", value: "+249", },
    //     { name: "Suriname", value: "+597", },
    //     { name: "Svalbard and Jan Mayen", value: "+47", },
    //     { name: "Swaziland", value: "+268", },
    //     { name: "Sweden", value: "+46", },
    //     { name: "Switzerland", value: "+41", },
    //     { name: "Syria", value: "+963", },
    //     { name: "Taiwan", value: "+886", },
    //     { name: "Tajikistan", value: "+992", },
    //     { name: "Tanzania", value: "+255", },
    //     { name: "Thailand", value: "+66", },
    //     { name: "Togo", value: "+228", },
    //     { name: "Tokelau", value: "+690", },
    //     { name: "Tonga", value: "+676", },
    //     { name: "Trinidad and Tobago", value: "+1-868", },
    //     { name: "Tunisia", value: "+216", },
    //     { name: "Turkey", value: "+90", },
    //     { name: "Turkmenistan", value: "+993", },
    //     { name: "Turks and Caicos Islands", value: "+1-649", },
    //     { name: "Tuvalu", value: "+688", },
    //     { name: "U.S. Virgin Islands", value: "+1-340", },
    //     { name: "Uganda", value: "+256", },
    //     { name: "Ukraine", value: "+380", },
    //     { name: "United Arab Emirates", value: "+971", },
    //     { name: "United Kingdom", value: "+44", },
    //     { name: "United States", value: "+1", },
    //     { name: "Uruguay", value: "+598", },
    //     { name: "Uzbekistan", value: "+998", },
    //     { name: "Vanuatu", value: "+678", },
    //     { name: "Vatican", value: "+379", },
    //     { name: "Venezuela", value: "+58", },
    //     { name: "Vietnam", value: "+84", },
    //     { name: "Wallis and Futuna", value: "+681", },
    //     { name: "Western Sahara", value: "+212", },
    //     { name: "Yemen", value: "+967", },
    //     { name: "Zambia", value: "+260", },
    //     { name: "Zimbabwe", value: "+263" },
    // ];

    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const endYear = currentYear - 5;
    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push({ name: year.toString(), value: year.toString() });
    }

    const monthsOptions = [
        { name: 'January', value: '01' },
        { name: 'February', value: '02' },
        { name: 'March', value: '03' },
        { name: 'April', value: '04' },
        { name: 'May', value: '05' },
        { name: 'June', value: '06' },
        { name: 'July', value: '07' },
        { name: 'August', value: '08' },
        { name: 'September', value: '09' },
        { name: 'October', value: '10' },
        { name: 'November', value: '11' },
        { name: 'December', value: '12' },
    ];
    const daysOptions = Array.from({ length: 31 }, (_, index) => {
        const day = index + 1;
        const paddedDay = day < 10 ? `0${day}` : day.toString();
        return { name: paddedDay, value: paddedDay };
    });

    const [data] = useState({});
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [dob, setDob] = useState('');
    const [profilePicture, setProfilePictrue] = useState('');


    const [selectedCode, setSelectedCode] = useState('Choose');

    const handleCodeChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCode(selectedValue);
    };

    const handleMobileNo = (e, setFieldValue) => {
        console.log("numbers", e.target.value)
        setFieldValue('phoneNo', selectedCode + e.target.value);
        // if (type === "desiredJobTitle") {
        // }
        // if (type === "willingToLocations") {
        //     setFieldValue('relocation', {
        //         ...values.relocation,
        //         locations: selectedItems
        //     });
        // }

    };

    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    const handleCountryChange = (event) => {
        const countryValue = event.target.value;
        setSelectedCountry(countryValue);

        const countryStates = State.getStatesOfCountry(countryValue);
        setStates(countryStates);

        setSelectedState('');
        setSelectedCity('');
    };

    const handleStateChange = (event) => {
        const stateValue = event.target.value;
        setSelectedState(stateValue);

        const stateCities = City.getCitiesOfState(selectedCountry, stateValue);
        setCities(stateCities);

        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        const cityValue = event.target.value;
        setSelectedCity(cityValue);
    };

    const handleDateChange = (name, event) => {
        const value = event.target.value;
        if (name === "day") {
            setSelectedDay(value)
        }
        if (name === "month") {
            setSelectedMonth(value)
        }
        if (name === "year") {
            if (selectedDay !== "" && selectedMonth !== "" && value !== "") {
                let _dob = selectedDay + '/' + selectedMonth + '/' + value
                setDob(_dob)
            }
        }
    };

    const handleSubmit = (values, actions) => {
        console.log("profilePicture", profilePicture);
        console.log("name", values.name);
        console.log("lastName", values.lastName);
        console.log("email", values.email);
        console.log("phoneNo", values.phoneNo);
        console.log("dob", dob)
        console.log("gender", values.gender);
        console.log("selectedCountry", selectedCountry)
        console.log("selectedState", selectedState)
        console.log("selectedCity", selectedCity)
        console.log("careerLevel", values.careerLevel);
        console.log("experience", values.experience);
        console.log("expectedSalary", values.expectedSalary);
        console.log("zip", values.zip);
    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form>

                    <Core.UploadAvatar setState={setProfilePictrue} />

                    <div className='mb-4'>
                        <Field name="name">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="name"
                                    label
                                    required
                                    bgGray
                                    placeholder="Enter your name"
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="lastName">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="lastName"
                                    label
                                    bgGray
                                    placeholder="Enter your last name"
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="email">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="email"
                                    label
                                    required
                                    bgGray
                                    helperText={'Only provided to employers you apply or respond to'}
                                    icon="Lock1"
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <label className={`flex justify-start text-[14px] font-medium text-gray-2 tracking-wide mb-1 font-semibold capitalize`}>
                            Mobile <span className='text-[red]'>*</span>
                            <span className='mt-[2px] ml-[3px]'> <Icon name={'Lock1'} /></span>
                        </label>
                        <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5 '>
                            Only provided to employers you apply or respond to
                        </p>
                        <div className='flex gap-x-2'>
                            <div className='relative w-[25%]'>
                                <select
                                    onChange={handleCodeChange}
                                    value={selectedCode}
                                    className="w-full text-[14px] font-regular leading-[20px] text-transparent font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]">
                                    <option value="" className='text-black-1'>{'-'}</option>
                                    {mobileCodeOptions.map((value, index) => (
                                        <option key={value?.name + index} value={value?.value} className='text-black-1' >
                                            {value?.name}
                                        </option>
                                    ))}
                                </select>
                                {selectedCode && <span className='absolute left-0 top-0 flex justify-start items-center w-[40%] h-[37px] text-[14px] leading-[16px] font-semibold rounded-md bg-gray-3 m-[1%] pl-3'>{`${selectedCode}`}</span>}
                            </div>
                            <div className='w-[75%]'>
                                <Field name="mobileNumbers">
                                    {({ field }) => (
                                        <Core.InputWithLabel
                                            {...field}
                                            sm
                                            name="mobileNumbers"
                                            required
                                            bgGray
                                            icon="Lock1"
                                            onChange={(e) => handleMobileNo(e, setFieldValue)}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full mb-4'>
                        <div className='flex gap-x-2'>
                            <div className='w-[70%]'>
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    Date of Birth <span className='text-[red]'>*</span>
                                </label>
                                <div className='flex gap-x-2'>
                                    <div className='w-[33%]'>
                                        <Core.SelectWithLabel
                                            name={"day"}
                                            sm
                                            options={daysOptions}
                                            defaultOption="Day"
                                            onChange={(value) => handleDateChange("day", value)}
                                            required
                                        />
                                    </div>
                                    <div className='w-[33%]'>
                                        <Core.SelectWithLabel
                                            name={"month"}
                                            sm
                                            options={monthsOptions}
                                            defaultOption="Month"
                                            onChange={(value) => handleDateChange("month", value)}
                                            required
                                        />
                                    </div>
                                    <div className='w-[33%]'>
                                        <Core.SelectWithLabel
                                            name={"year"}
                                            sm
                                            options={yearOptions}
                                            defaultOption="Year"
                                            onChange={(value) => handleDateChange("year", value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[30%]'>
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    Gender <span className='text-[red]'>*</span>
                                </label>
                                <Field name="gender">
                                    {({ field }) => (
                                        <Core.SelectWithLabel
                                            {...field}
                                            name={"gender"}
                                            sm
                                            options={genderOptions}
                                            defaultOption="Select"
                                            // onChange={(value) => handleChange("gender", value)}
                                            required
                                        />
                                    )}
                                </Field>

                            </div>
                        </div>
                    </div>

                    <span className="flex items-center gap-x-1 text-gray-400 leading-0 opacity-70 my-1"><Icon name="Info" />This information is collected for statistical purposes and will not be shared with employers</span>

                    <div className='mb-4'>
                        {/* Country */}
                        <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                            Nationality <span className='text-[red]'>*</span>
                        </label>
                        <select
                            name="nationality"
                            onChange={handleCountryChange} value={selectedCountry}
                            className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
                        >
                            <option value="">Select</option>
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='mb-4'>
                        <div className='flex justify-between gap-x-2'>
                            <div className='w-[50%]'>
                                {/* State */}
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    State
                                </label>
                                <select
                                    name="state"
                                    onChange={handleStateChange} value={selectedState} disabled={!selectedCountry}
                                    className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"

                                >
                                    <option value="">Select State</option>
                                    {states.map((state) => (
                                        <option key={state.isoCode} value={state.isoCode}>
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='w-[50%]'>
                                {/* City */}
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    City
                                </label>
                                <select
                                    name="city"
                                    onChange={handleCityChange} value={selectedCity} disabled={!selectedState}
                                    className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
                                >
                                    <option value="">Select City</option>
                                    {cities.map((city) => (
                                        <option key={city.name} value={city.name}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <div className='flex gap-x-2'>
                            <div className='w-full'>
                                <Field name="careerLevel">
                                    {({ field }) => (
                                        <Core.SelectWithLabel
                                            {...field}
                                            name={"careerLevel"}
                                            label
                                            options={careerLevelOptions}
                                            defaultOption="Choose any one"
                                            // onChange={(value) => handleChange("careerLevel", value)}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className='w-full'>
                                <Field name="experience">
                                    {({ field }) => (
                                        <Core.SelectWithLabel
                                            {...field}
                                            name={"experience"}
                                            label
                                            options={experienceOptions}
                                            defaultOption="Choose any one"
                                            // onChange={(value) => handleChange("experience", value)}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Field name="expectedSalary">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"expectedSalary"}
                                    label
                                    options={expectedSalaryOptions}
                                // onChange={(value) => handleChange("expectedSalary", value)}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="zip">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="zip"
                                    label
                                />
                            )}
                        </Field>
                    </div>

                    {action === "edit" &&
                        <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow" submit>Save</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                    }
                </Form>
            )}
        </Formik >
    );
}

export default PersonalInformations;
