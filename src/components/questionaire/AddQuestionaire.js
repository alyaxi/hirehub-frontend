import React, { useState } from 'react';
import { Core } from '..';

const positionOptions = [
    { name: "position 1", value: "position 1" },
    { name: "position 2", value: "position 2" },
    { name: "position 3", value: "position 3" },
    { name: "position 4", value: "position 4" },
    { name: "position 5", value: "position 5" },
];

function AddQuestionnaire({
}) {
    const [emailContent, setEmailContent] = useState("");

    const handleChange = (name, event) => {
        const value = event.target.value;
        console.log("name", name)
        console.log("value", value)
    };

    return (
        <Core.Card className={'p-5'} border>

            <div className="mb-4">
                <div className="max-w-[500px]">
                    <Core.SelectWithLabel
                        name={"position"}
                        options={positionOptions}
                        onChange={(value) => handleChange("noOfEmployes", value)}
                    />
                </div>
            </div>

            <div className='mb-4'>
                <Core.TextEditorWithLabel name={'emailContent'} height={"h-[300px]"} style={{ height: "84%" }} value={emailContent} setValue={setEmailContent} />
            </div>

            <div className="mt-5 flex justify-start items-center gap-x-2">
                <Core.Button
                    // onClick={handleFinish}
                    type="narrow" submit>Submit</Core.Button>
            </div>

        </Core.Card>
    );
}

export default AddQuestionnaire