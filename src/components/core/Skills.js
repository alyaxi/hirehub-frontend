import logo2 from "../../assets/images/company-logos/logo2.png";
import { Core } from "..";
import Icon from "../icon";

function Skills({ data, buttons, card }) {

    function _Card({ children }) {
        return (
            <Core.Card className={"min-h-[140px] pb-8 bg-pink-100"} >
                {children}
            </Core.Card >
        )
    }
    console.log(" skills data",data)
    return (
        <>
            {card ?
                <_Card>
                    < div className='flex justify-between items-start' >
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Skills</h5>
                        {
                            buttons?.length &&
                            <div className="flex justify-center gap-x-2">
                                {buttons?.includes("add") &&
                                    <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all">
                                        <span className='text-gray-6'><Icon name="Plus" /></span>
                                    </span>
                                }
                                {buttons?.includes("edit") &&
                                    <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all">
                                        <span className='text-gray-6'><Icon name="PencilWithLine" /></span>
                                    </span>
                                }
                            </div>
                        }
                    </div >
                    <div className='flex justify-start gap-x-3 gap-y-2'>
                        {data?.map((value, index) => {
                            return (
                                <p key={index * 6} className='text-black-3 text-[14px] leading-[20px] bg-gray-4 rounded-full font-medium px-3 py-2'>{value.addNewSkills}</p>
                            )
                        })}
                    </div>
                </_Card >
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Skills</h5>
                        {buttons?.length &&
                            <div className="flex justify-center gap-x-2">
                                {buttons?.includes("add") &&
                                    <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all">
                                        <span className='text-gray-6'><Icon name="Plus" /></span>
                                    </span>
                                }
                                {buttons?.includes("edit") &&
                                    <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all">
                                        <span className='text-gray-6'><Icon name="PencilWithLine" /></span>
                                    </span>
                                }
                            </div>
                        }
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