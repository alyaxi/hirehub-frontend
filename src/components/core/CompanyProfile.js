
import React, { useEffect, useState } from 'react';
import { Core } from '..';
import imgUrgentlyRequired from "../../assets/images/urgently-required.png";
import { useParams } from 'react-router-dom';
import { employerStatusChange, viewEmployer } from '../../Slices/Admin/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import notificationService from '../../utilis/notification';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import { Image } from 'antd';

function CompanyProfile({ data, pageType, dropdownOptions }) {

    const [status, setStatus] = useState("");
    const employerDetails = useSelector((state) => state?.admin?.employerDetails);
    const reload = useSelector((state) => state?.admin?.reload);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {

            dispatch(viewEmployer(id)).unwrap().then(res => {
                console.log("Successfully fetched view employer data", res);



            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
                notificationService.error(err)
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)
            notificationService.error(error)

        }

    }, [reload])

    const handleNext = () => {
        try {
            if (!status) return;
            const statusCheck = status === "Pending" || status === "Approved" || status === "Rejected"
                ? { isVerified: status }
                : { status: status }
            // console.log({ statusCheck })

            dispatch(employerStatusChange({ id, statusCheck })).unwrap().then(res => {
                // console.log("reSSSSSSSSS", res);
                if (res) {
                    notificationService.success(res.data.msg)
                    setTimeout(() => {
                        navigate("/admin/manage-employers")
                    }, 2000)
                }

            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
                notificationService.error(err)
            })
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)
            notificationService.error(error)

        }
    }

    const handleBack = () => {
        navigate(-1);
    }

    console.log("44 employerDetails", employerDetails);

    // const firstLetter = employerDetails?.companyName ? employerDetails?.companyName.trim().charAt(0).toUpperCase() : '';

    return (
        <Core.Card className={`pt-[30px] ${pageType === "edit" ? 'pb-[70px]' : 'pb-[35px]'} px-[60px]`}>
            <ToastContainer></ToastContainer>
            <div className='flex justify-between border-b-[3px] pb-7'>
                <div className='w-[200px]'>
                    <div className='flex justify-center items-center w-[130px] h-[130px] bg-gray-7 rounded-[20px] overflow-hidde n'>
                        <Image
                            src={employerDetails?.logo}
                            className='rounded-[20px]'
                            preview={false}
                            fallback="data:image/png;base64,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"
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-full flex justify-between items-end'>
                        <div>
                            <h6 className='text-[22px] leading-[20px] font-semibold mb-3'>{employerDetails?.companyName}</h6>
                            <p className='text-gray-6 text-[14px] leading-[20px] max-w-[280px]'>{employerDetails?.accountStatus}</p>
                        </div>
                        <div className={`${pageType === "view" && "self-start"}`}>
                            {pageType === "view" &&
                                <img src={imgUrgentlyRequired} alt="company logo" />
                            }
                            {pageType === "edit" && <Core.Button onClick={handleNext}>Save Changes</Core.Button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between pt-7'>
                <div className='w-[200px]'></div>
                <div className='w-full'>
                    <div className='flex justify-between items-start'>
                        <h6 className='text-[18px] leading-[28px] font-medium mb-2'>Overview</h6>
                        <span className='text-gray-13 text-[14px] leading-[20px]'>250 / 250</span>
                    </div>
                    {/* {extractedData?.overview.map(value => { */}
                    {/* return ( */}
                    <p className='text-gray-6 text-[14px] leading-[20px] font-medium mb-4'>
                        {employerDetails?.description}
                    </p>
                    {/* ) */}
                    {/* })} */}
                    <h6 className='text-[18px] leading-[28px] font-medium'>Video</h6>
                    <div className='overflow-hidden w-[700px] max-w-[700px]'>
                        <div className='max-w-[700px] overflow-x-scroll pt-3'>
                            <div className='w-[max-content] flex justify-start items-start gap-x-3'>
                                {/* {extractedData?.videos.map()} */}
                                <div className='max-w-[336px] h-full max-h-[190px] rounded-[8px] overflow-hidden'>
                                    {/* <Core.VideoPlayer src={video1} /> */}
                                </div>
                                {/* <div className='max-w-[336px] h-full max-h-[190px] rounded-[8px] overflow-hidden'>
                        <Core.VideoPlayer src={video2} />
                    </div> */}
                                {/* <div className='max-w-[336px] h-full max-h-[190px] rounded-[8px] overflow-hidden'>
                        <Core.VideoPlayer src={video3} />
                    </div> */}
                                {/* <div className='max-w-[336px] h-full max-h-[190px] rounded-[8px] overflow-hidden'>
                        <Core.VideoPlayer src={video1} />
                    </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-start items-start flex-wrap gap-x-2 gap-y-8 pt-10 pb-8'>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Company size</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>
                                {employerDetails?.companySize ? employerDetails?.companySize : "--"}
                            </span>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Followers</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>
                                {employerDetails?.followers?.length ? employerDetails?.followers?.length : "--"}
                            </span>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Status</h6>
                            {pageType === 'edit' ?
                                <Core.Dropdown2
                                    options={dropdownOptions}
                                    setState={setStatus}
                                    className={"min-w-[160px]"}
                                    defaultTitle={employerDetails?.isVerified}
                                />
                                :
                                <span className={`
                                            text-gray-6                             
                                            ${(employerDetails?.isVerified)?.toLowerCase() === "approved" && 'text-green-4'}
                                            ${(employerDetails?.isVerified)?.toLowerCase() === "active" && 'text-green-4'}
                                            ${(employerDetails?.isVerified)?.toLowerCase() === "activated" && 'text-green-4'}

                                            ${(employerDetails?.isVerified)?.toLowerCase() === "pending" && 'text-orange-1'}
                                            ${(employerDetails?.isVerified)?.toLowerCase() === "on-hold" && 'text-orange-1'}
                                            ${(employerDetails?.isVerified)?.toLowerCase() === "onhold" && 'text-orange-1'}

                                            ${(employerDetails?.isVerified)?.toLowerCase() === "rejected" && 'text-red-2'}
                                            ${(employerDetails?.isVerified)?.toLowerCase() === "deactive" && 'text-red-2'}
                                             text-[14px] leading-[20px] font-medium
                                             `}>
                                    {employerDetails?.isVerified ? employerDetails?.isVerified : "--"}
                                </span>
                            }
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Hired candidate</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>
                                {employerDetails?.hiredcandidate ? employerDetails?.hiredcandidate : "--"}
                            </span>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Published jobs count</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>
                                {employerDetails?.publishedJobsCount ? employerDetails?.publishedJobsCount : "--"}
                            </span>
                        </div>
                        <div className='w-[30%]'>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Language</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>
                                {employerDetails?.language ? employerDetails?.language : "--"}
                            </span>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Website link</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>
                                {employerDetails?.websiteLink ? employerDetails?.websiteLink : "--"}
                            </span>
                        </div>
                    </div>
                    {pageType === "edit" &&
                        <div className='flex justify-start gap-x-3'>
                            <Core.Button
                                onClick={handleNext}
                                type="narrow">Save Chagnes</Core.Button>
                            <Core.Button
                                onClick={handleBack}
                                type="narrow" color="white">Cancel</Core.Button>
                        </div>
                    }
                </div>
            </div>
        </Core.Card>
    )
}

export default CompanyProfile