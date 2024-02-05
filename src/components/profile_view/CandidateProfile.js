import React, { useEffect, useState } from 'react';
import { Core } from '..';
import Icon from '../icon';
import { Progress } from 'antd';
import video from "../../assets/videos/1.mp4";
import { getCandidate } from '../../Slices/Candidates/CandidateSlice';
import { useDispatch, useSelector } from 'react-redux';


function CandidateProfile() {
    const dispatch = useDispatch();
    const candidate = useSelector((state) => state?.Candidate?.candidate);

    console.log(candidate?.skillsData, "candidate?.skillsData")

    const personalInformation = candidate?.personalInformationData
    const experience = candidate?.experiencesData
    const education = candidate?.educationsData
    const skill = candidate?.skillsData;
    const summery = candidate?.summery;
    const projects = candidate?.projectsData;
    const language = candidate?.languagesData;
    const jobPreference = candidate?.jobPreference;
    const user = candidate?.userId

    const [resumePrivacySetting, setResumePrivacySetting] = useState(1);

    const handlePrivacyChange = (e) => {
        setResumePrivacySetting(e.target.value);
    };


    useEffect(() => {
        try {

            dispatch(getCandidate()).unwrap().then(res => {
                console.log("Successfully fetched data", res);



            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)

        }

    }, [])

    // final functio
    // const handleUpdateCandidateProfile = () => {
    //     console.log("handleUpdateCandidateProfile")
    // }; 

    // console.log("personalInformation", personalInformation)
    // console.log("experience", experience)
    // console.log("education", education)
    // console.log("skill", skill)
    // console.log("summery", summery)
    console.log("projects", projects)
    // console.log("language", language)
    // console.log("jobPreference", jobPreference)


    return (
        <div className='flex justify-between gap-x-6 w-full'>
            <div className='w-auto'>
                <div className='flex flex-col gap-y-3 pb-[50px]'>
                    <Core.PersonalInformation data={personalInformation} user={user} card />
                    <Core.Summary data={summery} card />
                    <Core.Projects data={projects} card />
                    <Core.Experience data={experience} card />
                    <Core.Education data={education} card />
                    <Core.Skills data={skill} card />
                    <Core.Languages data={language} card />
                    <Core.Preferences data={jobPreference} card />
                    <Core.ResumePrivacySetting resumePrivacySetting={resumePrivacySetting} card handlePrivacyChange={handlePrivacyChange} />
                </div>
            </div>
            <div className='flex flex-col gap-y-3 min-w-[310px]'>
                <Core.Card className={'p-5'}>
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
                <Core.Card className={'p-5'}>
                    <h4 className='text-black-1 text-[18px] leading-[22px] font-medium mb-5'>Update your profile for better job recommendations</h4>
                    <h6 className='text-black-3 text-[14px] leading-[20px] font-medium -mb-[3px]'>Product Status</h6>
                    <Progress percent={50} status="active" className='m-0 ' />
                    <span className='block text-black-3 text-[10px] leading-[12px] opacity-75'>Profile {personalInformation?.profileCompletion}% Complete</span>
                    <ul className='flex flex-col gap-y-2 mt-5'>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-green-5'><Icon name="Tick" /></span><span>Work History</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-green-5'><Icon name="Tick" /></span><span>Personal Info</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-green-5'><Icon name="Tick" /></span><span>Education</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-green-5'><Icon name="Tick" /></span><span>Profile Picture</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className='text-gray-11'><Icon name="Tick" /></span><span>Professional Summery</span></li>
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