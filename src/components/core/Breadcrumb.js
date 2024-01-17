import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../icon';

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
                        <React.Fragment key={value?.label + index}>
                            {value?.link &&
                                <li className={`inline-flex items-center`}>
                                    <NavLink to={value?.link} className="flex items-center text-purple-6 hover:text-blue-600 text-[14px] leading-[20px] font-medium">{value?.label}</NavLink>
                                    <Icon name="ChevronRight" className="flex-shrink-0 mx-2 overflow-visible h-2.5 w-2.5 text-gray-400" />
                                </li>
                            }
                            {!value?.link &&
                                <li className="inline-flex items-center text-gray-6 text-[14px] leading-[20px] font-medium select-none">
                                    {value?.label}
                                    {index + 1 !== breadcrumb.length &&
                                        <Icon name="ChevronRight" className="flex-shrink-0 mx-2 overflow-visible h-2.5 w-2.5 text-gray-400" />
                                    }
                                </li>
                            }
                        </React.Fragment>
                    )
                })}
            </ol>
        </div>
    );
}

export default Breadcrumb;
