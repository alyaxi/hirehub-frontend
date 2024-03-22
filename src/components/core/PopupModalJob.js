import React, { useState } from "react";
import { Core } from "..";
import { Modal, Form, Spin } from "antd";

import { ErrorMessage, Field, Formik } from "formik";

function JobPosts({ isModalOpen, setIsModalOpen, id, selectedJobData }) {
  const [savingForm, setSavingForm] = useState(false);

  const [data] = useState({
    whyApply: "",
    availability: "",
    whyForUs: "",
    threeQualities: "",
    notify: false,
    quickApply: false,
  });

  console.log("selectedJobData popup", selectedJobData);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values) => {
    console.log("handleSubmit called");
    console.log("jobid", id);
    console.log("values", values);
  };

  return (
    <>
      <Modal
        // title={"title"}
        width={715}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Formik
          initialValues={data}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => {
            console.log("formik values", values);
            return (
              <Form>
                <div>
                  <h6
                    className={`text-[22px] leading-[22px] capitalize font-semibold mb-1`}
                  >
                    {selectedJobData?.positionTitle}
                  </h6>
                  <span className="text-purple- 4 text-[12px] leading-[22px] underlin e capitalize font-medium mb-2">
                    {selectedJobData?.employer?.title}
                  </span>
                  <p className="text-gray-6 text-[12px] leading-[20px]">
                    <span>{selectedJobData?.jobType}, </span>
                    {selectedJobData?.employer?.address}
                  </p>
                </div>
                <br />

                <div className="flex justify-between items-center pt-1 mb-2">
                  <div className="flex justify-start items-center gap-x-1">
                    <Field type="checkbox" name="quickApply" />
                    Quick Apply
                    <ErrorMessage
                      name="quickApply"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <br />
                <p className="text-black-1 text-[14px] font-semibold mb-2">
                  Quick reply for these questions
                </p>
                <div className="mb-4">
                  <Field name="whyApply">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="whyApply"
                        label
                        bgGray
                        edit
                      />
                    )}
                  </Field>
                </div>
                <div className="mb-4">
                  <Field name="availability">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="availability"
                        label
                        bgGray
                        edit
                      />
                    )}
                  </Field>
                </div>
                <div className="mb-4">
                  <Field name="whyForUs">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="whyForUs"
                        label
                        bgGray
                        edit
                      />
                    )}
                  </Field>
                </div>
                <div className="mb-4">
                  <Field name="threeQualities">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="threeQualities"
                        label
                        bgGray
                        edit
                      />
                    )}
                  </Field>
                </div>
                <div className="flex justify-between items-center pt-1 mb-2">
                  <div className="flex justify-start items-center gap-x-1">
                    <Field type="checkbox" name="notify" />
                    Notify me when similar jobs are available
                    <ErrorMessage
                      name="notify"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-6 mt-8 border-t-[1px]">
                  <div className="flex justify-start gap-x-3 ">
                    {savingForm ? (
                      <div className=" flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]">
                        <Spin />
                      </div>
                    ) : (
                      <Core.Button
                        type="narrow"
                        submit
                        onClick={() => handleSubmit(values)}
                        isDisabled={
                          values?.whyApply === "" ||
                          values?.availability === "" ||
                          values?.whyForUs === "" ||
                          values?.threeQualities === ""
                        }
                      >
                        Quick Apply
                      </Core.Button>
                    )}
                    <Core.Button
                      type="narrow"
                      color="white"
                      // onClick={() => {
                      //   handleCancel();
                      //   resetForm();
                      //   if (action === "add") {
                      //     setDescription("");
                      //     setSelectedStartMonth("");
                      //     setSelectedEndMonth("");
                      //     setSelectedStartYear("");
                      //     setSelectedEndYear("");
                      //     setStartDate("");
                      //     setEndDate("");
                      //     setProjectImage("");
                      //     setCancelImg(true);
                      //   }
                      // }}
                    >
                      Back
                    </Core.Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
}

export default JobPosts;
