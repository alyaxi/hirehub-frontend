import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Icons } from '..';

export default function Dropdown2({ options, setState, className, menuWidth, defaultTitle, selectedState,status }) {
    // console.log({selectedState})
    const [selectedOption, setSelectedOption] = useState(selectedState); // Set the default selected option
    const handleOptionClick = (value) => {
        setSelectedOption(value);
        setState(value);
    };
   
    return (
        <Menu as="div" className={`relative inline-block text-left ${className}`} defaultValue={selectedOption}>
            <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-[8px] bg-white px-3 py-[10px] text-sm whitespace-nowrap font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <span className='text-black-1 text-[14px] leading-[20px] capitalize font-medium'>{selectedState && selectedOption}</span>
                <Icons.GoChevronDown className="ml-1 h-5 w-5 text-gray-1 hover:text-violet-100" aria-hidden="true" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items defaultValue={selectedOption} className={`absolute z-[2] right-0 mt-2 min-w-full ${menuWidth} origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}>
                    <div className="px-1 py-1">
                        {options?.map((value, index) => (
                            <Menu.Item key={index * 7}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                            } group w-full text-left text-sm capitalize rounded-md px-2 py-2`}
                                        onClick={() => handleOptionClick(value)}
                                    >
                                        {value}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
