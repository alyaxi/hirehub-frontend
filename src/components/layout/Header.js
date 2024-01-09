
import { Dropdown } from '../core';
import Icon from '../icon';
import { useDispatch, useSelector } from 'react-redux';

function Header({ toggleSidebar }) {
    const user = useSelector((state) => state.auth.user);

    // console.log(user, "user header");

    return (
        <header className="relative flex items-center justify-between text-gray border-l-[1px] border-gray-5 bg-white shadow-md px-6 py-3">
            <div className='flex justify-start items-center gap-x-4'>
                <span className="block md:hidden text-[20px] cursor-pointer"
                    onClick={toggleSidebar}>
                    <Icon name="BurgerMenu" />
                </span>
                <h6 className='text-gray-6 text-[20px] leading-[20px] capitalize font-semibold'>Welcome, {user?.name}</h6>
            </div>
            <div className='flex justify-end items-center gap-x-7'>
                <span className='text-gray-6 text-[19px] cursor-pointer'>
                    <Icon name="Search" />
                </span>
                <div className="relative cursor-pointer">
                    <div className="top-[-11px] absolute left-[13px]">
                        <p className="flex h-1 min-w-1 items-center justify-center text-white text-[10px] rounded-full bg-red-500 px-[5px] py-2">3</p>
                    </div>
                    <span className='text-gray-6 text-[19px]'>
                        <Icon name="Bell2" />
                    </span>
                </div>
                <div className="relative cursor-pointer">
                    <div className="top-[-11px] absolute left-[13px]">
                        <p className="flex h-1 min-w-1 items-center justify-center text-white text-[10px] rounded-full bg-red-500 px-[5px] py-2">64</p>
                    </div>
                    <span className='text-gray-6 text-[19px]'>
                        <Icon name="Envelope" />
                    </span>
                </div>
                <span className='w-[1px] h-[40px] bg-gray-7'>
                </span>
                <Dropdown />
            </div>
        </header>
    )
}

export default Header