import React, { useState } from 'react';
import { Breadcrumb } from '../../../components/core';
import { Core, Employer } from '../../../components';
import { UpdateEmployerById } from '../../../Slices/Employer/EmployerSlice';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import notificationService from '../../../utilis/notification';



const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Create an employer account" },
];

function ManageProfile() {
    const [step, setStep] = useState(1);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        companyName: '',
        noOfEmployes: '',
        logo: '',
        welcomeVideo: '',
        phoneNo: '',
        companyIndustry: '',
        description: '',
    });

    console.log(formData, "formmmmmmmmmasd")
    const GetInput = (data) => {
        console.log("Data received:", data);
        setFormData({ ...formData, ...data });
    }
    const handleNext = () => {
        if (step < 2) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step >= 2) {
            setStep(step - 1);
        }
    };

    const isAnyEmpty =
        formData.companyName !== "" ||
        formData.companyIndustry !== "" ||
        formData.description !== "" ||
        formData.logo !== "" ||
        formData.noOfEmployes !== "" ||
        formData.phoneNo !== "" ||
        formData.welcomeVideo !== "";

    const handleFinish = () => {
        try {

            console.log(formData, "formmmmmmm")

            const areAllValuesEmpty = Object.values(formData).every(value => !value);

            if (areAllValuesEmpty) {
                notificationService.warn("Form should contain any value")
            } else {

                const formDataToSend = new FormData();
                Object.entries(formData).forEach(([key, value]) => {
                    // console.log(`${key}:`, value);
                    formDataToSend.append(key, value);
                });

                dispatch(UpdateEmployerById(formDataToSend)).unwrap().then(res => {
                    console.log(res, "ressssponsee");
                    if (res.data) {
                        notificationService.success(res.data.msg);
                    }
                }).catch(error => {
                    notificationService.error(error.message)
                })




            }
        } catch (error) {
            console.error(error);
            notificationService.error(error.message);
        }
    };

    return (
        <>
            <Breadcrumb
                breadcrumb={breadcrumb}
            />

            <div data-hs-stepper>
                <ToastContainer></ToastContainer>

                {/* steps */}
                {/* <ul className="relative flex flex-row gap-x-2">
                        {[1, 2, 3].map((index) => (
                            <li
                                key={index}
                                className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${step === index ? 'active' : ''}`}
                                data-hs-stepper-nav-item={`{"index": ${index}}`}
                            >
                                <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                                    <span className={`w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 ${step === index ? 'hs-stepper-active:bg-blue-600 hs-stepper-active:text-white' : ''} ${step > index ? 'hs-stepper-success:bg-blue-600 hs-stepper-success:text-white' : ''}`}>
                                        <span className={`${step > index ? 'hidden' : ''}`}>
                                            {index}
                                        </span>
                                        <svg className={`${step > index ? 'block' : 'hidden'} flex-shrink-0 h-3 w-3 hs-stepper-success:block`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <span className="ms-2 text-sm font-medium text-gray-800">
                                        Step {index}
                                    </span>
                                </span>
                                <div className={`w-full h-px flex-1 bg-gray-200 group-last:hidden ${step > index ? 'hs-stepper-success:bg-blue-600' : 'hs-stepper-completed:bg-teal-600'}`}></div>
                            </li>
                        ))}
                    </ul> */}
                {/* content */}
                {step === 1 &&
                    <Employer.ManageProfile.Form1 onNext={GetInput} />
                }
                {step === 2 &&
                    <Employer.ManageProfile.Form2 onNext={GetInput} />
                }

                <div className="mt-5 flex justify-start items-center gap-x-2">
                    {step !== 1 &&
                        <Core.Button
                            onClick={handleBack}
                            data-hs-stepper-back-btn
                            type="narrow" color="white">Back</Core.Button>
                    }
                    {step !== 2 &&
                        <Core.Button
                            // isDisabled={!isAnyEmpty}
                            onClick={handleNext}
                            type="narrow">Save and Continue</Core.Button>
                    }
                    {step === 2 &&
                        <Core.Button
                            isDisabled={!isAnyEmpty}
                            onClick={handleFinish}
                            type="narrow">Save</Core.Button>
                    }
                </div>
            </div>
        </>
    );
}

export default ManageProfile;
