import React from "react";
import { Select } from "antd";
import Icon from "../icon";

const MultiSelectInput = ({
  label,
  helperText,
  warningText,
  name,
  required,
  icon,
  options,
  onChange,
  mode,
  defaultValue,
  maxCount,
  value,
}) => {
  // console.log("MultiSelectInput value", value)

  // console.log("uuu maxCount", maxCount)

  const _label = (name) => {
    switch (name) {
      case "benefits":
        return "Benefits";
      case "skills":
        return "Skills";
      case "title":
        return "Title";
      case "languages":
      case "language":
        // return "Add a new language";
        return "Language";
      case "proficiency":
        return "Proficiency";
      case "desiredJobTitle":
        return "Desired Job Title";
      case "willingToLocations":
        return "Location Preference";
      default:
        return "Label";
    }
  };

  const _placeholder = (name) => {
    switch (name) {
      case "benefits":
        return "Please select benefits";
      case "desiredJobTitle":
        return "Please select your preferred job title";
      case "skills":
        return "Please select your relevant skills";
      case "willingToLocations":
        return "Enter up to 3 locations you'd be willing to relocate to...";

      default:
        return "Please select";
    }
  };
  //   const [value, setValue] = React.useState(['Ava Swift']);

  // const suffix = (
  //     <>
  //         <span>
  //             {value.length} / {maxCount ? maxCount : null}
  //         </span>
  //         {/* <DownOutlined /> */}
  //         delete
  //     </>
  // );

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
          {_label(name)}: {required && <span className='text-[red]'>*</span>}
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
      {warningText && (
        <p className="text-red-500 text-[14px] leading-[16px] mb-1.5">
          {warningText}
        </p>
      )}
      <Select
        id={name}
        mode={mode ? mode : "multiple"}
        allowClear
        placeholder={_placeholder(name)}
        onChange={onChange}
        options={options}
        value={value}
        size="large"
        style={{
          width: "100%",
        }}
        defaultValue={defaultValue && defaultValue}

        // maxCount={maxCount ? maxCount : null}
        // suffixIcon={suffix}
      />
    </>
  );
};
export default MultiSelectInput;
