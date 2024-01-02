import logo2 from "../../assets/images/company-logos/logo2.png";
import { Core } from "..";
import Icon from "../icon";

function Languages({ data, buttons, card }) {

    function _Card({ children }) {
        return (
            <Core.Card className={"min-h-[140px] pb-8 bg-pink-100"} >
                {children}
            </Core.Card >
        )
    }
    console.log(" Languages data",data)
    return (
        <>
            {card ?
                <_Card>
                    < div className='flex justify-between items-start' >
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Languages</h5>
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
                    <div className='flex justify-start items-end pt-3'>
                        {data?.map((value, index) => {
                            return (
                                <div key={index * 7} className={`w-full ${index === 0 ? 'mt-3' : 'mt-2'}`}>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>{value?.addNewLanguage}</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>{value?.proficiency}</p>
                                </div>
                            )
                        })}
                    </div>
                </_Card >
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Languages</h5>
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
                    <div className='flex justify-start items-end pt-3'>
                        {data?.map((value, index) => {
                            return (
                                <div key={index * 7} className={`w-full ${index === 0 ? 'mt-3' : 'mt-2'}`}>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>{value?.addNewLanguage}</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>{value?.proficiency}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}


export default Languages