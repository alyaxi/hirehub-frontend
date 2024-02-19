// FaqForm.js
import React, { useEffect, useState } from 'react';
import { Core } from '..';
import { Formik, Form, Field } from 'formik';
import { ViewFaqs, updateFaqs } from '../../Slices/Admin/ManageStaticContentSlice';
import {useDispatch, useSelector} from "react-redux"

function FaqForm({
    handleInput,
}) {
    const dispatch = useDispatch();
    const faqsContent = useSelector((state) => state?.manageContent?.faq);
    const reload = useSelector((state) => state?.manageContent?.reload);


    useEffect(() => {
        try {

            dispatch(ViewFaqs()).unwrap().then(res => {
                console.log("Successfully fetched data", res);



            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)

        }


    }, [reload])

    console.log(faqsContent, "faqContenttt")


    const [faq, setFaq] = useState(faqsContent?.description || "");

    const [data] = useState({
        title:faqsContent?.title ||'title',
    });

    // console.log("data", data)

    const handleSubmit = (values) => {
        console.log("values", values?.title)
        console.log("description", faq)
        try {
            dispatch(updateFaqs({ title: values?.title, description: faq })).unwrap().then(x => {
                console.log(x, "updated")

            }).catch(err => console.log(err))
        } catch (error) {

        }
    };


    return (
        <Core.Card className={'p-5'} w840 border>

            <Formik
                initialValues={data}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>

                        <div className="mb-4">
                            <Field name="title">
                                {({ field }) => (
                                    <Core.InputWithLabel
                                        name={"title"}
                                        {...field}
                                        label
                                        edit
                                        // value={data?.title}
                                        sm
                                    // onChange={(e) => handleInput('title', e.target.value)}
                                    />
                                )}
                            </Field>
                        </div>


                        <div className="mb-4">
                            <Core.TextEditorWithLabel name={'faq'} style={{ height: "84%" }} value={faq} setValue={setFaq} />
                        </div>
                        <div className="mt-5 flex justify-start items-center gap-x-2">

                            <Core.Button
                                // onClick={handleFinish}
                                type="narrow" submit>Submit</Core.Button>

                        </div>


                    </Form>
                )}
            </Formik >
        </Core.Card>
    );
}

export default FaqForm;


// FaqForm.js
// import React, { useState } from 'react';
// import { Core } from '..';
// import { Formik, Form, Field } from 'formik';

// function FaqForm({
//     handleInput,
// }) {
//     const [faq, setFaq] = useState('');

//     const [data] = useState({
//         title: 'title',
//         description: faq || 'dd',
//     });

//     console.log("data", data)

//     const handleSubmit = (values) => {
//         console.log("values", values)
//     };

//     return (
//         <Core.Card className={'p-5'} w840 border>
//             <Formik
//                 initialValues={data}
//                 // validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//             >
//                 {({ isSubmitting }) => (
//                     <Form>
//                         {/* <div className="mb-4">
//                             <Core.InputWithLabel
//                                 name={"title"}
//                                 label
//                                 bgGray
//                                 sm
//                                 required
//                                 onChange={(e) => handleInput('title', e.target.value)}
//                             />
//                         </div> */}


//                         <div className="mb-4">
//                             <Field name="title">
//                                 {({ field }) => (
//                                     <Core.InputWithLabel
//                                         name={"title"}
//                                         // {...field}
//                                         label
//                                         edit
//                                         value={data?.title}
//                                         sm
//                                     // onChange={(e) => handleInput('title', e.target.value)}
//                                     />
//                                 )}
//                             </Field>
//                         </div>



//                         <div className="mb-4">
//                             <Core.TextEditorWithLabel name={'faq'} style={{ height: "84%" }} value={faq} setValue={setFaq} />
//                         </div>
//                         <div className="mt-5 flex justify-start items-center gap-x-2">

//                             <Core.Button
//                                 // onClick={handleFinish}
//                                 type="narrow" submit>Submit</Core.Button>

//                         </div>


//                     </Form>
//                 )}
//             </Formik >
//         </Core.Card >


//     );
// }

// export default FaqForm;