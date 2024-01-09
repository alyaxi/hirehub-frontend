import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthLayout, Core } from '../../../components';
import image from '../../../assets/images/logo/logo.png';
import { Checkbox, Radio } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../../Slices/Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { redirectToDashboard } from '../../../utilis/RedirectionToDashboard';
import notificationService from '../../../utilis/notification';


const validationSchema = Yup.object().shape({
    userType: Yup.string().required('Please select a user type'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    agreeTerms: Yup.bool().oneOf([true], 'You must agree to the terms'),
});

const initialValues = {
    userType: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
};


const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        // Check if the user is already authenticated
        if (user) {
            redirectToDashboard(user?.Role, navigate);
        }
    }, []);


    const onSubmit = (values) => {
        try {
            dispatch(register({
                name: values.name,
                email: values.email,
                password: values.password,
                role: values.userType
            })).unwrap().then(res => {
               console.log(res, "ressssponsee");
        
               const user = res.data.user;
               redirectToDashboard(user?.role, navigate);;
                notificationService.success("Registration Successful");
            
            }).catch(error => {
                notificationService.error(error.message)
            })
        } catch (error) {
            console.error(error);
            notificationService.error(error.message);
        }
    };

    return (
        <AuthLayout>
            <ToastContainer></ToastContainer>
            <img src={image} alt="Logo" className='w-[360px]' />
            <h1 className='text-black-3 text-[32px] leading-[43px] tracking-[0.5px] font-regular'>
                Welcome to Hirehub, <br />
                Sign up to Continue
            </h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {() => (
                    <Form className='flex flex-col gap-y-9 max-w-[600px] mb-3'>
                        <div className='py-5'>
                            <Field type='radio' name='userType' value='candidate' />
                            Candidate
                            <Field type='radio' name='userType' value='employer' />
                            Employer
                            <ErrorMessage name='userType' component='div' className='text-red-500' />
                        </div>
                        <div className='mb-3'>
                            <Field type='text' name='name'>
                                {({ field }) => (
                                    <>
                                        <Core.InputWithLabel
                                            label='Name'
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                            className='py-5'
                                            bgGray
                                        />
                                        <ErrorMessage name='name' component='div' className='text-red-500' />
                                    </>
                                )}
                            </Field>
                        </div>
                        <div className='mb-3'>
                            <Field type='text' name='email'>
                                {({ field }) => (
                                    <>
                                        <Core.InputWithLabel
                                            label='Email'
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
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
                                            label='Password'
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                            className='py-5'
                                            bgGray
                                        />
                                        <ErrorMessage name='password' component='div' className='text-red-500' />
                                    </>
                                )}
                            </Field>
                        </div>
                        <div className='mb-3'>
                            <Field type='password' name='confirmPassword'>
                                {({ field }) => (
                                    <>
                                        <Core.InputWithLabel
                                            label='Confirm Password'
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                            className='py-5'
                                            bgGray
                                        />
                                        <ErrorMessage name='confirmPassword' component='div' className='text-red-500' />
                                    </>
                                )}
                            </Field>
                        </div>
                        <div className='flex justify-between items-center pt-1'>
                            <div className='flex justify-start items-center gap-x-1'>
                                <Field type='checkbox' name='agreeTerms' />
                                I agree to
                                <a className='text-purple-1'>
                                    <NavLink to='#'> privacy policy & terms</NavLink>
                                </a>
                                <ErrorMessage name='agreeTerms' component='div' className='text-red-500' />
                            </div>
                        </div>
                        <Core.Button type='submit' className='text-[18px] leading-[20px] rounded-full py-[18px]'>
                            Sign Up
                        </Core.Button>
                        <p className='text-gray-6 text-[18px] leading-[24px]'>
                            Already have an account?
                            <a className='text-purple-1 underline'>
                                <NavLink to='/'> Login</NavLink>
                            </a>
                        </p>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default RegisterPage;
