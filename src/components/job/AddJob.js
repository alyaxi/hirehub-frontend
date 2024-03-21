import React, { useState } from "react";
import { Core } from "..";
import { ToastContainer } from "react-toastify";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import { convertDateFormat } from "../../utilis/convertDateStamp";
import { AddjobsEmployer } from "../../Slices/Employer/JobSlice";
import { useDispatch } from "react-redux";
import { Radio } from "antd";
import notificationService from "../../utilis/notification";
import { useNavigate } from "react-router-dom";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import dropdownOptions from "../../data/dropdownOptions.json";
const {
  industryOptions,
  departmentOptions,
  careerLevelOptions,
  experienceOptions,
  minimumEducationOptions,
  jobShiftOptions,
} = dropdownOptions;

const validationSchema = Yup.object().shape({
  //   noOfOpenings: Yup.string()
  //     .required("noOfOpenings is required")
  //     .test(
  //       "title-validation",
  //       "Custom validation for title field",
  //       function (value) {
  //         console.log("title field:", value);
  //         return true;
  //       }
  //     ),
  //   gender: Yup.string()
  //     .required("Gender is required")
  //     .test(
  //       "title-validation",
  //       "Custom validation for title field",
  //       function (value) {
  //         console.log("title field:", value);
  //         return true;
  //       }
  //     ),
  //   name: Yup.string()
  //     .required("Name is required")
  //     .test(
  //       "name-validation",
  //       "Custom validation for title field",
  //       function (value) {
  //         console.log("title field:", value);
  //         return true;
  //       }
  //     ),
  //   expirationDate: Yup.string()
  //     .required("expirationDate is required")
  //     .test(
  //       "expirationDate-validation",
  //       "Custom validation for title field",
  //       function (value) {
  //         console.log("title field:", value);
  //         return true;
  //       }
  //     ),
  //   department: Yup.string()
  //     .required("department is required")
  //     .test(
  //       "department-validation",
  //       "Custom validation for department field",
  //       function (value) {
  //         console.log("department field:", value);
  //         return true;
  //       }
  //     ),
  //   careerLevel: Yup.string()
  //     .required("careerLevel is required")
  //     .test(
  //       "careerLevel-validation",
  //       "Custom validation for careerLevel field",
  //       function (value) {
  //         console.log("careerLevel field:", value);
  //         return true;
  //       }
  //     ),
  //   industry: Yup.string()
  //     .required("industry is required")
  //     .test(
  //       "industry-validation",
  //       "Custom validation for industry field",
  //       function (value) {
  //         console.log("industry field:", value);
  //         return true;
  //       }
  //     ),
  //   jobType: Yup.string().required("jobType is required"),
  //   // .oneOf(["Commission"], "Job type must be 'Commission'"),
  //   //   rating: Yup.string()
  //   //   .required("rating is required")
  //   //   .oneOf(["2"], "rating type must be '2'")
  //   industry: Yup.string().required("industry is required"),
  aboutPosition: Yup.string().required("aboutPosition is required"),
});

