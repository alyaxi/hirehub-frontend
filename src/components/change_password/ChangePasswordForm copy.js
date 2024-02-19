
import { Core } from '..';
import { changePasswordByUser } from '../../Slices/Auth/authSlice';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import notificationService from '../../utilis/notification';
import { ToastContainer } from 'react-toastify';
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().required('New Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

function ChangePasswordForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [data] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    // const formik = useFormik({
    //     onSubmit: (values) => {
    //         try {
    //             dispatch(changePasswordByUser({ password: values.oldPassword, newPassword: values.newPassword })).unwrap().then(res => {
    //                 console.log(res);
    //                 notificationService.success(res.data)
    //                 setTimeout(() => {
    //                     navigate('/', { replace: true })
    //                 }, 2000)
    //             }).catch(error => {
    //                 console.log(error);
    //                 notificationService.error(error.message)
    //             })
    //         } catch (error) {
    //             console.log(error)
    //             notificationService.error(error)
    //         }
    //     },
    //     onReset: () => {
    //         console.log("clickeddddddddd")
    //         navigate(-1)
    //     },
    // });

    const handleSubmit = (values, { isSubmitting }) => {
        try {
            dispatch(changePasswordByUser({ password: values.oldPassword, newPassword: values.newPassword })).unwrap().then(res => {
                console.log(res);
                notificationService.success(res.data)
                setTimeout(() => {
                    navigate('/', { replace: true })
                }, 2000)
            }).catch(error => {
                console.log(error);
                notificationService.error(error.message)
            })
        } catch (error) {
            console.log(error)
            notificationService.error(error)
        }
    };


    return (
        <Formik
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form>
                    <Core.Card className={'p-5'} w840 border>
                        <ToastContainer></ToastContainer>
                        <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Change Password</h5>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4">
                                <Field name="oldPassword">
                                    {({ field }) => (
                                        <Core.InputWithLabel
                                            {...field}
                                            name="oldPassword"
                                            // label="Old Password"
                                            label
                                            // value={formik.values.oldPassword}
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // error={formik.touched.oldPassword && formik.errors.oldPassword}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="mb-4">
                                <Field name="newPassword">
                                    {({ field }) => (
                                        <Core.InputWithLabel
                                            {...field}
                                            name="newPassword"
                                            // label="New Password"
                                            label
                                            // value={formik.values.newPassword}
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // error={formik.touched.newPassword && formik.errors.newPassword}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="mb-4">
                                <Field name="confirmPassword">
                                    {({ field }) => (
                                        <Core.InputWithLabel
                                            {...field}
                                            name="confirmPassword"
                                            // label="Confirm Password"
                                            label
                                            // value={formik.values.confirmPassword}
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className='flex justify-start gap-x-3'>
                                <Core.Button type="submit" disabled={!formik.isValid}>Submit</Core.Button>
                                <Core.Button type="button" color="white" onClick={formik.handleReset}>Cancel</Core.Button>
                            </div>
                        </form>
                    </Core.Card>
                </Form>
            )}
        </Formik >
    );
}

export default ChangePasswordForm;
