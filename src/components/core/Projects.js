import { Core } from "..";
import ProjectCard from "./ProjectCard";

function Projects({ data, card, }) {

    return (
        <>
            {card ?
                <>
                    <Core.Card className={"p-5 border"}>
                        < div className='flex justify-between items-start' >
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Projects</h5>
                            <Core.ProficienciesActions buttons={['add']} type={'projectsData'} />
                        </div>
                        <div className='flex justify-start flex-wrap gap-x-2 gap-y-4 pt-3'>
                            {data?.map((value, index) => {
                                // console.log(value, "valueeeeeeee")
                                return (
                                    <ProjectCard key={index * 6} data={value} index={index} />
                                )
                            })}
                        </div>
                    </Core.Card>
                </>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Projects</h5>
                        <Core.ProficienciesActions buttons={['add']} id={data._id} />
                    </div>
                    <div className='flex gap-2 flex-wrap pt-3'>
                        {data?.map((value, index) => {
                            return (
                                <ProjectCard key={index * 6} data={value} />
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}


export default Projects