import React, { useState } from 'react';
import { Core } from '..';
import { ToastContainer } from 'react-toastify';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import { convertDateFormat } from '../../utilis/convertDateStamp';

function AddJob() {
    const [step, setStep] = useState(1);
    const [job, setJob] = useState(
        {
            id: "",
            aboutPosition: "",
            benefits: "",
            company: {},
            expirationDate: "",
            jobStatus: "deactive",
            jobLocation: "",
            noOfOpenings: "",
            positionTitle: "",
            salary: {
                type: "",
                value: "",
                rate: "",
            },
            postedDate: "",
            qualification: "",
            responsibilities: "",
            skills: "",
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
        let currentDate = new Date();
        let formattedCurrentDate = convertDateFormat(currentDate);
        const updatedJob = {
            ...job,
            postedDate: formattedCurrentDate,
        };
        console.log("final data", updatedJob);
        setJob(updatedJob);
    };

    console.log("job", job);

    const handleInput = (name, value) => {
        setJob(prevJob => ({
            ...prevJob,
            [name]: value,
        }));
    };

    // form1 functions start
    const handleRadioChange = (name, value) => {
        setJob(prevJob => ({
            ...prevJob,
            [name]: value,
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
    // form1 functions end

    // form2 functions start
    const handleSalaryChange = (type, value, rate) => {
        setJob(prevJob => ({
            ...prevJob,
            salary: {
                type: type,
                value: value,
                rate: rate,
            },
        }));
    };
    // form2 functions end

    // form3 functions start
    const multiSelectHandle = (_benefits) => {
        setJob(prevJob => ({
            ...prevJob,
            benefits: _benefits,
        }));
    };
    const handleJobUpdate = (name, value) => {
        setJob(prevJob => ({
            ...prevJob,
            [name]: value,
        }));
    };
    // form3 functions end

    // form4 functions start
    const handleShortSummeryChange = (title, value) => {
        const existingIndex = job.shortSummery.findIndex(
            (summary) => summary.title === title
        );
        if (existingIndex !== -1) {
            setJob((prevJob) => ({
                ...prevJob,
                shortSummery: prevJob.shortSummery.map((summary, index) =>
                    index === existingIndex
                        ? { ...summary, value: value }
                        : summary
                ),
            }));
        } else {
            setJob((prevJob) => ({
                ...prevJob,
                shortSummery: [
                    ...prevJob.shortSummery,
                    { title: title, value: value },
                ],
            }));
        }
    };
    // form4 functions end

    return (
        <div data-hs-stepper>
            <ToastContainer></ToastContainer>
            {step === 1 &&
                <Form1
                    handleShortSummeryChange={handleShortSummeryChange}
                    handleRadioChange={handleRadioChange}
                    handleNoOfPeopleToHireChange={handleNoOfPeopleToHireChange}
                    handleExpiryDateChange={handleExpiryDateChange}
                />
            }
            {step === 2 &&
                <Form2
                    handleSalaryChange={handleSalaryChange}
                    handleInput={handleInput}
                />
            }
            {step === 3 &&
                <Form3
                    handleShortSummeryChange={handleShortSummeryChange}
                    handleInput={handleInput}
                    handleRadioChange={handleRadioChange}
                />
            }
            {step === 4 &&
                <Form4
                    multiSelectHandle={multiSelectHandle}
                    handleJobUpdate={handleJobUpdate}
                />
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
                        onClick={handleNext}
                        type="narrow">Save and Continue</Core.Button>
                }
                {step === 4 &&
                    <Core.Button
                        onClick={handleFinish}
                        type="narrow">Save</Core.Button>
                }
            </div>
        </div>
    )
}

export default AddJob