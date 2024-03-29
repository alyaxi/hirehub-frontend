import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthLayout, Core } from '../../../components';
import image from '../../../assets/images/logo/logo.png';
import { Spin } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../../Slices/Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { redirectToDashboard } from '../../../utilis/RedirectionToDashboard';
import notificationService from '../../../utilis/notification';


const validationSchema = Yup.object().shape({
    userType: Yup.string().required('Please select user type'),

    name: Yup.string().required('Name is required'),

    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~=\`{}\[\]:";'<>?,.\/]).*$/,
            'Password must contain at least one uppercase letter and one special character'
        )
        .required('Password is required'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),

    agreeTerms: Yup.bool()
        .oneOf([true], 'You must agree to the terms'),
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
    // const [userType, setUserType] = useState('');
    
    useEffect(() => {
        // Check if the user is already authenticated
        if (user) {
            redirectToDashboard(user?.Role, navigate);
        }
    }, []);


    const onSubmit = (values, { setSubmitting }) => {
        try {
            dispatch(register({
                name: values.name,
                email: values.email,
                password: values.password,
                role: values.userType
            })).unwrap().then(res => {
                console.log(res, "ressssponsee");

                const user = res.data.user;

                notificationService.success("Registration Successful");
                setTimeout(() => {
                    redirectToDashboard(user?.role, navigate);
                }, 3000)

            }).catch(error => {
                notificationService.error(error.message)
            })
                .finally(() => {
                    setSubmitting(false);
                });
        } catch (error) {
            console.error(error);
            notificationService.error(error.message);
        }
    };
    return (
        <AuthLayout>
            <ToastContainer></ToastContainer>
            <img src={image} className='w-[360px]' alt="Logo" />
            <h1 className='text-black-3 text-[32px] leading-[43px] tracking-[0.5px] font-regular'>
                Welcome to Hirehub, <br />
                Sign up to Continue
            </h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form className='flex flex-col max-w-[600px] mb-3'>
                        {/* <div className='py-5'>
                            <Field type='radio' name='userType' value='candidate' />
                            Candidate
                            <Field type='radio' name='userType' value='employer' />
                            Employer
                            <ErrorMessage name='userType' component='div' className='text-[12px] text-red-500' />
                        </div> */}
                        <div className='py-5'>
                            <div className='flex gap-x-1' role="group" aria-labelledby="my-radio-group">
                                <label className='bg-purple-100 rounded-[5px] cursor-pointer px-4 py-3'>
                                    <Field
                                        type='radio'
                                        name='userType'
                                        value='candidate'
                                    // checked={userType === 'candidate'}
                                    // onChange={() => setUserType('candidate')}
                                    />
                                    <span className='pl-1'>Candidate</span>
                                </label>
                                <label className='bg-purple-100 rounded-[5px] cursor-pointer px-4 py-3'>
                                    <Field
                                        type='radio'
                                        name='userType'
                                        value='employer'
                                    // checked={userType === 'employer'}
                                    // onChange={() => setUserType('employer')}
                                    />
                                    <span className='pl-1'>Employer</span>
                                </label>
                            </div>
                            <ErrorMessage name='userType' component='div' className='text-[12px] text-red-500' />
                        </div>
                        {/* <div className='py-5'>
                            <div className='flex gap-x-1' role="group" aria-labelledby="my-radio-group">
                                <label className='bg-purple-100 rounded-[5px] px-4 py-3'>
                                    <Field
                                        type='radio'
                                        name='userType'
                                        value='candidate'
                                        checked={userType === 'candidate'}
                                        onChange={() => setUserType('candidate')}
                                    />
                                    <span className='pl-1'>Candidate</span>
                                </label>
                                <label className='bg-purple-100 rounded-[5px] px-4 py-3'>
                                    <Field
                                        type='radio'
                                        name='userType'
                                        value='employer'
                                        checked={userType === 'employer'}
                                        onChange={() => setUserType('employer')}
                                    />
                                    <span className='pl-1'>Employer</span>
                                </label>
                            </div>
                            <ErrorMessage name='userType' component='div' className='text-[12px] text-red-500' />
                        </div> */}
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
                                        <ErrorMessage name='name' component='div' className='text-[12px] text-red-500' />
                                    </>
                                )}
                            </Field>
                        </div>
                        <div className='mb-3'>
                            <Field name='email'>
                                {({ field }) => (
                                    <>
                                        <Core.InputWithLabel
                                            label='Email'
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                            // onChange={(e) => {
                                            //     const trimmedValue = e.target.value.trim(); // Trim spaces
                                            //     field.onChange(e.target.name)(trimmedValue); // Update field value
                                            // }}
                                            className='py-5'
                                            bgGray
                                        />
                                        <ErrorMessage name='email' component='div' className='text-[12px] text-red-500' />
                                    </>
                                )}
                            </Field>
                        </div>
                        <div className='mb-3'>
                            <Field type='password' name='password'>
                                {({ field }) => (
                                    <>
                                        <Core.InputWithLabel
                                            label
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                            className='py-5'
                                            bgGray
                                        />
                                        <ErrorMessage name='password' component='div' className='text-[12px] text-red-500' />
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
                                        <ErrorMessage name='confirmPassword' component='div' className='text-[12px] text-red-500' />
                                    </>
                                )}
                            </Field>
                        </div>
                        <div className='flex flex-col gap-y-5'>
                            <div className='flex flex-col items-start pt-1'>
                                <div className='flex justify-start items-center gap-x-1'>
                                    <Field type='checkbox' name='agreeTerms' />
                                    I agree to
                                    <a className='text-purple-1'>
                                        <NavLink to='#'> privacy policy & terms</NavLink>
                                    </a>
                                </div>
                                <ErrorMessage name='agreeTerms' component='div' className='text-[12px] text-red-500' />
                            </div>
                            {isSubmitting ?
                                <div
                                    className=' flex justify-center items-center w-full bg-white border text-[18px] leading-[20px] rounded-full py-[18px]'
                                >
                                    <Spin />
                                </div>
                                :
                                <Core.Button
                                    submit
                                    className='text-[18px] leading-[20px] rounded-full py-[18px]'
                                >
                                    Sign Up
                                </Core.Button>
                            }
                            <p className='text-gray-6 text-[18px] leading-[24px]'>
                                Already have an account?
                                <a className='text-purple-1 underline'>
                                    <NavLink to='/'> Login</NavLink>
                                </a>
                            </p>
                        </div>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default RegisterPage;
