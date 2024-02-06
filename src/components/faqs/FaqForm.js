// FaqForm.js
import React, { useState } from 'react';
import { Core } from '..';

function FaqForm({
    handleInput,
}) {
    const [faq, setFaq] = useState('');

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
                <Core.TextEditorWithLabel name={'faq'} style={{ height: "84%" }} value={faq} setValue={setFaq} />
            </div>
            <div className="mt-5 flex justify-start items-center gap-x-2">

                <Core.Button
                    // onClick={handleFinish}
                    type="narrow" submit>Submit</Core.Button>

            </div>
        </Core.Card>
    );
}

export default FaqForm;
