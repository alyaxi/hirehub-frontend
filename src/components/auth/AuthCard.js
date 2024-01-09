import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo/logo.png";

function AuthCard({ children }) {
    return (
        <div className="relative max-w-[400px] rounded-lg border border-solid border-gray-300 bg-white shadow-md mx-auto">
            <div className="pt-9 px-[1rem] py-[1.5rem]">
                <a>
                    <NavLink to="/">
                        <img src={logo} className="w-100" />
                    </NavLink>
                </a>
                {children}
            </div>
        </div>
    )
}

export default AuthCard