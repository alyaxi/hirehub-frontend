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
        emailTitle: "Job Interview Invitation",
        process: 'proceedToNext'
    },
    {
        id: "2",
        emailTitle: "Onboarding Information",
        process: 'proceedToNext'

    },
    {
        id: "3 ",
        emailTitle: "Assessment/Testing Instructions",
        process: 'proceedToNext'

    },
    {
        id: "4",
        emailTitle: "Job Offer",
        process: 'proceedToNext'

    },
    {
        id: "5",
        emailTitle: "Your Application has been viewed",
        process: 'proceedToNext'

    },
    {
        id: "6",
        emailTitle: "Job Interview Invitation",
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
        <Core.Card className={'p-5'}>

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

        </Core.Card>
    );
}

export default ScheduledEmails


