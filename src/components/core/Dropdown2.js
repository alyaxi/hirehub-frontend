import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Icons } from '..';

export default function Dropdown2({ options, setState, className, menuWidth, defaultTitle, selectedState }) {
    console.log("defaultTitle",defaultTitle)
    const [selectedOption, setSelectedOption] = useState(defaultTitle);
    const handleOptionClick = (value) => {
        setSelectedOption(value);
        setState(value);
    };

    let textColor = selectedOption === ('Status' || 'Job Status' || 'Stage') ? 'text-gray-400' : 'text-black-1';

    return (
        <Menu as="div" className={`relative inline-block text-left ${className}`} defaultValue={selectedOption}>
            <Menu.Button className={`inline-flex w-full justify-between items-center gap-x-1.5 rounded-[8px] bg-white px-3 py-[9px] text-sm whitespace-nowrap text-gray-6 border border-gray-11`}>
                <span className={`${textColor} text-[14px] leading-[20px] capitalize font-regular`}>{selectedOption}</span>
                <Icons.GoChevronDown className="ml-1 h-4 w-4 text-gray-1" aria-hidden="true" />
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
                <Menu.Items defaultValue={selectedState} className={`absolute z-[2] right-0 mt-2 min-w-full ${menuWidth} origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}>
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
