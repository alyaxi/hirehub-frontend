import React, { useEffect, useState } from 'react';
import { Core } from '..';
import Icon from '../icon';
import { getCandidate } from '../../Slices/Candidates/CandidateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Popover, Progress } from 'antd';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    videoOptions,
} = dropdownOptions;

// const text = <span>Introduction Video</span>;

const content = (
    <div className='text-[10px] leading-[14px]'>
        <p>You can upload a short video to introduce</p>
        <p>yourself and experience</p>
    </div>
);

function CandidateProfile() {
    const dispatch = useDispatch();
    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const reload = useSelector((state) => state?.Candidate?.reload);

    const _user = useSelector((state) => state.auth.user);

    // console.log("ww _user", _user)
    // console.log("ww candidate", candidate)

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

    const [uploadVideo, setUploadVideo] = useState();
    console.log("uploadVideo", uploadVideo)

    const handlePrivacyChange = (e) => {
        setResumePrivacySetting(e.target.value);
    };

    useEffect(() => {
        // console.log("reload..")
        try {

            dispatch(getCandidate()).unwrap().then(res => {
                console.log("Successfully fetched data", res);

            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)

        }

    }, [reload])

    let profileCompletion = 0;

    let personalInformationCount = 0;

    const requiredProperties = [
        "profilePicture",
        "zipCode",
        "expectedSalary",
        "careerLevel",
        "experience",
        "gender",
        "phoneNo",
        "statusLine",
        "country",
    ];

    personalInformationCount = requiredProperties.every(property => {
        return candidate?.personalInformationData?.hasOwnProperty(property) && candidate?.personalInformationData[property] !== "";
    });

    // console.log('personalInformationCount', personalInformationCount);

    let jobPreferenceCount = 0;

    const requiredPropertiesJob = ["desiredJobTitle", "desiredSalary", "skills"];

    jobPreferenceCount = requiredPropertiesJob?.every(property => {

        if (!candidate?.jobPreference?.hasOwnProperty(property)) return false;

        if (Array.isArray(candidate?.jobPreference[property])) {
            return candidate?.jobPreference[property].length > 0;
        }

        if (typeof candidate?.jobPreference[property] === "string") {
            return candidate?.jobPreference[property].trim() !== "";
        }

        return true;
    });




    // console.log("555 requiredPropertiesJob:", requiredPropertiesJob);
    // console.log("555 candidate?.jobPreference:", candidate?.jobPreference);

    // jobPreferenceCount = requiredPropertiesJob?.every(property => {
    //     if (candidate?.jobPreference !== undefined) {
    //         if (candidate?.jobPreference[property] !== undefined) {
    //             if (Array.isArray(candidate?.jobPreference[property])) {
    //                 return candidate?.jobPreference[property].length > 0;
    //             }
    //             if (typeof candidate?.jobPreference[property] === "string") {
    //                 return candidate?.jobPreference[property].trim() !== "";
    //             }
    //             // Handle other types if needed
    //             return true;
    //         } else {
    //             return false; // Property doesn't exist, so it's not valid
    //         }
    //     }
    //     else {
    //         return false; // Property doesn't exist, so it's not valid
    //     }
    // });

    // console.log("555 jobPreferenceCount after", jobPreferenceCount);



    // console.log("jobPreferenceCount after", jobPreferenceCount)

    let _experience = candidate?.experiencesData?.length > 0 ? 15 : candidate?.experiencesData?.length;
    let _education = candidate?.educationsData?.length > 0 ? 15 : candidate?.educationsData?.length;
    let _language = candidate?.languagesData?.length > 0 ? 15 : candidate?.languagesData?.length;
    let _skill = candidate?.skillsData?.length > 0 ? 15 : candidate?.skillsData?.length;
    let _summery = candidate?.summery?.text?.length > 2 ? 10 : 0;
    let _personalInformation = personalInformationCount === true ? 15 : 0;
    let _jobPreference = jobPreferenceCount === true ? 15 : 0;

    profileCompletion = _experience + _education + _language + _skill + _summery + _personalInformation + _jobPreference;
    profileCompletion = isNaN(profileCompletion) ? 0 : profileCompletion

    // console.log("ww profileCompletion", profileCompletion)

    let workHistoryCheck = candidate?.experiencesData?.length > 0 || false;
    let personalInformationCheck = personalInformationCount === true ? true : false;
    let educationCheck = candidate?.educationsData?.length > 0 || false;
    let profilePictureCheck = (candidate?.personalInformationData?.profilePicture !== "" && candidate?.personalInformationData?.profilePicture !== undefined) || false;
    let professionalSummeryCheck = candidate?.summery?.text?.length > 2 || false;
    let skillCheck = candidate?.skillsData?.length > 0 || false;
    let projectsCheck = candidate?.projectsData?.length > 0 || false;
    let languageCheck = candidate?.languagesData?.length > 0 || false;

    console.log('profileCompletion separately',{
        '_experience': _experience,
        '_education': _education,
        '_language': _language,
        '_skill': _skill,
        '_summery': _summery,
        '_personalInformation': _personalInformation,
        '_jobPreference': _jobPreference
    });


    return (
        <div className='flex justify-between gap-x-6 w-full'>
            <div className='w-auto'>
                <div className='flex flex-col gap-y-3 pb-[50px]'>
                    <Core.PersonalInformation data={personalInformation} user={user} profileCompletion={profileCompletion} />
                    <Core.Summary data={summery} card type="candidate" />
                    <Core.Projects data={projects} card type="candidate" />
                    <Core.Experience data={experience} card type="candidate" />
                    <Core.Education data={education} card type="candidate" />
                    <Core.Skills data={skill} card type="candidate" />
                    <Core.Languages data={language} card type="candidate" />
                    <Core.Preferences data={jobPreference} card type="candidate" />
                    <Core.ResumePrivacySetting resumePrivacySetting={resumePrivacySetting} card handlePrivacyChange={handlePrivacyChange} type="candidate" />
                </div>
            </div>
            <div className='flex flex-col gap-y-3 min-w-[310px]'>
                <Core.Card className={'p-5'}>
                    <div className='flex justify-between items-center pb-3'>
                        <div className='flex justify-start items-center gap-x-2'>
                            <Icon name="Video" />
                            <h2 className='text-black-1 text-[18px] leading-[28px] font-medium'>My Video</h2>
                        </div>
                        {candidate?.video ?
                            <Core.OptionsDropdown options={videoOptions}
                                setState={setUploadVideo}
                                menuWidth={'w-[110px]'}
                                showFrom="right"
                            />
                            :
                            <Popover placement="leftTop" content={content} className='cursor-pointer'>
                                <Icon name="Info" size={18} className="opacity-50" />
                            </Popover>
                        }
                    </div>

                    <div className={`block max-w-[300px] rounded-[10px] mb-2`}>
                        {candidate?.video ?
                            <Core.VideoPlayer src={candidate?.video} className="max-h-[150px] rounded-[10px] overflow-hidden" />
                            :
                            <div className='flex justify-center items-center w-[280px] text-gray-2 text-[20px] text-center rounded-[10px] bg-gray-5 px-2 py-12'>
                                <Core.Button icon="Upload" iconSize={"18"} sm type="narrow" color="white">
                                    Upload Video
                                </Core.Button>
                            </div>
                        }
                    </div>
                </Core.Card>
                <Core.Button icon="Download" iconSize={"24"}>
                    Download Resume
                </Core.Button>
                <Core.Card className={'p-5'}>
                    <h4 className='text-black-1 text-[18px] leading-[22px] font-medium mb-5'>Update your profile for better job recommendations</h4>
                    <h6 className='text-black-3 text-[14px] leading-[20px] font-medium -mb-[3px]'>Product Status</h6>
                    <Progress percent={profileCompletion} status="active" className='m-0 ' />
                    <span className='block text-black-3 text-[10px] leading-[12px] opacity-75'>Profile {profileCompletion}% Complete</span>
                    <ul className='flex flex-col gap-y-2 mt-5'>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className={`${workHistoryCheck ? 'text-green-5' : 'text-gray-11'}`}><Icon name="Tick" /></span><span>Work History</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className={`${personalInformationCheck ? 'text-green-5' : 'text-gray-11'}`}><Icon name="Tick" /></span><span>Personal Info</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className={`${educationCheck ? 'text-green-5' : 'text-gray-11'}`}><Icon name="Tick" /></span><span>Education</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className={`${profilePictureCheck ? 'text-green-5' : 'text-gray-11'}`}><Icon name="Tick" /></span><span>Profile Picture</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className={`${professionalSummeryCheck ? 'text-green-5' : 'text-gray-11'}`}><Icon name="Tick" /></span><span>Professional Summary</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className={`${skillCheck ? 'text-green-5' : 'text-gray-11'}`}><Icon name="Tick" /></span><span>Skills</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className={`${projectsCheck ? 'text-green-5' : 'text-gray-11'}`}><Icon name="Tick" /></span><span>Projects</span></li>
                        <li className='flex gap-x-[7px] justify-start text-gray-6 text-[13px] font-medium'><span className={`${languageCheck ? 'text-green-5' : 'text-gray-11'}`}><Icon name="Tick" /></span><span>Languages</span></li>
                    </ul>
                </Core.Card>
            </div>
        </div>
    )
}

export default CandidateProfile