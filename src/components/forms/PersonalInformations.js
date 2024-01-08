import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';

function PersonalInformations({ action, handleCancel }) {
    const careerLevelOptions = [
        { name: "Entry Level", value: "entryLevel" },
        { name: "Mid-Level", value: "midLevel" },
        { name: "Senior", value: "senior" },
        { name: "Lead", value: "lead" },
    ];
    const experienceOptions = [
        { name: "6 months", value: "6months" },
        { name: "1 year", value: "1year" },
        { name: "2 years", value: "2years" },
        { name: "3 years", value: "3years" },
        { name: "4 years", value: "4years" },
        { name: "5 years", value: "5years" },
        { name: "6 years", value: "6years" },
        { name: "7 years", value: "7years" },
        { name: "8 years", value: "8years" },
        { name: "9 years", value: "9years" },
        { name: "10 years", value: "10years" },
        { name: "Over 10 years", value: "Over10" },
    ];
    const expectedSalaryOptions = [
        { name: "$1000 - $1500", value: "1000-1500" },
        { name: "$1500 - $2000", value: "1500-2000" },
        { name: "$2000 - $2500", value: "2000-2500" },
        { name: "$2500 - $3000", value: "2500-3000" },
        { name: "$3000 - $3500", value: "3000-3500" },
        { name: "$3500 - $4000", value: "3500-4000" },
        { name: "$4000 - $4500", value: "4000-4500" },
        { name: "Over $4500", value: "Over4500" },
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

                    <Core.UploadAvatar />

                    <div className='mb-4'>
                        <Field name="name">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="name"
                                    label="Name"
                                    placeholder="Enter your name"
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="lastName">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="lastName"
                                    label="LastName"
                                    placeholder="Enter your last name"
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="email">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="email"
                                    label="email"
                                    helperText={'Only provided to employers you apply or respond to'}
                                    icon="Lock1"
                                    required
                                />
                            )}
                        </Field>
                    </div>

                    Mobile
                    <br />

                    {/* <div className='mb-4'>

                        <Core.MobileInputs
                            // {...field}
                            name="mobile"
                            label="email"
                            helperText={'Only provided to employers you apply or respond to'}
                            icon="Lock1"
                            required
                        />

                    </div> */}

                    Date of Birth
                    <br />
                    Nationality
                    <br />
                    City
                    <br />
                    Area




                    <div className='mb-4'>
                        <div className='flex gap-x-2'>
                            <div className='w-full'>
                                <Core.SelectWithLabel
                                    name={"careerLevel"}
                                    label="Career Level"
                                    options={careerLevelOptions}
                                    defaultOption="Choose any one"
                                    onChange={(value) => handleChange("careerLevel", value)}
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <Core.SelectWithLabel
                                    name={"experience"}
                                    label="Experience"
                                    options={experienceOptions}
                                    defaultOption="Choose any one"
                                    onChange={(value) => handleChange("experience", value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Core.SelectWithLabel
                            name={"expectedSalary"}
                            label="Expected Salary"
                            options={expectedSalaryOptions}
                            onChange={(value) => handleChange("expectedSalary", value)}
                        />
                    </div>



                    <div className='mb-4'>
                        <Field name="zip">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="zip"
                                    label="zip"
                                />
                            )}
                        </Field>
                    </div>



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

export default PersonalInformations;
