import React from 'react';
import { AuthLayout, Core } from '../../../components';
import image from "../../../assets/images/logo/logo.png";
import { useParams, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import notificationService from '../../../utilis/notification';
import { recoverPasswordOutside } from '../../../Slices/Auth/authSlice';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('New Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

function NewPasswordPage() {
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // Function to handle form submission
    const onSubmit = (values) => {
        try {
            dispatch(recoverPasswordOutside({token, password: values.newPassword})).unwrap().then(res => {
               console.log(res, "ressssponsee");
               notificationService.success(res.data.msg)
               setTimeout(()=>{navigate('/', { replace: true })},2000);
            
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
            <img src={image} className='w-[360px]' alt="Logo" />
            <h1 className='text-black-3 text-[42px] leading-[57px] tracking-[0.5px] font-regular'>
                New Password
            </h1>
            <Formik
                initialValues={{ newPassword: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form className="flex flex-col gap-y-9 max-w-[600px] mb-3 mt-5">
                        <div>
                            <div className="mb-3">
                                <Field type='text' name='newPassword'>
                                    {({ field }) => (
                                        <>
                                            <Core.InputWithLabel
                                                label='newPassword'
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                className='py-5'
                                                bgGray
                                            />
                
                                            <ErrorMessage name="newPassword" component="div" className="text-red-500 text-sm" />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className="mb-3">
                                <Field type='text' name='confirmPassword'>
                                    {({ field }) => (
                                        <>
                                            <Core.InputWithLabel
                                                label='confirmPassword'
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                className='py-5'
                                                bgGray
                                            />
                
                                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                                        </>
                                    )}
                                </Field>
                            </div>
                        </div>
                        <Core.Button type="submit" className="text-[18px] leading-[20px] py-[18px]">
                            Submit
                        </Core.Button>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
}

export default NewPasswordPage;
