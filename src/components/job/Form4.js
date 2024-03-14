// Form4.js
import React, { useEffect, useState } from "react";
import { Core } from "..";
import MultiSelectInput from "../core/MultiSelectInput";
import dropdownOptions from "../../data/dropdownOptions.json";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const { benefitsOptions } = dropdownOptions;

function Form4({ multiSelectHandle, handleJobUpdate,values,job }) {
  // console.log("Form4 values", values);
  const [responsibilities, setResponsibilities] = useState(job?.responsibilities||"");
  const [qualification, setQualification] = useState(job?.qualification||"");
  const [skills, setSkills] = useState(job?.skills||"");

  useEffect(() => {
    handleJobUpdate("responsibilities", responsibilities);
  }, [responsibilities]);

  useEffect(() => {
    handleJobUpdate("qualification", qualification);
  }, [qualification]);

  useEffect(() => {
    handleJobUpdate("skills", skills);
  }, [skills]);

  return (
    <Core.Card className={"p-5"} w840 border>
      <div className="mb-4">
        <label
          className={`flex justify-start text-[16px] font-semibold text-gray-2 tracking-wide capitalize mb-2`}
        >
          Job Description:
        </label>
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
            </>
          )}
        </Field>
      </div>
      <div className="mb-4">
        <Core.TextEditorWithLabel
          name={"responsibilities"}
          label
          style={{ height: "84%" }}
          value={responsibilities}
          setValue={setResponsibilities}
          required
        />
      </div>
      <div className="mb-4">
        <Core.TextEditorWithLabel
          name={"qualification"}
          label
          style={{ height: "84%" }}
          value={qualification}
          setValue={setQualification}
          required
        />
      </div>
      <div className="mb-4">
        <Core.TextEditorWithLabel
          name={"skills"}
          label
          style={{ height: "84%" }}
          value={skills}
          setValue={setSkills}
          required
        />
      </div>
      <div className="mb-4">
        <MultiSelectInput
          name={"benefits"}
          label
          options={benefitsOptions}
          onChange={multiSelectHandle}
          defaultValue={job?.benefits}
          required
        />
      </div>
    </Core.Card>
  );
}

export default Form4;
