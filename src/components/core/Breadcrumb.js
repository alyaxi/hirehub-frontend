import React from 'react';
import { NavLink } from 'react-router-dom';

function Breadcrumb({
    heading,
    breadcrumb
}) {
    return (
        <div className='mb-5'>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium'>{heading}</h5>
            <ol className="flex items-center whitespace-nowrap mt-1.5" aria-label="Breadcrumb">
                {breadcrumb.map((value, index) => {
                    return (
                        <>
                            {value?.link &&
                                <li className="inline-flex items-center">
                                    <a className="flex items-center text-purple-6 hover:text-blue-600 text-[14px] leading-[20px] font-medium" >
                                        <NavLink to={value?.link}>{value?.label}</NavLink>
                                    </a>
                                    <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </li>
                            }
                            {!value?.link &&
                                <li className="inline-flex items-center text-gray-6 text-[14px] leading-[20px] font-medium select-none">
                                    {value?.label}
                                    {index + 1 !== breadcrumb.length &&
                                        <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    }
                                </li>
                            }
                        </>
                    )
                })}
            </ol>
        </div>
    );
}

export default Breadcrumb;
