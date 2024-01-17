import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Core } from '..';

function Skills({ action, handleCancel }) {
    const skillExperienceOptions = [
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

                  may be badge / 

                    <div className='mb-4'>
                        <Core.SelectWithLabel
                            name={"skillExperience"}
                            label="skillExperience"
                            options={skillExperienceOptions}
                            defaultOption="Choose any one"
                            onChange={(value) => handleChange("skillExperience", value)}
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

export default Skills;
