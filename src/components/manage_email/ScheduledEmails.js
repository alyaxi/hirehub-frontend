import React, { useState } from 'react';
import { Core } from '..';
import TableB from '../table/TableB';
import Icon from '../icon';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    emailNameDropdownOptions,
    emailStageDropdownOptions
} = dropdownOptions;

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
        _id: "1",
        emailTitle: {
            subject: "Prototypes without code",
            text: `<p>Dear, Admin,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li className="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li className="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li className="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li className="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li className="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li className="ql-align-justify">unchanged. It was popularised</li></ol><p className="ql-align-justify"><br></p><p className="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'
    },
    {
        _id: "2",
        emailTitle: {
            subject: "Congratulations! prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li className="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li className="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li className="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li className="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li className="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li className="ql-align-justify">unchanged. It was popularised</li></ol><p className="ql-align-justify"><br></p><p className="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
    {
        _id: "3 ",
        emailTitle: {
            subject: "Welcome Sir, prototypes without code",
            text: `<p>Dear, Employer,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li className="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li className="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li className="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li className="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li className="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li className="ql-align-justify">unchanged. It was popularised</li></ol><p className="ql-align-justify"><br></p><p className="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
    {
        _id: "4",
        emailTitle: {
            subject: "Build prototypes without code",
            text: `<p>Hi, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li className="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li className="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li className="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li className="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li className="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li className="ql-align-justify">unchanged. It was popularised</li></ol><p className="ql-align-justify"><br></p><p className="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
    {
        _id: "5",
        emailTitle: {
            subject: "Hi, prototypes without code",
            text: `<p>Dear, Sir,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li className="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li className="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li className="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li className="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li className="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li className="ql-align-justify">unchanged. It was popularised</li></ol><p className="ql-align-justify"><br></p><p className="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
    {
        _id: "6",
        emailTitle: {
            subject: "Build prototypes without code",
            text: `<p>Welcome, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li className="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li className="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li className="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li className="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li className="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li className="ql-align-justify">unchanged. It was popularised</li></ol><p className="ql-align-justify"><br></p><p className="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        process: 'proceedToNext'

    },
];

function ScheduledEmails({ }) {

    const [sendTo, setSendTo] = useState("");
    const [emailTitle, setEmailTitle] = useState("");
    const [emailContent, setEmailContent] = useState("");
    const [proceedToNext, setProceedToNext] = useState(false);
    const [emailToSend, setEmailToSend] = useState("");

    console.log("2 emailTitle", emailTitle)

    const onStageClick = (id) => {
        const selectedItem = savedTemplate.find(item => item._id === id);
        setEmailTitle(selectedItem?.emailTitle?.subject)
        setEmailContent(selectedItem?.emailTitle?.text)
        setProceedToNext(!proceedToNext)
    };

    const [emailNames, setEmailNames] = useState("");
    const [emailStages, setEmailStages] = useState("");

    console.log("emailNames", emailNames)
    console.log("emailStages", emailStages)

    const handleTitle = (e) => {
        setEmailTitle(e.target.value)
    };
    const handleSendTo = (e) => {
        setSendTo(e.target.value)
    };

    const sendEmail = (e) => {
        setEmailToSend({
            sendTo: sendTo,
            emailTitle: emailTitle,
            emailContent: emailContent
        })
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Core.PopupModalCalender isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
                            label
                            sm
                            value={sendTo}
                            onChange={handleSendTo}
                        />
                    </div>

                    <div className="mb-4">
                        <Core.InputWithLabel
                            name={"title"}
                            label
                            sm
                            value={emailTitle}
                            onChange={handleTitle}
                            edit
                        />
                    </div>

                    <div className='mb-4'>
                        <Core.TextEditorWithLabel name={'emailContent'} height={"h-[300px]"} style={{ height: "84%" }} value={emailContent} setValue={setEmailContent} />
                    </div>

                    <div className="mt-5 flex justify-start items-center gap-x-2">
                        <Core.Button
                            onClick={sendEmail} type="narrow" submit>Send</Core.Button>
                        <Core.Button
                            onClick={() => {
                                showModal();
                            }}
                            data-hs-stepper-back-btn type="narrow" color="white">Schedule</Core.Button>
                    </div>

                </>
                :
                <>

                    <div className={`flex justify-start items-center gap-1 w-full mt-6`}>
                        <Core.Dropdown2 options={emailNameDropdownOptions} setState={setEmailNames} defaultTitle="Search by Name" menuWidth={'w-[300px]'} />
                        <Core.Dropdown2 options={emailStageDropdownOptions} setState={setEmailStages} defaultTitle="Stage" menuWidth={'w-[150px]'} />
                    </div>

                    <h2 className='text-purple-2 text-[20px] font-bold mt-8'> Saved Template</h2>

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
        </>
    );
}

export default ScheduledEmails


