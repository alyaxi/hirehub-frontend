import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Core } from "..";
// import MultiSelectInput from '../core/MultiSelectInput';
import { useSelector } from "react-redux";
import { Spin } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import * as Yup from "yup";

const { skillExperienceOptions, skillsOptions } = dropdownOptions;

function Skills({
  action,
  handleCancel,
  id,
  setCandidateProfileData,
  savingForm,
}) {
  const candidate = useSelector((state) => state?.Candidate?.candidate);
  const skills = candidate?.skillsData;

  const skillToEdit = skills?.find((skill) => skill?._id === id);

  // const [data] = useState(
  //   action === "add"
  //     ? {
  //         title: "",
  //         experience: "",
  //       }
  //     : {
  //         _id: skillToEdit?._id || "",
  //         title: skillToEdit?.title || "",
  //         experience: skillToEdit?.experience || "",
  //         isDeleted: skillToEdit?.isDeleted || false,
  //       }
  // );

  useEffect(() => {
    if (action === "edit") {
      setFormData({
        _id: skillToEdit?._id || "",
        title: skillToEdit?.title || "",
        experience: skillToEdit?.experience || "",
        isDeleted: skillToEdit?.isDeleted || false,
      });
    }
  }, [skillToEdit, action]);

  const [formData, setFormData] = useState({
    title: "",
    experience: "",
  });

  const handleSubmit = (values, { resetForm }) => {
    // console.log("handleSubmit called")
    let _skillsData = {
      title: values?.title,
      experience: values?.experience,
      isDeleted: skillToEdit?.isDeleted ? skillToEdit?.isDeleted : false,
    };

    let skillData;

    if (action === "add") {
    //   console.log("vv add _skillsData", _skillsData);
      setCandidateProfileData((prevData) => ({
        ...prevData,
        skillsData: _skillsData,
      }));
    } else {
      // console.log("vv else edit _skillsData", _skillsData)
      skillData = skills?.map((skill) => {
        if (skill._id === id) {
          return _skillsData;
        } else {
          return skill;
        }
      });
    //   console.log("vv else edit skillData", skillData);
      setCandidateProfileData({
        skillsData: skillData,
      });
    }
    setTimeout(() => {
      resetForm();
    }, 1500);
  };

  // const multiSelectHandle = (title, setFieldValue) => {
  //     setFieldValue('title', title);
  // };

  const deleteItem = (id) => {
    console.log("to be deleted", id);
    handleCancel();
  };

  const validationSchemaForEdit = Yup.object().shape({
    title: Yup.string().trim().nullable().required("Title is required"),
    experience: Yup.string()
      .trim()
      .nullable()
      .required("Experience is required"),
  });

  const validationSchemaForAdd = Yup.object().shape({
    title: Yup.string()
      .trim()
      .nullable()
      .required("Title is required")
      .test(
        "unique-skill",
        "This skill is already exists",
        async function (value) {
          const existingSkills = candidate?.skillsData || [];
          const skillExists = existingSkills.some(
            (item) => item.title === value
          );
          return !skillExists;
        }
      ),
    experience: Yup.string()
      .trim()
      .nullable()
      .required("Experience is required"),
  });

  return (
    <Formik
      // initialValues={data}
      initialValues={formData}
      validationSchema={
        action === "add" ? validationSchemaForAdd : validationSchemaForEdit
      }
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm }) => {
        return (
          <Form>
            <span className="block text-gray-400 opacity-70 my-5">
              <span className="text-[red] pr-2">*</span>Required fields
            </span>

            <div className="mb-4">
              <Field name="title">
                {({ field }) => (
                  <>
                    <Core.SelectWithLabel
                      {...field}
                      name={"title"}
                      customLabel={"Skill"}
                      label
                      options={skillsOptions}
                      defaultOption="Choose any one"
                      value={values?.title}
                      required
                      isDisabled={action === "edit"}
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500 error"
                    />
                  </>
                )}
              </Field>
            </div>

            <div className="mb-4">
              <Field name="experience">
                {({ field }) => (
                  <>
                    <Core.SelectWithLabel
                      {...field}
                      name={"experience"}
                      label
                      options={skillExperienceOptions}
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
        );
      }}
    </Formik>
  );
}

export default Skills;
