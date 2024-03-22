import React, { useState } from "react";
import { Breadcrumb } from "../../../../components/core";
import { Core, Employer } from "../../../../components";
import { UpdateEmployerById } from "../../../../Slices/Employer/EmployerSlice";
import { ToastContainer } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import notificationService from "../../../../utilis/notification";
import { useNavigate } from "react-router-dom";
import { Form, Spin } from "antd";
import { ErrorMessage, Field, Formik } from "formik";

const breadcrumb = [
  { label: "Dashboard", link: "/employer/dashboard" },
  { label: "Manage Profile" },
];

function AdminEditManageProfile() { 

  const [data,setData] = useState({})
  const [profilePicture, setProfilePictrue] = useState(  ""
  );

  const handleChange = (name, event) => {
    const value = event.target.value;
    console.log("type", typeof value);

    if (name === "phoneNo") {
      const containsAlphabet = /[a-zA-Z]/.test(value); // Check if string contains alphabetic characters
      const containsSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
        value
      );
      if (!containsAlphabet && !containsSpecialChar) {
        console.log("Value is valid.");
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        })); 
      }
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      })); 
    }
  };

  const handleFinish = () => {
    console.log("handleFinish called");
    console.log('profilePicture',profilePicture)
  };

  
  console.log('profilePicture',profilePicture)

  return (
    <>
      <Breadcrumb breadcrumb={breadcrumb} />
 
      <Formik
      initialValues={data}
      // validationSchema={validationSchema}
      onSubmit={handleFinish}
    >
      {({}) => (
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
              <Field name="companyName" id="companyName">
                {({ field }) => (
                  <div>
                    <Core.InputWithLabel
                      {...field}
                      name={"companyName"}
                      label
                      sm
                      edit
                      value={data?.companyName}
                      onChange={(value) => handleChange("companyName", value)}
                      // onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                )}
              </Field>
            </div>
            
 

            {/* <div className=" mb-4">
              <div> 

                <label
                  className={`block text-[14px] text-gray-2 tracking-wide  mb-1.5  font-semibold capitalize`}
                >
                  Logo
                </label>
                <p className="text-gray-12 text-[14px] leading-[16px] mb-1.5">
                  A company logo helps candidates connect the job opportunity
                  with your brand. Recommended specs are 400x400 pixels.
                </p>
               </div>
            </div> */}

 
            <div className="mb-4">
              <Field name="phoneNo" id="phoneNo">
                {({ field }) => (
                  <div>
                    <Core.InputWithLabel
                      {...field}
                      name={"phoneNo"}
                      label
                      edit
                      value={data?.phoneNo}
                      helperText="We will use this number to text you important notifications"
                      onChange={(value) => handleChange("phoneNo", value)}
                      // onBlur={handleBlur}
                      maxLength={"11"}
                    />
                    <ErrorMessage
                      name="phoneNo"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                )}
              </Field>
            </div>







          </Core.Card>
        </Form>
      )}
    </Formik>
    </>
  );
}

export default AdminEditManageProfile;
