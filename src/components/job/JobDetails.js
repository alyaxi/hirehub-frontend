import React, { useState, useEffect } from 'react';
import { Core } from '..';
import Icon from '../icon';
import { Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';

function JobDetails({ data: extractedData, pageType, selectedState, handleNext, setStatus, status, closeDetail, onApply }) {
    const dropdownOptions = [
        "Open",
        "Closed",
        "Republished",
    ]
    const [resumePrivacy, setResumePrivacy] = useState('');

    useEffect(() => {
        const data = extractedData?.candidate?.resumePrivacySetting;
        if (data) {
            setResumePrivacy(data);
        }
    }, [extractedData]);

    console.log("resumePrivacy", resumePrivacy);

    // console.log("starttttt useeffect after", status);

    const [eligibilityStatus, setEligibilityStatus] = useState(
        extractedData?.eligibility === 'Yes' ? 'checked' : 'unchecked'
    );
    console.log("eligibilityStatus", eligibilityStatus);
    useEffect(() => {
        // Update eligibilityStatus state whenever extractedData changes
        setEligibilityStatus(
            extractedData?.eligibility === 'Yes' ? 'checked' : 'unchecked'
        );
    }, [extractedData]);
    // const handleCheckboxChange = (event) => {
    //     const newValue = event.target.checked ? 'checked' : 'unchecked';
    //     setEligibilityStatus(newValue);
    // };
    // const [resumePrivacySetting, setResumePrivacySetting] = useState('Public');
    // const handlePrivacyChange = (e) => {
    //     setResumePrivacySetting(e.target.value);
    // };
    // console.log("extractedData?.positionTitle", extractedData?.positionTitle)

    const firstLetter = extractedData?.positionTitle ? extractedData?.positionTitle.trim().charAt(0).toUpperCase() : '';
    console.log("extractedData", extractedData)

    const navigate = useNavigate();
    const handleCancel = () => {
        navigate(-1);
    };
    return (
        <Core.Card className={`border p-0`} p={'0'} >
            <div className={`bg-gray-7 ${pageType === "quickView" ? "py-[20px] px-[15px]" : 'py-[25px] px-[30px]'}`}>
                <div className='flex justify-end gap-x-4'>
                    {pageType === "quickView" &&
                        <span
                            onClick={closeDetail}
                            className='text-gray-6 cursor-pointer z-[4] hover:text-[red] p-1 -mt-3 -mr-3 mb-2'>
                            <Icon name="Cross" size={10} />
                        </span>
                    }
                    {pageType === "view" &&
                        <span className='text-gray-6 text-[16px] leading-[20px] capitalize font-semibold pl-1 py-1'>
                            Job Status:<span className='text-purple-4'> {extractedData?.jobStatus}</span>
                        </span>
                    }
                    {pageType === "edit" &&
                        <div className='relative flex flex-col justify-end gap-x-3'>
                            <span className='text-gray-6 text-[16px] leading-[20px] capitalize font-semibold pl-1 py-1'>
                                Job Status:
                            </span>
                            <span className="absolute right-3 top-8 ">
                                <Core.Dropdown2
                                    selectedState={extractedData?.jobStatus}
                                    status={status}
                                    setState={setStatus}
                                    options={dropdownOptions}
                                    className={"min-w-[160px]"}
                                    defaultTitle={extractedData?.jobStatus}
                                />
                            </span>
                        </div>
                    }
                </div>
                <div className='flex justify-between -mt-3'>
                    <div className='relative w-[100px]'>
                        <div className={`absolute ${!pageType === "quickView" && '-top-3'} flex justify-center items-center w-[80px] h-[80px] bg-gray-7 overflow-hidden`}>
                            {/* <Avatar size={90} src={<img src={extractedData?.candidate?.personalInformation?.avatar} alt="avatar" />}>{firstLetter}</Avatar> */}
                            <Avatar size={80} className='rounded-[10px]' src={<img src={"https://img.freepik.com/free-vector/colorful-company-logo-template-with-tagline_23-2148802643.jpg"} alt="avatar" />}>{firstLetter}</Avatar>
                        </div>
                    </div>
                    <div className='w-full h-full flex justify-between pl-2'>
                        <div>
                            <h6 className={`
                            ${pageType === "quickView" ? 'text-[20px] leading-[20px]' : 'text-[22px] leading-[22px]'}                            
                            capitalize font-semibold 
                            ${!pageType === "quickView" && 'mb-2'}
                            `}>{extractedData?.positionTitle}</h6>
                            <a className='text-purple-4 text-[12px] leading-[22px] underline capitalize font-medium mb-2'>{extractedData?.employer?.title}</a>
                            <p className='text-gray-6 text-[12px] leading-[20px]'><span>{extractedData?.employer?.jobMode}{extractedData?.jobType && <span>{extractedData?.jobType},&nbsp;&nbsp;</span>}</span>{extractedData?.employer?.address}</p>
                            <div className='flex justify-start gap-x-6 text-gray-14 text-[12px] leading-[20px] py-1'><span className='flex justify-start items-center gap-x-1'><Icon name="Calender2" size={18} /> {extractedData?.postedDate}</span> <span className='flex justify-start items-center gap-x-1'><Icon name="Currency" />{extractedData?.salary?.value}</span></div>

                            {pageType === "quickView" &&
                                <div className='flex justify-start gap-x-2 py-2'>
                                    <Core.Button xs onClick={onApply}>Apply</Core.Button>
                                    <Core.Button xs color="white" >Save Job</Core.Button>
                                </div>
                            }

                            <div className='flex justify-start gap-x-2 pt-3'><h6 className='text-black-2 text-[12px] leading-[20px]'>Share this job:</h6>
                                <div className='flex justify-start items-center gap-x-6'>
                                    <Icon name="Whatsapp" />
                                    <Icon name="LinkedIn" />
                                    <Icon name="Facebook" />
                                    <Icon name="Twitter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full ${pageType === "quickView" ? "py-[15px] px-[15px]" : 'py-[25px] px-[30px]'}`}>

                {/* BENEFITS */}
                <div className='pb-8'>
                    <h6 className='text-[16px] leading-[22px] font-semibold'>Benefits</h6>
                    <ul className='flex justify-start flex-wrap gap-x-3 text-gray-6 list-disc pl-4 mt-4'>
                        {extractedData && extractedData?.benefits?.map(benefit => (
                            <li className={`${pageType === "quickView" ? "w-[32%]" : 'w-[18%]'} text-[14px] leading-[18px] mb-3`}>{benefit}</li>
                        ))}
                    </ul>
                </div>

                {/* <span className='block w-full border-gray-11 border-t-[1px] my-2.5'></span> */}

                <h6 className='text-[16px] leading-[22px] font-semibold'>Job Description</h6>
                {/* position */}
                <div className="pb-4">
                    <h6 className='text-[14px] leading-[24px] font-semibold'>The Position</h6>
                    <p className='text-gray-6 text-[12px] leading-[18.5px]'>
                        {extractedData?.aboutPosition}
                    </p>
                </div>

                {/* Responsibilities */}
                <div className="responsibilities-container pb-4">
                    <h6 className='text-[14px] leading-[24px] font-semibold'>Responsibilities</h6>
                    <div dangerouslySetInnerHTML={{ __html: extractedData?.responsibilities }}></div>
                </div>

                {/* Qualification */}
                <div className="responsibilities-container pb-4">
                    <h6 className='text-[16px] leading-[22px] font-semibold'>Qualification</h6>
                    <div dangerouslySetInnerHTML={{ __html: extractedData?.qualification }}></div>
                </div>

                {/* Key Skills */}
                <div className="responsibilities-container pb-4">
                    <h6 className='text-[16px] leading-[22px] font-semibold'>Key Skills</h6>
                    <div dangerouslySetInnerHTML={{ __html: extractedData?.skills }}></div>
                </div>

                {/* Short Summery */}
                <div className="pb-4">
                    <h6 className='text-[16px] leading-[22px] font-semibold'>Short Summery</h6>
                    <div className='flex justify-between gap-x-6 pt-4'>
                        <div className='flex justify-start flex-col w-full'>
                            {extractedData?.shortSummery?.slice(0, 7).map((value, index) => {
                                return (
                                    <div key={value?.title + value?.value + index} className='w-full text-black-2'>
                                        <div className='flex justify-between'>
                                            <h6 className='text-[13px] capitalize font-semibold'>{value?.title}:</h6><span className='text-[13px] w-[50%]'>{value?.value}</span>
                                        </div>
                                        <span className='block w-full border-gray-7 border-t-[1px] my-2.5'></span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex justify-start flex-col w-full'>
                            {extractedData?.shortSummery?.slice(7).map((value, index) => {
                                return (
                                    <div key={value?.title + value?.value + index} className='w-full text-black-2'>
                                        <div className='flex justify-between'>
                                            <h6 className='text-[13px] capitalize font-semibold'>{value?.title}:</h6><span className='text-[13px] w-[50%]'>{value?.value}</span>
                                        </div>
                                        <span className='block w-full border-gray-7 border-t-[1px] my-2.5'></span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {pageType === "edit" &&
                    <div className='flex justify-start gap-x-3 mt-8'>
                        <Core.Button
                            onClick={handleNext}
                            type="narrow">Save Chagnes</Core.Button>
                        <Core.Button
                            // onClick={handleBack} 
                            type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                    </div>
                }
            </div>
        </Core.Card >
    )
}

export default JobDetails