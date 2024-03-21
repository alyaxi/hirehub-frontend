import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Country, State, City } from "country-state-city";
import { Core } from "..";
import { useSelector } from "react-redux";
import { DatePicker, Spin } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  // organization: Yup.string()
  //   .trim()
  //   .nullable()
  //   .required("Organization is required"),
  degree: Yup.string().trim().nullable().required("Degree is required"),
  selectedCountry: Yup.string().required("Country is required"),
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

  const currentYear = new Date().getFullYear();
  const startYear = 1901;
  const endYear = currentYear + 4;
  const yearOptions = [];
   for (let year = endYear; year >= startYear; year--) {
    yearOptions.push({ name: year.toString(), value: year.toString() });
  }

  const [data] = useState(
    action === "add"
      ? {
          degree: "",
          endDate: "",
          fieldOfStudy: "",
          isDeleted: false,
          organization: "",
          selectedCountry: "",
          selectedState: "",
          selectedCity: "",
          startDate: "",
          currentlyInProcess: false,
        }
      : {
          _id: educationToEdit?._id || "",
          degree: educationToEdit?.degree || "",
          endDate: educationToEdit?.endDate || "",
          fieldOfStudy: educationToEdit?.fieldOfStudy || "",
          // grade: educationToEdit?.grade || "",
          isDeleted: educationToEdit?.isDeleted || false,
          organization: educationToEdit?.organization || "",
          selectedCountry: educationToEdit?.selectedCountry || "",
          selectedState: educationToEdit?.selectedState || "",
          selectedCity: educationToEdit?.selectedCity || "",
          startDate: educationToEdit?.startDate || "",
          currentlyInProcess: educationToEdit?.currentlyInProcess || false,
        }
  );

  const startMonth = educationToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
  const _startMonth = startMonth ? startMonth[1] : null;

  const endMonth = educationToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
  const _endMonth = endMonth ? endMonth[1] : null;

  const _startYear = educationToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
  const __startYear = _startYear ? _startYear[2] : null;

  const _endYear = educationToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
  const __endYear = _endYear ? _endYear[2] : null;

  const [selectedStartMonth, setSelectedStartMonth] = useState(_startMonth);
  const [selectedEndMonth, setSelectedEndMonth] = useState(_endMonth);
  const [selectedStartYear, setSelectedStartYear] = useState(__startYear);
  const [selectedEndYear, setSelectedEndYear] = useState(__endYear);
  const [startDate, setStartDate] = useState(educationToEdit?.startDate || "");
  const [endDate, setEndDate] = useState(educationToEdit?.endDate || "");

  const [dateValidation, setDateValidation] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(
    educationToEdit?.selectedCountry || ""
  );
  const [selectedState, setSelectedState] = useState(
    educationToEdit?.selectedState || ""
  );
  const [selectedCity, setSelectedCity] = useState(
    educationToEdit?.selectedCity || ""
  );
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const allCountries = Country?.getAllCountries();
    setCountries(allCountries);
  }, []);

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

  const handleSubmit = (values) => {
    let _educationsData;
    if (action === "add") {
      _educationsData = {
        degree: values?.degree,
        fieldOfStudy: values?.fieldOfStudy,
        // grade: values?.grade,
        organization: values?.organization,
        selectedCountry: selectedCountry,
        selectedState: selectedState,
        selectedCity: selectedCity,
        startDate: startDate,
        endDate: values?.currentlyInProcess === true ? "" : endDate,
        currentlyInProcess: values?.currentlyInProcess,
      };
    } else {
      _educationsData = {
        degree: values?.degree,
        fieldOfStudy: values?.fieldOfStudy,
        // grade: values?.grade,
        organization: values?.organization,
        selectedCountry: selectedCountry,
        selectedState: selectedState,
        selectedCity: selectedCity,
        startDate: startDate,
        endDate: values?.currentlyInProcess === true ? "" : endDate,
        currentlyInProcess: values?.currentlyInProcess,
      };
    }
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

  // console.log("dateValidation",dateValidation)
  // console.log("startDate", startDate);
  // console.log("endDate", endDate);
  // console.log("selectedCountry", selectedCountry);
  // console.log("selectedState", selectedState);
  // console.log("selectedCity", selectedCity);

  // console.log("educationToEdit", educationToEdit);
 
  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm }) => {
        console.log("values --", values);
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
                      defaultOption="Please specify your field of study"
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
            {/* <>
              <Field name="startM">
                {({ field }) => (
                  <>
                    <DatePicker
                      picker="month"

                     onChange={onChangeStartMonth}

                    //  setFieldValue("dateRange", _dates);

                       />
                       <input
                              onChange={onChangeStartMonth}
                       type="month" id="bdaymonth" name="bdaymonth" />
                  </>
                )}
              </Field>
            </> */}
            <div className="w-full mb-4">
              <div className="flex gap-x-2">
                <div className="w-[50%]">
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    Start Date <span className='text-[red]'>*</span>
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
                    End Date<span className='text-[red]'>*</span>
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
                        // isDisabled={
                        //   startDate === "" || startDate === undefined
                        //     ? true
                        //     : false
                        // }
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

            {/* <div className="mb-4">
              <div className="flex justify-between gap-x-2">
                <div className="w-[50%]">
                  { / * Country * / }
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    Country <span className='text-[red]'>*</span>
                  </label>

                  <>
                    <Field name="selectedCountry">
                      {({ form }) => (
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
                </div>
                <div className="w-[50%]">
                  { / * City * / }
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
            </div> */}

            <div className="mb-4">
              {/* Country */}
              <label
                className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
              >
                Country <span className='text-[red]'>*</span>
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
                      
                      (values?.currentlyInProcess !== true &&
                        dateValidation === true) ||

                      (values?.selectedCountry === "" && selectedCountry === "")
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
                    if (action === "add") {
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

export default Educations;
