import React, { useState } from 'react';
import { Core } from '..';
import Icon from '../icon';
import { useLocation } from 'react-router-dom';
import { Progress } from 'antd';
import video from "../../assets/videos/1.mp4";

function CandidateProfile({ data: extractedData, pageType, dropdownOptions, selectedState, handleNext, setStatus, status,
    experience,
    education,
    skill,
    language,
    jobPreference,
    summary,
    personalInformation,
    projects,
}) {
    const location = useLocation();
    // const parts = location?.pathname.split('/');
    const [resumePrivacySetting, setResumePrivacySetting] = useState(1);

    const handlePrivacyChange = (e) => {
        setResumePrivacySetting(e.target.value);
    };

    return (
        <div className='flex justify-between gap-x-6 w-full'>
            <div className='w-auto'>
                <div className='flex flex-col gap-y-3 pb-[50px]'>
                    <Core.PersonalInformation data={personalInformation} buttons={['edit']} card />
                    <Core.Summary data={summary} buttons={['edit']} card />
                    <Core.Projects data={projects} buttons={['add']} card />
                    <Core.Experience data={experience} buttons={['add', 'edit']} card />
                    <Core.Education data={education} buttons={['add', 'edit']} card />
                    <Core.Skills data={skill} buttons={['add', 'edit']} card />
                    <Core.Languages data={language} buttons={['add', 'edit']} card />
                    <Core.Preferences data={jobPreference} buttons={['add', 'edit']} card />
                    <Core.ResumePrivacySetting resumePrivacySetting={resumePrivacySetting} card handlePrivacyChange={handlePrivacyChange} />
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
                {/* <button
                    className={`flex justify-center items-center gap-x-2 w-full text-white bg-gradient-to-r from-purple-4 to-purple-3  hover:text-white text-[14px] hover:bg-gradient-to-r hover:from-purple-4 hover:to-purple-3 transition-all rounded-[8px] px-3 py-[10px]`}
                >
                    <span className='text-[18px]'><Icon name="Download" /></span>
                    <span className='leading-[19px]'>Download Resume</span>
                </button> */}
                <Core.Button icon="Download" iconSize={"24"}>
                    Download Resume
                </Core.Button>
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