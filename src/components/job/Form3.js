// Form3.js
import React from "react";
import { Core } from "..";
import { Radio } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const {
  industryOptions,
  departmentOptions,
  careerLevelOptions,
  experienceOptions,
  minimumEducationOptions,
  jobShiftOptions,
} = dropdownOptions;

function Form3({
  // handleShortSummeryChange,
  handleInput,
  values,
}) {
  console.log("Form3 values", values);
  return (
    <Core.Card className={"p-5"} w840 border>
      <div className="mb-4">
        {/* <Core.InputWithLabel
          name={"positionTitle"}
          label
          bgGray
          sm
          required
          onChange={(e) => handleInput("positionTitle", e.target.value)}
        /> */}

        <Field name="positionTitle">
          {({ field }) => (
            <>
              <Core.InputWithLabel
                {...field}
                name="positionTitle"
                label
                bgGray
                sm
                edit
                value={values?.positionTitle}
                required
              />
              <ErrorMessage
                name="positionTitle"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
      <div className="mb-4">
        {/* <Core.SelectWithLabel
                    name={"industry"}
                    label
                    options={industryOptions}
                    onChange={(e) => handleInput('industry', e.target.value)}
                /> */}

        <Field name="industry">
          {({ field }) => (
            <>
              <Core.SelectWithLabel
                {...field}
                name={"industry"}
                label
                options={industryOptions}
                defaultOption="Choose any one"
                value={values?.industry}
                required
              />
              <ErrorMessage
                name="industry"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
      <div className="mb-4">
        {/* <Core.SelectWithLabel
          name={"department"}
          label
          options={departmentOptions}
          onChange={(e) => handleInput("department", e.target.value)}
        /> */}

        <Field name="department">
          {({ field }) => (
            <>
              <Core.SelectWithLabel
                {...field}
                name={"department"}
                label
                options={departmentOptions}
                defaultOption="Choose any one"
                value={values?.department}
                required
              />
              <ErrorMessage
                name="department"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
      <div className="mb-4">
        {/* <Core.SelectWithLabel
          name={"careerLevel"}
          label
          options={careerLevelOptions}
          onChange={(e) => handleInput("careerLevel", e.target.value)}
        /> */}

        <Field name="careerLevel">
          {({ field }) => (
            <>
              <Core.SelectWithLabel
                {...field}
                name={"careerLevel"}
                label
                options={careerLevelOptions}
                defaultOption="Choose any one"
                value={values?.careerLevel}
                required
              />
              <ErrorMessage
                name="careerLevel"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
      <div className="mb-4">
        {/* <Core.SelectWithLabel
          name={"experience"}
          label
          options={experienceOptions}
          onChange={(e) => handleInput("experience", e.target.value)}
        /> */}

        <Field name="experience">
          {({ field }) => (
            <>
              <Core.SelectWithLabel
                {...field}
                name={"experience"}
                label
                options={experienceOptions}
                defaultOption="Choose any one"
                value={values?.experience}
                required
              />
              <ErrorMessage
                name="experience"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>

      <div className="mb-4">
        {/* <Core.SelectWithLabel
          name={"minimumEducation"}
          label
          options={minimumEducationOptions}
          onChange={(e) => handleInput("minimumEducation", e.target.value)}
        /> */}

        <Field name="minimumEducation">
          {({ field }) => (
            <>
              <Core.SelectWithLabel
                {...field}
                name={"minimumEducation"}
                label
                options={minimumEducationOptions}
                defaultOption="Choose any one"
                value={values?.minimumEducation}
                required
              />
              <ErrorMessage
                name="minimumEducation"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
      <div className="mb-4">
        {/* <Core.SelectWithLabel
          name={"jobShift"}
          label
          options={jobShiftOptions}
          onChange={(e) => handleInput("jobShift", e.target.value)}
        /> */}

        <Field name="jobShift">
          {({ field }) => (
            <>
              <Core.SelectWithLabel
                {...field}
                name={"jobShift"}
                label
                options={jobShiftOptions}
                defaultOption="Choose any one"
                value={values?.jobShift}
                required
              />
              <ErrorMessage
                name="jobShift"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
      <div className="mb-4">
        {/* <Core.InputWithLabel
          name={"jobLocation"}
          label
          bgGray
          sm
          onChange={(e) => handleInput("jobLocation", e.target.value)}
        /> */}

        <Field name="jobLocation">
          {({ field }) => (
            <>
              <Core.InputWithLabel
                {...field}
                name="jobLocation"
                label
                bgGray
                sm
                edit
                value={values?.jobLocation}
                required
              />
              <ErrorMessage
                name="jobLocation"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
      {/* <div className="mb-4">
                <Core.InputWithLabel
                    name={"package"}
                    label
                    bgGray
                    sm
                    onChange={(e) => handleInput('salary', e.target.value)}
                />
            </div> */}

      <div className="mb-4">
        <label
          className={` flex justify-start text-[14px] text-gray-2 tracking-wide  mb-2 font-semibold capitalize`}
        >
          Gender:<span className='text-[red]'>*</span>
        </label>

        {/* <Radio.Group
          className="w-full"
          onChange={(e) => handleInput("gender", e.target.value)}
        >
          <div className="flex flex-wrap gap-y-3 w-full max-w-[570px]">
            <Radio value={"Male"}>Male</Radio>
            <Radio value={"Female"}>Female</Radio>
            <Radio value={"No Preference"}>No Preference</Radio>
          </div>
        </Radio.Group> */}

        <Field name="gender">
          {({ field }) => (
            <>
              <Radio.Group className="w-full" {...field}>
                <div className="flex flex-wrap gap-y-3 w-full max-w-[570px]">
                  <Radio value={"Male"}>Male</Radio>
                  <Radio value={"Female"}>Female</Radio>
                  <Radio value={"No Preference"}>No Preference</Radio>
                </div>
              </Radio.Group>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 error"
              />
            </>
          )}
        </Field>
      </div>
    </Core.Card>
  );
}

export default Form3;
