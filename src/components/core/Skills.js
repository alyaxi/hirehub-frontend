import { Empty } from "antd";
import { Core } from "..";

function Skills({ data, card, type }) {
    // console.log(" skills data", data)
    return (
        <>
            {card ?
                <Core.Card className={"p-5 border"}>
                    <div className='flex justify-between items-start' >
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Skills</h5>
                        {type === "candidate" &&
                            <Core.ProficienciesActions buttons={['add']} type="skillsData" />
                        }
                    </div>
                    <div className='flex flex-col justify-start gap-x-3 gap-y-2'>
                        {data?.length ?
                            <>
                                {data?.map((value, index) => {
                                    return (
                                        <div key={index * 4} className='relative flex justify-between gap-x-3 w-full mt-3'>
                                            <div className='absolute top-0 right-0 z-[200] flex justify-end' >
                                                <Core.ProficienciesActions buttons={['edit']} type={'skillsData'} id={value?._id} />
                                            </div>
                                            <div className={`w-full'}`}>
                                                <h6 className='text-[16px] leading-[20px] font-semibold capitalize'>{value?.title}</h6>
                                                <p className='text-black-3 text-[12px] leading-[20px]'>{value?.experience}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <div className="flex justify-center w-full">
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </div>
                        }
                    </div>
                </Core.Card>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Skills</h5>
                        {type === "candidate" &&
                            <Core.ProficienciesActions buttons={['add', 'edit']} />
                        }
                    </div>
                    <div className='flex flex-col justify-start gap-x-3 gap-y-2'>
                        {data?.length ?
                            <>
                                {data?.map((value, index) => {
                                    return (
                                        <div key={index * 4} className='relative flex justify-between gap-x-3 w-full mt-3'>
                                            <div className='absolute top-0 right-0 z-[200] flex justify-end' >
                                                {type === "candidate" &&
                                                    <Core.ProficienciesActions buttons={['edit']} type={'skillsData'} id={value?._id} />
                                                }
                                            </div>
                                            <div className={`w-full'}`}>
                                                <h6 className='text-[16px] leading-[20px] font-semibold capitalize'>{value?.title}</h6>
                                                <p className='text-black-3 text-[12px] leading-[20px]'>{value?.experience}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <div className="flex justify-center w-full">
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </div>
                        }
                    </div>
                </>
            }
        </>
    )
}


export default Skills