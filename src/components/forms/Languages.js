import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Core } from "..";
// import MultiSelectInput from '../core/MultiSelectInput';
import { useSelector } from "react-redux";
import { Spin } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";
import * as Yup from "yup";

const { languagesOptions, languageProficiencyOptions } = dropdownOptions;

function Languages({
  action,
  handleCancel,
  id,
  setCandidateProfileData,
  savingForm,
}) {
  const candidate = useSelector((state) => state?.Candidate?.candidate);
  const languages = candidate?.languagesData; 

  const languageToEdit = languages?.find((language) => language?._id === id);

  // const [data] = useState(
  //   action === "add"
  //     ? {
  //         title: "",
  //         proficiency: "",
  //       }
  //     : {
  //         _id: languageToEdit?._id || "",
  //         title: languageToEdit?.title || "",
  //         proficiency: languageToEdit?.proficiency || "",
  //         isDeleted: languageToEdit?.isDeleted || false,
  //       }
  // );

  useEffect(() => {
    if (action === "edit") {
      setFormData({
        _id: languageToEdit?._id || "",
        title: languageToEdit?.title || "",
        proficiency: languageToEdit?.proficiency || "",
        isDeleted: languageToEdit?.isDeleted || false,
      });
    }
  }, [languageToEdit, action]);

  const [formData, setFormData] = useState({
    title: "",
    proficiency: "",
  });

  const [customLanguageError, setCustomLanguageError] = useState("");

  const handleSubmit = (values, { resetForm }) => {
    console.log("handleSubmit called");

    let _languagesData = {
      title:
        values?.title === "Other (please specify)"
          ? values?.customLanguage
          : values?.title,
      proficiency: values?.proficiency,
      isDeleted: languageToEdit?.isDeleted ? languageToEdit?.isDeleted : false,
    };
    console.log("_languagesData.title", _languagesData.title);
    let languageData;

    if (_languagesData.title === undefined) {
      setCustomLanguageError("Language is Required");
    } else {
      setCustomLanguageError("");
      const candidateLanguagesData = candidate?.languagesData || [];
      const titleExists = candidateLanguagesData.some(
        (language) =>
          language.title.toLowerCase() === _languagesData.title.toLowerCase()
      );
      if (action === "add") {

        if (titleExists) {
          setCustomLanguageError("This Language is already exists");
          // console.log('exists in candidate's languagesData array');
        } else {
          // console.log("vv add _languagesData", _languagesData);
          // console.log('does not exist in candidate's');
          setCandidateProfileData((prevData) => ({
            ...prevData,
            languagesData: _languagesData,
          }));
          setCustomLanguageError("");
        }
      } else {
        languageData = languages?.map((language) => {
          if (language._id === id) {
            return _languagesData;
          } else {
            return language;
          }
        });

        if (titleExists) {
          setCustomLanguageError("This Language is already exists");
        } else {
         // console.log("vv else languageData", languageData);
         setCandidateProfileData({
          languagesData: languageData,
        });
          setCustomLanguageError("");
        }

      
      }
      setTimeout(() => {
        resetForm();
      }, 1500);
    }
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
    proficiency: Yup.string()
      .trim()
      .nullable()
      .required("Proficiency is required"),
  });

  const validationSchemaForAdd = Yup.object().shape({
    title: Yup.string()
      .trim()
      .nullable()
      // .required("Title is required")
      .test(
        "unique-language",
        "This Language is already exists",
        async function (value) {
          const existingLanguages = candidate?.languagesData || []; // Get existing languages from Redux store
          const languageExists = existingLanguages.some(
            (item) => item.title === value
          ); // Check if language exists
          return !languageExists; // Return true if language is unique, false otherwise
        }
      ),
    // customLanguage: Yup.string()
    //   .trim()
    //   .nullable()
    //   .required("Language is required")
    //   .test(
    //     "unique-language",
    //     "This Language is already exists",
    //     async function (value) {
    //       console.log("async function (value", value);
    //       const existingLanguages = candidate?.languagesData || []; // Get existing languages from Redux store
    //       const languageExists = existingLanguages.some(
    //         (item) => item.title?.toLowerCase() === value?.toLowerCase()
    //       ); // Check if language exists
    //       return !languageExists; // Return true if language is unique, false otherwise
    //     }
    //   ),
    proficiency: Yup.string()
      .trim()
      .nullable()
      .required("Proficiency is required"),
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
      {({ resetForm, values }) => {
        console.log("values", values);
        return (
          <Form>
            <span className="block text-gray-400 opacity-70 my-5">
              <span className="text-[red] pr-2">*</span>Required fields
            </span>

            <div className="mb-4">
              {action === "edit" ? (
                <span className="select-none">
                  <label
                    className={`block text-[14px] text-gray-2 tracking-wide mb-1 font-semibold capitalize`}
                  >
                    Language
                  </label>
                  {values?.title}
                </span>
              ) : (
                <>
                  <Field name="title">
                    {({ field }) => (
                      <>
                        <Core.SelectWithLabel
                          {...field}
                          name={"title"}
                          customLabel={"Language"}
                          label
                          options={languagesOptions}
                          defaultOption="Please specify the language"
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

                  <div className="mt-1">
                    {values?.title === "Other (please specify)" && (
                      <Field name="customLanguage">
                        {({ field }) => (
                          <>
                            <Core.InputWithLabel
                              {...field}
                              sm
                              name="customLanguage"
                              required
                              edit
                            />
                            {/* <ErrorMessage
                              name="customLanguage"
                              component="div"
                              className="text-red-500 error"
                            /> */}
                            {customLanguageError && (
                              <span className="text-[red]">
                                {customLanguageError}
                              </span>
                            )}
                          </>
                        )}
                      </Field>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="mb-4">
              <Field name="proficiency">
                {({ field }) => (
                  <>
                    <Core.SelectWithLabel
                      {...field}
                      name={"proficiency"}
                      label
                      options={languageProficiencyOptions}
                      defaultOption="Please select your proficiency level"
                      required
                    />
                    <ErrorMessage
                      name="proficiency"
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

export default Languages;
