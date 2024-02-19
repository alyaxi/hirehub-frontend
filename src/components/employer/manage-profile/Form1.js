// Form1.js
import React, { useState } from 'react';
import { Core } from '../..';
import dropdownOptions from '../../../data/dropdownOptions.json';
import { Form, Formik, Field } from 'formik';
import UploadLogo from '../../core/UploadLogo';
import UploadVideo from '../../core/UploadVideo';

function Form1({ onNext, profileData }) {

    console.log("profileData", profileData)

    const {
        numberOfEmployeesOptions,
    } = dropdownOptions;

    const [data] = useState({
        numberofEmployees: profileData?.noOfEmployes || null,
        YourCompanysName: profileData?.companyName || null,
        YourPhoneNumber: profileData?.phoneNo || null,
    });

    const [fileInputs, setFileInputs] = useState({
        logo: null,
        welcomeVideo: null,
    });

    const handleChange = (name, event) => {
        const value = event.target.value;
        onNext({ [name]: value });
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

    const handleSubmit = (values, { isSubmitting }) => { }

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <Core.Card className={'p-5'} w840 border>
                        <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Create an Employer Account</h5>
                        <div className="mb-4">
                            <Field name="YourCompanysName">
                                {({ field }) => (
                                    <Core.InputWithLabel
                                        {...field}
                                        name={"YourCompanysName"}
                                        label
                                        sm
                                        onChange={(value) => handleChange("companyName", value)}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="mb-4">
                            <Field name="numberofEmployees">
                                {({ field }) => (
                                    <Core.SelectWithLabel
                                        {...field}
                                        name={"numberofEmployees"}
                                        label
                                        options={numberOfEmployeesOptions}
                                        onChange={(value) => handleChange("noOfEmployes", value)}
                                    />
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
                            <Field name="YourPhoneNumber">
                                {({ field }) => (
                                    <Core.InputWithLabel
                                        name={"YourPhoneNumber"}
                                        {...field}
                                        label
                                        helperText="We will use this number to text you important notifications"
                                        onChange={(value) => handleChange("phoneNo", value)}
                                    />
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
