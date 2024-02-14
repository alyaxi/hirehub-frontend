import React, { useState, useEffect } from 'react';
import { Core } from '..';
import Icon from '../icon';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';

function UserProfile({ data: extractedData, pageType, dropdownOptions, selectedState, handleNext, setStatus, status }) {
    const location = useLocation();
    const parts = location?.pathname?.split('/');
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

    const navigate = useNavigate();
    const handleCancel = () => {
        navigate(-1);
    };
    return (
        <Core.Card className={`border pt-[20px] pb-[45px] px-[30px]`}>
            <div className='flex justify-end gap-x-4'>
                {!(accountType === "admin" && pageType === "edit") &&
                    <span className='text-gray-6 text-[14px] leading-[20px] py-1'>
                        <div className="flex justify-start items-center gap-x-2 w-100">
                            <input
                                className="w-5 h-5 rounded-[20px]"
                                type="checkbox"
                                id="meets-all-requirements"
                                name="terms"
                                disabled={pageType === "view" ? true : false}
                                checked={eligibilityStatus === 'checked'}
                                onChange={handleCheckboxChange}
                            />
                            <label className="text-gray-1" htmlFor="terms-conditions">
                                Meets all requirements
                            </label>
                        </div>
                    </span>
                }
                {pageType === "view" &&
                    <span className='flex justify-start gap-x-2 text-gray-6 text-[11px] leading-[20px] border-r-[2px] border-gray-12 pr-5 py-1'>
                        Handmade Pouch-Resume
                        <Icon name="FileAttachment" />
                    </span>
                }
                {pageType === "view" &&
                    <span className='text-gray-6 text-[16px] leading-[20px] capitalize font-semibold pl-1 py-1'>
                        Candidates Status:<span className='text-purple-1'>{extractedData?.stage}</span>
                    </span>
                }
                {pageType === "edit" &&
                    <div className='relative flex flex-col justify-end gap-x-3'>
                        <span className='text-gray-6 text-[16px] leading-[20px] capitalize font-semibold pl-1 py-1'>
                            {/* Candidates Status: */}
                            Candidates Stage:
                        </span>
                        <span className="absolute right-3 top-8 ">
                            <Core.Dropdown2
                                selectedState={extractedData?.stage}
                                status={status}
                                setState={setStatus}
                                options={dropdownOptions}
                                className={"min-w-[160px]"}
                                // defaultTitle={extractedData?.status}
                                defaultTitle={extractedData?.stage}
                            />
                        </span>
                    </div>
                }
            </div>
            <div className=' flex justify-between pb-5 -mt-1'>
                <div className='relative w-[110px]'>
                    <div className='absolute -top-6 flex justify-center items-center w-[90px] h-[90px] bg-gray-7 rounded-full overflow-hidden'>
                        {/* <Avatar size={90} src={<img src={extractedData?.candidate?.personalInformation?.avatar} alt="avatar" />}>{firstLetter}</Avatar> */}
                        <Avatar size={90} src={<img src={"https://dp.profilepics.in/profile_pictures/boys-profile-pics/boys-profile-pics-dp-for-whatsapp-facebook-1775.jpg"} alt="avatar" />}>{firstLetter}</Avatar>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-full flex justify-between items-en d'>
                        <div>
                            <h6 className='text-[22px] leading-[20px] capitalize font-semibold mb-2'>{extractedData?.name}</h6>
                            <p className='text-gray-6 text-[14px] leading-[20px] max-w-[70%]'>Design Lead | Author of the "Design Manual" and the "Ultimate Guide to Web Design" | Teaching 300,000+ Designers Worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <h6 className='text-[18px] leading-[28px] font-medium mb-2'>Summary</h6>
                <p className='text-gray-6 text-[14px] leading-[20px] font-medium mb-4'>
                    {extractedData?.candidate?.summary?.description}
                </p>
                {/* <p className='text-gray-6 text-[14px] leading-[20px] font-medium mb-4'>
                    In my role as a Product Design Lead, I take charge of the entire process of creating products and memorable experiences, including UX, UI, discovering and defining a problem, empathically wh
                </p> */}
                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <h6 className='text-[18px] leading-[28px] font-medium mb-2'>Projects</h6>

                {extractedData?.candidate?.projects?.map((value, index) => {
                    return (
                        <p key={index * 3} className='text-gray-6 text-[14px] leading-[20px] font-medium mb-4'>
                            {value.description}
                        </p>
                    )
                })}
                {/* <p className='text-gray-6 text-[14px] leading-[20px] font-medium mb-4'>
                    Rightime is an inbox app, which was made for sales managers. It helps to send your letter in the right time whenever the recipient is active in social networks and ready to get the mail, so the chances that the letter will be read are increased a lot. As an UI/UX designer I created two version of the app - for iphone and apple watch. I've been involved in the: prototyping, UX (wireframes), UI (user interfaces).
                    Rightime is an inbox app, which was made for sales managers. It helps to send your letter in the
                </p> */}

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <Core.Experience data={extractedData?.candidate?.experience} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <Core.Education data={extractedData?.candidate?.education} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
              
                <Core.Skills data={extractedData?.candidate?.skills} />
             
                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
              
                <Core.Languages data={extractedData?.candidate?.languages} />

                {/* {extractedData?.candidate?.languages.map((value, index) => {
                    return (
                        <div key={index * 7} className={`w-full ${index === 0 ? 'mt-3' : 'mt-2'}`}>
                            <h6 className='text-[16px] leading-[20px] font-semibold'>{value?.addNewLanguage}</h6>
                            <p className='text-black-3 text-[12px] leading-[20px]'>{value?.proficiency}</p>
                        </div>
                    )
                })} */}


                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
                {/* Job Preferences */}
                <h6 className='text-[18px] leading-[28px] font-medium mb-2'>Job Preferences</h6>
                <p className='text-gray-6 text-[14px] leading-[25px]'>
                    Help us match you with your next job
                </p>
                {
                    (!extractedData?.candidate?.jobPreference.desiredJobTitle.length &&
                        extractedData?.candidate?.jobPreference.desiredSalary === "" &&
                        extractedData?.candidate?.jobPreference.relocation === "" &&
                        !extractedData?.candidate?.jobPreference.skills.length)
                    &&
                    <p className='text-gray-6 text-[14px] leading-[25px]'>
                        No job preference found
                    </p>
                }
                {extractedData?.candidate?.jobPreference.desiredJobTitle.length &&
                    <div className='w-full mt-3'>
                        <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Job Title</h6>
                        {extractedData?.candidate?.jobPreference.desiredJobTitle.map((value, index) => {
                            return (
                                <p key={index * 8} className='text-black-3 text-[12px] leading-[20px] font-medium'>{value}
                                </p>
                            )
                        })}
                    </div>
                }
                {extractedData?.candidate?.jobPreference.desiredSalary !== "" &&
                    <div className='w-full mt-2'>
                        <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Salary (USD)</h6>
                        <p className='text-black-3 text-[12px] leading-[20px]'>USD {extractedData?.candidate?.jobPreference?.desiredSalary}</p>
                    </div>
                }

                {extractedData?.candidate?.jobPreference.skills.length &&
                    <div className='w-full mt-2'>
                        <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Skills</h6>
                        {extractedData?.candidate?.jobPreference.skills.map((value, index) => {
                            return (
                                <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                    {value}{index !== (extractedData?.candidate?.jobPreference.skills.length - 1) && ", "}
                                </span>
                            )
                        })}
                    </div>
                }
                {extractedData?.candidate?.jobPreference.onlyNearMeonlyNearMe !== "" &&
                    <div className='w-full mt-2'>
                        <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Cities</h6>
                        {extractedData?.candidate?.jobPreference?.relocation?.anywhere !== true && extractedData?.candidate?.jobPreference?.relocation?.onlyNearMe.locations.map((value, index) => {
                            return (
                                <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                    {value}{index !== (extractedData?.candidate?.jobPreference?.relocation?.onlyNearMe?.locations.length - 1) && ", "}
                                </span>
                            )
                        })}
                        {extractedData?.candidate?.jobPreference?.relocation?.anywhere === true &&
                            <span className='text-black-3 text-[12px] leading-[20px]'>
                                Anywhere
                            </span>
                        }
                    </div>
                }

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>
                {/* Resume Privacy Settings */}
                <h6 className='text-[18px] leading-[28px] font-medium mb-2'>Resume Privacy Settings</h6>
                {extractedData?.candidate?.resumePrivacySetting}

                <div className='flex flex-col justify-start gap-y-3 mt-4'>
                    <div className="flex justify-start items-start gap-x-2 w-100">
                        <input
                            className="w-5 h-5 rounded-[20px]"
                            type="radio"
                            id="public"
                            name="resume-privacy-settings"
                            checked={resumePrivacy === 'Public'}
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
                            checked={resumePrivacy === 'Private'}
                            onChange={handlePrivacyChange}
                        />
                        <label className="text-gray-1 w-full" htmlFor="private">
                            <h6 className='text-black-2 text-[16px] leading-[20px] font-semibold'>Private</h6>
                            <p className='text-black-3 text-[12px] leading-[20px]'>Your resume will not be visible to anyone except you. However, you will be able to attach it when applying for a job.</p>
                        </label>
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
        </Core.Card>
    )
}

export default UserProfile