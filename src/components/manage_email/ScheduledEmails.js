import React, { useState } from 'react';
import { Core } from '..';
import TableB from '../table/TableB';
import Icon from '../icon';

const columns = [
    {
        title: 'Email Title',
        key: 'emailTitle',
        dataIndex: 'emailTitle',
    },
    {
        title: 'Process',
        key: 'process',
        dataIndex: 'process',
    },
];

const savedTemplate = [
    {
        id: "1",
        emailTitle: {
            subject: "Congratulations! prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'
    },
    {
        id: "2",
        emailTitle: {
            subject: "Congratulations! prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
    {
        id: "3 ",
        emailTitle: {
            subject: "Congratulations! prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
    {
        id: "4",
        emailTitle: {
            subject: "Congratulations! prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
    {
        id: "5",
        emailTitle: {
            subject: "Congratulations! prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
    {
        id: "6",
        emailTitle: {
            subject: "Congratulations! prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
];


function ScheduledEmails({
}) {
    // const [description, setDescription] = useState(projectToEdit?.description ? projectToEdit?.description : "");
    const [emailContent, setEmailContent] = useState("");
    const [proceedToNext, setProceedToNext] = useState(false);


    const onStageClick = () => {
        setProceedToNext(!proceedToNext)
    };
    return (
        <div className={'p-5'}>

            {proceedToNext ?
                <>
                    <h2 className='flex items-center gap-x-3 text-purple-2 text-[20px] font-bold mb-3'>
                        <span onClick={onStageClick} className='cursor-pointer hover:bg-purple-7 rounded-full p-2'>
                            <Icon name="ChevronLeft" />
                        </span>
                        Send / Schedule Email
                    </h2>

                    <div className="mb-4">
                        <Core.InputWithLabel
                            name={"sendTo"}
                            // label="Company Name"
                            label
                            sm
                        // onChange={(value) => handleChange("companyName", value)}
                        />
                    </div>

                    <div className="mb-4">
                        <Core.InputWithLabel
                            name={"title"}
                            // label="Company Name"
                            label
                            sm
                        // onChange={(value) => handleChange("companyName", value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <Core.TextEditorWithLabel name={'emailContent'} height={"h-[300px]"} style={{ height: "84%" }} value={emailContent} setValue={setEmailContent} />
                    </div>


                    <div className="mt-5 flex justify-start items-center gap-x-2">
                        <Core.Button
                            // onClick={handleFinish}
                            type="narrow" submit>Send</Core.Button>
                        <Core.Button
                            // onClick={handleBack}
                            data-hs-stepper-back-btn
                            type="narrow" color="white">Schedule</Core.Button>
                    </div>

                </>
                :
                <>
                    <h2 className='text-purple-2 text-[20px] font-bold mt-8 mb-3'> Saved Template</h2>

                    <TableB
                        data={savedTemplate}
                        columns={columns}
                        // actions={actions}
                        onStageClick={onStageClick}
                        filterBy={[
                            // "SearchByName",
                            // "SearchByStage",
                        ]}
                        border="none"
                    />
                </>
            }

        </div>
    );
}

export default ScheduledEmails


