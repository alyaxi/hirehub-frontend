import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Country, City } from 'country-state-city';
import { Core } from '..';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    industryOptions,
    // directlyManageTeamOptions,
    // noOfPeopleOptions,
    monthsOptions,
    salaryOptions
} = dropdownOptions;

function Experiences({ action, handleCancel, id, setCandidateProfileData, savingForm }) {

    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const experiences = candidate.experiencesData;

    const experienceToEdit = experiences?.find(experience => experience?._id === id);

    const [data] = useState(action === "add" ? {} : {
        _id: experienceToEdit?._id || "",
        agreeTerms: experienceToEdit?.agreeTerms || "",
        company: experienceToEdit?.company || "",
        description: experienceToEdit?.description || "",
        // directlyManageTeam: experienceToEdit?.directlyManageTeam || "",
        // noOfPeople: experienceToEdit?.noOfPeople || "",
        industry: experienceToEdit?.industry || "",
        salary: experienceToEdit?.salary || "",
        selectedCity: experienceToEdit?.selectedCity || "",
        selectedCountry: experienceToEdit?.selectedCountry || "",
        startDate: experienceToEdit?.startDate || "",
        title: experienceToEdit?.title || "",
        currentlyInProcess: experienceToEdit?.currentlyInProcess || false,
    });

    // console.log("data", data)

    const [selectedCountry, setSelectedCountry] = useState(experienceToEdit?.selectedCountry ? experienceToEdit?.selectedCountry : "");
    const [selectedCity, setSelectedCity] = useState(experienceToEdit?.selectedCity ? experienceToEdit?.selectedCity : "");
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [description, setDescription] = useState(experienceToEdit?.description ? experienceToEdit?.description : "");

    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const endYear = currentYear - 5;
    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push({ name: year.toString(), value: year.toString() });
    }

    const startMonth = experienceToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
    const _startMonth = startMonth ? startMonth[1] : null;

    const _startYear = experienceToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
    const __startYear = _startYear ? _startYear[2] : null;

    const [selectedStartMonth, setSelectedStartMonth] = useState(_startMonth);
    const [selectedStartYear, setSelectedStartYear] = useState(__startYear);
    const [startDate, setStartDate] = useState();

    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    const handleCountryChange = (event) => {
        const countryValue = event.target.value;
        setSelectedCountry(countryValue);

        const countryCities = City.getCitiesOfCountry(countryValue);
        setCities(countryCities);

        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        const cityValue = event.target.value;
        setSelectedCity(cityValue);
    };

    const handleDateChange = (type, name, event) => {
        const value = event.target.value;

        const setMonth = (selectedMonth) => {
            if (type === "startDate") {
                setSelectedStartMonth(selectedMonth);
            }
        };

        const setYear = (selectedYear) => {
            const selectedMonth = selectedStartMonth;

            if (selectedMonth !== "" && selectedYear !== "") {
                const selectedDate = selectedMonth + '/' + selectedYear;

                if (type === "startDate") {
                    setSelectedStartYear(selectedYear)
                    setStartDate("01/" + selectedDate);
                    // console.log("yyyyyy a",selectedDate)
                }
            }
        };

        if (name === "month") {
            setMonth(value);
        }

        if (name === "year") {
            setYear(value);
        }

        if (type === "startDate" && selectedStartMonth !== "" && name === "year") {
            let _startDate = selectedStartMonth + '/' + value;
            setStartDate("01/" + _startDate)
        }
    };

    // console.log("selectedStartMonth",selectedStartMonth)
    // console.log("selectedStartYear",selectedStartYear)
    // console.log("startDate",startDate)

    const handleSubmit = (values) => {
        let _experiencesData = {
            title: values?.title,
            company: values?.company,
            industry: values?.industry,
            // directlyManageTeam: values?.directlyManageTeam,
            // noOfPeople: values?.noOfPeople,
            salary: values?.salary,
            selectedCountry: selectedCountry,
            selectedCity: selectedCity,
            startDate: startDate,
            agreeTerms: values?.agreeTerms,
            description: description,
        };

        let experienceData;

        if (action === "add") {
            // experienceData = [...experiences, _experiencesData]
            setCandidateProfileData(prevData => ({
                ...prevData,
                experiencesData: _experiencesData,
            }));
        }
        else {
            experienceData = experiences.map((exp, i) => {
                if (exp._id === id) {
                    return _experiencesData
                } else {
                    return exp
                }
            })
            setCandidateProfileData({
                experiencesData: experienceData,
            });
        }
    };

    const deleteItem = (id) => {
        console.log('to be deleted', id)
        handleCancel()
    }

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>

                    <span className="block text-gray-400 opacity-70 my-5"><span className="text-[red] pr-2">*</span>Required fields</span>

                    <div className='mb-4'>
                        <Field name="title">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="title"
                                    label
                                    placeholder="Enter title here"
                                    required
                                    edit
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="company">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="company"
                                    label
                                    placeholder="Enter your Company Name"
                                    required
                                    edit
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="industry">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name="industry"
                                    label
                                    options={industryOptions}
                                    defaultOption="Choose any one"
                                    value={field.value}
                                    required
                                />
                            )}
                        </Field>
                    </div>

                    {/* <div className='mb-4'>
                        <div className='flex gap-x-2'>
                            <div className='w-full'>
                                <Field name="directlyManageTeam">
                                    {({ field }) => (
                                        <Core.SelectWithLabel
                                            {...field}
                                            name={"directlyManageTeam"}
                                            label
                                            options={directlyManageTeamOptions}
                                            defaultOption="Choose any one"
                                            // onChange={(value) => handleChange("directlyManageTeam", value)}
                                            required
                                            value={field.value}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className='w-full'>
                                <Field name="noOfPeople">
                                    {({ field }) => (
                                        <Core.SelectWithLabel
                                            {...field}
                                            name={"noOfPeople"}
                                            label
                                            options={noOfPeopleOptions}
                                            defaultOption="How many people"
                                            value={field.value}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                    </div> */}

                    <div className='mb-4'>
                        <Field name="salary">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"salary"}
                                    label
                                    options={salaryOptions}
                                    defaultOption="Select Salary Range"
                                    helperText={"Note that all figures in this form are in US dollars and indicate yearly salary ranges."}
                                    required
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <div className='flex justify-between gap-x-2'>
                            <div className='w-[50%]'>
                                {/* Country */}
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    Country <span className='text-[red]'>*</span>
                                </label>
                                <select
                                    name="country"
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
                            <div className='w-[50%]'>
                                {/* City */}
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    City
                                </label>
                                <select
                                    name="city"
                                    onChange={handleCityChange} value={selectedCity}
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



                    <div className='w-full mb-4'>
                        <div className='flex gap-x-2'>
                            <div className='w-[50%]'>
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    Start <span className='text-[red]'>*</span>
                                </label>
                                <div className='flex gap-x-2'>
                                    <div className='w-[50%]'>
                                        <Core.SelectWithLabel
                                            name={"month"}
                                            sm
                                            options={monthsOptions}
                                            defaultOption="Month"
                                            onChange={(value) => handleDateChange("startDate", "month", value)}
                                            required
                                            value={selectedStartMonth}
                                        />
                                    </div>
                                    <div className='w-[50%]'>
                                        <Core.SelectWithLabel
                                            name={"year"}
                                            sm
                                            options={yearOptions}
                                            defaultOption="Year"
                                            onChange={(value) => handleDateChange("startDate", "year", value)}
                                            required
                                            value={selectedStartYear}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center pt-1 mb-2'>
                        <div className='flex justify-start items-center gap-x-1'>
                            <Field type='checkbox' name='currentlyInProcess' />
                            Currently in process
                            <ErrorMessage name='inProcess' component='div' className='text-red-500' />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Core.TextEditorWithLabel name={'description'} label height={"h-[200px]"} style={{ height: "84%" }} value={description} setValue={setDescription} />
                    </div>

                    <div className='flex justify-between  pt-6 mt-8 border-t-[1px]'>
                        <div className='flex justify-start gap-x-3 '>
                            {savingForm ?
                                <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                    <Spin />
                                </div>
                                : <Core.Button type="narrow" submit>Save</Core.Button>}
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                        {action === "edit" &&
                            <Core.Button onClick={() => deleteItem(id)} type="narrow" color="red" >Delete</Core.Button>
                        }
                    </div>

                </Form>
            )}
        </Formik >
    );
}

export default Experiences;
