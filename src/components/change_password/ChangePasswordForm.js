
import { Core } from '..';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { changePasswordByUser } from '../../Slices/Auth/authSlice';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import notificationService from '../../utilis/notification';
import { ToastContainer } from 'react-toastify';

const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~=\`{}\[\]:";'<>?,.\/]).*$/,
            'Password must contain at least one uppercase letter and one special character'
        )
        .required('Password is required'),
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
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => {
            try {
                dispatch(changePasswordByUser({ password: values.oldPassword, newPassword: values.newPassword })).unwrap().then(res => {
                    console.log('res tttt', res);
                    notificationService.success(res.data)
                    // console.log("aaaa 1111")
                    setTimeout(() => {
                        // console.log("aaaa 2222")
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
            console.log("aaaa clickeddddddddd")
            navigate(-1)
        },
    });

    return (
        <Core.Card className={'p-5'} w840 border>
            <ToastContainer></ToastContainer>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Change Password</h5>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <Core.InputWithLabel
                        name="oldPassword"
                        // label="Old Password"
                        label
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
                        // label="New Password"
                        label
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
                        // label="Confirm Password"
                        label
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        required
                    />
                </div>
                <div className='flex justify-start gap-x-3'>
                    <Core.Button submit disabled={!formik.isValid}>Submit</Core.Button>
                    <Core.Button type="button" color="white" onClick={formik.handleReset}>Cancel</Core.Button>
                </div>
            </form>
        </Core.Card>
    );
}

export default ChangePasswordForm;
