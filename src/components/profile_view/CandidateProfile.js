import React, { useState, useEffect } from 'react';
import { Core } from '..';
import logo1 from "../../assets/images/company-logos/logo1.png";
import logo2 from "../../assets/images/company-logos/logo2.png";
import { useParams } from 'react-router-dom';
import Icon from '../icon';
import { calculateTimePeriod } from '../../utilis/calculateTimePeriod';
import { useLocation } from 'react-router-dom';
import { Avatar, Badge, Progress } from 'antd';

import video from "../../assets/videos/1.mp4";
import avatar1 from '../../assets/images/avatars/3.png';
import PopupModal from '../core/PopupModal';

function CandidateProfile({ data: extractedData, pageType, dropdownOptions, selectedState, handleNext, setStatus, status,
    experience,
    education,
    skill,
    language,
    jobPreference,
}) {
    const location = useLocation();
    const parts = location?.pathname.split('/');
    const accountType = parts[1];

    const [resumePrivacySetting, setResumePrivacySetting] = useState('Public');
    const handlePrivacyChange = (e) => {
        setResumePrivacySetting(e.target.value);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    let name = 'John Francois'
    const firstLetter = name ? name.trim().charAt(0).toUpperCase() : '';
    console.log("candidate extractedData",extractedData)
    return (
        <div className='flex justify-between gap-x-6 w-full'>
            <div className='w-auto'>
                <div className='flex flex-col gap-y-3'>
                    {/* personal information */}
                    <Core.Card className={"min-h-[230px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Personal Information</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all">
                                <span className='text-gray-6'><Icon name="PencilWithLine" /></span>
                            </span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            <div className='flex flex-col justify-center items-center w-[22%] pr-8'>
                                <span className='text-gray-6 text-[18px] font-semibold pl-2'>
                                    50%
                                </span>
                                <div className="relative rounded-full overflow-hidd en w-[120px] h-[120px] px-[0.30rem] pt-[0.25rem] pb-[0.30rem]">
                                    {/* <img src={avatar1} alt="Avatar" className="relative z-[1] w-full h-full object-cover rounded-full" /> */}
                                    <Avatar size={112} src={avatar1} className="relative z-[1] w-full h-full object-cove r overflow-hidden rounded-full">{firstLetter}</Avatar>
                                    <div className="absolute top-0 right-0 -z-1 w-[50%] h-[100%] rounded-tl-[5px] rounded-tr-[100px] rounded-bl-[5px] rounded-br-[100px] bg-green-5 border-[7px] border-green-5"></div>
                                </div>
                            </div>
                            <div className='w-[80%]'>
                                <h6 className='text-[22px] leading-[20px] font-semibold mb-3'>John Francois</h6>
                                <p className='text-gray-6 text-[14px] leading-[20px]'>Design Lead | Author of the "Design Manual" and the "Ultimate Guide to Web Design" | Teaching 300,000+ Designers Worldwide</p>
                                <p className='flex justify-start gap-x-6 text-gray-6 text-[14px] leading-[20px] mt-5'>
                                    <span className='flex justify-start gap-x-1'>
                                        +1 215-538-6957 <span className='opacity-75'><Icon name="Lock1" /></span>
                                    </span>
                                    <span className='flex justify-start gap-x-1'>
                                        MichaelJFuller@rhyta.com <span className='opacity-75'><Icon name="Lock1" /></span>
                                    </span>
                                </p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Core.Card>

                    <PopupModal isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen} />

                    {/* Summery */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Summery</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all"
                                onClick={showModal}
                            >
                                <span className='text-gray-6'><Icon name="PencilWithLine" /></span>
                            </span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            <p className='text-gray-6 text-[14px] leading-[20px]'>
                                Including a summary in your job application provides a brief overview of your qualifications, skills, and career goals, helping recruiters assess your fit for the position.
                            </p>
                        </div>
                    </Core.Card>
                    {/* Projects */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Projects</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all">
                                <span className='text-gray-6'><Icon name="Plus" /></span>
                            </span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            <p className='text-gray-6 text-[14px] leading-[20px]'>
                                By adding a Projects section to your application, you can highlight your hands-on experience and demonstrate your potential value to hiring managers with concrete examples.
                            </p>
                        </div>
                    </Core.Card>

                    <Core.Experience data={experience} buttons={['add', 'edit']} card />

                    <Core.Education data={education} buttons={['add', 'edit']} card />

                    <Core.Skills data={skill} buttons={['add', 'edit']} card />

                    <Core.Languages data={language} buttons={['add', 'edit']} card  />
                    
                    {/* Job Preferences */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Job Preferences</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all">
                                <span className='text-gray-6'><Icon name="PencilWithLine" /></span>
                            </span>
                        </div>

                        <p className='text-gray-6 text-[14px] leading-[25px]'>
                            Help us match you with your next job
                        </p>
                        {
                            (!jobPreference.desiredJobTitle.length &&
                                jobPreference.desiredSalary === "" &&
                                jobPreference.relocation === "" &&
                                !jobPreference.skills.length)
                            &&
                            <p className='text-gray-6 text-[14px] leading-[25px]'>
                                No job preference found
                            </p>
                        }
                        <div className='flex flex-col gap-y-3 pt-3'>
                            {jobPreference.desiredJobTitle.length &&
                                <div className='w-full mt-3'>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Job Title</h6>
                                    {jobPreference.desiredJobTitle.map((value, index) => {
                                        return (
                                            <span key={index * 8} className='text-black-3 text-[12px] leading-[20px] font-medium'>
                                                {value}{index !== (jobPreference.desiredJobTitle.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </div>
                            }
                            {jobPreference.desiredSalary !== "" &&
                                <div className='w-full mt-2'>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Salary (USD)</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>USD {jobPreference?.desiredSalary}</p>
                                </div>
                            }
                            {jobPreference.skills.length &&
                                <div className='w-full mt-2'>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Skills</h6>
                                    {jobPreference.skills.map((value, index) => {
                                        return (
                                            <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                                {value}{index !== (jobPreference.skills.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </div>
                            }
                            {jobPreference.relocation &&
                                <div className='w-full mt-2'>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Cities</h6>
                                    {jobPreference?.relocation?.anywhere !== true && jobPreference?.relocation?.onlyNearMe.locations.map((value, index) => {
                                        return (
                                            <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                                {value}{index !== (jobPreference?.relocation?.onlyNearMe?.locations.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                    {jobPreference?.relocation?.anywhere === true &&
                                        <span className='text-black-3 text-[12px] leading-[20px]'>
                                            Anywhere
                                        </span>
                                    }
                                </div>
                            }
                        </div>
                    </Core.Card>
                    {/* Resume Privacy Settings */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Resume Privacy Settings</h5>
                        </div>
                        <div className='flex flex-col justify-start gap-y-3 mt-4'>
                            <div className="flex justify-start items-start gap-x-2 w-100">
                                <input
                                    className="w-5 h-5 rounded-[20px]"
                                    type="radio"
                                    id="public"
                                    name="resume-privacy-settings"
                                    value="Public"
                                    checked={resumePrivacySetting === 'Public'}
                                    onChange={handlePrivacyChange}
                                />
                                <label className="text-gray-1 w-full" htmlFor="public">
                                    <h6 className='text-black-2 text-[16px] leading-[20px] font-semibold'>Public</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>Your resume will be visible to every registered Rozee employer.</p>
                                </label>
                            </div>
                            <div className="flex justify-start items-start gap-x-2 w-100">
                                <input
                                    className="w-5 h-5 rounded-[20px]"
                                    type="radio"
                                    id="private"
                                    name="resume-privacy-settings"
                                    value="Private"
                                    checked={resumePrivacySetting === 'Private'}
                                    onChange={handlePrivacyChange}
                                />
                                <label className="text-gray-1 w-full" htmlFor="private">
                                    <h6 className='text-black-2 text-[16px] leading-[20px] font-semibold'>Private</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>Your resume will not be visible to anyone except you. However, you will be able to attach it when applying for a job.</p>
                                </label>
                            </div>
                        </div>
                    </Core.Card>
                </div>
            </div>
            <div className='flex flex-col gap-y-3 min-w-[310px]'>
                <Core.Card >
                    <div className='flex justify-between items-center pb-3'>
                        <div className='flex justify-start items-center gap-x-2'>
                            <Icon name="Video" />
                            <h2 className='text-black-1 text-[18px] leading-[28px] font-medium'>My Video</h2>
                        </div>
                        <Icon name="Options" />
                    </div>
                    <Core.VideoPlayer src={video} className="max-h-[150px] rounded-[10px] overflow-hidden" />
                </Core.Card>
                <button
                    className={`flex justify-center items-center gap-x-2 w-full text-white bg-gradient-to-r from-purple-4 to-purple-3  hover:text-white text-[14px] hover:bg-gradient-to-r hover:from-purple-4 hover:to-purple-3 transition-all rounded-[8px] px-3 py-[10px]`}
                >
                    <span className='text-[18px]'><Icon name="Download" /></span>
                    <span className='leading-[19px]'>Download Resume</span>
                </button>
                <Core.Card >
                    <h4 className='text-black-1 text-[18px] leading-[22px] font-medium mb-5'>Update your profile for better job recommendations</h4>
                    <h6 className='text-black-3 text-[14px] leading-[20px] font-medium -mb-[3px]'>Product Status</h6>
                    <Progress percent={50} status="active" className='m-0 ' />
                    <span className='block text-black-3 text-[10px] leading-[12px] opacity-75'>Profile 50% Complete</span>
                    <ul className='flex flex-col gap-y-2 mt-5'>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-green-5'><Icon name="Tick" /></span><span>Work History</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-green-5'><Icon name="Tick" /></span><span>Personal Info</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-green-5'><Icon name="Tick" /></span><span>Education</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-green-5'><Icon name="Tick" /></span><span>Profile Picture</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-gray-11'><Icon name="Tick" /></span><span>Professional Summary</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-gray-11'><Icon name="Tick" /></span><span>Skills</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-gray-11'><Icon name="Tick" /></span><span>Projects</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-gray-11'><Icon name="Tick" /></span><span>Languages</span></li>
                    </ul>
                </Core.Card>
            </div>
        </div>


    )
}

export default CandidateProfile