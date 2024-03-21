import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Core } from "..";
import Icon from "../icon";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import countryCodesOptions from "../../data/countryCodes.json";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { parsePhoneNumber } from "react-phone-number-input";

const {
  expectedSalaryOptions,
  experienceOptions,
  genderOptions,
  monthsOptions,
  careerLevelOptions,
} = dropdownOptions;

function PersonalInformations({
  action,
  handleCancel,
  setCandidateProfileData,
  savingForm,
}) {
  const candidate = useSelector((state) => state?.Candidate?.candidate);
  const personalInformationDataSavedOnDb = candidate?.personalInformationData;

  const user = candidate?.userId;
  const lastName = user?.name.split(" ")[1];
  const firstName = user?.name.split(" ")[0];

  // console.log(
  //   "countryCodesOptions",
  //   countryCodesOptions
  // );

  const currentYear = new Date().getFullYear();
  const startYear = 1901;
  const endYear = currentYear;
  const yearOptions = [];

  for (let year = endYear; year >= startYear; year--) {
    yearOptions.push({ name: year.toString(), value: year.toString() });
  }

  const daysOptions = Array.from({ length: 31 }, (_, index) => {
    const day = index + 1;
    const paddedDay = day < 10 ? `0${day}` : day.toString();
    return { name: paddedDay, value: paddedDay };
  });

  const [data] = useState({
    profilePicture: personalInformationDataSavedOnDb?.profilePicture || "",
    name: firstName,
    lastName: lastName || "",
    email: user?.email,
    zipCode: personalInformationDataSavedOnDb?.zipCode || "",
    expectedSalary: personalInformationDataSavedOnDb?.expectedSalary || "",
    careerLevel: personalInformationDataSavedOnDb?.careerLevel || "",
    experience: personalInformationDataSavedOnDb?.experience || "",
    gender: personalInformationDataSavedOnDb?.gender || "",
    phoneNo: personalInformationDataSavedOnDb?.phoneNo || "",
    statusLine: personalInformationDataSavedOnDb?.statusLine || "",
    country: personalInformationDataSavedOnDb?.country || "",
    state: personalInformationDataSavedOnDb?.state || "",
    city: personalInformationDataSavedOnDb?.city || "",
    dob: personalInformationDataSavedOnDb?.dob || "",
  });

  // useEffect(() => {
  //     setFormData({
  //       profilePicture: personalInformationDataSavedOnDb?.profilePicture || "",
  //       name: firstName,
  //       lastName: lastName || "",
  //       email: user?.email,
  //       zipCode: personalInformationDataSavedOnDb?.zipCode || "",
  //       expectedSalary: personalInformationDataSavedOnDb?.expectedSalary || "",
  //       careerLevel: personalInformationDataSavedOnDb?.careerLevel || "",
  //       experience: personalInformationDataSavedOnDb?.experience || "",
  //       gender: personalInformationDataSavedOnDb?.gender || "",
  //       phoneNo: personalInformationDataSavedOnDb?.phoneNo || "",
  //       statusLine: personalInformationDataSavedOnDb?.statusLine || "",
  //       country: personalInformationDataSavedOnDb?.country || "",
  //       state: personalInformationDataSavedOnDb?.state || "",
  //       city: personalInformationDataSavedOnDb?.city || "",
  //       dob: personalInformationDataSavedOnDb?.dob || "",
  //     });
  // }, [personalInformationDataSavedOnDb, action]);

  // const [formData, setFormData] = useState({
  //   name: firstName,
  //   email: user?.email,
  // });

  const [selectedCountry, setSelectedCountry] = useState(
    personalInformationDataSavedOnDb?.country || ""
  );
  const [selectedState, setSelectedState] = useState(
    personalInformationDataSavedOnDb?.state || ""
  );
  const [selectedCity, setSelectedCity] = useState(
    personalInformationDataSavedOnDb?.city || ""
  );
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // const [countryCode, setCountryCode] = useState("");
  const [value, setValue] = useState();

  const day = personalInformationDataSavedOnDb?.dob?.match(/^(\d+)\//);
  const _day = day ? day[1] : "";

  const month = personalInformationDataSavedOnDb?.dob?.match(/\/(\d+)\//);
  const _month = month ? month[1] : "";

  const year = personalInformationDataSavedOnDb?.dob?.match(/\/(\d+)$/);
  const _year = year ? year[1] : "";

  const [selectedDay, setSelectedDay] = useState(_day);
  const [selectedMonth, setSelectedMonth] = useState(_month);
  const [selectedYear, setSelectedYear] = useState(_year);

  // console.log("selectedDay", selectedDay);
  // console.log("selectedMonth", selectedMonth);
  // console.log("selectedYear", selectedYear);

  const [dob, setDob] = useState(
    personalInformationDataSavedOnDb?.dob
      ? personalInformationDataSavedOnDb?.dob
      : ""
  );
  const [profilePicture, setProfilePictrue] = useState(
    personalInformationDataSavedOnDb?.profilePicture || ""
  );

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);


  // for pre populate state and city start
  
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
    setSelectedCountry(personalInformationDataSavedOnDb?.country || "");
  }, []);
  
  useEffect(() => {
    if (selectedCountry) {
      const countryStates = State.getStatesOfCountry(selectedCountry);
      setStates(countryStates);
    } else {
      setStates([]);
    }
  }, [selectedCountry]);
  
  useEffect(() => {
    if (selectedState) {
      const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(stateCities);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  // for pre populate state and city end
  

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

  const handleDateChange = (name, event) => {
    const value = event.target.value;
    // console.log("handleDateChange", name, " - ", value);
    if (name === "day") {
      setSelectedDay(value);
    }
    if (name === "month") {
      setSelectedMonth(value);
    }
    if (name === "year") {
      setSelectedYear(value);
    }
  };

  const updateDob = () => {
    // console.log("updateDob called");
    if (selectedDay?.length && selectedMonth?.length && selectedYear?.length) {
      let _dob = selectedDay + "/" + selectedMonth + "/" + selectedYear;
      setDob(_dob);
    } else {
      setDob("");
    }
  };
  // console.log("SelectWithLabel value", 'abcdfdfdf ( dff)'.substring('abcdfdfdf ( dff)'.indexOf('(')))

  useEffect(() => {
    // console.log("useEffect called");
    updateDob();
  }, [selectedDay, selectedMonth, selectedYear]);

  // console.log(profilePicture, "ppppppppppp");
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
    };
    // console.log("_personalInformationData", _personalInformationData);
    setCandidateProfileData((prevData) => ({
      ...prevData,
      personalInformationData: _personalInformationData,
    }));
  };

  // const phoneNumber = value && parsePhoneNumber(value)
  // console.log("phoneNumber33", phoneNumber);
  // console.log("value", value);
  // console.log("!profilePicture?.length", !profilePicture?.length);
  // console.log("selectedDay", selectedDay);
  // console.log("selectedMonth", selectedMonth);
  // console.log("selectedYear", selectedYear);
  console.log("selectedCountry", selectedCountry);
  console.log("selectedState", selectedState);
  console.log("selectedCity", selectedCity);

  return (
    <Formik
      initialValues={data}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => {
        console.log("formik values", values);
        return (
          <Form>
            <span className="block text-gray-400 opacity-70 my-5">
              <span className="text-[red] pr-2">*</span>Required fields
            </span>

            <Core.UploadAvatar
              setState={setProfilePictrue}
              profilePicture={profilePicture}
            />

            <div className="mb-4">
              <Field name="name">
                {({ field }) => (
                  <Core.InputWithLabel
                    {...field}
                    sm
                    name="firstName"
                    label
                    bgGray
                    customPlaceholder="Enter your name"
                    edit
                    disabled
                    required
                  />
                )}
              </Field>
            </div>
            <div className="mb-4">
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
                    required
                  />
                )}
              </Field>
            </div>

            <div className="mb-4">
              <Field name="email">
                {({ field }) => (
                  <Core.InputWithLabel
                    {...field}
                    sm
                    name="email"
                    label
                    bgGray
                    helperText={
                      "Only provided to employers you apply or respond to"
                    }
                    icon="Lock1"
                    edit
                    disabled
                    required
                  />
                )}
              </Field>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center">
                <label
                  className={`flex justify-start text-[14px] font-medium text-gray-2 tracking-wide mb-1 font-semibold capitalize`}
                >
                  Phone Number: <span className='text-[red]'>*</span>
                  <span className="mt-[2px] ml-[3px]">
                    <Icon name={"Lock1"} />
                  </span>
                </label>
              </div>
              <div className={`relative w-ful l `}>
                <p className="text-gray-12 text-[14px] leading-[16px] mb-1.5 ">
                  Only provided to employers you apply or respond to
                </p>
              </div>
              <Field name="phoneNo">
                {({ field, form }) => (
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={field.value}
                    onChange={(value) => form.setFieldValue("phoneNo", value)}
                    className={`phone-input w-full text-[14px] font-regular leading-[20px] text-gray-6  bg-gray-3 bg-white  border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[9px] `}
                  />
                 
                )}
              </Field>
            </div>

            {/* <div className="mb-4">
              <Field name="phoneNo">
                {({ field }) => (
                  <Core.InputWithLabel
                    {...field}
                    sm
                    name="phoneNo"
                    label
                    bgGray
                    helperText={
                      "Only provided to employers you apply or respond to"
                    }
                    icon="Lock1"
                    edit
                    required
                  />
                )}
              </Field>
            </div> */}

            <Field name="statusLine">
              {({ field }) => (
                <Core.TextAreaWithLabel
                  name="statusLine"
                  label
                  {...field}
                  // value={field.value}
                  maxLength="180"
                  required
                />
              )}
            </Field>

            <div className="w-full mb-4">
              <div className="flex gap-x-2">
                <div className="w-[70%]">
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    Date of Birth: <span className='text-[red]'>*</span>
                  </label>
                  <div className="flex gap-x-2">
                    <div className="w-[33%]">
                      <Core.SelectWithLabel
                        name={"day"}
                        sm
                        options={daysOptions}
                        defaultOption="Day"
                        onChange={(value) => handleDateChange("day", value)}
                        value={selectedDay}
                        required
                      />
                    </div>
                    <div className="w-[33%]">
                      <Core.SelectWithLabel
                        name={"month"}
                        sm
                        options={monthsOptions}
                        defaultOption="Month"
                        onChange={(value) => handleDateChange("month", value)}
                        value={selectedMonth}
                        required
                      />
                    </div>
                    <div className="w-[33%]">
                      <Core.SelectWithLabel
                        name={"year"}
                        sm
                        options={yearOptions}
                        defaultOption="Year"
                        onChange={(value) => handleDateChange("year", value)}
                        value={selectedYear}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[30%]">
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                  >
                    Gender: <span className='text-[red]'>*</span>
                  </label>
                  <Field name="gender">
                    {({ field }) => (
                      <Core.SelectWithLabel
                        {...field}
                        name={"gender"}
                        sm
                        options={genderOptions}
                        defaultOption="Select"
                        // value={field.value}
                        required
                      />
                    )}
                  </Field>
                </div>
              </div>
            </div>

            <span className="flex items-center gap-x-1 text-gray-400 leading-0 opacity-70 my-1">
              <Icon name="Info" />
              This information is collected for statistical purposes and will
              not be shared with employers
            </span>

            <div className="mb-4">
              {/* Country */}
              <label
                className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
              >
                Country: <span className='text-[red]'>*</span>
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
                    State:
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
                    City:
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

            <div className="mb-4">
              <Field name="zipCode">
                {({ field }) => (
                  <Core.InputWithLabel
                    {...field}
                    sm
                    name="zipCode"
                    label
                    edit
                    required
                  />
                )}
              </Field>
            </div>

            <div className="mb-4">
              <div className="flex gap-x-2">
                <div className="w-full">
                  <Field name="careerLevel">
                    {({ field }) => (
                      <Core.SelectWithLabel
                        {...field}
                        name={"careerLevel"}
                        label
                        options={careerLevelOptions}
                        defaultOption="Please select your career level"
                        // value={field.value}
                        required
                      />
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <Field name="experience">
                    {({ field }) => (
                      <Core.SelectWithLabel
                        {...field}
                        name={"experience"}
                        label
                        options={experienceOptions}
                        defaultOption="Please select your level of experience"
                        // value={field.value}
                        required
                      />
                    )}
                  </Field>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <Field name="expectedSalary">
                {({ field }) => (
                  <Core.SelectWithLabel
                    {...field}
                    name={"expectedSalary"}
                    label
                    options={expectedSalaryOptions}
                    // value={field.value}
                    required
                  />
                )}
              </Field>
            </div>

            {action === "edit" && (
              <div className="flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]">
                {savingForm ? (
                  <div className=" flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]">
                    <Spin />
                  </div>
                ) : (
                  <Core.Button
                    type="narrow"
                    submit
                    isDisabled={
                      values?.careerLevel === "" ||
                      // values?.country === "" ||
                      values?.email === "" ||
                      values?.expectedSalary === "" ||
                      values?.experience === "" ||
                      // values?.lastName === "" ||
                      values?.name === "" ||
                      values?.gender === "" ||
                      values?.phoneNo === "" ||
                      selectedCountry === "" ||
                      dob === "" ||
                      // values?.profilePicture === "" ||
                      // values?.profilePicture === undefined ||
                      !profilePicture?.length ||
                      values?.statusLine?.length < 1 ||
                      values?.zipCode?.length < 5
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
                  }}
                >
                  Cancel
                </Core.Button>
              </div>
            )}
          </Form>
        );
      }}
    </Formik>
  );
}

// export default PersonalInformations;
export default React.memo(PersonalInformations);
