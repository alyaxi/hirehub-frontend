// Form1.js
import React, { useState } from 'react';
import { Core } from '../..';

function Form1({ onNext }) {
    const numberOfEmployeesOptions = [
        { name: "10-20", value: "10-20" },
        { name: "12-30", value: "20-30" },
        { name: "30-50", value: "30-50" },
        { name: "50-100", value: "50-100" },
        { name: "100-200", value: "100-200" },
        { name: "200-300", value: "200-300" },
        { name: "Over 300", value: "Over 300" },
    ];

    // const handleChange = (name, event) => {
    //     const value = event.target.value;
    //     onNext({ [name]: value });
    // };

    const [fileInputs, setFileInputs] = useState({
        logo: null,
        welcomeVideo: null,
    });

    const handleChange = (name, event) => {
        const value = event.target.value;
        onNext({ [name]: value });
    };

    const handleFileChange = (name, event) => {
        const file = event.target.files[0];
        setFileInputs({ ...fileInputs, [name]: file });
        onNext({ [name]: file });
    };


    return (
        <Core.Card w840 border>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Create an Employer Account</h5>
            <div className="mb-4">
                <Core.InputWithLabel
                    name={"YourCompanysName"}
                    label="Company Name"
                    onChange={(value) => handleChange("companyName", value)}
                />
            </div>
            <div className="mb-4">
                <Core.SelectWithLabel
                    name={"numberofEmployees"}
                    label="Number of Employees"
                    options={numberOfEmployeesOptions}
                    onChange={(value) => handleChange("noOfEmployes", value)}
                />
            </div>
            <div className="mb-4">
                <Core.UploadFile
                    name={"logo"}
                    label="Company Logo"
                    helperText="A company logo helps candidates connect the job opportunity with your brand. Recommended specs are 400x400 pixels."
                    accept="image/*"
                    onChange={(event) => handleFileChange("logo", event)}
                />
            </div>
            <div className="mb-4">
                <Core.UploadFile
                    name={"welcomeVideo"}
                    label="Welcome Video"
                    helperText="A company logo helps candidates connect the job opportunity with your brand. Recommended specs are 400x400 pixels."
                    accept="video/*"
                    onChange={(event) => handleFileChange("welcomeVideo", event)}
                />
            </div>
            <div className="mb-4">
                <Core.InputWithLabel
                    name={"YourPhoneNumber"}
                    label="Your Phone Number"
                    helperText="We will use this number to text you important notifications"
                    onChange={(value) => handleChange("phoneNo", value)}
                />
            </div>
        </Core.Card>
    );
}

export default Form1;
