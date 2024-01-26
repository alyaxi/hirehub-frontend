import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthLayout, Core } from '../../../components';
import image from '../../../assets/images/logo/logo.png';
import { Switch, Spin } from 'antd';
import { login } from '../../../Slices/Auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { redirectToDashboard } from '../../../utilis/RedirectionToDashboard';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

function LoginPage() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        // Check if the user is already authenticated
        if (user) {
            redirectToDashboard(user?.Role, navigate);
        }
    }, []);

    const handleInputChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (values) => {
        try {
            dispatch(login(values))
                .unwrap()
                .then((res) => {
                    const user = res.data;
                    redirectToDashboard(user?.Role, navigate);

                })
                .catch((err) => toast.error(err.message));
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <AuthLayout>
            <ToastContainer></ToastContainer>
            <img src={image} alt="Logo" className='w-[360px]' />
            <h1 className='text-black-3 text-[42px] leading-[57px] tracking-[0.5px] font-regular'>
                Welcome to Hirehub, <br />
                Sign in to Continue
            </h1>
            <Formik
                initialValues={credentials}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col gap-y-14 max-w-[600px] mb-3'>
                        <div>
                            <div className='mb-3'>
                                <Field type='text' name='email'>
                                    {({ field }) => (
                                        <>
                                            <Core.InputWithLabel
                                                type='text'
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                label='Email'
                                                className='py-5'
                                                bgGray
                                            />
                                            <ErrorMessage name='email' component='div' className='text-red-500' />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className='mb-3'>
                                <Field type='password' name='password'>
                                    {({ field }) => (
                                        <>
                                            <Core.InputWithLabel
                                                type='password'
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                label
                                                className='py-5'
                                                bgGray
                                            />
                                            <ErrorMessage name='password' component='div' className='text-red-500' />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className='flex justify-between items-center pt-1'>
                                <div className='flex justify-start items-center gap-x-1'>
                                    <Switch className='ant-switch' defaultChecked onChange={onChange} />
                                    <span>Remember Me</span>
                                </div>
                                <a className='text-gray-6 text-[14px] mb-2'>
                                    <NavLink to='/forgot-password'>Forgot Password?</NavLink>
                                </a>
                            </div>
                        </div>
                        {isSubmitting ?
                            <div
                                className=' flex justify-center items-center w-full bg-white border text-[18px] leading-[20px] rounded-full py-[18px]'
                            >
                                <Spin />
                            </div>
                            :
                            <Core.Button type='submit' className='text-[18px] leading-[20px] rounded-full py-[18px]'>
                                Sign in
                            </Core.Button>
                        }
                        <p className='text-gray-6 text-[18px] leading-[24px]'>
                            Don't have an account?{' '}
                            <a className='text-purple-1 underline'>
                                <NavLink to='/register'>create an account</NavLink>
                            </a>
                            <br />
                            It will take less than a minute.
                        </p>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
}

export default LoginPage;
