import React, { useState, useEffect } from 'react';
import { Core } from '..';
import Icon from '../icon';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';

function JobDetails({ data: extractedData, pageType, dropdownOptions, selectedState, handleNext, setStatus, status }) {
    const location = useLocation();
    const parts = location?.pathname.split('/');
    const accountType = parts[1];

    const [resumePrivacy, setResumePrivacy] = useState('');

    useEffect(() => {
        const data = extractedData?.candidate?.resumePrivacySetting;
        if (data) {
            setResumePrivacy(data);
        }
    }, [extractedData]);

    // console.log("starttttt useeffect after", status);

    const [eligibilityStatus, setEligibilityStatus] = useState(
        extractedData?.eligibility === 'Yes' ? 'checked' : 'unchecked'
    );
    useEffect(() => {
        // Update eligibilityStatus state whenever extractedData changes
        setEligibilityStatus(
            extractedData?.eligibility === 'Yes' ? 'checked' : 'unchecked'
        );
    }, [extractedData]);
    const handleCheckboxChange = (event) => {
        const newValue = event.target.checked ? 'checked' : 'unchecked';
        setEligibilityStatus(newValue);
    };
    const [resumePrivacySetting, setResumePrivacySetting] = useState('Public');
    const handlePrivacyChange = (e) => {
        setResumePrivacySetting(e.target.value);
    };
    // console.log("extractedData?.name", extractedData?.name)

    const firstLetter = extractedData?.name ? extractedData?.name.trim().charAt(0).toUpperCase() : '';
    // console.log("firstLetter", firstLetter)
    return (
        <Core.Card className={`border pb-[45px] p-0`}>
            <div className='bg-gray-7 py-[25px] px-[30px]'>
                <div className='flex justify-end gap-x-4'>
                    {pageType === "view" &&
                        <span className='text-gray-6 text-[16px] leading-[20px] capitalize font-semibold pl-1 py-1'>
                            Job Status:<span className='text-purple-1'>{extractedData?.status}</span>
                        </span>
                    }
                    {pageType === "edit" &&
                        <div className='relative flex flex-col justify-end gap-x-3'>
                            <span className='text-gray-6 text-[16px] leading-[20px] capitalize font-semibold pl-1 py-1'>
                                Job Status:
                            </span>
                            <span className="absolute right-3 top-8 ">
                                <Core.Dropdown2
                                    selectedState={extractedData?.status}
                                    status={status}
                                    setState={setStatus}
                                    options={dropdownOptions}
                                    className={"min-w-[160px]"}
                                    defaultTitle={extractedData?.status}
                                />
                            </span>
                        </div>
                    }
                </div>
                <div className='flex justify-between -mt-3'>
                    <div className='relative w-[110px]'>
                        <div className='absolute -top-3 flex justify-center items-center w-[90px] h-[90px] bg-gray-7 overflow-hidden'>
                            {/* <Avatar size={90} src={<img src={extractedData?.candidate?.personalInformation?.avatar} alt="avatar" />}>{firstLetter}</Avatar> */}
                            <Avatar size={80} className='rounded-[10px]' src={<img src={"https://img.freepik.com/free-vector/colorful-company-logo-template-with-tagline_23-2148802643.jpg"} alt="avatar" />}>{firstLetter}</Avatar>
                        </div>
                    </div>
                    <div className='w-full h-full flex justify-between pl-2'>
                        <div>
                            <h6 className='text-[22px] leading-[2px] capitalize font-semibold mb-2'>{extractedData?.name}</h6>
                            <a className='text-purple-4 text-[12px] leading-[22px] underline capitalize font-medium mb-2'>{extractedData?.company.title}</a>
                            <p className='text-gray-6 text-[12px] leading-[20px]'>{extractedData?.company.address}</p>
                            <div className='flex justify-start gap-x-6 text-gray-14 text-[12px] leading-[20px] py-1'><span className='flex justify-start items-center gap-x-1'><Icon name="Calender2" size={18} /> {extractedData?.postedDate}</span> <span className='flex justify-start items-center gap-x-1'><Icon name="Currency" /> {extractedData?.salaryRange}</span></div>
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
            <div className='w-full py-[25px] px-[30px]'>

                {/* BENEFITS */}
                <div className='pb-8'>
                    <h6 className='text-[16px] leading-[28px] font-semibold mb-2'>Benefits</h6>
                    <ul className='flex justify-start flex-wrap gap-x-3 text-gray-6 list-disc pl-4 mt-4'>
                        <li className='w-[18%] text-[14px] leading-[18px] mb-3'>Disability insurance</li>
                        <li className='w-[18%] text-[14px] leading-[18px] mb-3'>Health insurance</li>
                        <li className='w-[18%] text-[14px] leading-[18px] mb-3'>Life insurance</li>
                        <li className='w-[18%] text-[14px] leading-[18px] mb-3'>Paid time off</li>
                        <li className='w-[18%] text-[14px] leading-[18px] mb-3'>Parental leave</li>
                        <li className='w-[18%] text-[14px] leading-[18px] mb-3'>Flexible spending account</li>
                        <li className='w-[18%] text-[14px] leading-[18px] mb-3'>Retirement plan</li>
                    </ul>
                </div>

                {/* <span className='block w-full border-gray-11 border-t-[1px] my-5'></span> */}

                <h6 className='text-[16px] leading-[28px] font-semibold mb-2'>Job Description</h6>
                {/* position */}
                <div className="pb-4">
                    <h6 className='text-[14px] leading-[28px] font-semibold mb-2'>The Position</h6>
                    <p className='text-gray-6 text-[12px] leading-[18.5px]'>
                        The successful UI/UX Designer will work to deliver a complex enterprise-grade Desktop, Web, and Cloud solutions with local and offshore colleagues. As a designer, you're a true expert in your field and a strong advocate for the customer. You're formally trained in design and passionate about customer-centric innovation. You take pride in your work. You obsess over details and iterate on them until you've gotten it right. You see feedback as a good thing. You're a great storyteller who is at ease presenting and comfortable discussing your work with colleagues and stakeholders. You challenge old ways of thinking and put the customer at the center of everything you do. User-Centered Design methodologies are second nature to you.If this sounds like you and you're interested in transforming the legal technology industry, then we want to hear from you.
                    </p>
                </div>

                {/* Responsibilities */}
                <div className="pb-4">
                    <h6 className='text-[14px] leading-[28px] font-semibold mb-2'>Responsibilities</h6>
                    <ul className='list-disc text-gray-6 pl-4'>
                        <li className='text-[12px] leading-[20px]'>Partner with Product Managers, engineers, researchers, and content strategist to oversee the user experience of a product from conception until launch and beyond.</li>
                        <li className='text-[12px] leading-[20px]'>Develop and design the Personas, User journey, Interaction patterns, Task Flows, process flows, wireframes, and mock-ups to effectively conceptualize and communicate high-level design strategies and detailed interaction models.</li>
                        <li className='text-[12px] leading-[20px]'>Manage projects autonomously and serve as a design expert with a cross-functional team.</li>
                        <li className='text-[12px] leading-[20px]'>Using techniques like storyboards and sketching to communicate interactive design concepts to stakeholders.</li>
                        <li className='text-[12px] leading-[20px]'>Applying a user-centered approach to requirements and inter dependencies – to develop engaging interfaces.</li>
                        <li className='text-[12px] leading-[20px]'>Conduct design experiments and validation exercises like A/B testing, usability testing etc and effectively use quantitative and qualitative data to drive decisions and measure success.</li>
                        <li className='text-[12px] leading-[20px]'>Analyze customer data through funnel and examine high traffic screens to determine why certain journeys perform better</li>
                        <li className='text-[12px] leading-[20px]'>Create surveys for research through various media platforms to gather feedback on user’s ease of use and satisfaction interfacing on company websites and products</li>
                    </ul>
                </div>

                {/* Qualification */}
                <div className="pb-4">
                    <h6 className='text-[16px] leading-[28px] font-semibold mb-2'>Qualification</h6>
                    <ul className='list-disc text-gray-6 pl-4'>
                        <li className='text-[12px] leading-[20px]'>BS Computer Science or BS Software Engineering</li>
                        <li className='text-[12px] leading-[20px]'>Development Course</li>
                    </ul>
                </div>

                {/* Key Skills */}
                <div className="pb-4">
                    <h6 className='text-[16px] leading-[28px] font-semibold mb-2'>Key Skills</h6>
                    <ul className='list-disc text-gray-6 pl-4'>
                        <li className='text-[12px] leading-[20px]'>React Js</li>
                        <li className='text-[12px] leading-[20px]'>Next Js</li>
                        <li className='text-[12px] leading-[20px]'>Nest Js</li>
                        <li className='text-[12px] leading-[20px]'>Node Js</li>
                    </ul>
                </div>

                {/* Short Summery */}
                <div className="pb-4">
                    <h6 className='text-[16px] leading-[28px] font-semibold mb-2'>Short Summery</h6>
                    <div className='flex justify-start flex-wrap gap-x-6'>

                        <div className='w-[45%]'>
                            <div className='flex justify-between'>
                                <h6 className='text-[13px]'>Industry:</h6><span>Information Technology</span>
                            </div>
                            <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
                        </div>

                        <div className='w-[45%]'>
                            <div className='flex justify-between'>
                                <h6 className='text-[13px]'>Industry:</h6><span>Package</span>
                            </div>
                            <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
                        </div>

                        <div className='w-[45%]'>
                            <div className='flex justify-between'>
                                <h6 className='text-[13px]'>Industry:</h6><span>Total Positions</span>
                            </div>
                            <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
                        </div>

                        <div className='w-[45%]'>
                            <div className='flex justify-between'>
                                <h6 className='text-[13px]'>Industry:</h6><span>Job Shift</span>
                            </div>
                            <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
                        </div>

                        <div className='w-[45%]'>
                            <div className='flex justify-between'>
                                <h6 className='text-[13px]'>Industry:</h6><span>Job Typ e</span>
                            </div>
                            <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
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
                            type="narrow" color="white">Cancel</Core.Button>
                    </div>
                }
            </div>
        </Core.Card>
    )
}

export default JobDetails