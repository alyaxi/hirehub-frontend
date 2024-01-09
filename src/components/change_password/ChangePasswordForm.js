
import { Core } from '..';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { changePasswordByUser } from '../../Slices/Auth/authSlice';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import notificationService from '../../utilis/notification';
import { ToastContainer } from 'react-toastify';




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
    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
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
        },
        onReset: () => {
            console.log("clickeddddddddd")
            navigate(-1)
        },
    });

    return (
        <Core.Card w840 border>
            <ToastContainer></ToastContainer>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Change Password</h5>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <Core.InputWithLabel
                        name="oldPassword"
                        label="Old Password"
                        value={formik.values.oldPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.oldPassword && formik.errors.oldPassword}
                        required
                    />
                </div>
                <div className="mb-4">
                    <Core.InputWithLabel
                        name="newPassword"
                        label="New Password"
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.newPassword && formik.errors.newPassword}
                        required
                    />
                </div>
                <div className="mb-4">
                    <Core.InputWithLabel
                        name="confirmPassword"
                        label="Confirm Password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        required
                    />
                </div>
                <div className='flex justify-start gap-x-3'>
                    <Core.Button type="submit" disabled={!formik.isValid}>Submit</Core.Button>
                    <Core.Button type="button" color="white" onClick={formik.handleReset}>Cancel</Core.Button>
                </div>
            </form>
        </Core.Card>
    );
}

export default ChangePasswordForm;
