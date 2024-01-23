import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Country, State, City } from 'country-state-city';
import { Core } from '..';

function Experiences({ action, handleCancel }) {
    const industryOptions = [
        { name: "Information Technology", value: "IT" },
        { name: "Software Engineer", value: "SE" },
        { name: "Search Engine Optimization", value: "SEO" },
        { name: "Lead Software Engineer", value: "LSE" },
        { name: "Graphics Designer", value: "GD" },
        { name: "Web Developer", value: "WD" },
        { name: "Front End Developer", value: "FED" },
        { name: "Full Stack Developer", value: "FSD" },
        { name: "MERN Stack Developer", value: "MERN" },
        { name: "Backend Developer", value: "BD" },
        { name: "DevOps Engineer", value: "DOE" },
        { name: "UI/UX Designer", value: "UIUX" },
        { name: "Mobile App Developer", value: "MAD" },
        { name: "Data Scientist", value: "DS" },
        { name: "Machine Learning Engineer", value: "MLE" },
        { name: "Cybersecurity Analyst", value: "CSA" },
        { name: "Cloud Engineer", value: "CE" },
        { name: "Network Administrator", value: "NA" },
    ];
    const careerLevelOptions = [
        { name: "Entry Level", value: "entryLevel" },
        { name: "Mid-Level", value: "midLevel" },
        { name: "Senior", value: "senior" },
        { name: "Lead", value: "lead" },
    ];
    const directlyManageTeamOptions = [
        { name: "Yes", value: "yes" },
        { name: "No", value: "no" },
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
        { name: "$1000 - $1500", value: "1000-1500" },
        { name: "$1500 - $2000", value: "1500-2000" },
        { name: "$2000 - $2500", value: "2000-2500" },
        { name: "$2500 - $3000", value: "2500-3000" },
        { name: "$3000 - $3500", value: "3000-3500" },
        { name: "$3500 - $4000", value: "3500-4000" },
        { name: "$4000 - $4500", value: "4000-4500" },
        { name: "Over $4500", value: "over4500" },
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
    const [data] = useState({});
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [description, setDescription] = useState('');

    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const endYear = currentYear - 5;
    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push({ name: year.toString(), value: year.toString() });
    }
    const [selectedStartMonth, setSelectedStartMonth] = useState('');
    const [selectedEndMonth, setSelectedEndMonth] = useState('');
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
            const selectedMonth = (type === "startDate") ? selectedStartMonth : selectedEndMonth;

            if (selectedMonth !== "" && selectedYear !== "") {
                const selectedDate = selectedMonth + '/' + selectedYear;

                if (type === "startDate") {
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
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="industry">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"industry"}
                                    label="Industry"
                                    options={industryOptions}
                                    defaultOption="Choose any one"
                                    // onChange={(value) => handleChange("industry", value)}
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
                                            label="Did you directly manage a team?"
                                            options={directlyManageTeamOptions}
                                            defaultOption="Choose any one"
                                            // onChange={(value) => handleChange("directlyManageTeam", value)}
                                            required
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
                                    label={"Salary"}
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
                        </div>
                    </div>


                    <div className='flex justify-between items-center pt-1 mb-2'>
                        <div className='flex justify-start items-center gap-x-1'>
                            <Field type='checkbox' name='agreeTerms' />
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
