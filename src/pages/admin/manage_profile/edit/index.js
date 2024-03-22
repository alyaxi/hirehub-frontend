import React, { useState } from "react";
import { Breadcrumb } from "../../../../components/core";
import { Core } from "../../../../components";
import { Form } from "antd";
import { Field, Formik } from "formik";

const breadcrumb = [
  { label: "Dashboard", link: "/employer/dashboard" },
  { label: "Manage Profile" },
];

function AdminEditManageProfile() {
  const [data] = useState({
    userName: "Micheal Doe",
    email: "michealdoe@gmail.com",
  });
  const [profilePicture, setProfilePictrue] = useState("");

  const handleFinish = (values) => {
    console.log("handleFinish called");
    console.log("profilePicture", profilePicture);
    console.log("values.userName", values.userName);
    console.log("values.email", values.email);
  };

  console.log("profilePicture", profilePicture);

  return (
    <>
      <Breadcrumb breadcrumb={breadcrumb} />

      <Formik
        initialValues={data}
        // validationSchema={validationSchema}
        onSubmit={handleFinish}
      >
        {({ values }) => {
          console.log("values", values);
          return (
            <Form>
              <Core.Card className={"p-5"} w840 border>
                {/* <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Update Profile</h5> */}
                <h5 className="text-black-2 text-[24px] leading-[32px] font-medium mb-2">
                  Update Profile
                </h5>

                <Core.UploadAvatar
                  setState={setProfilePictrue}
                  profilePicture={profilePicture}
                />

                <div className="mb-4">
                  <Field name="userName">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="userName"
                        label
                        bgGray
                        customPlaceholder="Enter your User Name"
                        edit
                        disabled
                        // required
                      />
                    )}
                  </Field>
                </div>

                <div className="mb-4">
                  <Field name="email">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="email"
                        label
                        bgGray
                        // helperText={
                        //   "Only visible to employers you apply or respond to"
                        // }
                        // icon="Lock1"
                        edit
                        disabled
                        // required
                      />
                    )}
                  </Field>
                </div>

                <div className="mt-5 flex justify-start items-center gap-x-2">
                  <>
                    {/* {savingForm ? (
                <div className=" flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]">
                  <Spin />
                </div>
              ) : ( */}
                    <Core.Button
                      // isDisabled={!isAnyEmpty}
                      // onClick={handleFinish}
                      onClick={() => handleFinish(values)}
                      type="narrow"
                      submit
                    >
                      Save
                    </Core.Button>
                    {/* )} */}
                  </>
                </div>
              </Core.Card>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default AdminEditManageProfile;
