import React from 'react';
import { AuthCard, AuthLayout, Core } from '../../../components';
import "../../../assets/css/login";
import { NavLink } from 'react-router-dom';

const userTypeOptions = [
    { name: "Employeer", value: "employeer" },
    { name: "Candidate", value: "candidate" },
]

function RegisterPage() {
    return (
        <AuthLayout>
            <AuthCard>
                <form className="mb-3">
                    <div className="mb-3">
                        <Core.InputWithLabel label name="username" />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="email" />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="password" />
                    </div>
                    <div className="mb-3">
                        <Core.SelectWithLabel label name="userType" options={userTypeOptions} />
                    </div>
                    <div className="mb-4 mt-4">
                        <div className="flex justify-start items-center gap-x-2 w-100">
                            <input className="w-5 h-5 rounded-[20px]" type="checkbox" id="terms-conditions" name="terms" />
                            <label className="text-gray-1" for="terms-conditions">
                                I agree to
                                <a className='text-purple-1'><NavLink to="#"> privacy policy & terms</NavLink></a>
                            </label>
                        </div>
                    </div>
                    <Core.Button>Register</Core.Button>
                    <p className="text-gray-1 text-center mt-3">
                        <span>Already have an account?</span>
                        <a className='text-purple-1'>
                            <NavLink to="/"> Login</NavLink>
                        </a>
                    </p>
                </form>
            </AuthCard>
        </AuthLayout>
    )
}

export default RegisterPage