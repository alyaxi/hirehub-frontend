import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Icons } from '..';
import Icon from '../icon';

export default function OptionsDropdown({ options, setState, className, menuWidth, defaultTitle, selectedState, showFrom }) {

    console.log("showFrom", showFrom)

    const [selectedOption, setSelectedOption] = useState(defaultTitle);
    const handleOptionClick = (value) => {
        setSelectedOption(value);
        setState(value);
    };

    let textColor = selectedOption === ('Status' || 'Job Status' || 'Stage') ? 'text-gray-400' : 'text-black-1';

    return (
        <Menu as="div" className={`relative inline-block text-left ${className}`} defaultValue={selectedOption}>
            <Menu.Button className={`flex justify-center items-center w-[25px] h-[25px] bg-white rounded-[50px] px-1 py-2 text-sm text-gray-6 transition hover:bg-gray-100`}>
                <Icon name="Options" />
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
                <Menu.Items defaultValue={selectedState} className={`absolute z-[999] ${showFrom ? showFrom + '-0' : 'left-0'} mt-2 min-w-full ${menuWidth} origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}>
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
        </Menu >
    );
}
