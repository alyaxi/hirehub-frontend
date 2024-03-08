import React from "react";
import { Icon } from "..";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditorWithLabel({
  label,
  helperText,
  name,
  required,
  icon,
  value,
  setValue,
  formikSetFieldValue,
  style,
  height,
  setMaxDescriptionLimit,
}) {
  const _label = (name) => {
    switch (name) {
      case "responsibilities":
        return "Responsibilities";
      case "qualification":
        return "Qualification";
      case "skills":
        return "Skills";
      case "description":
        return "Description";

      default:
        return "Label";
    }
  };

  const handleDescriptionChange = (content) => {
    // console.log("content", content);
    // console.log("content?.length", content?.length);
    if (content?.length < 1000) {
      setValue(content);
      if (formikSetFieldValue) {
        formikSetFieldValue(name, content); // Update Formik values if available
      }
      if (setMaxDescriptionLimit) {
        setMaxDescriptionLimit(false);
      }
    } else {
      if (setMaxDescriptionLimit) {
        setMaxDescriptionLimit(true);
      }
    }
  };

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className={`
                        flex justify-start text-[14px] text-gray-2 tracking-wide ${
                          helperText ? "mb-1" : "mb-2"
                        } font-semibold capitalize
                        `}
        >
          {_label(name)}: {required && <span className="text-[red]">*</span>}
          <span className="mt-[2px] ml-[3px]">
            {" "}
            {icon && <Icon name={icon} />}
          </span>
        </label>
      )}
      {helperText && (
        <p className="text-gray-12 text-[14px] leading-[16px] mb-1.5">
          {helperText}
        </p>
      )}
      <div className={`${height ? height : "h-[340px]"}`}>
        <ReactQuill
          theme="snow"
          style={style}
          value={value}
          //   onChange={setValue}
          onChange={handleDescriptionChange}
        />
      </div>
    </>
  );
}

export default TextEditorWithLabel;
