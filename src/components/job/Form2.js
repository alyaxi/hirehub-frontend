import React, { useState, useEffect } from "react";
import { Core } from "..";
import { Divider, Radio } from "antd";
import dropdownOptions from "../../data/dropdownOptions.json";

const { salaryOptions, rateOptions } = dropdownOptions;

function Form2({ handleSalaryChange, job }) {
  const [rate, setRate] = useState(job?.salary?.rate || "");
  const [salary, setSalary] = useState(job?.salary.value || "");
  const [employmentType, setEmploymentType] = useState(
    job?.salary.type === "range" ? false : true || false
  );

  const handleEmploymentTypeChange = (e) => {
    setEmploymentType(!employmentType);
  };

  const handleRate = (value) => {
    setRate(value);
  };

  const handleSalary = (value) => {
    const containsAlphabet = /[a-zA-Z]/.test(value); // Check if string contains alphabetic characters
    const containsSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      value
    );
    if (!containsAlphabet && !containsSpecialChar) {
      // console.log("Value is valid.");
      setSalary(value);
    }
  };

  useEffect(() => {
    const handleSalaryFinal = () => {
      let _employmentType = employmentType ? "single" : "range";
      handleSalaryChange(_employmentType, salary, rate);
    };

    handleSalaryFinal();
  }, [employmentType, salary, rate]);

  return (
    <Core.Card className={"p-5"} w840 border>
      <div className="flex justify-between items-end w-full gap-x-3 mb-4">
        <div className="flex justify-between w-full">
          <div className="flex gap-y-5 w-[75%]">
            <Radio.Group
              onChange={handleEmploymentTypeChange}
              value={employmentType}
              className="pr-3"
            >
              <div className="flex flex-col justify-around h-[100%] gap-y-3">
                <Radio value={false}></Radio>
                <Radio value={true}></Radio>
              </div>
            </Radio.Group>
            <div className="flex flex-col gap-y-3 w-full">
              <div className={`${employmentType && "disable-me"}`}>
                <Core.SelectWithLabel
                  name={"salary"}
                  label
                  options={salaryOptions}
                  onChange={(e) => handleSalary(e.target.value)}
                  value={salary}
                  required
                />
              </div>
              <div className={`${!employmentType && "disable-me"}`}>
                <Core.InputWithLabel
                  name={"salary"}
                  label
                  bgGray
                  required
                  value={salary}
                  edit
                  sm
                  onChange={(e) => handleSalary(e.target.value)}
                />
              </div>
            </div>
          </div>
          <Divider
            type="vertical"
            className="h-[100px] max-h-[100px] self-center mx-[20px]"
          />
          <div className="flex flex-col justify-center w-[25%]">
            <Core.SelectWithLabel
              name={"rate"}
              label
              options={rateOptions}
              required
              onChange={(e) => handleRate(e.target.value)}
              value={rate}
            />
          </div>
        </div>
      </div>
    </Core.Card>
  );
}

export default Form2;
