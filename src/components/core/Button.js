import React from 'react';
import Icon from '../icon';

function Button({ children, onClick, submit, type, color, icon, className, sm, isDisabled,iconSize }) {
    // console.log("isDisabled",isDisabled)
    return (
        <button
            onClick={onClick}
            disabled={isDisabled ? true : false}
            className={`
            ${type === "narrow" ? "" : 'w-full'}
            text-[14px] leading-[20px] tracking-[0.5px] font-semibold
                ${!color && 'text-white'}
                rounded-[8px] 
                ${!color && 'bg-gradient-to-r from-purple-2 to-purple-3 '}
                ${!color && 'border border-purple-3'}
                
                ${color === "white" && 'bg-white'}
                ${color === "white" && 'text-gray-8'}
                ${color === "white" && 'border border-gray-8'}

                ${color === "red" && 'text-white'}
                ${color === "red" && 'bg-red-500'}
                ${color === "red" && 'text-gray-8'}
                ${color === "red" && 'border border-red-500'}

                hover:translate-y-[-1px] transition-all
                ${sm ? 'py-[9px]' : 'py-[10px]'}                
                 px-5
                ${className}

                ${isDisabled && "opacity-50"}
             `}
            type={submit === "submit"}
            // type={submit && "submit"}
        >
            <div className='flex justify-center items-center gap-x-1 whitespace-nowrap'>
                {icon &&
                    <span className='mb-0.5'><Icon name={icon} size={`${iconSize ? iconSize : '12'}`} /></span>
                }
                {children}
            </div>
        </button>
    )
}

export default Button