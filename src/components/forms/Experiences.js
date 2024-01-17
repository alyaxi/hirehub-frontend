import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';

function Experiences({ action, handleCancel }) {
    const industryOptions = [
        { name: "Information Technology", value: "IT" },
        { name: "Software Engineer", value: "SE" },
        { name: "Search Engine Optimization", value: "SEO" },
        { name: "Lead Software Engineer", value: "LSE" },
        { name: "Graphics Designer", value: "GD" },
        { name: "Web Developer", value: "WD" },
        { name: "Front End Developer", value: "FED" },
        { name: "Full Stack Developer", value: "FSD" },
        { name: "MERN Stack Developer", value: "MERN" },
        { name: "Backend Developer", value: "BD" },
        { name: "DevOps Engineer", value: "DOE" },
        { name: "UI/UX Designer", value: "UIUX" },
        { name: "Mobile App Developer", value: "MAD" },
        { name: "Data Scientist", value: "DS" },
        { name: "Machine Learning Engineer", value: "MLE" },
        { name: "Cybersecurity Analyst", value: "CSA" },
        { name: "Cloud Engineer", value: "CE" },
        { name: "Network Administrator", value: "NA" },
    ];
    const careerLevelOptions = [
        { name: "Entry Level", value: "entryLevel" },
        { name: "Mid-Level", value: "midLevel" },
        { name: "Senior", value: "senior" },
        { name: "Lead", value: "lead" },
    ];
    const directlyManageTeamOptions = [
        { name: "Yes", value: "yes" },
        { name: "No", value: "no" },
    ];
    const noOfPeopleOptions = [
        { name: "10", value: "10" },
        { name: "20", value: "20" },
        { name: "30", value: "30" },
        { name: "40", value: "40" },
        { name: "50", value: "50" },
        { name: "60", value: "60" },
        { name: "70", value: "70" },
        { name: "80", value: "80" },
        { name: "90", value: "90" },
        { name: "100", value: "100" },
        { name: "110", value: "110" },
        { name: "120", value: "120" },
        { name: "130", value: "130" },
        { name: "140", value: "140" },
        { name: "150", value: "150" },
        { name: "160", value: "160" },
        { name: "170", value: "170" },
        { name: "180", value: "180" },
        { name: "190", value: "190" },
        { name: "200", value: "200" },
        { name: "210", value: "210" },
        { name: "220", value: "220" },
        { name: "230", value: "230" },
        { name: "240", value: "240" },
        { name: "250", value: "250" },
        { name: "260", value: "260" },
        { name: "270", value: "270" },
        { name: "280", value: "280" },
        { name: "290", value: "290" },
        { name: "300", value: "300" },
        { name: "310", value: "310" },
        { name: "320", value: "320" },
        { name: "330", value: "330" },
        { name: "340", value: "340" },
        { name: "350", value: "350" },
        { name: "360", value: "360" },
        { name: "370", value: "370" },
        { name: "380", value: "380" },
        { name: "390", value: "390" },
        { name: "400", value: "400" },
        { name: "410", value: "410" },
        { name: "420", value: "420" },
        { name: "430", value: "430" },
        { name: "440", value: "440" },
        { name: "450", value: "450" },
        { name: "460", value: "460" },
        { name: "470", value: "470" },
        { name: "480", value: "480" },
        { name: "490", value: "490" },
        { name: "500", value: "500" },
        { name: "Over 500", value: "over500" },
    ];
    const salaryOptions = [
        { name: "$1000 - $1500", value: "1000-1500" },
        { name: "$1500 - $2000", value: "1500-2000" },
        { name: "$2000 - $2500", value: "2000-2500" },
        { name: "$2500 - $3000", value: "2500-3000" },
        { name: "$3000 - $3500", value: "3000-3500" },
        { name: "$3500 - $4000", value: "3500-4000" },
        { name: "$4000 - $4500", value: "4000-4500" },
        { name: "Over $4500", value: "over4500" },
    ];
    const [data, setData] = useState({
        name: '',
        lastName: '',
        // Add other fields here
    });

    const handleSubmit = (values, actions) => {
        // Handle form submission here using the `values` object
        console.log(values);
        // actions.setSubmitting(false); // Reset the submit state
    };
    const handleChange = (name, event) => {
        const value = event.target.value;
        console.log("value", value)

    };
    console.log("data", data)
    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>

                    indicates required

                    <div className='mb-4'>
                        <Field name="title">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="title"
                                    label
                                    placeholder="Enter title here"
                                    required
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="company">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="company"
                                    label
                                    placeholder="Enter your Company Name"
                                    required
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Core.SelectWithLabel
                            name={"industry"}
                            label="Industry"
                            options={industryOptions}
                            defaultOption="Choose any one"
                            onChange={(value) => handleChange("industry", value)}
                            required
                        />
                    </div>


                    <div className='mb-4'>
                        <div className='flex gap-x-2'>
                            <div className='w-full'>
                                <Core.SelectWithLabel
                                    name={"directlyManageTeam"}
                                    label="Did you directly manage a team?"
                                    options={directlyManageTeamOptions}
                                    defaultOption="Choose any one"
                                    onChange={(value) => handleChange("directlyManageTeam", value)}
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <Core.SelectWithLabel
                                    name={"noOfPeople"}
                                    label
                                    options={noOfPeopleOptions}
                                    defaultOption="How many people"
                                    onChange={(value) => handleChange("noOfPeople", value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Core.SelectWithLabel
                            name={"salary"}
                            label={"Salary"}
                            options={salaryOptions}
                            defaultOption="Select Salary Range"
                            onChange={(value) => handleChange("salary", value)}
                            required
                        />
                    </div>
                    location
                    <br />
                    city
                    <br />
                    start date
                    <br />
                    currently working here
                    <br />
                    description

                    {action === "edit" &&
                        <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow" submit>Save</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                    }


                    {/* </div> */}
                </Form>
            )
            }
        </Formik >
    );
}

export default Experiences;
