import React from "react";

function SelectWithLabel({
  label,
  name,
  options,
  required,
  helperText,
  onChange,
  defaultOption,
  value,
  customLabel,
  isDisabled,
}) {
  // console.log("SelectWithLabel value", value)

  const _label = (name) => {
    switch (name) {
      case "userType":
        return "User Type";
      case "YourCompanysIndustry":
        return "Company Industry";
      case "noOfEmployes":
        return "Number of Employees";
      case "expectedSalary":
        return "Expected Salary";
      case "experience":
        return "Experience";
      case "careerLevel":
        return "Career Level";
      case "industry":
        return "Industry";
      case "directlyManageTeam":
        return "Did you directly manage a team?";
      case "noOfPeople":
        return <span>&nbsp;</span>;
      case "salary":
        return "Salary";
      case "degree":
        return "Degree";
      case "fieldOfStudy":
        return "Field Of Study";
      case "grade":
        return "Grade";
      case "skillExperience":
        return "Experience with this Skill";
      case "noOfPeopleToHire":
      case "noOfOpenings":
        return "How many people do you want to hire for this opening?";
      // return "noOfOpenings";
      case "minimum":
        return "Minimum";
      case "maximum":
        return "Maximum";
      case "rate":
        return "Rate";
      case "department":
        return "Department";
      case "jobShift":
        return "Job Shift";
      case "minimumEducation":
        return "Minimum Education";
      case "languageProficiency":
        return "Proficiency with this language";
      case "desiredSalary":
        return "Desired Salary";
      case "gender":
        return "Gender";
      case "nationality":
        return "Nationality";
      case "associated":
        return "Associated";
      case "proficiency":
        return "Proficiency";
      case "position":
        return "Position";
      case "title":
        return "Title";
      case "languages":
        return "Language";
      case "selectedCountry":
        return "Country";
      case "selectedCity":
        return "City";

      default:
        return "Label";
    }
  };

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className={`
                block text-[14px] text-gray-2 tracking-wide ${
                  helperText ? "mb-1.5" : "mb-2"
                } font-semibold capitalize`}
        >
          {customLabel ? customLabel : _label(name)}:{" "}
          {required && <span className='text-[red]'>*</span>}
        </label>
      )}
      {helperText && (
        <p className="text-gray-12 text-[14px] leading-[16px] mb-1.5">
          {helperText}
        </p>
      )}
      <select
        id={name}
        onChange={onChange}
        value={value || ""}
        className="w-full text-[14px] font-regular leading-[20px] text-gray-700 font-medium bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]"
        disabled={isDisabled ? isDisabled : false}
      >
        <option value="">
          {defaultOption ? defaultOption : "Select an option..."}
        </option>
        {options.map((value, index) => (
          <option key={value?.name + index} value={value?.value}>
            {value?.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectWithLabel;
