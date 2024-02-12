import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Country } from 'country-state-city';
import { Core } from '..';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

const degreeOptions = [
    { name: "Bachelor's in Computer Science", value: "Bachelor's in Computer Science" },
    { name: "BSCS", value: "BSCS" },
    { name: "BSSE", value: "BSSE" },
    { name: "B Com.", value: "B Com." },
    { name: "BS", value: "BS" },
    { name: "Masters", value: "Masters" },
    { name: "MPhill", value: "MPhill" },
    { name: "Ph. D", value: "Ph. D" },
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

function Educations({ action, handleCancel, id, setCandidateProfileData, handleSenddata, savingForm }) {
    console.log("id", id)

    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const educations = candidate.educationsData;

    const educationToEdit = educations?.find(education => education?._id === id);

    console.log("educationToEdit", educationToEdit)

    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const endYear = currentYear - 5;
    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push({ name: year.toString(), value: year.toString() });
    }

    console.log("educationToEdit", educationToEdit)

    //     degree
    // endDate
    // fieldOfStudy
    // grade
    // isDeleted
    // organization
    // selectedCountry
    // startDate
    // _id


    const [data] = useState({
        _id: educationToEdit?._id ? educationToEdit?._id : "",
        degree: educationToEdit?.degree ? educationToEdit?.degree : "",
        endDate: educationToEdit?.endDate ? educationToEdit?.endDate : "",
        fieldOfStudy: educationToEdit?.fieldOfStudy ? educationToEdit?.fieldOfStudy : "",
        grade: educationToEdit?.grade ? educationToEdit?.grade : "",
        isDeleted: educationToEdit?.isDeleted ? educationToEdit?.isDeleted : "",
        organization: educationToEdit?.organization ? educationToEdit?.organization : "",
        selectedCountry: educationToEdit?.selectedCountry ? educationToEdit?.selectedCountry : "",
        startDate: educationToEdit?.startDate ? educationToEdit?.startDate : "",
    });
    console.log("data", data)

    const startMonth = educationToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
    const _startMonth = startMonth ? startMonth[1] : null;

    const endMonth = educationToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
    const _endMonth = endMonth ? endMonth[1] : null;

    const _startYear = educationToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
    const __startYear = _startYear ? _startYear[2] : null;

    const _endYear = educationToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
    const __endYear = _endYear ? _endYear[2] : null;

    console.log("__startYear", __startYear)
    console.log("__endYear", __endYear)

    const [selectedStartMonth, setSelectedStartMonth] = useState(_startMonth);
    const [selectedEndMonth, setSelectedEndMonth] = useState(_endMonth);
    const [selectedStartYear, setSelectedStartYear] = useState(__startYear);
    const [selectedEndYear, setSelectedEndYear] = useState(__endYear);

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
                    setSelectedStartYear(selectedDate)
                }
                if (type === "endDate") {
                    setEndDate(selectedDate);
                    setSelectedEndYear(selectedDate)
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
        // console.log('organization', values.organization);
        // console.log('degree', values.degree);
        // console.log('fieldOfStudy', values.fieldOfStudy);
        // console.log('startDate', startDate);
        // console.log('endDate', endDate);
        // console.log('selectedCountry', selectedCountry);
        // console.log('grade', values.grade);
        let _id = id ? id : "generate new id"
        let _educationsData = {
            _id: _id,
            degree: values.degree,
            endDate: endDate,
            fieldOfStudy: values.fieldOfStudy,
            grade: values.grade,
            // isDeleted: isDeleted,
            organization: values.organization,
            selectedCountry: selectedCountry,
            startDate: startDate,
        };
        setCandidateProfileData(prevData => ({
            ...prevData,
            educationsData: _educationsData,
        }));
        handleSenddata()
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
                                    edit
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
                                // value={field.value}
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
                                // value={field.value}
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
                                            value={selectedEndMonth}
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
                                            value={selectedEndYear}
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
                                // value={field.value}
                                />
                            )}
                        </Field>
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
