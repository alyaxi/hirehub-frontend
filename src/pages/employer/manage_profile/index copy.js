import React, { useMemo, useState } from 'react';
import { Breadcrumb } from '../../../components/core';
import { Core, Employer } from '../../../components';
import { UpdateEmployerById } from '../../../Slices/Employer/EmployerSlice';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import notificationService from '../../../utilis/notification';
import { useNavigate } from "react-router-dom";
import { Spin } from 'antd';

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Create an employer account" },
];

function ManageProfile() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const dispatch = useDispatch();
    const [savingForm, setSavingForm] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        noOfEmployes: '',
        logo: '',
        welcomeVideo: '',
        phoneNo: '',
        companyIndustry: '',
        description: '',
    });
    const viewprofile = useSelector((state) => state?.employer?.employer);
    // const _viewprofile = viewprofile
    // console.log("4444 viewprofile",_viewprofile)

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
        console.log(formData, "formData")
        setSavingForm(true)
        try {

            // console.log(formData, "formmmmmmm")

            const areAllValuesEmpty = Object.values(formData).every(value => !value);

            if (areAllValuesEmpty) {
                notificationService.warn("Form should contain any value")
                setSavingForm(false)
            } else {

                const formDataToSend = new FormData();
                Object.entries(formData).forEach(([key, value]) => {
                    // console.log(`${key}:`, value);
                    formDataToSend.append(key, value);
                });

                dispatch(UpdateEmployerById(formDataToSend)).unwrap().then(res => {
                    // console.log(res, "ressssponsee");
                    if (res.data) {
                        setSavingForm(false)
                        notificationService.success(res.data.msg);
                        setTimeout(() => {
                            navigate("/employer/profile")
                        }, 3000)
                    }
                }).catch(error => {
                    notificationService.error(error.message)
                    setSavingForm(false)
                })
            }
        } catch (error) {
            console.error(error);
            notificationService.error(error.message);
            setSavingForm(false)
        }
    };


    // const memoizedButtons = useMemo(() => (
    //     <div className="mt-5 flex justify-start items-center gap-x-2">
    //         {step !== 1 &&
    //             <Core.Button
    //                 onClick={handleBack}
    //                 data-hs-stepper-back-btn
    //                 type="narrow" color="white">Back</Core.Button>
    //         }
    //         {step !== 2 &&
    //             <Core.Button
    //                 // isDisabled={!isAnyEmpty}
    //                 onClick={handleNext}
    //                 type="narrow">Continue</Core.Button>
    //         }
    //         {step === 2 &&
    //             <>
    //                 {savingForm ?
    //                     <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
    //                         <Spin />
    //                     </div>
    //                     :
    //                     <Core.Button isDisabled={!isAnyEmpty} onClick={handleFinish} type="narrow">Save</Core.Button>
    //                 }
    //             </>
    //         }
    //     </div>
    // ), [ savingForm, isAnyEmpty]);

    return (
        <>
            <Breadcrumb
                breadcrumb={breadcrumb}
            />

            <div data-hs-stepper>
                <ToastContainer></ToastContainer>

                {step === 1 &&
                    <Employer.ManageProfile.Form1 onNext={GetInput} profileData={viewprofile} />
                }
                {step === 2 &&
                    <Employer.ManageProfile.Form2 onNext={GetInput} profileData={viewprofile} />
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
                            type="narrow">Continue</Core.Button>
                    }
                    {step === 2 &&
                        <>
                            {savingForm ?
                                <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                    <Spin />
                                </div>
                                :
                                <Core.Button isDisabled={!isAnyEmpty} onClick={handleFinish} type="narrow">Save</Core.Button>
                            }
                        </>
                    }
                </div>
                   {/* {memoizedButtons} */}
            </div>
        </>
    );
}

export default ManageProfile;
