import { Core } from "..";

function Summary({ data, buttons, card }) {


    // console.log(" Summary data", data)
    return (
        <>
            {card ?
                <>
                    <Core.Card className={"p-5 border"}>
                        < div className='flex justify-between items-start' >
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Summary</h5>
                            <Core.ProficienciesActions buttons={['edit']} type="summery" />
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            {data?.map((value, index) =><p key={index * 6} className='text-gray-6 text-[14px] leading-[20px]'>{value.text}</p>)}
                        </div>
                    </Core.Card>
                </>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Summary</h5>
                        <Core.ProficienciesActions buttons={['edit']} />
                    </div>
                    <div className='flex justify-start items-end pt-3'>
                        <p className='text-gray-6 text-[14px] leading-[20px]'>
                            Including a summary in your job application provides a brief overview of your qualifications, skills, and career goals, helping recruiters assess your fit for the position.
                        </p>
                    </div>
                </>
            }
        </>
    )
}


export default Summary