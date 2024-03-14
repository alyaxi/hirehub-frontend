import { Radio, Space } from "antd";
import { Core } from "..";

function ResumePrivacySetting({ resumePrivacySetting, handlePrivacyChange, card }) {

    // console.log("resumePrivacySetting", resumePrivacySetting)
    return (
        <>
            {card ?
                <Core.Card className={"p-5 border"}>
                    <div className='flex justify-between items-start' >
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Resume Privacy Setting</h5>
                    </div>
                    <Radio.Group onChange={handlePrivacyChange} value={resumePrivacySetting} className='mt-3'>
                        <Space direction="vertical" align='start' justify="start">
                            <div className='flex items-start gap-x-1'>
                                <Radio value={1}>
                                </Radio>
                                <label className="text-gray-1 w-full" htmlFor="public">
                                    <h6 className='text-black-2 text-[16px] leading-[20px] font-semibold'>Public</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>Your resume will be visible to all employees.</p>
                                </label>
                            </div>
                            <div className='flex items-start gap-x-1'>
                                <Radio value={2}>
                                </Radio>
                                <label className="text-gray-1 w-full" htmlFor="private">
                                    <h6 className='text-black-2 text-[16px] leading-[20px] font-semibold'>Private</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>Your resume will remain confidential and visible only to you. However, you can still attach it</p>
                                </label>
                            </div>
                        </Space>
                    </Radio.Group>
                </Core.Card>
                :
                <>
                    <div className='flex justify-between items-start'>
                        <h5 className='text-black-1 text-[18px] leading-[28px] font-semibold'>Resume Privacy Setting</h5>
                    </div>
                    <Radio.Group onChange={handlePrivacyChange} value={resumePrivacySetting} className='mt-3'>
                        <Space direction="vertical" align='start' justify="start">
                            <div className='flex gap-x-2'>
                                <Radio value={1}>
                                </Radio>
                                <label className="text-gray-1 w-full" htmlFor="public">
                                    <h6 className='text-black-2 text-[16px] leading-[20px] font-semibold'>Public</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>Your resume will be visible to all employees.</p>
                                </label>
                            </div>
                            <div className='flex gap-x-2'>
                                <Radio value={2}>
                                </Radio>
                                <label className="text-gray-1 w-full" htmlFor="private">
                                    <h6 className='text-black-2 text-[16px] leading-[20px] font-semibold'>Private</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>when applying for a job.</p>
                                </label>
                            </div>
                        </Space>
                    </Radio.Group>
                </>
            }
        </>
    )
}


export default ResumePrivacySetting