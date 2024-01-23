import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Country } from 'country-state-city';
import { Core } from '..';

function Educations({ action, handleCancel }) {
    const degreeOptions = [
        { name: "BSCS", value: "bscs" },
        { name: "BSSE", value: "bsse" },
        { name: "B Com.", value: "bcom" },
        { name: "BS", value: "bs" },
        { name: "Masters", value: "masters" },
        { name: "MPhill", value: "mphill" },
        { name: "Ph. D", value: "phd" },
    ];
    const fieldOfStudyOptions = [
        { name: "Computer Science", value: "Computer Science" },
        { name: "Engineering", value: "Engineering" },
        { name: "Medicine", value: "Medicine" },
        { name: "Business Administration", value: "Business Administration" },
        { name: "Psychology", value: "Psychology" },
        { name: "Biology", value: "Biology" },
        { name: "Economics", value: "Economics" },
        { name: "Political Science", value: "Political Science" },
    ];
    const gradeOptions = [
        { name: "A", value: "A" },
        { name: "B", value: "B" },
        { name: "C", value: "C" },
        { name: "D", value: "D" },
        { name: "E", value: "E" },
        { name: "F", value: "F" },
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
    const [data] = useState({});
    const [selectedStartMonth, setSelectedStartMonth] = useState('');
    const [selectedEndMonth, setSelectedEndMonth] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    const handleDateChange = (type, name, event) => {
        const value = event.target.value;

        const setMonth = (selectedMonth) => {
            if (type === "startDate") {
                setSelectedStartMonth(selectedMonth);
            }
            if (type === "endDate") {
                setSelectedEndMonth(selectedMonth);
            }
        };

        const setYear = (selectedYear) => {
            const selectedMonth = (type === "startDate") ? selectedStartMonth : selectedEndMonth;

            if (selectedMonth !== "" && selectedYear !== "") {
                const selectedDate = selectedMonth + '/' + selectedYear;

                if (type === "startDate") {
                    setStartDate(selectedDate);
                }
                if (type === "endDate") {
                    setEndDate(selectedDate);
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
            setStartDate(_startDate)
        }
        if (type === "endDate" && selectedStartMonth !== "" && name === "year") {
            let _endDate = selectedStartMonth + '/' + value;
            setEndDate(_endDate)
        }
    };

    const handleCountryChange = (event) => {
        const countryValue = event.target.value;
        setSelectedCountry(countryValue);
    };

    const handleSubmit = (values, actions) => {
        console.log('organization', values.organization);
        console.log('degree', values.degree);
        console.log('fieldOfStudy', values.fieldOfStudy);
        console.log('startDate', startDate);
        console.log('endDate', endDate);
        console.log('selectedCountry', selectedCountry);
        console.log('grade', values.grade);
    };
    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <span className="block text-gray-400 opacity-70 my-5"><span className="text-[red] pr-2">*</span>indicates required</span>
                    <div className='mb-4'>
                        <Field name="organization">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="organization"
                                    label
                                    placeholder="Enter Organization Name"
                                    required
                                />
                            )}
                        </Field>
                    </div>


                    <div className='mb-4'>
                        <Field name="degree">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"degree"}
                                    label
                                    options={degreeOptions}
                                    defaultOption="Choose any one"
                                // onChange={(value) => handleChange("degree", value)}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="fieldOfStudy">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"fieldOfStudy"}
                                    label
                                    options={fieldOfStudyOptions}
                                    defaultOption="Field Of Study"
                                // onChange={(value) => handleChange("fieldOfStudy", value)}
                                />
                            )}
                        </Field>
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
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    End <span className='text-[red]'>*</span>
                                </label>
                                <div className='flex gap-x-2'>
                                    <div className='w-[50%]'>
                                        <Core.SelectWithLabel
                                            name={"month"}
                                            sm
                                            options={monthsOptions}
                                            defaultOption="Month"
                                            onChange={(value) => handleDateChange("endDate", "month", value)}
                                            required
                                        />
                                    </div>
                                    <div className='w-[50%]'>
                                        <Core.SelectWithLabel
                                            name={"year"}
                                            sm
                                            options={yearOptions}
                                            defaultOption="Year"
                                            onChange={(value) => handleDateChange("endDate", "year", value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        {/* Country */}
                        <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                            Location <span className='text-[red]'>*</span>
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
                        <Field name="grade">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"grade"}
                                    label
                                    options={gradeOptions}
                                    defaultOption="Select Your Grade"
                                // onChange={(value) => handleChange("grade", value)}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='flex justify-between  pt-6 mt-8 border-t-[1px]'>
                        <div className='flex justify-start gap-x-3 '>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow" submit>Save</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                        {action === "edit" &&
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="red" onClick={handleCancel}>Delete</Core.Button>
                        }
                    </div>

                    {/* </div> */}
                </Form>
            )
            }
        </Formik >
    );
}

export default Educations;
