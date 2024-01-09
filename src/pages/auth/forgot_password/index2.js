import React, { useState } from 'react';
import { AuthCard, AuthLayout, Core, Icons } from '../../../components';
import "../../../assets/css/login";
import { NavLink } from 'react-router-dom';


function ForgotPasswordPage() {
    const [emai, setEmail] = useState("")

    const handleSubmit = (e) => {
        
    }
    return (
        <AuthLayout>
            <AuthCard>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-content-start">
                        <h6 className='text-[22px] font-medium'>Forgot Password?</h6>
                        <span className='text-black text-[20px] mt-[6px] ml-1'>
                            <Icons.IoLockOpen />
                        </span>
                    </div>
                    <p className='text-gray-1 text-[16px] mb-4'>
                        Enter your email and we'll send you instructions to reset your password
                    </p>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="email" />
                    </div>
                    <Core.Button>Send Reset Link</Core.Button>
                    <div className="text-center mt-3">
                        <a className="flex items-center justify-center text-purple-1 cursor-pointer" >
                            <span className='text-[22px] mt-[2px] mr-1'><Icons.GoChevronLeft /></span>
                            <NavLink to="/login">Back to login</NavLink>
                        </a>
                    </div>
                </form>
            </AuthCard>
        </AuthLayout>
    )
}

export default ForgotPasswordPage