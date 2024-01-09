import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Icons } from '..';


function UploadFile({ label, name, required, helperText, accept, onChange }) {

    const _label = (name) => {
        switch (name) {
            case "logo":
                return "Logo";
            case "welcomeVideo":
                return "Welcome Video";


            default:
                return "Label";
        }
    }

    return (
        <>
            <div className="flex justify-between items-center">
                {label &&
                    <label for={name} className={`
                    block text-[14px] font-medium text-gray-2 tracking-wide ${helperText ? 'mb-1.5' : 'mb-2'} capitalize
                    `}>
                        {_label(name)}{required && <span className='text-[red]'>*</span>}
                    </label>
                }
            </div>
            <div className="flex items-center space-x-6 mb-4">
                {/* <div className="shrink-0">
                    <img className="h-10 w-10 object-cover rounded-md" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                </div> */}
                <label className="block">
                    {helperText &&
                        <p className='text-gray-12 text-[14px] leading-[16px] mb-1.5'>
                            {helperText}
                        </p>
                    }
                    <span className="sr-only">Choose profile photo</span>
                    <input type="file" accept={accept} required onChange={onChange} className="block w-full text-gray-8
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        "/>
                </label>
            </div>
        </>
    )
}

export default UploadFile