import { Avatar } from "antd";
import logo1 from "../../assets/images/company-logos/logo1.png";
import { calculateTimePeriod } from '../../utilis/calculateTimePeriod';
import { Core } from "..";

function Experience({ data, buttons, card }) {
    return (
        <>
            {card ?
                <>
                    <Core.Card className={"p-5 border"}>
                        <div className='flex justify-between items-start'>
                            <h5 className={`text-black-1 text-[18px] leading-[28px] font-semibold ${card && "mb-2"}`}>Experience</h5>
                            <Core.ProficienciesActions buttons={buttons} type={'experience'} />
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            {data?.map((value, index) => {
                                return (
                                    <div key={index * 4} className='flex justify-between gap-x-3'>
                                        <div className='flex justify-center items-center min-w-[58px] h-[58px] bg-gray-7 rounded-[10px] overflow-hidden'>
                                            <Avatar shape="square" size={60} src={logo1}>!</Avatar>
                                        </div>
                                        <div className='w-full'>
                                            <div className='w-full h-full flex justify-between items-end'>
                                                <div>
                                                    <h6 className='text-[16px] leading-[20px] font-semibold'>{value.title}</h6>
                                                    <p className='text-black-3 text-[12px] leading-[20px] font-medium'>{value.company}</p>
                                                    <p className='text-gray-6 text-[12px] leading-[20px]'>{calculateTimePeriod(value.startDate, "present")}</p>
                                                    <p className='text-gray-6 text-[14px] leading-[20px] mt-4'>
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Core.Card>
                </>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className={`text-black-1 text-[18px] leading-[28px] font-semibold ${card && "mb-2"}`}>Experience</h5>
                        <Core.ProficienciesActions buttons={buttons} />
                    </div>
                    <div className='flex justify-start items-end pt-3'>
                        {data?.map((value, index) => {
                            return (
                                <div key={index * 4} className='flex justify-between gap-x-3'>
                                    <div className='flex justify-center items-center min-w-[58px] h-[58px] bg-gray-7 rounded-[10px] overflow-hidden'>
                                        <Avatar shape="square" size={60} src={logo1}>!</Avatar>
                                    </div>
                                    <div className='w-full'>
                                        <div className='w-full h-full flex justify-between items-end'>
                                            <div>
                                                <h6 className='text-[16px] leading-[20px] font-semibold'>{value.title}</h6>
                                                <p className='text-black-3 text-[12px] leading-[20px] font-medium'>{value.company}</p>
                                                <p className='text-gray-6 text-[12px] leading-[20px]'>{calculateTimePeriod(value.startDate, "present")}</p>
                                                <p className='text-gray-6 text-[14px] leading-[20px] mt-4'>
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}


export default Experience