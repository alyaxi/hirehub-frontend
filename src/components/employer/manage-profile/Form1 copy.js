// Form1.js
import React, { useState } from 'react';
import { Core } from '../..';
import dropdownOptions from '../../../data/dropdownOptions.json';
import UploadLogo from '../../core/UploadLogo';
// import UploadVideo from '../../core/UploadVideo';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//     companyName: Yup.string()
//         .required('Company name is required'),
//     noOfEmployes: Yup.string()
//         .required('Number of employees is required'),
//     phoneNo: Yup.string()
//         .matches(/^[0-9]*$/, 'Phone number must contain only digits')
//         .matches(/^\d{11}$/, 'Phone number must be 11 digits')
//         .required('Phone number is required')
// });

function Form1({ onNext, profileData }) {

    // console.log("profileData?.phoneNo", profileData?.phoneNo)
    // console.log("profileData?.phoneNo", typeof(profileData?.phoneNo))

    const {
        numberOfEmployeesOptions,
    } = dropdownOptions;

    const [data, setData] = useState({
        noOfEmployes: profileData?.noOfEmployes || null,
        companyName: profileData?.companyName || null,
        phoneNo: profileData?.phoneNo?.toString() || null,
    });

    // console.log("data", data)

    const [fileInputs, setFileInputs] = useState({
        logo: null,
        welcomeVideo: null,
    });

    const handleChange = (name, event) => {
        const value = event.target.value;

        if (name === "phoneNo") {

            const containsAlphabet = /[a-zA-Z]/.test(value);
            if (!containsAlphabet) {
                console.log("Value is valid.");
                setData(prevData => ({
                    ...prevData,
                    [name]: value
                }));
                onNext({ [name]: value });
            }
        } else {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
            onNext({ [name]: value });
        }


    };

    const handleLogoChange = (name, file) => {
        setFileInputs({ ...fileInputs, [name]: file });
        onNext({ [name]: file });
    };

    const handleFileChange = (name, event) => {
        const file = event?.target?.files[0];
        setFileInputs({ ...fileInputs, [name]: file });
        onNext({ [name]: file });
    };

    // console.log("data",data)

    const handleSubmit = (values, { isSubmitting }) => { }

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ }) => (
                <Form>
                    <Core.Card className={'p-5'} w840 border>
                        <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Update Profile</h5>
                        <div className="mb-4">
                            <Field name="companyName">
                                {({ field }) => (
                                    <div>
                                        <Core.InputWithLabel
                                            {...field}
                                            name={"companyName"}
                                            label
                                            sm
                                            edit
                                            value={data?.companyName}
                                            onChange={(value) => handleChange("companyName", value)}
                                        // onBlur={handleBlur}
                                        />
                                        {/* <ErrorMessage name="companyName" component="div" className="text-red-500" /> */}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="mb-4">
                            <Field name="noOfEmployes">
                                {({ field }) => (
                                    <div>
                                        <Core.SelectWithLabel
                                            {...field}
                                            name={"noOfEmployes"}
                                            label
                                            edit
                                            value={data?.noOfEmployes}
                                            options={numberOfEmployeesOptions}
                                            onChange={(value) => handleChange("noOfEmployes", value)}
                                        // onBlur={handleBlur}
                                        />
                                        {/* <ErrorMessage name="noOfEmployes" component="div" className="text-red-500" /> */}
                                    </div>
                                )}
                            </Field>
                        </div>

                        {/* <div className="flex flex-col gap-x-4 mb-4">
                            <div>
                                <Core.UploadFile
                                    name={"logo"}
                                    label="Company Logo"
                                    helperText="A company logo helps candidates connect the job opportunity with your brand. Recommended specs are 400x400 pixels."
                                    accept="image/*"
                                    onChange={(event) => handleFileChange("logo", event)}
                                />
                            </div>
                            <span className={`block mb-2 capitalize`}>
                                {profileData?.logo ?
                                    <img src={profileData?.logo} className='flex justify-center items-center max-w-[110px] bg-gray-12 rounded-[10px] text-[12px]' alt="Company Logo" width={150} height={150} />
                                    :
                                    <h2 className='w-[170px] text-gray-2 text-[20px] text-center rounded-[10px] opacity-70 bg-gray-5 px-1 py-3'>No Logo</h2>
                                }
                            </span>
                        </div> */}

                        <div className=" mb-4">
                            <div>
                                {/* <Core.UploadFile
                                    name={"logo"}
                                    label="Company Logo"
                                    helperText="A company logo helps candidates connect the job opportunity with your brand. Recommended specs are 400x400 pixels."
                                    accept="image/*"
                                    onChange={(event) => handleFileChange("logo", event)}
                                /> */}

                                <label className={`block text-[14px] text-gray-2 tracking-wide  mb-1.5  font-semibold capitalize`}>
                                    Logo
                                </label>
                                <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5'>
                                    A company logo helps candidates connect the job opportunity with your brand. Recommended specs are 400x400 pixels.
                                </p>

                                <UploadLogo
                                    onChange={handleLogoChange}
                                    logo={profileData?.logo}
                                />

                                {/* <UploadVideo
                                    onChange={handleLogoChange}
                                    logo={profileData?.welcomeVideo}
                                /> */}

                            </div>
                        </div>


                        <div className="flex flex-col gap-x-4 mb-4">
                            <div>
                                <Core.UploadFile
                                    name={"welcomeVideo"}
                                    label="Welcome Video"
                                    helperText="A company logo helps candidates connect the job opportunity with your brand. Recommended specs are 400x400 pixels."
                                    accept="video/*"
                                    onChange={(event) => handleFileChange("welcomeVideo", event)}
                                />
                            </div>
                            <span className={`block mb-2 capitalize`}>
                                {profileData?.welcomeVideo && <Core.VideoPlayer src={profileData?.welcomeVideo} className="max-h-[150px] rounded-[10px] overflow-hidden" />
                                    // :
                                    // <h2 className='w-[170px] text-gray-2 text-[20px] text-center rounded-[10px] opacity-70 bg-gray-5 px-1 py-3'>No Video</h2>
                                }
                            </span>
                        </div>
                        <div className="mb-4">
                            <Field name="phoneNo">
                                {({ field }) => (
                                    <div>
                                        <Core.InputWithLabel
                                            {...field}
                                            name={"phoneNo"}
                                            label
                                            edit
                                            value={data?.phoneNo}
                                            helperText="We will use this number to text you important notifications"
                                            onChange={(value) => handleChange("phoneNo", value)}
                                            // onBlur={handleBlur}
                                            maxLength={'11'}
                                        />
                                        {/* <ErrorMessage name="phoneNo" component="div" className="text-red-500" /> */}
                                    </div>
                                )}
                            </Field>
                        </div>
                    </Core.Card>
                </Form>
            )}
        </Formik >
    );
}

export default Form1;
