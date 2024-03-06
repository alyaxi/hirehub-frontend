import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Country, City } from "country-state-city";
import { Core } from "..";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  organization: Yup.string()
    .trim()
    .nullable()
    .required("organization is required"),
  degree: Yup.string().trim().nullable().required("degree is required"),
  fieldOfStudy: Yup.string()
    .trim()
    .nullable()
    .required("fieldOfStudy is required"),
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

  // console.log("educationToEdit", educationToEdit)

  const currentYear = new Date().getFullYear();
  const startYear = 1901;
  const endYear = currentYear - 5;
  const yearOptions = [];
  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push({ name: year.toString(), value: year.toString() });
  }

  const [data] = useState(
    action === "add"
      ? {
          degree: "",
          endDate: "",
          fieldOfStudy: "",
          isDeleted: "",
          organization: "",
          selectedCountry: "",
          startDate: "",
        }
      : {
          _id: educationToEdit?._id || "",
          degree: educationToEdit?.degree || "",
          endDate: educationToEdit?.endDate || "",
          fieldOfStudy: educationToEdit?.fieldOfStudy || "",
          // grade: educationToEdit?.grade || "",
          isDeleted: educationToEdit?.isDeleted || "",
          organization: educationToEdit?.organization || "",
          selectedCity: educationToEdit?.selectedCity || "",
          selectedCountry: educationToEdit?.selectedCountry || "",
          startDate: educationToEdit?.startDate || "",
        }
  );
  // console.log("data", data)

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

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState("");

  const [selectedCountry, setSelectedCountry] = useState(
    educationToEdit?.selectedCountry ? educationToEdit?.selectedCountry : ""
  );
  const [selectedCity, setSelectedCity] = useState(
    educationToEdit?.selectedCity ? educationToEdit?.selectedCity : ""
  );
  console.log("ed selectedCountry", selectedCountry);
  const [countries, setCountries] = useState([]);
  //   console.log("ed countries", countries);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const allCountries = Country?.getAllCountries();
    setCountries(allCountries);
    // console.log("ed allCountries", allCountries);
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
      const selectedMonth =
        type === "startDate" ? selectedStartMonth : selectedEndMonth;

      if (selectedMonth !== "" && selectedYear !== "") {
        const selectedDate = selectedMonth + "/" + selectedYear;

        if (type === "startDate") {
          setStartDate(selectedDate);
          setSelectedStartYear(selectedYear);
        }
        if (type === "endDate") {
          setEndDate(selectedDate);
          setSelectedEndYear(selectedYear);
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
      let _startDate = selectedStartMonth + "/" + value;
      setStartDate("01/" + _startDate);
    }

    if (type === "endDate" && selectedStartMonth !== "" && name === "year") {
      let _endDate = selectedStartMonth + "/" + value;
      setEndDate("01/" + _endDate);
    }
  };

  const handleCountryChange = (event) => {
    const countryValue = event.target.value;
    setSelectedCountry(countryValue);

    const countryCities = City.getCitiesOfCountry(countryValue);
    setCities(countryCities);

    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    const cityValue = event.target.value;
    setSelectedCity(cityValue);
  };

  const handleSubmit = (values) => {
    console.log("handleSubmit called");
    let _educationsData = {
      degree: values?.degree,
      endDate: endDate,
      fieldOfStudy: values?.fieldOfStudy,
      // grade: values?.grade,
      organization: values?.organization,
      selectedCountry: selectedCountry,
      selectedCity: selectedCity,
      startDate: startDate,
    };

    let educationData;

    if (action === "add") {
      console.log("vv add _educationsData", _educationsData);
      // educationData = [...educations, _educationsData]
      setCandidateProfileData(prevData => ({
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

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm }) => (
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
                    defaultOption="Choose any one"
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
              </div>
              <div className="w-[50%]">
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
          </div>

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
                <select
                  name="country"
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
              </div>
              <div className="w-[50%]">
                {/* City */}
                <label
                  className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}
                >
                  City
                </label>
                <select
                  name="city"
                  onChange={handleCityChange}
                  value={selectedCity}
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
                <Core.Button type="narrow" submit>
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
      )}
    </Formik>
  );
}

export default Educations;
