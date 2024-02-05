import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';
import Icon from '../icon';
import { useSelector } from 'react-redux';

function PersonalInformations({ action, handleCancel,
    setCandidateProfileData, handleSenddata
}) {
    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const personalInformationDataSavedOnDb = candidate?.personalInformationData

    const user = candidate?.userId
    const lastName = user?.name.split(" ")[1]
    const firstName = user?.name.split(" ")[0]
    console.log("personalInformationDataSavedOnDb", personalInformationDataSavedOnDb)
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
        profilePicture: personalInformationDataSavedOnDb?.zipCode,
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

    const day = personalInformationDataSavedOnDb?.dob.match(/^(\d+)\//);
    const _day = day ? day[1] : null;

    const month = personalInformationDataSavedOnDb?.dob.match(/\/(\d+)\//);
    const _month = month ? month[1] : null;

    const year = personalInformationDataSavedOnDb?.dob.match(/\/(\d+)$/);
    const _year = year ? year[1] : null;

    const [selectedDay, setSelectedDay] = useState(_day);
    const [selectedMonth, setSelectedMonth] = useState(_month);
    const [selectedYear, setSelectedYear] = useState(_year);
    const [dob, setDob] = useState();
    const [profilePicture, setProfilePictrue] = useState('');

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

    const handleSubmit = (values) => {
        // console.log("profilePicture", profilePicture);
        // console.log("name", values.name);
        // console.log("lastName", values.lastName);
        // console.log("email", values.email);
        // console.log("phoneNo", values.phoneNo);
        // console.log("dob", dob)
        // console.log("gender", values.gender);
        // console.log("country", selectedCountry)
        // console.log("state", selectedState)
        // console.log("city", selectedCity)
        // console.log("careerLevel", values.careerLevel);
        // console.log("experience", values.experience);
        // console.log("expectedSalary", values.expectedSalary);
        // console.log("zip", values.zip);
        let _personalInformationData = {
            profilePicture: profilePicture || "",
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
        console.log("_personalInformationData.statusLine", _personalInformationData.statusLine)
        // setPersonalInformationData(_personalInformationData)
        setCandidateProfileData(prevData => ({
            ...prevData,
            personalInformationData: _personalInformationData,
        }));
        handleSenddata()
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
                                maxlength="180"
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
