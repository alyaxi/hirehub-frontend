import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Country, City } from "country-state-city";
import { Core } from "..";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import * as Yup from "yup";

import { DatePicker, Space } from "antd";
import moment from "moment";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const validationSchema = Yup.object().shape({
  organization: Yup.string()
    .trim()
    .nullable()
    .required("Organization is required"),
  degree: Yup.string().trim().nullable().required("Degree is required"),
  selectedCountry: Yup.string().required("Country is required"),
  // dateRange: Yup.array().required("Start and end dates are required"),
  // selectedCity: Yup.string().required("City is required"),
  fieldOfStudy: Yup.string()
    .trim()
    .nullable()
    .required("Field of Study is required"),
});

const {
  degreeOptions,
  fieldOfStudyOptions,
  // gradeOptions,
  monthsOptions,
} = dropdownOptions;

function Educations({
  action,
  handleCancel,
  id,
  setCandidateProfileData,
  savingForm,
}) {
  // console.log("id", id)

  const candidate = useSelector((state) => state?.Candidate?.candidate);
  const educations = candidate?.educationsData;

  const educationToEdit = educations?.find(
    (education) => education?._id === id
  );

  console.log("educationToEdit", educationToEdit);

  const currentYear = new Date().getFullYear();
  const startYear = 1901;
  const endYear = currentYear;
  const yearOptions = [];
   for (let year = endYear; year >= startYear; year--) {
    yearOptions.push({ name: year.toString(), value: year.toString() });
  }

  //   function formatDate(dateString) {
  //     const [month, year] = dateString.split('/');
  //     const date = dayjs.utc(`${year}-${month}-01T14:01:22.530Z`);
  //     return {
  //         $D: date.date(),
  //         $H: date.hour(),
  //         $L: 'en',
  //         $M: date.month(),
  //         $W: date.day(),
  //         $d: date.toDate(),
  //         $isDayjsObject: true,
  //         $m: date.minute(),
  //         $ms: date.millisecond(),
  //         $s: date.second(),
  //         $u: undefined,
  //         $x: {}
  //     };
  // }

  // console.log(formatDate("01/1914"));

  // console.log(formatDate("01/1914"));

  // console.log('formatDate("01/1914")',formatDate("01/1914"))

  const [data] = useState(
    action === "add"
      ? {
          degree: "",
          endDate: "",
          fieldOfStudy: "",
          isDeleted: false,
          organization: "",
          selectedCountry: "",
          startDate: "",
          dateRange: [],
        }
      : {
          _id: educationToEdit?._id || "",
          degree: educationToEdit?.degree || "",
          endDate: educationToEdit?.endDate || "",
          fieldOfStudy: educationToEdit?.fieldOfStudy || "",
          // grade: educationToEdit?.grade || "",
          isDeleted: educationToEdit?.isDeleted || false,
          organization: educationToEdit?.organization || "",
          selectedCity: educationToEdit?.selectedCity || "",
          selectedCountry: educationToEdit?.selectedCountry || "",
          startDate: educationToEdit?.startDate || "",
          // dateRange: [ formatDate(educationToEdit?.startDate),formatDate(educationToEdit?.endDate)] || [],
          // dateRange: ['Wed, Dec 31, 1913, 6:30:00 PM', 'Wed, Dec 31, 1914, 6:30:00 PM']
          dateRange:
            [
             { M:{
                $D: 7,
                $H: 19,
                $L: "en",
                $M: 4,
                $W: 2,
                $d: "Tue May 07 2024 19:48:33 GMT+0500 (Pakistan Standard Time)",
                $isDayjsObject: true,
                $m: 48,
                $ms: 7,
                $s: 33,
                $u: undefined,
                $x: {},
                $y: 2024,
              }},
              {M:{
                $D: 7,
                $H: 19,
                $L: "en",
                $M: 4,
                $W: 2,
                $d: "Tue May 07 2024 19:48:33 GMT+0500 (Pakistan Standard Time)",
                $isDayjsObject: true,
                $m: 48,
                $ms: 7,
                $s: 33,
                $u: undefined,
                $x: {},
                $y: 2025,
              }},
            ] || [],
        }
  );

  console.log("data", data);

  // const startMonth = educationToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
  // const _startMonth = startMonth ? startMonth[1] : null;

  // const endMonth = educationToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
  // const _endMonth = endMonth ? endMonth[1] : null;

  // const _startYear = educationToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
  // const __startYear = _startYear ? _startYear[2] : null;

  // const _endYear = educationToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
  // const __endYear = _endYear ? _endYear[2] : null;

  // const [selectedStartMonth, setSelectedStartMonth] = useState(_startMonth);
  // const [selectedEndMonth, setSelectedEndMonth] = useState(_endMonth);
  // const [selectedStartYear, setSelectedStartYear] = useState(__startYear);
  // const [selectedEndYear, setSelectedEndYear] = useState(__endYear);

  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState("");
  // console.log("startDate",startDate)
  // console.log("endDate",endDate)

  const [selectedCountry, setSelectedCountry] = useState(
    educationToEdit?.selectedCountry ? educationToEdit?.selectedCountry : ""
  );
  const [selectedCity, setSelectedCity] = useState(
    educationToEdit?.selectedCity ? educationToEdit?.selectedCity : ""
  );
  // console.log("555 selectedCountry", selectedCountry);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  // console.log("555 cities", cities);
  useEffect(() => {
    const allCountries = Country?.getAllCountries();
    setCountries(allCountries);
  }, []);

  // const handleDateChange = (type, name, event) => {
  //   const value = event.target.value;

  //   const setMonth = (selectedMonth) => {
  //     if (type === "startDate") {
  //       setSelectedStartMonth(selectedMonth);
  //     }
  //     if (type === "endDate") {
  //       setSelectedEndMonth(selectedMonth);
  //     }
  //   };

  //   const setYear = (selectedYear) => {
  //     const selectedMonth =
  //       type === "startDate" ? selectedStartMonth : selectedEndMonth;

  //     if (selectedMonth !== "" && selectedYear !== "") {
  //       const selectedDate = selectedMonth + "/" + selectedYear;

  //       if (type === "startDate") {
  //         setStartDate(selectedDate);
  //         setSelectedStartYear(selectedYear);
  //       }
  //       if (type === "endDate") {
  //         setEndDate(selectedDate);
  //         setSelectedEndYear(selectedYear);
  //       }
  //     }
  //   };

  //   if (name === "month") {
  //     setMonth(value);
  //   }

  //   if (name === "year") {
  //     setYear(value);
  //   }

  //   if (type === "startDate" && selectedStartMonth !== "" && name === "year") {
  //     let _startDate = selectedStartMonth + "/" + value;
  //     setStartDate("01/" + _startDate);
  //   }

  //   if (type === "endDate" && selectedStartMonth !== "" && name === "year") {
  //     let _endDate = selectedStartMonth + "/" + value;
  //     setEndDate("01/" + _endDate);
  //   }
  // };

  const handleCountryChange = (event) => {
    const countryValue = event.target.value;
    console.log("countryValue", countryValue);
    setSelectedCountry(countryValue);

    const countryCities = City.getCitiesOfCountry(countryValue);
    console.log("countryCities", countryCities);
    setCities(countryCities);

    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    const cityValue = event.target.value;
    setSelectedCity(cityValue);
  };

  const handleSubmit = (values) => {
    console.log("handleSubmit called");
    console.log("action", action);

    // console.log("final moment2", moment(new Date(values?.dateRange[0])).format('MM/YYYY'));
    // console.log("final moment2", moment(new Date(values?.dateRange[1])).format('MM/YYYY'));

    //  moment(date)?.format('MM/DD/YYYY')

    //   const startDate = moment(new Date(values?.dateRange[0])).format("MM/YYYY");
    // const endDate = moment(new Date(values?.dateRange[1])).format("MM/YYYY");

    let _educationsData = {
      degree: values?.degree,
      fieldOfStudy: values?.fieldOfStudy,
      // grade: values?.grade,
      organization: values?.organization,
      selectedCountry: selectedCountry,
      selectedCity: selectedCity,
      startDate: moment(new Date(values?.dateRange[0])).format("MM/YYYY"),
      endDate: moment(new Date(values?.dateRange[1])).format("MM/YYYY"),
      // dateRange: values?.dateRange,
    };

    let educationData;

    if (action === "add") {
      console.log("vv add _educationsData", _educationsData);
      educationData = [...educations, _educationsData];
      setCandidateProfileData((prevData) => ({
        ...prevData,
        educationsData: _educationsData,
      }));
    } else {
      educationData = educations?.map((exp) => {
        if (exp._id === id) {
          return _educationsData;
        } else {
          return exp;
        }
      });
      console.log("vv edit educationData", educationData);
      setCandidateProfileData({
        educationsData: educationData,
      });
    }
  };

  const deleteItem = (id) => {
    console.log("to be deleted", id);
    handleCancel();
  };

  // console.log("selectedStartMonth",selectedStartMonth)
  // console.log("selectedStartYear",selectedStartYear)
  // console.log("startDate",startDate)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm, setFieldValue }) => {
        console.log("formik values", values);
        return (
          <Form>
            <span className="block text-gray-400 opacity-70 my-5">
              <span className="text-[red] pr-2">*</span>Required fields
            </span>

            <div className="mb-4">
              <>
                <Field name="organization">
                  {({ field }) => (
                    <Core.InputWithLabel
                      {...field}
                      sm
                      name="organization"
                      value={values?.organization}
                      label
                      required
                      edit
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="organization"
                  component="div"
                  className="text-red-500 error"
                />
              </>
            </div>

            <div className="mb-4">
              <>
                <Field name="degree">
                  {({ field }) => (
                    <Core.SelectWithLabel
                      {...field}
                      name={"degree"}
                      label
                      options={degreeOptions}
                      defaultOption="Please select your degree"
                      required
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="degree"
                  component="div"
                  className="text-red-500 error"
                />
              </>
            </div>

            <div className="mb-4">
              <>
                <Field name="fieldOfStudy">
                  {({ field }) => (
                    <Core.SelectWithLabel
                      {...field}
                      name={"fieldOfStudy"}
                      label
                      options={fieldOfStudyOptions}
                      defaultOption="Field Of Study"
                      required
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="fieldOfStudy"
                  component="div"
                  className="text-red-500 error"
                />
              </>
            </div>

            <div className="mb-4">
              {/* <RangePicker picker="month" /> */}

              {/* <RangePicker
      picker="year"
      id={{
        start: 'startInput',
        end: 'endInput',
      }}
      onFocus={(_, info) => {
        console.log('Focus:', info?.range);
      }}
      onBlur={(_, info) => {
        console.log('Blur:', info?.range);
      }}
    /> */}

              <>
                <Field name="dateRange">
                  {({ field }) => (
                    <>
                      {/* <RangePicker
                        picker="month"
                        {...field}
                        onChange={(dates) => {
                          // Check if dates are not null and format each date
                          const formattedDates = dates?.map((date) =>
                            moment(new Date(date))?.format("MM/YYYY")
                          );
                          console.log("formattedDates", formattedDates);
                          // Set the formatted dates in Formik state
                          if (formattedDates?.length) {
                          console.log("yes");
                          // setFieldValue({
                          //     endDate: formattedDates[0],
                          //     startDate: formattedDates[1],
                          //   });
                        
                            setFieldValue(
                              'endDate', formattedDates[0]
                            );
                            setFieldValue(
                              'startDate', formattedDates[1]
                            );
                          }
                        }}
                      /> */}
                      <RangePicker
                        picker="month"
                        {...field}
                        onChange={(dates) => {
                          console.log("dates", dates);
                          console.log("dates", dates[0]?.$d);
                          console.log("dates type", typeof dates[0]?.$d);
                          const start_monthIndex = new Date(
                            dates[0]?.$d
                          ).getMonth();
                          const start_year = dates[0]?.$y;

                          const end_monthIndex = new Date(
                            dates[1]?.$d
                          ).getMonth();
                          const end_year = dates[1]?.$y;
                          console.log("start_monthIndex", start_monthIndex);
                          console.log("start_year", start_year);
                          console.log("end_monthIndex", end_monthIndex);
                          console.log("end_year", end_year);
                          // Set the selected date range in Formik state
                          // console.log("range dates", [start_monthIndex + "/" + start_year,end_monthIndex + "/" + end_year]);

                          const _dates = [
                            start_monthIndex + "/" + start_year,
                            end_monthIndex + "/" + end_year,
                          ];

                          // setFieldValue("dateRange", _dates);
                        }}
                      />
                      <ErrorMessage
                        name="dateRange"
                        component="div"
                        className="text-red-500 error"
                      />
                    </>
                  )}
                </Field>
              </>
            </div>

            {/* <div className="w-full mb-4">
              <div className="flex gap-x-2">
                <div className="w-[50%]">
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    Start Date <span className="text-[red]">*</span>
                  </label>
                  <div className="flex gap-x-2">
                    <div className="w-[50%]">
                      <Core.SelectWithLabel
                        name={"month"}
                        sm
                        options={monthsOptions}
                        defaultOption="Month"
                        onChange={(value) =>
                          handleDateChange("startDate", "month", value)
                        }
                        required
                        value={selectedStartMonth}
                      />
                    </div>
                    <div className="w-[50%]">
                      <Core.SelectWithLabel
                        name={"year"}
                        sm
                        options={yearOptions}
                        defaultOption="Year"
                        onChange={(value) =>
                          handleDateChange("startDate", "year", value)
                        }
                        required
                        value={selectedStartYear}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[50%]">
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    End Date<span className="text-[red]">*</span>
                  </label>
                  <div className="flex gap-x-2">
                    <div className="w-[50%]">
                      <Core.SelectWithLabel
                        name={"month"}
                        sm
                        options={monthsOptions}
                        defaultOption="Month"
                        onChange={(value) =>
                          handleDateChange("endDate", "month", value)
                        }
                        required
                        value={selectedEndMonth}
                      />
                    </div>
                    <div className="w-[50%]">
                      <Core.SelectWithLabel
                        name={"year"}
                        sm
                        options={yearOptions}
                        defaultOption="Year"
                        onChange={(value) =>
                          handleDateChange("endDate", "year", value)
                        }
                        required
                        value={selectedEndYear}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="mb-4">
              {/* Country * / }
              <label
                className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
              >
                Country <span className="text-[red]">*</span>
              </label>
              <select
                name="nationality"
                onChange={handleCountryChange}
                value={selectedCountry}
                className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
              >
                <option value="">Select</option>
                {countries?.map((country) => (
                  <option key={country?.isoCode} value={country?.isoCode}>
                    {country?.name}
                  </option>
                ))}
              </select>
            </div> */}

            <div className="mb-4">
              <div className="flex justify-between gap-x-2">
                <div className="w-[50%]">
                  {/* Country */}
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    Country <span className="text-[red]">*</span>
                  </label>

                  <>
                    <Field name="selectedCountry">
                      {({ field, form }) => (
                        <select
                          name="country"
                          value={selectedCountry}
                          onChange={(e) => {
                            const selectedValue = e.target.value; // Extract selected value from event object
                            form.setFieldValue(
                              "selectedCountry",
                              selectedValue
                            );
                            handleCountryChange(e); // Pass selected value to handleCountryChange
                          }}
                          className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
                        >
                          <option value="">Please select your country</option>
                          {countries?.map((country) => (
                            <option
                              key={country?.isoCode}
                              value={country?.isoCode}
                            >
                              {country?.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>
                    <ErrorMessage
                      name="selectedCountry"
                      component="div"
                      className="text-red-500 error"
                    />
                  </>

                  {/* <>
                    <Field name="selectedCountry">
                      {({ field,form  }) => (
                        <Core.SelectWithLabel
                          {...field}
                          name={"selectedCountry"}
                    value={selectedCountry}
                          onChange={(value) => {
                            form.setFieldValue("selectedCountry", value);
                            handleCountryChange(value); // Call handleCountryChange here
                          }}
                          label
                          options={countries}
                          defaultOption="Select Country"
                          required
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="selectedCountry"
                      component="div"
                      className="text-red-500 error"
                    />  
                  </>   */}
                </div>
                <div className="w-[50%]">
                  {/* City */}
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    City
                  </label>

                  <>
                    <Field name="selectedCity">
                      {({ form }) => (
                        <select
                          name="city"
                          value={selectedCity}
                          onChange={(e) => {
                            const selectedValue = e.target.value; // Extract selected value from event object
                            form.setFieldValue("selectedCity", selectedValue);
                            handleCityChange(e); // Pass selected value to handleCountryChange
                          }}
                          className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
                        >
                          <option value="">Please select your city</option>
                          {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>
                    <ErrorMessage
                      name="selectedCity"
                      component="div"
                      className="text-red-500 error"
                    />
                  </>

                  {/* <>
                    <Field name="selectedCity">
                      {({ field }) => (
                        <Core.SelectWithLabel
                          {...field}
                          name={"selectedCity"}
                          label
                          options={cities}
                          defaultOption="Select City"
                          required
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="selectedCity"
                      component="div"
                      className="text-red-500 error"
                    />
                  </> */}
                </div>
              </div>
            </div>

            {/* <div className='mb-4'>
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
                      </div> */}

            <div className="flex justify-between  pt-6 mt-8 border-t-[1px]">
              <div className="flex justify-start gap-x-3 ">
                {savingForm ? (
                  <div className=" flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]">
                    <Spin />
                  </div>
                ) : (
                  <Core.Button
                    type="narrow"
                    submit
                    isDisabled={
                      values?.degree === "" ||
                      values?.fieldOfStudy === "" ||
                      values?.organization === "" ||
                      values?.dateRange === "" ||
                      selectedCountry === ""
                    }
                  >
                    Save
                  </Core.Button>
                )}
                <Core.Button
                  type="narrow"
                  color="white"
                  onClick={() => {
                    handleCancel();
                    resetForm();
                  }}
                >
                  Cancel
                </Core.Button>
              </div>
              {action === "edit" && (
                <Core.Button
                  onClick={() => {
                    deleteItem(id);
                    resetForm();
                  }}
                  type="narrow"
                  color="red"
                >
                  Delete
                </Core.Button>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Educations;
