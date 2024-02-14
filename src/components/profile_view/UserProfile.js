import React, { useState, useEffect } from 'react';
import { Core } from '..';
import Icon from '../icon';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';

function UserProfile({ data: extractedData, pageType, dropdownOptions, handleNext, setStatus, status, type }) {

    console.log("UserProfile extractedData", extractedData)
    const location = useLocation();
    const parts = location?.pathname?.split('/');
    const accountType = parts[1];

    // ------------------
    // ------------------
    // DEPENDENT CODE ->   agr api me [resumePrivacySetting] save kia jayga to ye code uncomment hoga
    // ------------------

    // const [resumePrivacy, setResumePrivacy] = useState('');

    // useEffect(() => {
    //     const data = extractedData?.candidate?.resumePrivacySetting;
    //     if (data) {
    //         setResumePrivacy(data);
    //     }
    // }, [extractedData]);

    // ------------------
    // ------------------

    const [eligibilityStatus, setEligibilityStatus] = useState(
        extractedData?.eligibility === 'Yes' ? 'checked' : 'unchecked'
    );
    useEffect(() => {
        setEligibilityStatus(
            extractedData?.eligibility === 'Yes' ? 'checked' : 'unchecked'
        );
    }, [extractedData]);
    const handleCheckboxChange = (event) => {
        const newValue = event.target.checked ? 'checked' : 'unchecked';
        setEligibilityStatus(newValue);
    };
    const [resumePrivacySetting] = useState(1);

    const firstLetter = extractedData?.candidate?.name ? extractedData?.candidate?.name.trim().charAt(0).toUpperCase() : '';

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
                        Candidates Status:<span className='text-purple-1'> {extractedData?.stage}</span>
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
                        <div className='w-[80%] mt-3'>
                            <h6 className='text-[22px] leading-[20px] capitalize font-semibold mb-2'>{extractedData?.name ? extractedData?.name : "-"}</h6>
                            <p className='text-gray-6 text-[14px] leading-[20px] max-w-[70%]'>{extractedData?.candidate?.personalInformationData?.statusLine ? extractedData?.candidate?.personalInformationData?.statusLine : "-"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-2'>

                <Core.Summary data={extractedData?.candidate?.summery} type={type} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <Core.Projects data={extractedData?.candidate?.projectsData} type={type} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <Core.Experience data={extractedData?.candidate?.experiencesData} type={type} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <Core.Education data={extractedData?.candidate?.educationsData} type={type} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <Core.Skills data={extractedData?.candidate?.skillsData} type={type} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <Core.Languages data={extractedData?.candidate?.languagesData} type={type} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                <Core.Preferences data={extractedData?.candidate?.jobPreference} type={type} />

                <span className='block w-full border-gray-11 border-t-[1px] my-5'></span>

                {/* <Core.ResumePrivacySetting resumePrivacySetting={extractedData?.candidate?.resumePrivacySetting} type={type} /> */}
                <Core.ResumePrivacySetting resumePrivacySetting={resumePrivacySetting} type={type} />

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