import React from 'react';
import { NavLink } from "react-router-dom";
import { AuthLayout, Core } from '../../../components';
import image from "../../../assets/images/logo/logo.png";
import { Switch } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { forgetPassword } from '../../../Slices/Auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer  } from 'react-toastify';



const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});

function ForgotPasswordPage() {
    const dispatch = useDispatch()



    const initialValues = {
        email: '',
    };


    const handleSubmit = (values) => {
        // Handle the form submission logic here
        try {
            console.log('Form submitted with values:', values);
            dispatch(forgetPassword(values)).unwrap().then(res => {
                if(res){
                    toast.success(res?.data?.Message)
                }
            }).catch(err => {
                console.log(err, "errrororr");
                toast.error(err.message)
            })
        } catch (error) {
            console.log(error, "errorororo");
            toast.error(error.message)
        }
    };


    return (
        <AuthLayout>
            <ToastContainer></ToastContainer>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="flex flex-col gap-y-9 max-w-[600px] mb-3">
                    <img src={image} alt="Logo" className='w-[360px]' />
                    <h1 className='text-black-3 text-[42px] leading-[57px] tracking-[0.5px] font-regular'>
                        Forget Password?
                    </h1>
                    {/* <form > */}
                    <p className='text-black-3 text-[22px] leading-[30px]'>
                        No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                    </p>
                    <div>
                        <div className="mb-3">
                            <Field type="text" name="email">
                                {({ field }) => (
                                    <>
                                        <Core.InputWithLabel
                                            label='Email'
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                            className='py-5'
                                        />
                                        <ErrorMessage name='email' component='div' className='text-red-500' />
                                    </>
                                )}
                            </Field>
                        </div>
                    </div>
                    <Core.Button className="text-[18px] leading-[20px] rounded-full py-[18px]">Send Reset Link</Core.Button>
                    <p className='text-gray-6 text-[18px] leading-[24px]'>
                        <a><NavLink to="/"> Back to login </NavLink></a>
                    </p>
                    {/* </form> */}
                </Form>
            </Formik>
        </AuthLayout>
    )
}

export default ForgotPasswordPage