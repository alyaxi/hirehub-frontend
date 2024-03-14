import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Country, State, City } from "country-state-city";
import { Core } from "..";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Degree is required"),
  company: Yup.string().required("Company is required"),
  industry: Yup.string().required("Industry is required"),
  salary: Yup.string().required("Salary is required"),
});

const {
  industryOptions,
  // directlyManageTeamOptions,
  // noOfPeopleOptions,
  monthsOptions,
  salaryOptions,
} = dropdownOptions;

function Experiences({
  action,
  handleCancel,
  id,
  setCandidateProfileData,
  savingForm,
}) {
  const candidate = useSelector((state) => state?.Candidate?.candidate);
  const experiences = candidate.experiencesData;

  const experienceToEdit = experiences?.find(
    (experience) => experience?._id === id
  );

  const [data] = useState(
    action === "add"
      ? {
          agreeTerms: "",
          company: "",
          description: "",
          industry: "",
          salary: "",
          selectedCity: "",
          selectedCountry: "",
          startDate: "",
          title: "",
          currentlyInProcess: false,
        }
      : {
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
        }
  );
  const [maxDescriptionLimit, setMaxDescriptionLimit] = useState(false);
  const [dateValidation, setDateValidation] = useState(false);
  console.log("dateValidation", dateValidation);
  const [selectedCountry, setSelectedCountry] = useState(
    experienceToEdit?.selectedCountry || ""
  );
  const [selectedState, setSelectedState] = useState(
    experienceToEdit?.selectedState || ""
  );
  const [selectedCity, setSelectedCity] = useState(
    experienceToEdit?.selectedCity || ""
  );
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [description, setDescription] = useState(
    experienceToEdit?.description ? experienceToEdit?.description : ""
  );

  const currentYear = new Date().getFullYear();
  const startYear = 1901;
  const endYear = currentYear - 5;
  const yearOptions = [];
  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push({ name: year.toString(), value: year.toString() });
  }

  const startMonth = experienceToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
  const _startMonth = startMonth ? startMonth[1] : null;

  const endMonth = experienceToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
  const _endMonth = endMonth ? endMonth[1] : null;

  const _startYear = experienceToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
  const __startYear = _startYear ? _startYear[2] : null;

  const _endYear = experienceToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
  const __endYear = _endYear ? _endYear[2] : null;

  const [selectedStartMonth, setSelectedStartMonth] = useState(_startMonth);
  const [selectedEndMonth, setSelectedEndMonth] = useState(_endMonth);
  const [selectedStartYear, setSelectedStartYear] = useState(__startYear);
  const [selectedEndYear, setSelectedEndYear] = useState(__endYear);
  const [startDate, setStartDate] = useState(experienceToEdit?.startDate || "");
  const [endDate, setEndDate] = useState(experienceToEdit?.endDate || "");

  useEffect(() => {
    const allCountries = Country?.getAllCountries();
    setCountries(allCountries);
    // console.log("ex allCountries", allCountries);
  }, []);

  const handleCountryChange = (event, setFieldValue) => {
    const countryValue = event.target.value;
    setSelectedCountry(countryValue);

    setFieldValue("selectedState", "");
    setFieldValue("selectedCity", "");

    const countryStates = State.getStatesOfCountry(countryValue);
    setStates(countryStates);

    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (event) => {
    const stateValue = event.target.value;
    setSelectedState(stateValue);

    const stateCities = City.getCitiesOfState(selectedCountry, stateValue);
    setCities(stateCities);

    setSelectedCity("");
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
        if (selectedMonth?.length > 1 && selectedStartYear?.length > 1) {
          setStartDate(selectedMonth + "/" + selectedStartYear);
        } else {
          setStartDate("");
        }
      }
      if (type === "endDate") {
        setSelectedEndMonth(selectedMonth);
        if (selectedMonth?.length > 1 && selectedEndYear?.length > 1) {
          let _endDate = selectedMonth + "/" + selectedEndYear;
          const startDateParts = startDate.split("/");
          const endDateParts = _endDate.split("/");

          const startMonth = parseInt(startDateParts[0]);
          const startYear = parseInt(startDateParts[1]);
          const endMonth = parseInt(endDateParts[0]);
          const endYear = parseInt(endDateParts[1]);

          if (endYear > startYear) {
            setEndDate(_endDate);
            setDateValidation(false);
          } else if (endYear === startYear) {
            if (endMonth > startMonth) {
              setEndDate(_endDate);
              setDateValidation(false);
            } else {
              setDateValidation(true);
            }
          } else {
            setDateValidation(true);
          }

          // setEndDate(selectedMonth + "/" + selectedEndYear);
        } else {
          setEndDate("");
        }
      }
    };

    const setYear = (selectedYear) => {
      if (type === "startDate") {
        setSelectedStartYear(selectedYear);
        if (selectedStartMonth?.length > 1 && selectedYear?.length > 1) {
          setStartDate(selectedStartMonth + "/" + selectedYear);
        } else {
          setStartDate("");
        }
      }
      if (type === "endDate") {
        setSelectedEndYear(selectedYear);
        if (selectedEndMonth?.length > 1 && selectedYear?.length > 1) {
          let _endDate = selectedEndMonth + "/" + selectedYear;
          const startDateParts = startDate.split("/");
          const endDateParts = _endDate.split("/");

          const startMonth = parseInt(startDateParts[0]);
          const startYear = parseInt(startDateParts[1]);
          const endMonth = parseInt(endDateParts[0]);
          const endYear = parseInt(endDateParts[1]);

          if (endYear > startYear) {
            setEndDate(_endDate);
            setDateValidation(false);
          } else if (endYear === startYear) {
            if (endMonth > startMonth) {
              setEndDate(_endDate);
              setDateValidation(false);
            } else {
              setDateValidation(true);
            }
          } else {
            setDateValidation(true);
          }
          // setEndDate(selectedEndMonth + "/" + selectedYear);
        } else {
          setEndDate("");
        }
      }
    };

    if (name === "month") {
      setMonth(value);
    }

    if (name === "year") {
      setYear(value);
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
      selectedState: selectedState,
      startDate: startDate,
      endDate: values?.currentlyInProcess === true ? "" : endDate,
      agreeTerms: values?.agreeTerms,
      description: description,
      currentlyInProcess: values?.currentlyInProcess,
    };

    let experienceData;

    if (action === "add") {
      console.log("add _experiencesData", _experiencesData);
      experienceData = [...experiences, _experiencesData];
      setCandidateProfileData((prevData) => ({
        ...prevData,
        experiencesData: _experiencesData,
      }));
    } else {
      experienceData = experiences.map((exp, i) => {
        if (exp._id === id) {
          return _experiencesData;
        } else {
          return exp;
        }
      });
      console.log("edit experienceData", experienceData);
      setCandidateProfileData({
        experiencesData: experienceData,
      });
    }
  };

  const deleteItem = (id) => {
    console.log("to be deleted", id);
    handleCancel();
  };

  // console.log("data", data)
  // console.log("description", description);
  // console.log("ex startDate", startDate);
  // console.log("ex endDate", endDate);

  // console.log("selectedCountry", selectedCountry);
  // console.log("selectedState", selectedState);
  // console.log("selectedCity", selectedCity);

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm }) => {
        console.log("currentlyInProcess", values?.currentlyInProcess);
        console.log("dateValidation", dateValidation);
        return (
          <Form>
            <span className="block text-gray-400 opacity-70 my-5">
              <span className="text-[red] pr-2">*</span>Required fields
            </span>

            <div className="mb-4">
              <>
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
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 error"
                />
              </>
            </div>

            <div className="mb-4">
              <>
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

                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 error"
                />
              </>
            </div>

            <div className="mb-4">
              <>
                <Field name="industry">
                  {({ field }) => (
                    <Core.SelectWithLabel
                      {...field}
                      name="industry"
                      label
                      options={industryOptions}
                      defaultOption="Please select the industry"
                      value={field.value}
                      required
                    />
                  )}
                </Field>

                <ErrorMessage
                  name="industry"
                  component="div"
                  className="text-red-500 error"
                />
              </>
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

            <div className="mb-4">
              <>
                <Field name="salary">
                  {({ field }) => (
                    <Core.SelectWithLabel
                      {...field}
                      name={"salary"}
                      label
                      options={salaryOptions}
                      defaultOption="Please select your annual salary range"
                      helperText={
                        "Note: All figures in this form are denoted in US dollars and represent annual salary ranges."
                      }
                      required
                    />
                  )}
                </Field>

                <ErrorMessage
                  name="salary"
                  component="div"
                  className="text-red-500 error"
                />
              </>
            </div>

            <div className="mb-4">
              {/* Country */}
              <label
                className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
              >
                Country <span className="text-[red]">*</span>
              </label>

              <>
                <Field name="selectedCountry">
                  {({ form }) => (
                    <select
                      name="country"
                      value={selectedCountry}
                      onChange={(e) => {
                        const selectedValue = e.target.value; // Extract selected value from event object
                        form.setFieldValue("selectedCountry", selectedValue);
                        handleCountryChange(e, form.setFieldValue); // Pass selected value to handleCountryChange
                      }}
                      className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
                    >
                      <option value="">Please select your country</option>
                      {countries?.map((country) => (
                        <option key={country?.isoCode} value={country?.isoCode}>
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
            </div>

            <div className="mb-4">
              <div className="flex justify-between   gap-x-2">
                <div className="w-[50%]">
                  {/* State */}
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    State
                  </label>
                  <>
                    <Field name="selectedState">
                      {({ form }) => (
                        <select
                          name="state"
                          value={selectedState}
                          onChange={(e) => {
                            const selectedValue = e.target.value;
                            form.setFieldValue("selectedState", selectedValue);
                            handleStateChange(e);
                          }}
                          className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
                        >
                          <option value="">Please select your state</option>
                          {states.map((state) => (
                            <option key={state?.isoCode} value={state?.isoCode}>
                              {state?.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>
                    <ErrorMessage
                      name="selectedState"
                      component="div"
                      className="text-red-500 error"
                    />
                  </>
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
                </div>
              </div>
            </div>

            <div className="w-full mb-4">
              <div className="flex gap-x-2">
                <div className="w-[50%]">
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    Start <span className="text-[red]">*</span>
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
                  {dateValidation === true &&
                  values?.currentlyInProcess !== true ? (
                    <span className="block text-[red] mt-1">
                      The end date cannot be before the start date
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={`w-[50%] ${
                    values?.currentlyInProcess === true && "hidden"
                  }`}
                >
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    End <span className="text-[red]">*</span>
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
                        isDisabled={
                          startDate?.length < 6 || startDate === undefined
                            ? true
                            : false
                        }
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
                        isDisabled={
                          startDate?.length < 6 || startDate === undefined
                            ? true
                            : false
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-1 mb-2">
              <div className="flex justify-start items-center gap-x-1">
                <Field type="checkbox" name="currentlyInProcess" />
                Currently in process
                <ErrorMessage
                  name="inProcess"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <>
                <Field name="description">
                  {({ field, form }) => (
                    <Core.TextEditorWithLabel
                      {...field}
                      name={"description"}
                      label
                      height={"h-[200px]"}
                      style={{ height: "84%" }}
                      value={description}
                      setValue={setDescription}
                      formikSetFieldValue={form.setFieldValue}
                      setMaxDescriptionLimit={setMaxDescriptionLimit}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 error mt-4"
                />
                {maxDescriptionLimit === true ? (
                  <span className="block text-[red] mt-4">
                    The max limit of 1000 characters is reached
                  </span>
                ) : (
                  ""
                )}
              </>
            </div>

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
                      values?.title === "" ||
                      values?.company === "" ||
                      values?.industry === "" ||
                      (values?.currentlyInProcess !== true &&
                        dateValidation === true) ||
                      values?.salary === "" ||
                      (values?.description?.length < 14 &&
                        description?.length < 14)
                    }
                  >
                    Save
                  </Core.Button>
                )}
                <Core.Button
                  // onClick={handleBack}
                  type="narrow"
                  color="white"
                  onClick={() => {
                    handleCancel();
                    resetForm();
                    if (action === "add") {
                      setDescription("");
                      setSelectedCountry("");
                      setSelectedState("");
                      setSelectedCity("");
                      setSelectedStartMonth("");
                      setSelectedEndMonth("");
                      setSelectedStartYear("");
                      setSelectedEndYear("");
                      setStartDate("");
                      setEndDate("");
                    }
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
                    if (action === "add") {
                      setDescription("");
                      setSelectedCountry("");
                      setSelectedState("");
                      setSelectedCity("");
                      setSelectedStartMonth("");
                      setSelectedEndMonth("");
                      setSelectedStartYear("");
                      setSelectedEndYear("");
                      setStartDate("");
                      setEndDate("");
                    }
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

export default Experiences;
