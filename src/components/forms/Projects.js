import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Core } from "..";
import DragImg from "../core/DragImg";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";

// const validationSchema = Yup.object().shape({
//     title: Yup.string().required("Degree is required"),
//     company: Yup.string().required("Company is required"),
//     industry: Yup.string().required("Industry is required"),
//     salary: Yup.string().required("Salary is required"),
//   });

const { associatedOptions, monthsOptions } = dropdownOptions;

function Projects({
  action,
  handleCancel,
  id,
  setCandidateProfileData,
  index,
  savingForm,
}) {
  // console.log("index", index)

  const candidate = useSelector((state) => state?.Candidate?.candidate);
  const projects = candidate.projectsData;
  const projectToEdit = projects?.find((project) => project?._id === id);

  console.log("projectToEdit", projectToEdit);

  const currentYear = new Date().getFullYear();
  const startYear = 1901;
  // const endYear = currentYear - 5;
  const endYear = currentYear;
  const yearOptions = [];

  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push({ name: year.toString(), value: year.toString() });
  }

  const [data] = useState({
    _id: projectToEdit?._id ? projectToEdit?._id : "",
    projectImage: projectToEdit?.projectImage
      ? projectToEdit?.projectImage
      : "",
    projectUrl: projectToEdit?.projectUrl ? projectToEdit?.projectUrl : "",
    name: projectToEdit?.name ? projectToEdit?.name : "",
    associated: projectToEdit?.associated ? projectToEdit?.associated : "",
    currentlyInProcess: projectToEdit?.currentlyInProcess
      ? projectToEdit?.currentlyInProcess
      : false,
    description: projectToEdit?.description ? projectToEdit?.description : "",
    startDate: projectToEdit?.startDate ? projectToEdit?.startDate : "",
    endDate: projectToEdit?.endDate ? projectToEdit?.endDate : "",
  });

  const [maxDescriptionLimit, setMaxDescriptionLimit] = useState(false);
  const [dateValidateion, setDateValidateion] = useState(false);

  const [description, setDescription] = useState(
    projectToEdit?.description ? projectToEdit?.description : ""
  );
  const [projectImage, setProjectImage] = useState(
    projectToEdit?.projectImage ? projectToEdit?.projectImage : ""
  );

  const startMonth = projectToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
  const _startMonth = startMonth ? startMonth[1] : null;

  const endMonth = projectToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
  const _endMonth = endMonth ? endMonth[1] : null;

  const _startYear = projectToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
  const __startYear = _startYear ? _startYear[2] : null;

  const _endYear = projectToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
  const __endYear = _endYear ? _endYear[2] : null;

  const [selectedStartMonth, setSelectedStartMonth] = useState(_startMonth);
  const [selectedEndMonth, setSelectedEndMonth] = useState(_endMonth);
  const [selectedStartYear, setSelectedStartYear] = useState(__startYear);
  const [selectedEndYear, setSelectedEndYear] = useState(__endYear);

  const [startDate, setStartDate] = useState(projectToEdit?.startDate || "");
  const [endDate, setEndDate] = useState(projectToEdit?.endDate || "");

  const [cancelImg, setCancelImg] = useState(false);

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
            setDateValidateion(false);
          } else if (endYear === startYear) {
            if (endMonth > startMonth) {
              setEndDate(_endDate);
              setDateValidateion(false);
            } else {
              setDateValidateion(true);
            }
          } else {
            setDateValidateion(true);
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
            setDateValidateion(false);
          } else if (endYear === startYear) {
            if (endMonth > startMonth) {
              setEndDate(_endDate);
              setDateValidateion(false);
            } else {
              setDateValidateion(true);
            }
          } else {
            setDateValidateion(true);
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

  //   const imgUrl = `http://localhost:4000/${projectImage?.originFileObj?.name}`;

  const handleSubmit = (values) => {
    // let _endDate = "";
    // let _startDate = "";
    // _endDate = values?.endMonth + "/" + values?.endYear;
    // _startDate = values?.startMonth + "/" + values?.startYear;

    // console.log("startDate", startDate);
    // console.log("endDate", endDate);

    let imgUrl = "";
    if (projectImage?.uid) {
      // console.log("projectImage?.uid", projectImage?.uid);
      imgUrl = `http://localhost:4000/${projectImage?.originFileObj?.name}`;
    } else {
      // console.log("no uid so > projectImage > ", projectImage);
      imgUrl = projectImage;
    }

    let _projectsData;

    if (action === "add") {
      _projectsData = {
        projectImage: imgUrl,
        projectImageFile: projectImage?.originFileObj,

        name: values?.name,
        projectUrl: values?.projectUrl,
        currentlyInProcess: values?.currentlyInProcess,
        associated: values?.associated,
        description: description,

        startDate: startDate,
        endDate: endDate,
      };
    } else {
      _projectsData = {
        projectImage: imgUrl,
        // projectImageFile: projectImage?.originFileObj,

        name: values?.name,
        projectUrl: values?.projectUrl,
        currentlyInProcess: values?.currentlyInProcess,
        associated: values?.associated,
        description: description,

        startDate: startDate,
        endDate: endDate,
      };
    }

    let projectData;
    if (action === "add") {
      projectData = [...projects, _projectsData];
    } else {
      projectData = projects.map((pro, i) => {
        if (pro._id === id) {
          return _projectsData;
        } else {
          return pro;
        }
      });
    }

    setCandidateProfileData({
      projectsData: projectData,
    });

    // console.log("projectData", projectData);
  };

  const deleteItem = (id) => {
    console.log("to be deleted", id);
    handleCancel();
  };

  // console.log("startDate", startDate);
  // console.log("endDate", endDate);
  //   console.log("projectImage", projectImage);
  // console.log('selectedStartMonth', selectedStartMonth)
  // console.log('selectedEndMonth', selectedEndMonth)
  // console.log('selectedStartYear', selectedStartYear)
  // console.log('selectedEndYear', selectedEndYear)

  return (
    <Formik
      initialValues={data}
      //   validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm, formik }) => {
        console.log("values", values);

        return (
          <Form>
            <span className="block text-gray-400 opacity-70 my-5">
              <span className="text-[red] pr-2">*</span>Required fields
            </span>

            <div className="max-h-[270px] mb-4">
              <Field name="projectImage">
                {({ field, form }) => (
                  <DragImg
                    state={projectImage}
                    setState={setProjectImage}
                    formikSetFieldValue={form.setFieldValue}
                    cancelImg={cancelImg}
                  />
                )}
              </Field>
              <ErrorMessage
                name="projectImage"
                component="div"
                className="text-red-500 error"
              />
            </div>

            <div className="mb-4">
              <Field name="name">
                {({ field }) => (
                  <Core.InputWithLabel
                    {...field}
                    name="name"
                    sm
                    label
                    placeholder="Enter your name"
                    edit
                    required
                  />
                )}
              </Field>
            </div>

            <div className="mb-4">
              <Field name="projectUrl">
                {({ field }) => (
                  <Core.InputWithLabel
                    {...field}
                    name="projectUrl"
                    sm
                    label
                    edit
                  />
                )}
              </Field>
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
                  {dateValidateion === true ? (
                    <span className="block text-[red] mt-1">
                      Select Proper Dates
                    </span>
                  ) : (
                    ""
                  )}
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
              <Field name="associated">
                {({ field }) => (
                  <Core.SelectWithLabel
                    {...field}
                    name={"associated"}
                    label
                    options={associatedOptions}
                    defaultOption="Choose any one"
                    required
                  />
                )}
              </Field>
            </div> */}

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

            <div className="flex justify-between pt-6 mt-8 border-t-[1px]">
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
                      values?.name === "" ||
                      projectImage === null ||
                      projectImage === "" ||
                      dateValidateion === true ||
                      (values?.startDate === "" && startDate === "") ||
                      (values?.endDate === "" && endDate === "") ||
                      (values?.description?.length < 14 &&
                        description?.length < 14)
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
                      setDescription("");
                      setSelectedStartMonth("");
                      setSelectedEndMonth("");
                      setSelectedStartYear("");
                      setSelectedEndYear("");
                      setStartDate("");
                      setEndDate("");
                      setProjectImage("");
                      setCancelImg(true);
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
                      setSelectedStartMonth("");
                      setSelectedEndMonth("");
                      setSelectedStartYear("");
                      setSelectedEndYear("");
                      setStartDate("");
                      setEndDate("");
                      setProjectImage("");
                      setCancelImg(true);
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

export default Projects;
