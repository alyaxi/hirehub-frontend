import React from "react";

function TextAreaWithLabel({
  label,
  name,
  required,
  helperText,
  onChange,
  value,
  maxLength,
  rows,
  disabled,
}) {
  const _label = (name) => {
    switch (name) {
      case "companyDescription":
        return "Company Description";
      case "position":
      case "aboutPosition":
        return "Position Details";
      case "summary":
      case "summery":
        return "Summary";
      case "statusLine":
        return "Status Line";
      case "description":
        return "Describe here";
      default:
        return "Label";
    }
  };

  const placeholder = (name) => {
    switch (name) {
      case "companyDescription":
        return "Describe here";
      case "position":
      case "aboutPosition":
        return "Type position details";
      case "summary":
      case "summery":
        return "Type summary about yourself...";
      case "statusLine":
        return "Type Status Line about yourself...";
      case "description":
        return "Type invite description for candidate.";

      default:
        return "";
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        {label && (
          <label
            htmlFor={name}
            className={`
                    block text-[14px] text-gray-2 tracking-wide ${
                      helperText ? "mb-1.5" : "mb-2"
                    } font-semibold capitalize
                    `}
          >
            {_label(name)}:
            {required && <span className='text-[red]'>*</span>}
          </label>
        )}
      </div>
      <div className="relative">
        {helperText && (
          <p className="text-gray-12 text-[14px] leading-[16px] mb-1.5">
            {helperText}
          </p>
        )}
        <textarea
          onChange={onChange}
          disabled={disabled}
          className={`
                    w-full text-[14px] font-regular leading-[20px] text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]
                    ${disabled === true && "bg-gray-3 cursor-no-drop"} 
                    `}
          rows={rows ? rows : 7}
          cols={5}
          id={name}
          maxLength={maxLength ? maxLength : "5000"}
          defaultValue={value}
          name={name}
          placeholder={placeholder(name)}
          autoFocus
        />
      </div>
    </>
  );
}

export default TextAreaWithLabel;
