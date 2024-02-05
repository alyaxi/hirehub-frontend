import { Core } from "..";

function Skills({ data, card }) {
    console.log(" skills data", data)
    return (
        <>
            {card ?
                <Core.Card className={"p-5 border"}>
                    < div className='flex justify-between items-start' >
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Skills</h5>
                        <Core.ProficienciesActions buttons={['add', 'edit']} type="skillsData" />
                    </div>
                    <div className='flex flex-col justify-start gap-x-3 gap-y-2'>
                        {data?.map((value, index) => {
                            return (
                                <div key={index * 7} className={`w-full ${index === 0 ? 'mt-3' : 'mt-2'}`}>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>{value?.title}</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>{value?.experience}</p>
                                </div>
                            )
                        })}
                    </div>
                </Core.Card>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Skills</h5>
                        <Core.ProficienciesActions buttons={['add', 'edit']} />
                    </div>
                    <div className='flex justify-start gap-x-3 gap-y-2'>
                        {data?.map((value, index) => {
                            return (
                                <p key={index * 6} className='text-black-3 text-[14px] leading-[20px] bg-gray-4 rounded-full font-medium px-3 py-2'>{value?.title}</p>
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}


export default Skills