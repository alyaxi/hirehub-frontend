import { Core } from "..";

function Preferences({ data, buttons, card, type }) {

    // console.log(" Preferences data", data)
    
    return (
        <>
            {card ?
                <Core.Card className={"p-5 border"}>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Job Preferences</h5>
                        {type === "candidate" &&
                            <Core.ProficienciesActions buttons={['edit']} type="jobPreference" />
                        }
                    </div>

                    <p className='text-gray-6 text-[14px] leading-[25px]'>
                        Help us match you with your next job
                    </p>

                    {
                        (!data?.desiredJobTitle?.length &&
                            data?.desiredSalary === "" &&
                            data?.relocation === "" &&
                            !data?.skills?.length)
                        &&
                        <p className='text-gray-6 text-[14px] leading-[25px]'>
                            No job preference found
                        </p>
                    }

                    <div className='flex flex-col gap-y-3 pt-3'>
                        <div className='w-full mt-3'>
                            <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Job Title</h6>
                            {data?.desiredJobTitle?.length ?
                                <>
                                    {data?.desiredJobTitle?.map((value, index) => {
                                        return (
                                            <span key={index * 8} className='text-black-3 text-[12px] leading-[20px] font-medium'>
                                                {value}{index !== (data?.desiredJobTitle?.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </>
                                :
                                "-"
                            }
                        </div>
                        {data?.desiredSalary !== "" &&
                            <div className='w-full mt-2'>
                                <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Salary (USD)</h6>
                                <p className='text-black-3 text-[12px] leading-[20px]'> {data?.desiredSalary ? data?.desiredSalary + 'USD' : "-"}</p>
                            </div>
                        }
                        <div className='w-full mt-2'>
                            <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Skills</h6>
                            {data?.skills?.length ?
                                <>
                                    {data?.skills.map((value, index) => {
                                        return (
                                            <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                                {value}{index !== (data?.skills?.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </>
                                :
                                "-"
                            }
                        </div>

                        <div className='w-full mt-2'>
                            <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Cities</h6>
                            {data?.relocation?.anywhere === true ?
                                <span className='text-black-3 text-[12px] leading-[20px]'>
                                    Anywhere
                                </span>
                                :
                                <>
                                    {data?.relocation?.anywhere !== true && data?.relocation?.onlyNearMe?.locations.map((value, index) => {
                                        return (
                                            <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                                {value}{index !== (data?.relocation?.onlyNearMe?.locations?.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </>
                            }
                        </div>
                    </div>
                </Core.Card>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Job Preferences</h5>
                        {
                            buttons?.length &&
                            <div className="flex justify-center gap-x-2">
                                {type === "candidate" &&
                                    <Core.ProficienciesActions buttons={['edit']} />
                                }
                            </div>
                        }
                    </div>

                    <p className='text-gray-6 text-[14px] leading-[25px]'>
                        Help us match you with your next job
                    </p>

                    {
                        (!data?.desiredJobTitle?.length &&
                            data?.desiredSalary === "" &&
                            data?.relocation === "" &&
                            !data?.skills?.length)
                        &&
                        <p className='text-gray-6 text-[14px] leading-[25px]'>
                            No job preference found
                        </p>
                    }

                    <div className='flex flex-col gap-y-3 pt-3'>
                        <div className='w-full mt-3'>
                            <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Job Title</h6>
                            {data?.desiredJobTitle?.length ?
                                <>
                                    {data?.desiredJobTitle?.map((value, index) => {
                                        return (
                                            <span key={index * 8} className='text-black-3 text-[12px] leading-[20px] font-medium'>
                                                {value}{index !== (data?.desiredJobTitle?.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </>
                                :
                                "-"
                            }
                        </div>
                        {data?.desiredSalary !== "" &&
                            <div className='w-full mt-2'>
                                <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Salary (USD)</h6>
                                <p className='text-black-3 text-[12px] leading-[20px]'> {data?.desiredSalary ? data?.desiredSalary + 'USD' : "-"}</p>
                            </div>
                        }
                        <div className='w-full mt-2'>
                            <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Skills</h6>
                            {data?.skills?.length ?
                                <>
                                    {data?.skills.map((value, index) => {
                                        return (
                                            <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                                {value}{index !== (data?.skills?.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </>
                                :
                                "-"
                            }
                        </div>

                        <div className='w-full mt-2'>
                            <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Cities</h6>
                            {data?.relocation?.anywhere === true ?
                                <span className='text-black-3 text-[12px] leading-[20px]'>
                                    Anywhere
                                </span>
                                :
                                <>
                                    {data?.relocation?.anywhere !== true && data?.relocation?.onlyNearMe?.locations.map((value, index) => {
                                        return (
                                            <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                                {value}{index !== (data?.relocation?.onlyNearMe?.locations?.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </>
                            }
                        </div>
                    </div>
                </>
            }
        </>
    )
}


export default Preferences