function AddJob() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    // id: "",
    // jobType: "",
    // noOfOpenings: "",
    // expirationDate: "",
    postedDate: "",
    company: {},
    // jobLocation: "",
    salary: {
      type: "",
      value: "",
      rate: "",
    },
    // aboutPosition: "",
    benefits: [],
    qualification: "",
    responsibilities: "",
    skills: "",
    // shortSummery: [],
    // industry: "",
    // jobShift: "",
    // department: "",
    // gender: "",
    // minimumEducation: "",
    // careerLevel: "",
    // experience: "",
  });
  // console.log("job", job);
  // const handleNext = () => {
  //   if (step < 4) {
  //     setStep(step + 1);
  //   }
  // };

  // const handleBack = () => {
  //   if (step >= 2) {
  //     setStep(step - 1);
  //   }
  // };

  const handleFinish = (values) => {
    // console.log("handleFinish called");
    let currentDate = new Date();
    let formattedCurrentDate = convertDateFormat(currentDate);
    const updatedJob = {
      ...job,

      jobType: values?.jobType,
      noOfOpenings: values?.noOfOpenings,
      //   noOfOpenings: isNaN(parseInt(values?.noOfOpenings)) ? 1 : parseInt(values?.noOfOpenings),
      expirationDate: values?.expirationDate,
      jobLocation: values?.jobLocation,
      aboutPosition: values?.aboutPosition,
      industry: values?.industry,
      jobShift: values?.jobShift,
      department: values?.department,
      // gender: values?.gender,
      minimumEducation: values?.minimumEducation,
      careerLevel: values?.careerLevel,
      experience: values?.experience,
      positionTitle: values?.positionTitle,

      postedDate: formattedCurrentDate,
      applicationCount: 0,
      isDeleted: false,
      jobStatus: "Open",
    };
    console.log("final data", updatedJob);
    dispatch(AddjobsEmployer(updatedJob))
      .unwrap()
      .then(({ data }) => {
        if (!data.error) {
          notificationService.success("Job successfully Posted");
        }
        setTimeout(() => {
          navigate("/employer/manage-jobs");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.message);
        notificationService.error(err.message);
      });
    setJob(updatedJob);
  };

  // console.log("job", job);

  const handleInput = (name, value) => {
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  // form1 functions start
  const handleRadioChange = (name, value) => {
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleNoOfPeopleToHireChange = (noOfPeopleToHire) => {
    setJob((prevJob) => ({
      ...prevJob,
      noOfOpenings: noOfPeopleToHire,
    }));
  };

  const handleExpiryDateChange = (expiryDate) => {
    setJob((prevJob) => ({
      ...prevJob,
      expirationDate: expiryDate,
    }));
  };
  // form1 functions end

  // form2 functions start
  const handleSalaryChange = (type, value, rate) => {
    setJob((prevJob) => ({
      ...prevJob,
      salary: {
        type: type,
        value: value,
        rate: rate,
      },
    }));
  };
  // form2 functions end

  // form3 functions start
  const multiSelectHandle = (_benefits) => {
    setJob((prevJob) => ({
      ...prevJob,
      benefits: _benefits,
    }));
  };

  const handleJobUpdate = (name, value) => {
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };
  // form3 functions end

  // form4 functions start
  // const handleShortSummeryChange = (title, value) => {
  //     const existingIndex = job.shortSummery.findIndex(
  //         (summary) => summary.title === title
  //     );
  //     if (existingIndex !== -1) {
  //         setJob((prevJob) => ({
  //             ...prevJob,
  //             shortSummery: prevJob.shortSummery.map((summary, index) =>
  //                 index === existingIndex
  //                     ? { ...summary, value: value }
  //                     : summary
  //             ),
  //         }));
  //     } else {
  //         setJob((prevJob) => ({
  //             ...prevJob,
  //             shortSummery: [
  //                 ...prevJob.shortSummery,
  //                 { title: title, value: value },
  //             ],
  //         }));
  //     }
  // };
  // form4 functions end

  const initialValues = {
    name: "",
    // gender: "",
    expirationDate: "",
    noOfOpenings: "",
    jobType: "",

    rating: "",

    positionTitle: "",
    industry: "",
    department: "",
    careerLevel: "",
    experience: "",
    minimumEducation: "",
    jobShift: "",
    jobLocation: "",

    aboutPosition: "",
    responsibilities: "",
    qualification: "",
    skills: "",
    benefits: [],
  };

  const handleSubmit = (values) => {
    console.log("handleSubmit values", values?.name);
    console.log("handleSubmit values", values?.expirationDate);
    console.log("handleSubmit values", values?.noOfOpenings);
  };

  //   console.log(
  //     "ee qualification",
  //     job?.qualification.replace(/[p<>/r\s]/g, "").length
  //   );
  //   console.log("job?.benefits", job?.benefits);
  //   console.log("job?.benefits.length", job?.benefits.length);
  //   console.log("ee responsibilities", job?.responsibilities);
  //   console.log("ee skills", job?.skills);

  //   function stripHtmlTags(html) {
  //     return html.replace(/<[^>]*>?/gm, "");
  //   }
  //   const responsibilitiesWithoutTags = stripHtmlTags(job?.responsibilities);
  //   const alphabetCharactersCount = responsibilitiesWithoutTags.replace(
  //     /[^a-zA-Z]/g,
  //     ""
  //   ).length;
  //   if (alphabetCharactersCount >= 3) {
  //     console.log("Responsibilities contain at least 3 alphabet characters.");
  //   } else {
  //     console.log(
  //       "  do not contain at least 3 "
  //     );
  //   }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => {
        // console.log("Formik values", values);
        return (
          <Form>
            <div data-hs-stepper>
              <ToastContainer></ToastContainer>

              {step === 1 && (
                <>
                  <Form1
                    // handleShortSummeryChange={handleShortSummeryChange}
                    handleRadioChange={handleRadioChange}
                    handleNoOfPeopleToHireChange={handleNoOfPeopleToHireChange}
                    handleExpiryDateChange={handleExpiryDateChange}
                    handleInput={handleInput}
                    values={values}
                  /> 
                   <div className="mt-5 flex justify-start items-center gap-x-2">
                    <Core.Button
                      onClick={nextStep}
                      type="narrow"
                      isDisabled={
                        values?.jobType === "" ||
                        values?.noOfOpenings === "" ||
                        values?.expirationDate === ""
                      }
                    >
                      Save and Continue
                    </Core.Button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <Form2
                    handleSalaryChange={handleSalaryChange}
                    handleInput={handleInput}
                    values={values}
                    job={job}
                  />

                  <div className="mt-5 flex justify-start items-center gap-x-2">
                    <Core.Button
                      onClick={prevStep}
                      data-hs-stepper-back-btn
                      type="narrow"
                      color="white"
                    >
                      Back
                    </Core.Button>
                    <Core.Button
                      onClick={nextStep}
                      type="narrow"
                      isDisabled={
                        job?.salary?.value === "" || job?.salary?.rate === ""
                      }
                    >
                      Save and Continue
                    </Core.Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <Form3
                    // handleShortSummeryChange={handleShortSummeryChange}
                    handleInput={handleInput}
                    handleRadioChange={handleRadioChange}
                    values={values}
                  />

                  <div className="mt-5 flex justify-start items-center gap-x-2">
                    <Core.Button
                      onClick={prevStep}
                      data-hs-stepper-back-btn
                      type="narrow"
                      color="white"
                    >
                      Back
                    </Core.Button>
                    <Core.Button
                      onClick={nextStep}
                      type="narrow"
                      isDisabled={
                        values?.industry === "" ||
                        values?.department === "" ||
                        values?.jobLocation === "" ||
                        values?.minimumEducation === "" ||
                        values?.experience === "" ||
                        // values?.gender === "" ||
                        values?.positionTitle === "" ||
                        values?.jobShift === "" ||
                        values?.careerLevel === ""
                      }
                    >
                      Save and Continue
                    </Core.Button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <Form4
                    multiSelectHandle={multiSelectHandle}
                    handleJobUpdate={handleJobUpdate}
                    values={values}
                    job={job}
                  />

                  {/* <div className="mb-4">
                    <Field name="aboutPosition">
                      {({ field }) => (
                        <>
                          <Core.TextAreaWithLabel
                            name="aboutPosition"
                            {...field}
                            value={field.value}
                            label
                            // onChange={(e) => handleJobUpdate('aboutPosition', e.target.value)}
                            required
                          />
                          
                    <ErrorMessage
                      name="aboutPosition"
                      component="div"
                      className="text-red-500 error"
                    />
                        </>
                      )}
                    </Field>
                  </div> */}

                  <div className="mt-5 flex justify-start items-center gap-x-2">
                    <Core.Button
                      onClick={prevStep}
                      data-hs-stepper-back-btn
                      type="narrow"
                      color="white"
                    >
                      Back
                    </Core.Button>

                    <Core.Button
                      onClick={() => handleFinish(values)}
                      type="narrow"
                      isDisabled={
                        values?.aboutPosition === "" ||
                        job?.qualification?.replace(/[p<>/r\s]/g, "")?.length <
                          2 ||
                        job?.skills?.replace(/[p<>/r\s]/g, "")?.length < 2 ||
                        job?.responsibilities?.replace(/[p<>/r\s]/g, "")
                          ?.length < 2 ||
                        job?.benefits.length === 0
                      }
                    >
                      Save
                    </Core.Button>
                  </div>
                </>
              )}

              {/* <div className="mt-5 flex justify-start items-center gap-x-2">
                {step !== 1 && (
                  <Core.Button
                    onClick={handleBack}
                    data-hs-stepper-back-btn
                    type="narrow"
                    color="white"
                  >
                    Back
                  </Core.Button>
                )}
                {step !== 4 && (
                  <Core.Button onClick={handleSubmit} type="narrow">
                    Save and Continue
                  </Core.Button>
                )}
                {step === 4 && (
                  <Core.Button onClick={handleFinish} type="narrow">
                    Save
                  </Core.Button>
                )}
              </div> */}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddJob;
