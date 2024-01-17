
import React, { useEffect, useState } from 'react';
import { Core } from '..';
import imgUrgentlyRequired from "../../assets/images/urgently-required.png";
import { useParams } from 'react-router-dom';
import { employerStatusChange, viewEmployer } from '../../Slices/Admin/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import notificationService from '../../utilis/notification';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom"

function CompanyProfile({ data, pageType, dropdownOptions, selectedState }) {
    const [status, setStatus] = useState("");
    const employerDetails = useSelector((state) => state?.admin?.employerDetails);
    const reload = useSelector((state) => state?.admin?.reload);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    // const extractedData = employerDetails?.find(item => item.id === "1");

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
            console.log({ id })
            const statusCheck = status === "Pending" || status === "Approved" || status === "Rejected"
                ? { isVerified: status }
                : { status: status }
            console.log({ statusCheck })

            dispatch(employerStatusChange({ id, statusCheck })).unwrap().then(res => {
                console.log("reSSSSSSSSS", res);
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

    console.log("employerDetails?.accountStatus", employerDetails?.accountStatus);
    return (
        <Core.Card className={`pt-[30px] ${pageType === "edit" ? 'pb-[70px]' : 'pb-[35px]'} px-[60px]`}>
            <ToastContainer></ToastContainer>
            <div className='flex justify-between border-b-[3px] pb-7'>
                <div className='w-[200px]'>
                    <div className='flex justify-center items-center w-[130px] h-[130px] bg-gray-7 rounded-[20px]'>
                        <img src={employerDetails?.logo} alt="company logo" width={150} height={150} />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-full flex justify-between items-end'>
                        <div>
                            <h6 className='text-[22px] leading-[20px] font-semibold mb-3'>{employerDetails?.companyName}</h6>
                            <p className='text-gray-6 text-[14px] leading-[20px] max-w-[280px]'>{employerDetails?.accountStatus}</p>
                        </div>
                        <div className={`${pageType === "view" && "self-start"}`}>
                            {pageType === "view" && <img src={imgUrgentlyRequired} alt="company logo" />}
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
                        {/* {extractedData?.stats.map((value, index) => {
                            console.log(value, "valueeeeeee")
                            return (
                                <>
                                    <div key={value * 6} className='w-[30%]'>
                                        <h6 className='text-[18px] leading-[28px] font-medium'>{value?.title}</h6>
                                        {pageType === 'edit' && value?.title === "Status" ?
                                            <Core.Dropdown2 selectedState={selectedState} options={dropdownOptions} setState={setStatus} />
                                            :
                                            <span className={`
                                            text-gray-6
                                            ${(value?.value).toLowerCase() === "activated" && 'text-green-4'}
                                            ${(value?.value).toLowerCase() === "deactivated" && 'text-red-2'}
                                             text-[14px] leading-[20px] font-medium`}>
                                                {value?.value}
                                            </span>
                                        }
                                    </div>
                                    {index === 4 && <div className='w-[30%]'></div>}
                                </>
                            )
                        })} */}
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
                                <Core.Dropdown2 selectedState={selectedState} options={dropdownOptions} setState={setStatus} />
                                :
                                <span className={`
                                            text-gray-6                             
                                            ${(employerDetails?.accountStatus)?.toLowerCase() === "active" && 'text-green-4'}
                                            ${(employerDetails?.accountStatus)?.toLowerCase() === "deactive" && 'text-red-2'}
                                             text-[14px] leading-[20px] font-medium
                                             `}>
                                    {employerDetails?.accountStatus ? employerDetails?.accountStatus : "--"}
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