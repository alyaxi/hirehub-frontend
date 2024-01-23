import { Core } from "..";
import ProjectCard from "./ProjectCard";

function Projects({ data, buttons, card }) {

    return (
        <>
            {card ?
                <>
                    <Core.Card className={"p-5 border"}>
                        < div className='flex justify-between items-start' >
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Projects</h5>
                            <Core.ProficienciesActions buttons={buttons} type={'projects'} />
                        </div>
                        <div className='flex gap-2 flex-wrap pt-3'>
                            {data?.map((value, index) => {
                                return (
                                    <ProjectCard key={index * 6} data={value} />
                                )
                            })}
                        </div>
                    </Core.Card>
                </>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Projects</h5>
                        <Core.ProficienciesActions buttons={buttons} />
                    </div>
                    <div className='flex justify-start items-end pt-3'>
                        <p className='text-gray-6 text-[14px] leading-[20px]'>
                            By adding a Projects section to your application, you can highlight your hands-on experience and demonstrate your potential value to hiring managers with concrete examples.
                        </p>
                    </div>
                </>
            }
        </>
    )
}


export default Projects