import { BsFolder, BsCardText } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { FaBeer } from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import {
    GoChevronLeft,
    GoChevronDown
} from "react-icons/go";
import {
    HiOutlineUsers,
    HiOutlineBriefcase,
    HiOutlineBell
} from "react-icons/hi2";
import {
    IoEyeOffOutline, IoEyeOutline, IoLockOpen,
    IoMailOutline, IoSearchOutline
} from "react-icons/io5";
import {
    LuMenu,
    LuBookMinus
} from "react-icons/lu";
import {
    TbAdjustments,
    TbLogout2
} from "react-icons/tb";

const App = (props) => {
    return (
        <svg
            {...props}
            width="20" height="20"
            viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H5.5C6.88071 0 8 1.11929 8 2.5V5.5C8 6.88071 6.88071 8 5.5 8H2.5C1.11929 8 0 6.88071 0 5.5V2.5ZM2.5 2H5.5C5.77614 2 6 2.22386 6 2.5V5.5C6 5.77614 5.77614 6 5.5 6H2.5C2.22386 6 2 5.77614 2 5.5V2.5C2 2.22386 2.22386 2 2.5 2Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C10 1.11929 11.1193 0 12.5 0H15.5C16.8807 0 18 1.11929 18 2.5V5.5C18 6.88071 16.8807 8 15.5 8H12.5C11.1193 8 10 6.88071 10 5.5V2.5ZM12.5 2H15.5C15.7761 2 16 2.22386 16 2.5V5.5C16 5.77614 15.7761 6 15.5 6H12.5C12.2239 6 12 5.77614 12 5.5V2.5C12 2.22386 12.2239 2 12.5 2Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C11.1193 10 10 11.1193 10 12.5V15.5C10 16.8807 11.1193 18 12.5 18H15.5C16.8807 18 18 16.8807 18 15.5V12.5C18 11.1193 16.8807 10 15.5 10H12.5ZM15.5 12H12.5C12.2239 12 12 12.2239 12 12.5V15.5C12 15.7761 12.2239 16 12.5 16H15.5C15.7761 16 16 15.7761 16 15.5V12.5C16 12.2239 15.7761 12 15.5 12Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.5C0 11.1193 1.11929 10 2.5 10H5.5C6.88071 10 8 11.1193 8 12.5V15.5C8 16.8807 6.88071 18 5.5 18H2.5C1.11929 18 0 16.8807 0 15.5V12.5ZM2.5 12H5.5C5.77614 12 6 12.2239 6 12.5V15.5C6 15.7761 5.77614 16 5.5 16H2.5C2.22386 16 2 15.7761 2 15.5V12.5C2 12.2239 2.22386 12 2.5 12Z" fill="currentColor" />
        </svg>
    )
}
const User = (props) => {
    return (
        <svg
            {...props}
            width="20" height="20"
            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0999 10.6497C10.0416 10.6414 9.9666 10.6414 9.89993 10.6497C8.43327 10.5997 7.2666 9.39974 7.2666 7.92474C7.2666 6.41641 8.48327 5.19141 9.99993 5.19141C11.5083 5.19141 12.7333 6.41641 12.7333 7.92474C12.7249 9.39974 11.5666 10.5997 10.0999 10.6497Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.6166 16.1498C14.1333 17.5081 12.1666 18.3331 9.99997 18.3331C7.8333 18.3331 5.86663 17.5081 4.3833 16.1498C4.46663 15.3665 4.96663 14.5998 5.8583 13.9998C8.14163 12.4831 11.875 12.4831 14.1416 13.9998C15.0333 14.5998 15.5333 15.3665 15.6166 16.1498Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
const Users = (props) => {
    return (
        <svg
            {...props}
            width="20" height="20"
            viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.58231 9.0289C6.49768 9.02043 6.39613 9.02043 6.30304 9.0289C4.28891 8.96119 2.68945 7.31096 2.68945 5.27991C2.68945 3.20654 4.36507 1.52246 6.4469 1.52246C8.52027 1.52246 10.2043 3.20654 10.2043 5.27991C10.1959 7.31096 8.59643 8.96119 6.58231 9.0289Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.7179 3.21484C14.3597 3.21484 15.6799 4.54349 15.6799 6.1768C15.6799 7.77625 14.4105 9.07951 12.8279 9.13875C12.7602 9.13029 12.6841 9.13029 12.6079 9.13875" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.35093 12.1517C0.302947 13.5227 0.302947 15.7569 2.35093 17.1194C4.67817 18.6765 8.49486 18.6765 10.8221 17.1194C12.8701 15.7484 12.8701 13.5142 10.8221 12.1517C8.50333 10.6031 4.68664 10.6031 2.35093 12.1517Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.3511 16.7554C14.9604 16.6284 15.5359 16.383 16.0098 16.0191C17.33 15.029 17.33 13.3957 16.0098 12.4055C15.5443 12.0501 14.9773 11.8131 14.3765 11.6777" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
// currentColor
const Search = (props) => {
    return (
        <svg
            {...props}
            width="20" height="20"
            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7847 15.1991C10.6462 17.6416 6.10654 17.4205 3.22181 14.5358C0.0976136 11.4116 0.0976136 6.34625 3.22181 3.22205C6.346 0.0978578 11.4113 0.0978578 14.5355 3.22205C17.4202 6.10677 17.6414 10.6464 15.1989 13.7849L19.4853 18.0713C19.8758 18.4618 19.8758 19.095 19.4853 19.4855C19.0948 19.876 18.4616 19.876 18.0711 19.4855L13.7847 15.1991ZM4.63602 13.1215C6.97917 15.4647 10.7782 15.4647 13.1213 13.1215C15.4644 10.7784 15.4644 6.97941 13.1213 4.63627C10.7782 2.29312 6.97917 2.29312 4.63602 4.63627C2.29288 6.97941 2.29288 10.7784 4.63602 13.1215Z" fill="currentColor" />
        </svg>
    )
}

const Bell1 = (props) => {
    return (
        <svg  {...props}
            width="20" height="20"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0005 6.99902V9.9985" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M12.0186 3C8.70385 3 6.01963 5.68422 6.01963 8.99896V10.8905C6.01963 11.503 5.76742 12.4218 5.45216 12.9442L4.30822 14.8538C3.60564 16.0338 4.09204 17.3489 5.38911 17.7812C9.69467 19.2134 14.3515 19.2134 18.6571 17.7812C19.8731 17.3759 20.3955 15.9527 19.738 14.8538L18.594 12.9442C18.2788 12.4218 18.0266 11.494 18.0266 10.8905V8.99896C18.0175 5.70223 15.3153 3 12.0186 3Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M15 18.1504C15 19.7988 13.6489 21.1499 12.0005 21.1499C11.1808 21.1499 10.4242 20.8076 9.88377 20.2671C9.34332 19.7267 9.00104 18.9701 9.00104 18.1504" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
        </svg>
    )
}

const Bell2 = (props) => {
    return (
        <svg
            {...props}
            width="20" height="20"
            viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V1.57088C3.60769 2.0561 0.999966 4.97352 0.999966 8.5V13.5L0.282371 14.7558C-0.289049 15.7558 0.433002 17 1.58474 17H4.12602C4.57006 18.7252 6.13616 20 8 20C9.86384 20 11.4299 18.7252 11.874 17H14.4152C15.5669 17 16.289 15.7558 15.7176 14.7558L15 13.5V8.5C15 4.97354 12.3923 2.05614 9 1.57089V1ZM2.99997 14.0311L2.44633 15H13.5536L13 14.0311V8.5C13 5.73858 10.7614 3.5 7.99997 3.5C5.23854 3.5 2.99997 5.73858 2.99997 8.5V14.0311ZM8 18C7.25972 18 6.61337 17.5978 6.26756 17H9.73244C9.38663 17.5978 8.74028 18 8 18Z" fill="currentColor" />
        </svg>
    )
}

export {
    BsFolder,
    BsCardText,
    CiFileOn,
    FaBeer,
    FaRegCircleUser,
    FiPackage,
    GoChevronLeft,
    GoChevronDown,
    HiOutlineUsers,
    HiOutlineBriefcase,
    HiOutlineBell,
    IoEyeOffOutline,
    IoEyeOutline,
    IoLockOpen,
    IoMailOutline,
    IoSearchOutline,
    LuMenu,
    LuBookMinus,
    TbAdjustments,
    TbLogout2,
    // -----
    App,
    Search,
    Bell1,
    Bell2,
    User,
    Users,
}