import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import Icon from '../icon';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    expectedSalaryOptions,
    experienceOptions,
    genderOptions,
    monthsOptions,
    careerLevelOptions
} = dropdownOptions;

function PersonalInformations({ action, handleCancel, setCandidateProfileData, handleSenddata, savingForm }) {

    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const personalInformationDataSavedOnDb = candidate?.personalInformationData

    const user = candidate?.userId
    const lastName = user?.name.split(" ")[1]
    const firstName = user?.name.split(" ")[0]

    // console.log("personalInformationDataSavedOnDb", personalInformationDataSavedOnDb)

    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const endYear = currentYear - 5;
    const yearOptions = [];

    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push({ name: year.toString(), value: year.toString() });
    }

    const daysOptions = Array.from({ length: 31 }, (_, index) => {
        const day = index + 1;
        const paddedDay = day < 10 ? `0${day}` : day.toString();
        return { name: paddedDay, value: paddedDay };
    });

    const [data] = useState({
        profilePicture: personalInformationDataSavedOnDb?.profilePicture,
        name: firstName,
        lastName: lastName,
        email: user?.email,
        zipCode: personalInformationDataSavedOnDb?.zipCode,
        expectedSalary: personalInformationDataSavedOnDb?.expectedSalary,
        careerLevel: personalInformationDataSavedOnDb?.careerLevel,
        experience: personalInformationDataSavedOnDb?.experience,
        gender: personalInformationDataSavedOnDb?.gender,
        phoneNo: personalInformationDataSavedOnDb?.phoneNo,
        statusLine: personalInformationDataSavedOnDb?.statusLine,
        country: personalInformationDataSavedOnDb?.country,
        state: personalInformationDataSavedOnDb?.state,
        city: personalInformationDataSavedOnDb?.city,

    });

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const day = personalInformationDataSavedOnDb?.dob?.match(/^(\d+)\//);
    const _day = day ? day[1] : null;

    const month = personalInformationDataSavedOnDb?.dob?.match(/\/(\d+)\//);
    const _month = month ? month[1] : null;

    const year = personalInformationDataSavedOnDb?.dob?.match(/\/(\d+)$/);
    const _year = year ? year[1] : null;

    const [selectedDay, setSelectedDay] = useState(_day);
    const [selectedMonth, setSelectedMonth] = useState(_month);
    const [selectedYear, setSelectedYear] = useState(_year);
    const [dob, setDob] = useState(personalInformationDataSavedOnDb?.dob ? personalInformationDataSavedOnDb?.dob : "");
    const [profilePicture, setProfilePictrue] = useState('');

    // console.log(personalInformationDataSavedOnDb?.country, "countryyyyyyyy")

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
        console.log("handleDateChange", name, " - ", value)
        if (name === "day") {
            setSelectedDay(value)
        }
        if (name === "month") {
            setSelectedMonth(value)
        }
        if (name === "year") {
            setSelectedYear(value)
        }
    };

    const updateDob = () => {
        if (selectedDay !== "" && selectedMonth !== "" && selectedYear !== "") {
            let _dob = selectedDay + '/' + selectedMonth + '/' + selectedYear
            setDob(_dob)
        }
    };

    useEffect(() => {
        updateDob();
    }, [selectedDay, selectedMonth, selectedYear]);

    // console.log(profilePicture, "ppppppppppp")
    // console.log('dob', dob)

    const handleSubmit = (values, { isSubmitting }) => {
        let _personalInformationData = {
            profilePicture: profilePicture[0]?.originFileObj,
            phoneNo: values.phoneNo || "",
            statusLine: values.statusLine || "",
            dob: dob || "",
            gender: values.gender || "",
            country: selectedCountry || "",
            state: selectedState || "",
            city: selectedCity || "",
            careerLevel: values.careerLevel || "",
            experience: values.experience || "",
            expectedSalary: values.expectedSalary || "",
            zipCode: values.zipCode || "",
        }
        console.log("_personalInformationData", _personalInformationData)
        setCandidateProfileData(prevData => ({
            ...prevData,
            personalInformationData: _personalInformationData,
        }));
        // setPersonalInformationData(_personalInformationData)
        // setCandidateProfileData();
        // handleSenddata({
        //     personalInformationData: _personalInformationData,
        // })
    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form>
                    <span className="block text-gray-400 opacity-70 my-5"><span className="text-[red] pr-2">*</span>Required fields</span>

                    <Core.UploadAvatar setState={setProfilePictrue} />

                    <div className='mb-4'>
                        <Field name="name">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="name"
                                    label
                                    bgGray
                                    placeholder="Enter your name"
                                    edit
                                    disabled
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
                                    disabled
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
                                    bgGray
                                    helperText={'Only provided to employers you apply or respond to'}
                                    icon="Lock1"
                                    edit
                                    disabled
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

                    <Field name="statusLine">
                        {({ field }) => (
                            <Core.TextAreaWithLabel
                                name="statusLine"
                                label
                                {...field}
                                value={field.value}
                                maxLength="180"
                            />
                        )}
                    </Field>

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
                            Country <span className='text-[red]'>*</span>
                        </label>
                        <select
                            name="nationality"
                            onChange={handleCountryChange}
                            defaultValue={personalInformationDataSavedOnDb?.country}
                            value={selectedCountry}
                            className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
                        >
                            <option value="">Select</option>
                            {countries?.map((country) => (
                                <option key={country.isoCode} value={country.isoCode} defaultValue={personalInformationDataSavedOnDb?.country}>
                                    {country?.name}
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

                    {action === "edit" &&
                        <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>

                            {savingForm ?
                                <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                    <Spin />
                                </div>
                                : <Core.Button type="narrow" submit>Save</Core.Button>}

                            <Core.Button type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                    }
                </Form>
            )}
        </Formik >
    );
}

// export default PersonalInformations;
export default React.memo(PersonalInformations);
