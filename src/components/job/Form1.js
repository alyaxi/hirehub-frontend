// Form1.js
import React from "react";
import { Core } from "..";
import { Radio } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   noOfOpenings: Yup.string().required("noOfOpenings is required"),
//   gender: Yup.string().required("Gender is required"),
//   name: Yup.string().required("Name is required"),
//   message: Yup.string().required("Message is required"),
// });

const { noOfPeopleToHireOptions } = dropdownOptions;

function Form1({
  // handleShortSummeryChange,
  handleNoOfPeopleToHireChange,
  handleExpiryDateChange,
  handleInput,
  values,
}) {
  console.log("Form1 values", values);

  return (
    <Core.Card className={"p-5"} w840 border>
      <div className="mb-4">
                <label className={`flex justify-start items-center text-[14px] text-gray-2 tracking-wide mb-2 font-semibold capitaliz e`}>
                    What type of job is it? <span className='text-[red]'>*</span>
                </label>
                {/* <Radio.Group className="w-full" onChange={(e) => handleInput('jobType', e.target.value)} >
                    <div className="flex flex-wrap gap-y-3 w-full max-w-[570px]">
                        <Radio value={"Full Time"} className='w-[20%]'>Full Time</Radio>
                        <Radio value={'Part Time'} className='w-[20%]'>Part Time</Radio>
                        <Radio value={'Temporary'} className='w-[20%]'>Temporary</Radio>
                        <Radio value={'Contract'} className='w-[20%]'>Contract</Radio>
                        <Radio value={'Internship'} className='w-[20%]'>Internship</Radio>
                        <Radio value={'Commission'} className='w-[20%]'>Commission</Radio>
                        <Radio value={'New-Grad'} className='w-[20%]'>New-Grad</Radio>
                    </div>
                </Radio.Group> */}
                 <Field name="jobType">
                    {({ field }) => (
                      <>
                        <Radio.Group className="w-full" {...field}>
                            <div className="flex flex-wrap gap-y-3 w-full max-w-[570px]">
                                <Radio value={"Full Time"} className='w-[20%]'>Full Time</Radio>
                                <Radio value={'Part Time'} className='w-[20%]'>Part Time</Radio>
                                <Radio value={'Temporary'} className='w-[20%]'>Temporary</Radio>
                                <Radio value={'Contract'} className='w-[20%]'>Contract</Radio>
                                <Radio value={'Internship'} className='w-[20%]'>Internship</Radio>
                                <Radio value={'Commission'} className='w-[20%]'>Commission</Radio>
                                <Radio value={'New-Grad'} className='w-[20%]'>New-Grad</Radio>
                            </div>
                        </Radio.Group>
                         <ErrorMessage
                         name="jobType"
                         component="div"
                         className="text-red-500 error"
                       />
                      </>
                    )}
                </Field>
            </div>




            




      {/* <div>
                <label>Rating:</label>
                <Field name="rating" type="radio" value="1" />1
                <Field name="rating" type="radio" value="2" />2
                <Field name="rating" type="radio" value="3" />3
                <ErrorMessage name="rating" component="div" className="error" />
              </div> */}


              





      <div className="mb-4">
        {/* <Core.SelectWithLabel
                    name={"noOfPeopleToHire"}
                    label
                    options={noOfPeopleToHireOptions}
                    required
                    onChange={(e) => handleNoOfPeopleToHireChange(e.target.value)}
                /> */}

        <Field name="noOfOpenings">
          {({ field }) => (
            <>
              <Core.SelectWithLabel
                {...field}
                name={"noOfOpenings"}
                label
                options={noOfPeopleToHireOptions}
                defaultOption="Please select number
                 of vacancies"
                value={values?.noOfOpenings}
                required
              />
              <ErrorMessage
                name="noOfOpenings"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
      <div className="mb-4">
        {/* <Core.InputWithLabel
          name="expiryDate"
          label
          bgGray
          sm
          required
          onChange={(e) => handleExpiryDateChange(e.target.value)}
        /> */}

        <Field name="expirationDate">
          {({ field }) => (
            <>
              <Core.InputWithLabel
                {...field}
                name="expirationDate"
                label
                bgGray
                sm
                edit
                value={values?.expirationDate}
                required
                // onChange={(e) => handleExpiryDateChange(e.target.value)}
              />
              <ErrorMessage
                name="expirationDate"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>



      {/* <div>
                  <label>Name:</label>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <label>Gender:</label>
                  <Field as="select" name="gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage name="gender" component="div" className="error" />
                </div>  */}
    </Core.Card>
  );
}

export default Form1;
