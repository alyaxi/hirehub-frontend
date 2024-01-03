import { Core } from "..";

function Skills({ data, buttons, card }) {

    
    // console.log(" skills data",data)
    return (
        <>
            {card ?
                 <Core.Card className={"border"}>
                    < div className='flex justify-between items-start' >
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Skills</h5>
                        <Core.ProficienciesActions buttons={buttons} type="skill" />
                    </div >
                    <div className='flex justify-start gap-x-3 gap-y-2'>
                        {data?.map((value, index) => {
                            return (
                                <p key={index * 6} className='text-black-3 text-[14px] leading-[20px] bg-gray-4 rounded-full font-medium px-3 py-2'>{value.addNewSkills}</p>
                            )
                        })}
                    </div>
                 </Core.Card>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Skills</h5>
                          <Core.ProficienciesActions buttons={buttons} />
                    </div>
                    <div className='flex justify-start gap-x-3 gap-y-2'>
                        {data?.map((value, index) => {
                            return (
                                <p key={index * 6} className='text-black-3 text-[14px] leading-[20px] bg-gray-4 rounded-full font-medium px-3 py-2'>{value.addNewSkills}</p>
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}


export default Skills