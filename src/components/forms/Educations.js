import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';

function Educations({ action, handleCancel }) {
    const degreeOptions = [
        { name: "BSCS", value: "bscs" },
        { name: "BSSE", value: "bsse" },
        { name: "B Com.", value: "bcom" },
        { name: "BS", value: "bs" },
        { name: "Masters", value: "masters" },
        { name: "MPhill", value: "mphill" },
        { name: "Ph. D", value: "phd" },
    ];
    const fieldOfStudyOptions = [
        { name: "Computer Science", value: "Computer Science" },
        { name: "Engineering", value: "Engineering" },
        { name: "Medicine", value: "Medicine" },
        { name: "Business Administration", value: "Business Administration" },
        { name: "Psychology", value: "Psychology" },
        { name: "Biology", value: "Biology" },
        { name: "Economics", value: "Economics" },
        { name: "Political Science", value: "Political Science" },
    ];
    const gradeOptions = [
        { name: "A", value: "A" },
        { name: "B", value: "B" },
        { name: "C", value: "C" },
        { name: "D", value: "D" },
        { name: "E", value: "E" },
        { name: "F", value: "F" },
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
                        <Field name="organization">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    sm
                                    name="organization"
                                    label
                                    placeholder="Enter Organization Name"
                                    required
                                />
                            )}
                        </Field>
                    </div>


                    <div className='mb-4'>
                        <Core.SelectWithLabel
                            name={"degree"}
                            label="degree"
                            options={degreeOptions}
                            defaultOption="Choose any one"
                            onChange={(value) => handleChange("degree", value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <Core.SelectWithLabel
                            name={"fieldOfStudy"}
                            label="Did you directly manage a team?"
                            options={fieldOfStudyOptions}
                            defaultOption="Field Of Study"
                            onChange={(value) => handleChange("fieldOfStudy", value)}
                        />
                    </div>

                    start date / end date
                    <br />
                    location

                    <div className='mb-4'>
                        <Core.SelectWithLabel
                            name={"grade"}
                            label="Did you directly manage a team?"
                            options={gradeOptions}
                            defaultOption="Select Your Grade"
                            onChange={(value) => handleChange("grade", value)}
                        />
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

export default Educations;
