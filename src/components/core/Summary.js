import { Empty } from "antd";
import { Core } from "..";

function Summary({ data, card, type }) {

    // console.log(" Summary data", data)
    // console.log("44444  type Summary", type)

    return (
        <>
            {card ?
                <>
                    <Core.Card className={"p-5 border"}>
                        <div className='flex justify-between items-start' >
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Summary</h5>
                            {type === "candidate" &&
                                <Core.ProficienciesActions buttons={['edit']} type="summary" />
                            }
                        </div>
                        {(data !== undefined && data !== "") ?
                            <>
                                <div className='flex justify-start items-end pt-3'>
                                    <p className='text-gray-6 text-[14px] leading-[20px]'>{data?.text}</p>
                                    {/* {data && data?.map((value, index) =><p key={index * 6} className='text-gray-6 text-[14px] leading-[20px]'>{value.text}</p>)} */}
                                </div>
                            </>
                            :
                            <div className="flex justify-center w-full">
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </div>
                        }
                    </Core.Card>
                </>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Summary</h5>
                        {type === "candidate" &&
                            <Core.ProficienciesActions buttons={['edit']} />
                        }
                    </div>
                    {(data !== undefined && data !== "") ?
                        <>
                            <div className='flex justify-start items-end pt-3'>
                                <p className='text-gray-6 text-[14px] leading-[20px]'>
                                    {data?.text}
                                </p>
                            </div>
                        </>
                        :
                        <div className="flex justify-center w-full">
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </div>
                    }
                </>
            }
        </>
    )
}


export default Summary