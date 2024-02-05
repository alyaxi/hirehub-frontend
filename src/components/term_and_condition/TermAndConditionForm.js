// TermAndConditionForm.js
import React, { useState } from 'react';
import { Core } from '..'; 

function TermAndConditionForm({
    // handleShortSummeryChange,
    handleInput,
}) {
    const [termsAndConditions, setTermsAndConditions] = useState('');

    return (
        <Core.Card className={'p-5'} w840 border>

            <div className="mb-4">
                <Core.InputWithLabel
                    name={"title"}
                    label
                    bgGray
                    sm
                    required
                    onChange={(e) => handleInput('title', e.target.value)}
                />
            </div>

            <div className="mb-4">
                <Core.TextEditorWithLabel name={'termsAndConditions'} style={{ height: "84%" }} value={termsAndConditions} setValue={setTermsAndConditions} />
            </div>
            <div className="mt-5 flex justify-start items-center gap-x-2">

                <Core.Button
                    // onClick={handleFinish}
                    type="narrow" submit>Submit</Core.Button>

            </div>
        </Core.Card>
    );
}

export default TermAndConditionForm;
