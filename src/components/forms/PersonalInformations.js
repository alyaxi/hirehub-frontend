import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import Icon from '../icon';

const personalInformationDataSavedOnDb = {
    name: "John",
    lastName: "Francois22",
    statusLine: "Design Lead | Author of the 'Design Manual' and the 'Ultimate Guide to Web Design' | Teaching 300,000+ Designers Worldwide",
    phoneNo: "+1 215-538-6957",
    email: "michaeljfuller@rhyta.com",
    profileCompletion: "50",
    zipCode: "000000",
    expectedSalary: '2000-2500',
    careerLevel: 'midLevel',
    experience: '6years',
    country: 'Andorra',
    state: 'Canillo',
    city: 'El Tarter',
    dob: '02/03/1904',
    gender: 'Male',
    phoneNo: "+17193651632",
}

function PersonalInformations({ action, handleCancel, setPersonalInformationData }) {
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

    const [data] = useState({
        name: personalInformationDataSavedOnDb.name,
        lastName: personalInformationDataSavedOnDb.lastName,
        email: personalInformationDataSavedOnDb.email,
        zipCode: personalInformationDataSavedOnDb.zipCode,
        expectedSalary: personalInformationDataSavedOnDb.expectedSalary,
        careerLevel: personalInformationDataSavedOnDb.careerLevel,
        experience: personalInformationDataSavedOnDb.experience,
        gender: personalInformationDataSavedOnDb.gender,
    });
    // const [selectedCountry, setSelectedCountry] = useState(personalInformationDataSavedOnDb.country);
    const [selectedCountry, setSelectedCountry] = useState('');
    // const [selectedState, setSelectedState] = useState(personalInformationDataSavedOnDb.state);
    const [selectedState, setSelectedState] = useState('');
    // const [selectedCity, setSelectedCity] = useState(personalInformationDataSavedOnDb.city);
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const day = personalInformationDataSavedOnDb.dob.match(/^(\d+)\//);
    const _day = day ? day[1] : null;

    const month = personalInformationDataSavedOnDb.dob.match(/\/(\d+)\//);
    const _month = month ? month[1] : null;

    const year = personalInformationDataSavedOnDb.dob.match(/\/(\d+)$/);
    const _year = year ? year[1] : null;

    const [selectedDay, setSelectedDay] = useState(_day);
    const [selectedMonth, setSelectedMonth] = useState(_month);
    const [selectedYear, setSelectedYear] = useState(_year);
    const [dob, setDob] = useState();
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
            setSelectedYear(value)
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
        console.log("country", selectedCountry)
        console.log("state", selectedState)
        console.log("city", selectedCity)
        console.log("careerLevel", values.careerLevel);
        console.log("experience", values.experience);
        console.log("expectedSalary", values.expectedSalary);
        console.log("zip", values.zip);
        let _personalInformationData = {
            profilePicture: profilePicture,
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            phoneNo: values.phoneNo,
            dob: dob,
            gender: values.gender,
            selectedCountry: selectedCountry,
            selectedState: selectedState,
            selectedCity: selectedCity,
            careerLevel: values.careerLevel,
            experience: values.experience,
            expectedSalary: values.expectedSalary,
            zip: values.zip,
        }
        setPersonalInformationData(_personalInformationData)
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
                                    edit
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
                                    edit
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
                                    edit
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="phoneNo">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="phoneNo"
                                    label
                                    required
                                    bgGray
                                    helperText={'Only provided to employers you apply or respond to'}
                                    icon="Lock1"
                                    edit
                                />
                            )}
                        </Field>
                    </div>


                    {/* <div className='mb-4'>
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
                    </div> */}

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
                                            value={selectedDay}

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
                                            value={selectedMonth}
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
                                            value={selectedYear}
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
                                            required
                                            value={field.value}
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
                            onChange={handleCountryChange}
                            value={selectedCountry}
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
                                    onChange={handleStateChange}
                                    value={selectedState}
                                    disabled={!selectedCountry}
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
                                    onChange={handleCityChange}
                                    value={selectedCity}
                                    disabled={!selectedState}
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
                                            value={field.value}
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
                                            value={field.value}
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
                                    value={field.value}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="zipCode">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="zipCode"
                                    label
                                    edit
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
