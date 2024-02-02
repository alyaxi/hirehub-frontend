import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Country, State, City } from 'country-state-city';
import { Core } from '..';
import logo3 from "../../assets/images/company-logos/logo3.png";
import logo5 from "../../assets/images/company-logos/logo1.png";
import {  useSelector } from 'react-redux';

const experiences = [
    {
        id: "1",
        title: "Art Director",
        company: "Techigon Software House",
        // startDate: "Nov 2022 - Present · 4 yrs 7 mos",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making.",
        logo: logo3,
        industry: "UI/UX Designer",
        directlyManageTeam: "No",
        noOfPeople: "90",
        salary: "$1000 - $1500",
        startDate: "02/2010",

        currentlyInProcess: true,
    },
    {
        id: "2",
        title: "Graphics Designer",
        company: "ITHUB Software House",
        // startDate: "Nov 2010 - Present · 7 yrs 1 mos",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        logo: logo5,
        industry: "Graphics Designer",
        directlyManageTeam: "Yes",
        noOfPeople: "30",
        salary: "$2500 - $3000",
        startDate: "06/2018",
        currentlyInProcess: false,
    },
]

function Experiences({ action, handleCancel, id, setExperiencesData }) {
    const candidate = useSelector((state) => state?.Candidate?.candidate);

    const experienceToEdit = []

    // console.log("experienceToEdit", experienceToEdit)

    const industryOptions = [
        { name: "Accounting", value: "Accounting" },
        { name: "Administration", value: "Administration" },
        { name: "Aerospace and Defense", value: "Aerospace and Defense" },
        { name: "Agriculture", value: "Agriculture" },
        { name: "Architecture", value: "Architecture" },
        { name: "Art and Design", value: "Art and Design" },
        { name: "Automotive", value: "Automotive" },
        { name: "Cleaning & Maintenance", value: "Cleaning & Maintenance" },
        { name: "Customer Service", value: "Customer Service" },
        { name: "Construction and Real Estate", value: "Construction and Real Estate" },
        { name: "Consulting", value: "Consulting" },
        { name: "Education and Training", value: "Education and Training" },
        { name: "Energy and Utilities", value: "Energy and Utilities" },
        { name: "Engineering", value: "Engineering" },
        { name: "Environmental Services", value: "Environmental Services" },
        { name: "Fashion and Apparel", value: "Fashion and Apparel" },
        { name: "Finance and Banking", value: "Finance and Banking" },
        { name: "Food", value: "Food" },
        { name: "Government and Public", value: "Government and Public" },
        { name: "Healthcare and Medical", value: "Healthcare and Medical" },
        { name: "Hospitality and Tourism", value: "Hospitality and Tourism" },
        { name: "Human Resources", value: "Human Resources" },
        { name: "Information Technology (IT)", value: "Information Technology (IT)" },
        { name: "Legal", value: "Legal" },
        { name: "Manufacturing Retail", value: "Manufacturing Retail" },
        { name: "Marketing and Advertising", value: "Marketing and Advertising" },
        { name: "Media and Entertainment", value: "Media and Entertainment" },
        { name: "Non-Profit and Social Services", value: "Non-Profit and Social Services" },
        { name: "Pharmaceuticals and Biotechnology", value: "Pharmaceuticals and Biotechnology" },
        { name: "Sales", value: "Sales" },
        { name: "Sports and Recreation", value: "Sports and Recreation" },
        { name: "Telecommunications", value: "Telecommunications" },
        { name: "Transportation and Logistics", value: "Transportation and Logistics" },
        { name: "Other", value: "Other" },
    ];


    const directlyManageTeamOptions = [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
    ];

    const noOfPeopleOptions = [
        { name: "10", value: "10" },
        { name: "20", value: "20" },
        { name: "30", value: "30" },
        { name: "40", value: "40" },
        { name: "50", value: "50" },
        { name: "60", value: "60" },
        { name: "70", value: "70" },
        { name: "80", value: "80" },
        { name: "90", value: "90" },
        { name: "100", value: "100" },
        { name: "110", value: "110" },
        { name: "120", value: "120" },
        { name: "130", value: "130" },
        { name: "140", value: "140" },
        { name: "150", value: "150" },
        { name: "160", value: "160" },
        { name: "170", value: "170" },
        { name: "180", value: "180" },
        { name: "190", value: "190" },
        { name: "200", value: "200" },
        { name: "210", value: "210" },
        { name: "220", value: "220" },
        { name: "230", value: "230" },
        { name: "240", value: "240" },
        { name: "250", value: "250" },
        { name: "260", value: "260" },
        { name: "270", value: "270" },
        { name: "280", value: "280" },
        { name: "290", value: "290" },
        { name: "300", value: "300" },
        { name: "310", value: "310" },
        { name: "320", value: "320" },
        { name: "330", value: "330" },
        { name: "340", value: "340" },
        { name: "350", value: "350" },
        { name: "360", value: "360" },
        { name: "370", value: "370" },
        { name: "380", value: "380" },
        { name: "390", value: "390" },
        { name: "400", value: "400" },
        { name: "410", value: "410" },
        { name: "420", value: "420" },
        { name: "430", value: "430" },
        { name: "440", value: "440" },
        { name: "450", value: "450" },
        { name: "460", value: "460" },
        { name: "470", value: "470" },
        { name: "480", value: "480" },
        { name: "490", value: "490" },
        { name: "500", value: "500" },
        { name: "Over 500", value: "over500" },
    ];

    const salaryOptions = [
        { name: "$1000 - $1500", value: "$1000 - $1500" },
        { name: "$1500 - $2000", value: "$1500 - $2000" },
        { name: "$2000 - $2500", value: "$2000 - $2500" },
        { name: "$2500 - $3000", value: "$2500 - $3000" },
        { name: "$3000 - $3500", value: "$3000 - $3500" },
        { name: "$3500 - $4000", value: "$3500 - $4000" },
        { name: "$4000 - $4500", value: "$4000 - $4500" },
        { name: "Over $4500", value: "Over $4500" },
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
    // console.log("experienceToEdit", experienceToEdit)
    const [data] = useState({
        title: experienceToEdit?.title ? experienceToEdit?.title : "",
        company: experienceToEdit?.company ? experienceToEdit?.company : "",
        industry: experienceToEdit?.industry ? experienceToEdit?.industry : "",
        directlyManageTeam: experienceToEdit?.directlyManageTeam ? experienceToEdit?.directlyManageTeam : "",
        noOfPeople: experienceToEdit?.noOfPeople ? experienceToEdit?.noOfPeople : "",
        salary: experienceToEdit?.salary ? experienceToEdit?.salary : "",
        agreeTerms: experienceToEdit?.agreeTerms ? experienceToEdit?.agreeTerms : "",
        currentlyInProcess: experienceToEdit?.currentlyInProcess ? experienceToEdit?.currentlyInProcess : false,
    });
    // console.log("data", data)

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
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
                    setStartDate(selectedDate);
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
    };

    const handleSubmit = (values, actions) => {
        console.log('title', values?.title);
        console.log('company', values?.company);
        console.log('industry', values?.industry);
        console.log('directlyManageTeam', values?.directlyManageTeam);
        console.log('noOfPeople', values?.noOfPeople);
        console.log('salary', values?.salary);
        console.log('selectedCountry', selectedCountry);
        console.log('selectedCity', selectedCity);
        console.log('startDate', startDate);
        console.log('agreeTerms', values?.agreeTerms);
        console.log('description', description);
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
                        {/* <Field name="industry">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"industry"}
                                    label
                                    options={industryOptions}
                                    defaultOption="Choose any one" 
                                    required
                                />
                            )}
                        </Field> */}

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


                    <div className='mb-4'>
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
                                            // onChange={(value) => handleChange("noOfPeople", value)}
                                            value={field.value}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Field name="salary">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"salary"}
                                    label
                                    options={salaryOptions}
                                    defaultOption="Select Salary Range"
                                    // onChange={(value) => handleChange("salary", value)}
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

export default Experiences;
