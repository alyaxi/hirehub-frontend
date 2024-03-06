import { Avatar, Progress } from "antd";
import { Core } from "..";
import Icon from "../icon";

function PersonalInformation({ data, user, profileCompletion }) {

    // console.log(profileCompletion, "profileCompletion")
    // console.log(user, "ww userrrrrrrrrrrrr")

    const firstLetter = user?.name ? user?.name.trim().charAt(0).toUpperCase() : '';

    return (
        <>
            <Core.Card className={"p-5 border"}>
                <div className='flex justify-between items-start' >
                    <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Personal Information</h5>
                    <Core.ProficienciesActions buttons={['edit']} type="personalInformationData" />
                </div>

                <div className='flex justify-start items-end pt-3'>
                    <div className='flex flex-col justify-center items-center w-[22%] pr-8'>
                        <span className='text-gray-6 text-[18px] font-semibold pl-2'>
                            {/* <Typography
                                type={profileCompletion === 100 && "success"}
                            > */}
                                {profileCompletion}%
                            {/* </Typography> */}
                        </span>
                        <div className="relative rounded-full overflow-hidd en w-[120px] h-[120px] px-[0.30rem] pt-[0.25rem] pb-[0.30rem]">
                            <Progress type="circle" percent={profileCompletion} className="absolute left-0 -top-[1px]" />
                            <Avatar size={109} src={data?.profilePicture} className="avatar-text relative z-[1] w-full h-full object-cove r overflow-hidden bg-gray-12 rounded-full">{firstLetter}</Avatar>
                            {/* <div className="absolute top-0 right-0 -z-1 w-[50%] h-[100%] rounded-tl-[5px] rounded-tr-[100px] rounded-bl-[5px] rounded-br-[100px] bg-green-5 border-[7px] border-green-5"></div> */}
                        </div>
                    </div>
                    <div className='w-[80%]'>
                        <h6 className='text-[22px] leading-[20px] font-semibold mb-3'>{user?.name?.toUpperCase()}</h6>
                        <p className='text-gray-6 text-[14px] leading-[20px]'>{data?.statusLine ? data?.statusLine : "Type Status Line"}</p>
                        <p className='flex justify-start gap-x-6 text-gray-6 text-[14px] leading-[20px] mt-5'>
                            <span className='flex justify-start gap-x-1'>
                                {data?.phoneNo ? data?.phoneNo : "enter your cell number"} <span className='opacity-75'><Icon name="Lock1" /></span>
                            </span>
                            <span className='flex justify-start gap-x-1'>
                                {user?.email ? user?.email : "enter you email address"} <span className='opacity-75'><Icon name="Lock1" /></span>
                            </span>
                        </p>
                    </div>
                </div>
            </Core.Card>
        </>
    )
}


export default PersonalInformation