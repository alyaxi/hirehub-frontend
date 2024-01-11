import React, { useState } from 'react';
import { Core } from '..';
import { ToastContainer } from 'react-toastify';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { convertDateFormat } from '../../utilis/convertDateStamp';

function AddJob() {
    const [step, setStep] = useState(1);
    const [job, setJob] = useState(
        {
            id: "",
            positionTitle: "",
            noOfOpenings: "",
            expirationDate: "",
            salary: {
                minimum: "",
                maximum: "",
                rate: "",
            },
            jobStatus: "",
            jobType: "",
            company: {},
            postedDate: "",
            salaryRange: "",
            shortSummery: [],
        }
    );

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step >= 2) {
            setStep(step - 1);
        }
    };

    const handleFinish = () => {
        console.log("job", job)
    };
    const handleJobTypeChange = (_jobType) => {
        setJob(prevJob => ({
            ...prevJob,
            jobType: _jobType,
        }));
    };

    const handleNoOfPeopleToHireChange = (noOfPeopleToHire) => {
        setJob(prevJob => ({
            ...prevJob,
            noOfOpenings: noOfPeopleToHire,
        }));
    };

    const handleExpiryDateChange = (expiryDate) => {
        setJob(prevJob => ({
            ...prevJob,
            expirationDate: expiryDate,
        }));
    };

    const handleSalaryChange = (min, max, rate) => {
        console.log("handleSalaryChange", handleSalaryChange)
        setJob(prevJob => ({
            ...prevJob,
            salary: {
                minimum: min,
                maximum: max,
                rate: rate,
            },
        }));
    };


    console.log("job", job)

    return (
        <div data-hs-stepper>
            <ToastContainer></ToastContainer>
            {/* content */}
            {step === 1 &&
                <Form1
                    handleJobTypeChange={handleJobTypeChange}
                    handleNoOfPeopleToHireChange={handleNoOfPeopleToHireChange}
                    handleExpiryDateChange={handleExpiryDateChange}
                />

            }
            {step === 2 &&
                <Form2
                    handleSalaryChange={handleSalaryChange}
                />
            }

            {step === 3 &&
                <Form3
                //    handleSalaryChange={handleSalaryChange}
                />
            }

            {step === 4 &&
                <>
                    form 4
                    {/* <Employer.ManageProfile.Form2 onNext={GetInput} /> */}
                </>
            }

            <div className="mt-5 flex justify-start items-center gap-x-2">
                {step !== 1 &&
                    <Core.Button
                        onClick={handleBack}
                        data-hs-stepper-back-btn
                        type="narrow" color="white">Back</Core.Button>
                }
                {step !== 4 &&
                    <Core.Button
                        // isDisabled={!isAnyEmpty}
                        onClick={handleNext}
                        type="narrow">Save and Continue</Core.Button>
                }
                {step === 4 &&
                    <Core.Button
                        // isDisabled={!isAnyEmpty}
                        onClick={handleFinish}
                        type="narrow">Save</Core.Button>
                }
            </div>
        </div>
    )
}

export default AddJob