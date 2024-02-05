import { useState } from "react";
import { Avatar } from "antd";
import { Core } from "..";
import avatar1 from '../../assets/images/avatars/3.png';
import Icon from "../icon";

function PersonalInformation({ data, user, card }) {

    // console.log(user, "userrrrrrrrrrrrr")

    const firstLetter = user?.name ? user?.name.trim().charAt(0).toUpperCase() : '';
 
    return (
        <>
            {card ?
                <>
                   
                    <Core.Card className={"p-5 border"}>
                        < div className='flex justify-between items-start' >
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Personal Information</h5>
                            <Core.ProficienciesActions buttons={['edit']} type="personalInformationData" />
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            <div className='flex flex-col justify-center items-center w-[22%] pr-8'>
                                <span className='text-gray-6 text-[18px] font-semibold pl-2'>
                                    {data?.profileCompletion}
                                </span>
                                <div className="relative rounded-full overflow-hidd en w-[120px] h-[120px] px-[0.30rem] pt-[0.25rem] pb-[0.30rem]">
                                    <Avatar size={112} src={data?.profilePicture} className="relative z-[1] w-full h-full object-cove r overflow-hidden rounded-full">{firstLetter}</Avatar>
                                    <div className="absolute top-0 right-0 -z-1 w-[50%] h-[100%] rounded-tl-[5px] rounded-tr-[100px] rounded-bl-[5px] rounded-br-[100px] bg-green-5 border-[7px] border-green-5"></div>
                                </div>
                            </div>
                            <div className='w-[80%]'>
                                <h6 className='text-[22px] leading-[20px] font-semibold mb-3'>{user?.name?.toUpperCase()}</h6>
                                <p className='text-gray-6 text-[14px] leading-[20px]'>{data?.statusLine}</p>
                                <p className='flex justify-start gap-x-6 text-gray-6 text-[14px] leading-[20px] mt-5'>
                                    <span className='flex justify-start gap-x-1'>
                                        {data?.phoneNo} <span className='opacity-75'><Icon name="Lock1" /></span>
                                    </span>
                                    <span className='flex justify-start gap-x-1'>
                                        {user?.email} <span className='opacity-75'><Icon name="Lock1" /></span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Core.Card>
                </>
                :
                <>
                    not available
                    {/* <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>PersonalInformation</h5>
                        <Core.ProficienciesActions buttons={buttons} />
                    </div>
                    <div className='flex justify-start gap-x-3 gap-y-2'>

                    </div> */}
                </>
            }
        </>
    )
}


export default PersonalInformation