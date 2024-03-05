const Icon = ({ name, size, ...props }) => {
    const iconMap = {
        App: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.7" y="0.7" width="6.6" height="6.6" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
                <rect x="10.7" y="0.7" width="6.6" height="6.6" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
                <rect x="0.7" y="10.7" width="6.6" height="6.6" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
                <rect x="10.7" y="10.7" width="6.6" height="6.6" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
            </svg>
        ),
        Briefcase: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66685 18.3333H13.3335C16.6835 18.3333 17.2835 16.9917 17.4585 15.3583L18.0835 8.69167C18.3085 6.65833 17.7252 5 14.1668 5H5.83351C2.27518 5 1.69185 6.65833 1.91685 8.69167L2.54185 15.3583C2.71685 16.9917 3.31685 18.3333 6.66685 18.3333Z" stroke="currentColor" strokeWidth="1.15" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.6665 5.00033V4.33366C6.6665 2.85866 6.6665 1.66699 9.33317 1.66699H10.6665C13.3332 1.66699 13.3332 2.85866 13.3332 4.33366V5.00033" stroke="currentColor" strokeWidth="1.15" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.6668 10.8333V11.6667C11.6668 11.675 11.6668 11.675 11.6668 11.6833C11.6668 12.5917 11.6585 13.3333 10.0002 13.3333C8.35016 13.3333 8.3335 12.6 8.3335 11.6917V10.8333C8.3335 10 8.3335 10 9.16683 10H10.8335C11.6668 10 11.6668 10 11.6668 10.8333Z" stroke="currentColor" strokeWidth="1.15" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.0415 9.16699C16.1165 10.567 13.9165 11.4003 11.6665 11.6837" stroke="currentColor" strokeWidth="1.15" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.18311 9.3916C4.05811 10.6749 6.17477 11.4499 8.33311 11.6916" stroke="currentColor" strokeWidth="1.15" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        BriefcaseTick: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 36.4004C28.4183 36.4004 32 32.8187 32 28.4004C32 23.9821 28.4183 20.4004 24 20.4004C19.5817 20.4004 16 23.9821 16 28.4004C16 32.8187 19.5817 36.4004 24 36.4004Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.8799 28.5996L22.1799 29.8996C22.5599 30.2796 23.1799 30.2796 23.5599 29.9196L27.1199 26.6396" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.9999 44H31.9999C40.0399 44 41.4799 40.78 41.8999 36.86L43.3999 20.86C43.9399 15.98 42.5399 12 33.9999 12H13.9999C5.4599 12 4.0599 15.98 4.5999 20.86L6.0999 36.86C6.5199 40.78 7.9599 44 15.9999 44Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 12V10.4C16 6.86 16 4 22.4 4H25.6C32 4 32 6.86 32 10.4V12" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M43.3 22C39.84 24.52 36 26.28 32.02 27.28" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.23999 22.54C8.57999 24.82 12.22 26.44 16 27.36" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Bell1: (
            <svg  {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00049 4.9993V7.99878" stroke="currentColor" strokeWidth="1.12593" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M9.01859 1C5.70385 1 3.01963 3.68422 3.01963 6.99896V8.89052C3.01963 9.50303 2.76742 10.4218 2.45216 10.9442L1.30822 12.8538C0.605636 14.0338 1.09204 15.3489 2.38911 15.7812C6.69467 17.2134 11.3515 17.2134 15.6571 15.7812C16.8731 15.3759 17.3955 13.9527 16.738 12.8538L15.594 10.9442C15.2788 10.4218 15.0266 9.49402 15.0266 8.89052V6.99896C15.0175 3.70223 12.3153 1 9.01859 1Z" stroke="currentColor" strokeWidth="1.12593" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M11.9999 16.1505C11.9999 17.7989 10.6488 19.15 9.00046 19.15C8.18078 19.15 7.42415 18.8077 6.88371 18.2673C6.34326 17.7268 6.00098 16.9702 6.00098 16.1505" stroke="currentColor" strokeWidth="1.12593" strokeMiterlimit="10" />
            </svg>

        ),
        Bell2: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V1.57088C3.60769 2.0561 0.999966 4.97352 0.999966 8.5V13.5L0.282371 14.7558C-0.289049 15.7558 0.433002 17 1.58474 17H4.12602C4.57006 18.7252 6.13616 20 8 20C9.86384 20 11.4299 18.7252 11.874 17H14.4152C15.5669 17 16.289 15.7558 15.7176 14.7558L15 13.5V8.5C15 4.97354 12.3923 2.05614 9 1.57089V1ZM2.99997 14.0311L2.44633 15H13.5536L13 14.0311V8.5C13 5.73858 10.7614 3.5 7.99997 3.5C5.23854 3.5 2.99997 5.73858 2.99997 8.5V14.0311ZM8 18C7.25972 18 6.61337 17.5978 6.26756 17H9.73244C9.38663 17.5978 8.74028 18 8 18Z" fill="currentColor" />
            </svg>
        ),
        Book: (
            <svg
                {...props}
                width={size ? size : "16"}
                height={size ? size : "18"}
                viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13.9412V4.88236C1 1.58824 1.82353 0.764709 5.11765 0.764709H10.8824C14.1765 0.764709 15 1.58824 15 4.88236V13.1177C15 13.2329 15 13.3482 14.9918 13.4635" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.34706 11.4706H15V14.3529C15 15.9423 13.7071 17.2353 12.1176 17.2353H3.88235C2.29294 17.2353 1 15.9423 1 14.3529V13.8176C1 12.5247 2.05412 11.4706 3.34706 11.4706Z" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.70587 4.88235H11.2941" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.70587 7.76471H8.82352" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        BurgerMenu: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1Z" fill="currentColor" />
                <path d="M0 6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H1C0.447715 7 0 6.55228 0 6Z" fill="currentColor" />
                <path d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H1Z" fill="currentColor" />
            </svg>
        ),
        Calender1: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "18"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 1.66699V4.16699" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3335 1.66699V4.16699" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.9165 7.5752H17.0832" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 7.08366V14.167C17.5 16.667 16.25 18.3337 13.3333 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.99607 11.4167H10.0036" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.91209 11.4167H6.91957" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.91209 13.9167H6.91957" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Calender2: (
            <svg
                {...props}
                width={size ? size : "22"}
                height={size ? size : "22"}
                viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33301 1.83334V4.58334" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M14.667 1.83334V4.58334" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M3.20801 8.33281H18.7913" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M19.25 7.79167V15.5833C19.25 18.3333 17.875 20.1667 14.6667 20.1667H7.33333C4.125 20.1667 2.75 18.3333 2.75 15.5833V7.79167C2.75 5.04167 4.125 3.20834 7.33333 3.20834H14.6667C17.875 3.20834 19.25 5.04167 19.25 7.79167Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M14.3849 12.5581H14.3932" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M14.3849 15.3081H14.3932" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M10.9953 12.5581H11.0035" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M10.9953 15.3081H11.0035" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M7.60271 12.5581H7.61095" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M7.60271 15.3081H7.61095" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>

        ),
        Cross: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8747 9.99361C11.2001 10.319 11.2001 10.8467 10.8747 11.1721C10.5492 11.4975 10.0216 11.4975 9.69615 11.1721L5.7021 7.17812L1.70816 11.1721C1.38273 11.4976 0.855089 11.4976 0.529649 11.1721C0.204209 10.8467 0.204204 10.3191 0.529639 9.99362L4.52357 5.99962L0.52948 2.00559C0.20404 1.68015 0.204041 1.15252 0.529481 0.827084C0.85492 0.50165 1.38256 0.501649 1.708 0.827083L5.70208 4.8211L9.696 0.827098C10.0214 0.501658 10.5491 0.501655 10.8745 0.827089C11.2 1.15252 11.2 1.68016 10.8745 2.0056L6.8806 5.9996L10.8747 9.99361Z" fill="currentColor" />
            </svg>
        ),
        Clock: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7.5C14 9.45 13.1388 11.1887 11.79 12.375C10.6363 13.3825 9.14125 14 7.5 14C3.90875 14 1 11.0913 1 7.5C1 5.4525 1.9425 3.61626 3.4375 2.43001C4.55875 1.53626 5.9725 1 7.5 1C11.0913 1 14 3.90875 14 7.5Z" stroke="url(#paint0_linear_2264_71537)" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.90625 5.46875V7.90625L5.875 9.125" stroke="url(#paint1_linear_2264_71537)" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_2264_71537" x1="1" y1="7.5" x2="14" y2="7.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109423" stop-color="#8913FF" />
                        <stop offset="1" stop-color="#7312F7" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_2264_71537" x1="5.875" y1="7.29688" x2="7.90625" y2="7.29688" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109423" stop-color="#8913FF" />
                        <stop offset="1" stop-color="#7312F7" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        ChevronLeft: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.67257 0.41107C6.99801 0.736507 6.99801 1.26414 6.67257 1.58958L2.26183 6.00033L6.67257 10.4111C6.99801 10.7365 6.99801 11.2641 6.67257 11.5896C6.34713 11.915 5.8195 11.915 5.49406 11.5896L0.199432 6.29495C0.0367131 6.13223 0.0367129 5.86842 0.199431 5.7057L5.49406 0.41107C5.8195 0.0856329 6.34713 0.0856329 6.67257 0.41107Z" fill="url(#paint0_linear_2452_28216)" />
                <defs>
                    <linearGradient id="paint0_linear_2452_28216" x1="0.0773926" y1="6.00033" x2="6.91665" y2="6.00033" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109423" stopColor="currentColor" />
                        <stop offset="1" stopColor="#7312F7" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        ChevronRight: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}

                viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.327329 0.41107C0.00189281 0.736507 0.00189281 1.26414 0.327329 1.58958L4.73807 6.00033L0.327329 10.4111C0.00189281 10.7365 0.00189281 11.2641 0.327329 11.5896C0.652766 11.915 1.1804 11.915 1.50584 11.5896L6.80047 6.29495C6.96319 6.13223 6.96319 5.86842 6.80047 5.7057L1.50584 0.41107C1.1804 0.0856329 0.652766 0.0856329 0.327329 0.41107Z" fill="currentColor" />
            </svg>


        ),
        Chat1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3 4.82494V9.41492C19.3 10.5579 18.922 11.5209 18.247 12.1869C17.581 12.8619 16.618 13.2399 15.475 13.2399V14.8689C15.475 15.4809 14.791 15.8499 14.287 15.5079L13.414 14.9319C13.495 14.6529 13.531 14.3469 13.531 14.0229V10.36C13.531 8.52396 12.307 7.29994 10.471 7.29994H4.35999C4.23399 7.29994 4.117 7.30896 4 7.31796V4.82494C4 2.52994 5.53 0.999939 7.825 0.999939H15.475C17.77 0.999939 19.3 2.52994 19.3 4.82494Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.231 10.36V14.023C13.231 14.347 13.195 14.653 13.114 14.932C12.781 16.255 11.683 17.083 10.171 17.083H7.723L5.005 18.892C4.6 19.171 4.05999 18.874 4.05999 18.388V17.083C3.14199 17.083 2.377 16.777 1.846 16.246C1.306 15.706 1 14.941 1 14.023V10.36C1 8.65001 2.062 7.47101 3.7 7.31801C3.817 7.30901 3.93399 7.29999 4.05999 7.29999H10.171C12.007 7.29999 13.231 8.52401 13.231 10.36Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Download: (
            <svg
                {...props}
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Document1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7.4H13.8C11.4 7.4 10.6 6.6 10.6 4.2V1L17 7.4Z" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 10H9.8" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 13H8.2" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 7.4V11.4C17 15.4 15.4 17 11.4 17H6.6C2.6 17 1 15.4 1 11.4V6.6C1 2.6 2.6 1 6.6 1H10.6" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        DocumentText: (
            <svg
                {...props}
                width={size ? size : "19"}
                height={size ? size : "19"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 5.83341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V5.83341C2.5 3.33341 3.75 1.66675 6.66667 1.66675H13.3333C16.25 1.66675 17.5 3.33341 17.5 5.83341Z" stroke="currentColor" strokeWidth="1.35" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.0833 3.75V5.41667C12.0833 6.33333 12.8333 7.08333 13.7499 7.08333H15.4166" stroke="currentColor" strokeWidth="1.35" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66675 10.8333H10.0001" stroke="currentColor" strokeWidth="1.35" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66675 14.1667H13.3334" stroke="currentColor" strokeWidth="1.35" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Delete: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.1375 6.85547L13.65 14.408C13.5675 15.5855 13.5 16.5005 11.4075 16.5005H6.59255C4.50005 16.5005 4.43255 15.5855 4.35005 14.408L3.86255 6.85547" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.74756 12.375H10.2451" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.125 9.375H10.875" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Edit: (
            <svg
                {...props}
                width={size ? size : "19"}
                height={size ? size : "19"}
                viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.3047 5.81991C16.281 4.8436 16.281 3.26069 15.3047 2.28438L14.7155 1.69512C13.7391 0.718813 12.1562 0.718813 11.1799 1.69512L1.69097 11.1841C1.34624 11.5288 1.10982 11.9668 1.01082 12.4442L0.341106 15.6735C0.219324 16.2607 0.739063 16.7805 1.32629 16.6587L4.55565 15.989C5.03302 15.89 5.47103 15.6536 5.81577 15.3089L15.3047 5.81991ZM14.1262 3.46289L13.5369 2.87363C13.2115 2.5482 12.6839 2.5482 12.3584 2.87363L11.4745 3.75755L13.2423 5.52531L14.1262 4.6414C14.4516 4.31596 14.4516 3.78833 14.1262 3.46289ZM12.0638 6.70382L10.296 4.93606L2.86948 12.3626C2.75457 12.4775 2.67577 12.6235 2.64277 12.7826L2.23082 14.769L4.21721 14.3571C4.37634 14.3241 4.52234 14.2453 4.63726 14.1303L12.0638 6.70382Z" fill="currentColor" />
            </svg>

        ),
        Education: (
            <svg
                {...props}
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor" className="w-6 h-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
        ),
        Envelope: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6L10.496 7.60514C9.672 8.13162 8.32 8.13162 7.496 7.60514L5 6" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 15H5C2.6 15 1 13.7647 1 10.8824V5.11765C1 2.23529 2.6 1 5 1H13C15.4 1 17 2.23529 17 5.11765V10.8824C17 13.7647 15.4 15 13 15Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        FileAttachment: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "20"}
                viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_986_95061)">
                    <path d="M15.0222 11.123C15.6036 11.1394 16.1642 11.3471 16.6206 11.7151C18.2712 12.9741 18.4645 14.8413 17.0855 16.4204C16.5632 16.9912 16.0408 17.5193 15.5185 18.0635L13.8261 19.7919C13.781 19.8464 13.7257 19.891 13.6635 19.9233C13.6012 19.9555 13.5333 19.9747 13.4636 19.9797C13.394 19.9847 13.3241 19.9753 13.2581 19.9522C13.192 19.9292 13.1312 19.8928 13.0791 19.8453C12.8493 19.6212 12.8493 19.3492 13.1261 19.0878C14.129 18.0635 15.1424 17.0499 16.1348 16.0096C16.4196 15.7054 16.667 15.3668 16.8713 15.0013C16.9858 14.7947 17.0459 14.5613 17.0459 14.3238C17.0459 14.0864 16.9858 13.853 16.8713 13.6463C16.6196 13.1398 16.2271 12.7204 15.7431 12.4406C15.494 12.2817 15.2063 12.1974 14.9126 12.1974C14.6189 12.1974 14.3311 12.2817 14.082 12.4406C13.7968 12.6109 13.5335 12.817 13.2985 13.0541C12.0727 14.2918 10.8539 15.5366 9.64209 16.7885C9.46065 16.95 9.33189 17.1643 9.27307 17.4027C9.21426 17.6411 9.2282 17.8921 9.31302 18.1222C9.38309 18.3487 9.51715 18.5491 9.69837 18.6981C9.87959 18.8472 10.0999 18.9382 10.3316 18.9597C10.5004 18.9882 10.6734 18.9739 10.8356 18.9181C10.9977 18.8623 11.1439 18.7667 11.2614 18.6396C12.421 17.466 13.5701 16.2817 14.7245 15.1027C14.7767 15.0493 14.8185 14.996 14.8655 14.9426C15.0849 14.6652 15.0954 14.5372 14.923 14.3505C14.7506 14.1638 14.4947 14.0624 14.2231 14.2811C14.0989 14.3866 13.9819 14.5007 13.8731 14.6226L11.7576 16.7565C11.6788 16.8412 11.5798 16.9037 11.4703 16.9378C11.3719 16.9679 11.2663 16.9626 11.1713 16.9228C11.0762 16.883 10.9974 16.8111 10.9479 16.7191C10.8942 16.641 10.8654 16.5479 10.8654 16.4524C10.8654 16.3569 10.8942 16.2638 10.9479 16.1856C10.9793 16.143 11.0159 16.1056 11.0524 16.0629L13.2933 13.7317C13.5401 13.4367 13.8735 13.2309 14.244 13.1448C14.5311 13.1006 14.8247 13.1456 15.0865 13.274C15.3482 13.4025 15.5661 13.6084 15.7117 13.865C15.8681 14.0679 15.9552 14.3173 15.9599 14.5754C15.9646 14.8335 15.8867 15.0861 15.7379 15.2947C15.6375 15.4614 15.5183 15.6153 15.3827 15.7535C14.244 16.9272 13.1052 18.1008 11.9509 19.2585C11.6772 19.5553 11.3275 19.7677 10.9415 19.8714C10.5555 19.9752 10.1487 19.9661 9.76746 19.8453C9.38191 19.7415 9.03283 19.5287 8.76028 19.2315C8.48772 18.9343 8.30273 18.5646 8.22653 18.1648C8.13974 17.7883 8.15201 17.3951 8.2621 17.025C8.37218 16.6549 8.57617 16.3212 8.85336 16.0576C9.28168 15.6095 9.72044 15.1667 10.154 14.7239L12.2068 12.6327C12.6657 12.0861 13.2435 11.6568 13.894 11.379V4.2678H13.6432H11.1308C10.6554 4.2678 10.5144 4.11843 10.5144 3.6383V1.0136H1.88005C1.76124 0.995841 1.64001 1.00659 1.52597 1.045C1.41194 1.0834 1.30823 1.14841 1.22307 1.23487C1.13791 1.32132 1.07365 1.42685 1.03537 1.54308C0.997083 1.65932 0.985833 1.78306 1.00251 1.90451C1.00251 6.97253 1.00251 12.0423 1.00251 17.1139C0.986451 17.2359 0.997986 17.3601 1.03624 17.4769C1.0745 17.5936 1.13845 17.6999 1.2232 17.7875C1.30794 17.875 1.41121 17.9416 1.52508 17.9821C1.63895 18.0225 1.76038 18.0358 1.88005 18.0208H6.62293C6.9938 18.0208 7.18707 18.2129 7.1714 18.5543C7.17044 18.621 7.15572 18.6867 7.1282 18.7473C7.10069 18.8078 7.06098 18.8617 7.01169 18.9055C6.96241 18.9493 6.90465 18.9819 6.84216 19.0014C6.77968 19.0209 6.71388 19.0267 6.64906 19.0184H1.81214C1.57361 19.0282 1.33569 18.9874 1.11335 18.8986C0.891014 18.8099 0.689093 18.675 0.520292 18.5026C0.351491 18.3302 0.219466 18.124 0.13255 17.8969C0.0456348 17.6699 0.00570704 17.4269 0.0152746 17.1832C0.0152746 12.069 0.0152746 6.95296 0.0152746 1.83516C0.00509367 1.5953 0.0435017 1.35588 0.128087 1.13189C0.212672 0.90789 0.341619 0.704137 0.506854 0.533378C0.672089 0.362618 0.87006 0.228529 1.08837 0.139504C1.30668 0.0504799 1.54062 0.00843644 1.77557 0.0160035C4.90964 0.0160035 8.0559 0.0160035 11.2143 0.0160035C11.3316 0.0209066 11.4439 0.0660099 11.533 0.144039C12.6195 1.17365 13.6903 2.21926 14.7767 3.24887C14.8639 3.32899 14.9321 3.42819 14.9764 3.53904C15.0208 3.64989 15.04 3.76953 15.0327 3.88904V11.1336L15.0222 11.123ZM11.5539 3.23286H13.194L11.5539 1.63243V3.23286Z" fill="currentColor" />
                    <path d="M7.42807 8.22097C6.32592 8.22097 5.22377 8.22097 4.1164 8.22097C3.74031 8.22097 3.52615 8.01292 3.54182 7.6875C3.54072 7.58036 3.5777 7.47644 3.6459 7.39502C3.71409 7.3136 3.80889 7.2602 3.9127 7.24471C3.99609 7.23679 4.08002 7.23679 4.16341 7.24471H10.7241C11.1419 7.24471 11.3352 7.40476 11.3404 7.74085C11.3466 7.8076 11.3385 7.87492 11.3168 7.93818C11.295 8.00144 11.2601 8.05913 11.2144 8.10729C11.1688 8.15546 11.1134 8.19294 11.0522 8.21717C10.991 8.2414 10.9254 8.2518 10.8599 8.24765C10.6457 8.24765 10.4315 8.24765 10.2174 8.24765L7.42807 8.22097Z" fill="currentColor" />
                    <path d="M7.44286 10.4775H10.8015C11.1463 10.4775 11.3239 10.6429 11.3239 10.947C11.3239 11.2511 11.1411 11.4805 10.765 11.4805H5.70346C5.14977 11.4805 4.59609 11.4805 4.04241 11.4805C3.96186 11.4905 3.88015 11.4797 3.80473 11.4491C3.72931 11.4186 3.66258 11.3692 3.61064 11.3056C3.55869 11.2419 3.5232 11.166 3.50737 11.0847C3.49155 11.0034 3.49591 10.9194 3.52006 10.8403C3.5723 10.6109 3.74467 10.4882 4.04241 10.4882L7.44286 10.4775Z" fill="currentColor" />
                    <path d="M6.05864 13.6889C6.71157 13.6889 7.3645 13.6889 8.01743 13.6889C8.38307 13.6889 8.56589 13.8649 8.56589 14.1957C8.56589 14.5265 8.37785 14.6812 8.01743 14.6812H4.11029C4.04331 14.6871 3.97587 14.6787 3.91229 14.6564C3.84871 14.6341 3.79041 14.5984 3.74118 14.5516C3.69195 14.5049 3.65288 14.4481 3.62649 14.3849C3.60009 14.3218 3.58696 14.2537 3.58794 14.185C3.58794 13.8649 3.77599 13.6889 4.11029 13.6889C4.73188 13.6836 5.38481 13.6889 6.05864 13.6889Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_986_95061">
                        <rect width="18" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        Facebook: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8691 9.25C17.8691 13.6094 14.6699 17.2305 10.4863 17.8633V11.7812H12.5254L12.9121 9.25H10.4863V7.63281C10.4863 6.92969 10.8379 6.26172 11.9277 6.26172H13.0176V4.11719C13.0176 4.11719 12.0332 3.94141 11.0488 3.94141C9.08008 3.94141 7.7793 5.17188 7.7793 7.35156V9.25H5.56445V11.7812H7.7793V17.8633C3.5957 17.2305 0.431641 13.6094 0.431641 9.25C0.431641 4.43359 4.33398 0.53125 9.15039 0.53125C13.9668 0.53125 17.8691 4.43359 17.8691 9.25Z" fill="#4D5464" />
            </svg>
        ),
        Tick: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1318 3.52892C15.0855 2.16791 13.6716 1.13477 12.057 0.551547C10.4424 -0.0316789 8.69464 -0.140627 7.02013 0.237575C5.34562 0.615776 3.81435 1.46533 2.60716 2.68588C1.39998 3.90642 0.567325 5.44696 0.207574 7.12553C0.122848 7.50679 0.0889693 7.90077 0.0338976 8.28627C0.0338976 8.34981 0.0127089 8.41336 0 8.47267V9.5275C0.0465992 9.87064 0.080475 10.2138 0.144019 10.5485C0.359374 11.8292 0.853466 13.047 1.59135 14.1158C2.32923 15.1846 3.2929 16.0782 4.41421 16.7334C5.601 17.4603 6.94794 17.885 8.33702 17.9704C8.38271 17.9779 8.42797 17.9877 8.47258 18.0001H9.52741C9.87055 17.9535 10.2137 17.9196 10.5526 17.8603C12.5752 17.5184 14.4159 16.4835 15.759 14.933C17.1351 13.3709 17.9249 11.3786 17.9929 9.29789C18.0609 7.21717 17.403 5.17761 16.1318 3.52892ZM13.59 6.88406C13.5353 6.95434 13.4758 7.02087 13.4121 7.08318L8.41751 12.0778C8.33886 12.1854 8.23589 12.273 8.11701 12.3334C7.99812 12.3938 7.86669 12.4252 7.73335 12.4252C7.60001 12.4252 7.46855 12.3938 7.34967 12.3334C7.23079 12.273 7.12785 12.1854 7.04919 12.0778C6.20194 11.2305 5.35468 10.3832 4.50742 9.53598C4.4264 9.46621 4.35993 9.38115 4.31182 9.28566C4.26371 9.19018 4.2349 9.08615 4.22703 8.97953C4.21916 8.8729 4.23237 8.76577 4.26595 8.66426C4.29952 8.56275 4.35279 8.46887 4.42269 8.38796C4.55606 8.22483 4.74863 8.12118 4.95825 8.09974C5.16787 8.0783 5.37745 8.14081 5.54108 8.27357C5.60481 8.32522 5.66562 8.38039 5.72323 8.43879L7.59991 10.3155C7.64687 10.3768 7.6907 10.4404 7.73123 10.5061C7.7838 10.4338 7.84036 10.3645 7.90067 10.2985L12.2979 5.90123C12.4227 5.75266 12.5947 5.65142 12.7851 5.61441C12.9756 5.5774 13.173 5.60687 13.3443 5.6979C13.445 5.75338 13.5327 5.82969 13.6016 5.92171C13.6704 6.01374 13.7189 6.1194 13.7438 6.23163C13.7686 6.34386 13.7693 6.46009 13.7457 6.57259C13.7221 6.68509 13.6748 6.79126 13.607 6.88406H13.59Z" fill="currentColor" />
            </svg>
        ),
        Info: (
            <svg
                {...props}
                width={size ? size : "13"}
                height={size ? size : "13"}
                viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1948_60812)">
                    <path d="M6.49666 3.35539e-06C7.35074 -0.000864953 8.1966 0.166801 8.98582 0.493397C9.77505 0.819994 10.4921 1.29911 11.096 1.90332C11.6999 2.50753 12.1788 3.22496 12.5052 4.01455C12.8316 4.80414 12.9991 5.65038 12.9982 6.50483C12.9973 7.35917 12.8282 8.20496 12.5004 8.99386C12.1726 9.78275 11.6926 10.4993 11.0879 11.1025C10.4831 11.7057 9.76546 12.1838 8.97593 12.5094C8.18641 12.8349 7.34048 13.0017 6.48651 13C5.63284 12.9983 4.78787 12.8283 3.9999 12.4997C3.21193 12.1712 2.49639 11.6905 1.89417 11.0852C1.29195 10.4799 0.814858 9.76181 0.490145 8.97197C0.165432 8.18213 -0.000536329 7.33602 0.00173192 6.48199C0.00528384 2.90317 2.91582 3.35539e-06 6.49666 3.35539e-06ZM6.51493 1.01527C3.49276 1.00766 1.03026 3.44684 1.01504 6.4627C1.01016 7.18351 1.14742 7.89822 1.41895 8.56591C1.69049 9.2336 2.09097 9.84117 2.59748 10.3538C3.10399 10.8665 3.70658 11.2742 4.37077 11.5536C5.03497 11.833 5.74772 11.9787 6.46824 11.9822C7.18868 11.9861 7.90284 11.848 8.56989 11.5757C9.23694 11.3034 9.84381 10.9022 10.3558 10.3951C10.8678 9.88804 11.2749 9.28499 11.5538 8.62043C11.8327 7.95587 11.978 7.24284 11.9813 6.52209C11.9844 5.80148 11.8454 5.08734 11.5724 4.42051C11.2993 3.75368 10.8976 3.14723 10.3901 2.63587C9.88255 2.12451 9.27925 1.71826 8.61466 1.44036C7.95008 1.16246 7.23725 1.01835 6.51695 1.01629L6.51493 1.01527Z" fill="currentColor" />
                    <path d="M7.00783 7.59085C7.00783 8.1061 7.00783 8.62084 7.00783 9.13558C7.00783 9.49702 6.80029 9.73053 6.4933 9.72647C6.19545 9.7219 5.9935 9.49347 5.99249 9.14777C5.99046 8.10915 5.99046 7.0707 5.99249 6.03242C5.99249 5.67403 6.20357 5.43544 6.507 5.44001C6.81044 5.44457 7.00681 5.68114 7.00783 6.04612C7.00935 6.56087 7.00783 7.07611 7.00783 7.59085Z" fill="currentColor" />
                    <path d="M7.18286 4.13828C7.18234 4.22921 7.16378 4.31913 7.12824 4.40283C7.09271 4.48652 7.04092 4.56233 6.97587 4.62584C6.91082 4.68936 6.83383 4.73932 6.74933 4.77283C6.66483 4.80634 6.57452 4.82273 6.48364 4.82105C6.30449 4.81588 6.13446 4.74083 6.00987 4.61192C5.88529 4.48301 5.81603 4.31047 5.8169 4.13117C5.81693 4.04024 5.83518 3.95024 5.87058 3.86648C5.90598 3.78273 5.9578 3.70693 6.02299 3.64356C6.08818 3.58019 6.16542 3.53053 6.25011 3.49754C6.33481 3.46454 6.42525 3.44887 6.51611 3.45145C6.69525 3.45505 6.86574 3.52919 6.99057 3.65778C7.1154 3.78637 7.1845 3.95903 7.18286 4.13828Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_1948_60812">
                        <rect width="13" height="13" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),


        Keyboard: (
            <svg
                {...props}
                width={size ? size : "22"}
                height={size ? size : "22"}
                viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.87502 3.66699H15.125C15.6934 3.66699 16.1975 3.68533 16.6467 3.74949C19.0575 4.01533 19.7084 5.15199 19.7084 8.25033V13.7503C19.7084 16.8487 19.0575 17.9853 16.6467 18.2512C16.1975 18.3153 15.6934 18.3337 15.125 18.3337H6.87502C6.30669 18.3337 5.80252 18.3153 5.35335 18.2512C2.94252 17.9853 2.29169 16.8487 2.29169 13.7503V8.25033C2.29169 5.15199 2.94252 4.01533 5.35335 3.74949C5.80252 3.68533 6.30669 3.66699 6.87502 3.66699Z" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.375 9.16699H15.5833" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.41669 14.208H6.43502H15.5834" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.25341 9.16634H9.26164" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.50341 9.16634H6.51164" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Logout: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12H3.62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        ),
        Lock1: (
            <svg
                {...props}
                width={size ? size : "16"}
                height={size ? size : "16"}
                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6.66683V5.3335C4 3.12683 4.66667 1.3335 8 1.3335C11.3333 1.3335 12 3.12683 12 5.3335V6.66683" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.00001 12.3333C8.92048 12.3333 9.66668 11.5871 9.66668 10.6667C9.66668 9.74619 8.92048 9 8.00001 9C7.07954 9 6.33334 9.74619 6.33334 10.6667C6.33334 11.5871 7.07954 12.3333 8.00001 12.3333Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.3333 14.6665H4.66668C2.00001 14.6665 1.33334 13.9998 1.33334 11.3332V9.99984C1.33334 7.33317 2.00001 6.6665 4.66668 6.6665H11.3333C14 6.6665 14.6667 7.33317 14.6667 9.99984V11.3332C14.6667 13.9998 14 14.6665 11.3333 14.6665Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Location: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0004 11.1917C11.4363 11.1917 12.6004 10.0276 12.6004 8.5917C12.6004 7.15576 11.4363 5.9917 10.0004 5.9917C8.56445 5.9917 7.40039 7.15576 7.40039 8.5917C7.40039 10.0276 8.56445 11.1917 10.0004 11.1917Z" stroke="#667085" strokeWidth="1.5" />
                <path d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9418 11.3167 15.3084 14.9001 13.0001 17.1168C11.3251 18.7334 8.67508 18.7334 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508Z" stroke="#667085" strokeWidth="1.5" />
            </svg>
        ),
        LinkedIn: (
            <svg
                {...props}
                width={size ? size : "17"}
                height={size ? size : "17"}
                viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5752 0.375C16.1729 0.375 16.7002 0.902344 16.7002 1.53516V15C16.7002 15.6328 16.1729 16.125 15.5752 16.125H2.04004C1.44238 16.125 0.950195 15.6328 0.950195 15V1.53516C0.950195 0.902344 1.44238 0.375 2.04004 0.375H15.5752ZM5.69629 13.875V6.38672H3.37598V13.875H5.69629ZM4.53613 5.33203C5.27441 5.33203 5.87207 4.73438 5.87207 3.99609C5.87207 3.25781 5.27441 2.625 4.53613 2.625C3.7627 2.625 3.16504 3.25781 3.16504 3.99609C3.16504 4.73438 3.7627 5.33203 4.53613 5.33203ZM14.4502 13.875V9.76172C14.4502 7.75781 13.9932 6.17578 11.6377 6.17578C10.5127 6.17578 9.73926 6.80859 9.42285 7.40625H9.3877V6.38672H7.17285V13.875H9.49316V10.1836C9.49316 9.19922 9.66895 8.25 10.8994 8.25C12.0947 8.25 12.0947 9.375 12.0947 10.2188V13.875H14.4502Z" fill="#4D5464" />
            </svg>
        ),
        Message: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.375 14.25H6C3 14.25 1.5 13.5 1.5 9.75V6C1.5 3 3 1.5 6 1.5H12C15 1.5 16.5 3 16.5 6V9.75C16.5 12.75 15 14.25 12 14.25H11.625C11.3925 14.25 11.1675 14.3625 11.025 14.55L9.9 16.05C9.405 16.71 8.595 16.71 8.1 16.05L6.975 14.55C6.855 14.385 6.5775 14.25 6.375 14.25Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.25 6H12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.25 9.75H9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        ),
        Currency: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "16"}
                viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0831 4.60023V8.89192C16.0831 11.4586 14.6165 12.5586 12.4165 12.5586H5.09147C4.71647 12.5586 4.35813 12.5253 4.0248 12.4503C3.81647 12.4169 3.61647 12.3586 3.43314 12.2919C2.18314 11.8253 1.4248 10.7419 1.4248 8.89192V4.60023C1.4248 2.03356 2.89147 0.933594 5.09147 0.933594H12.4165C14.2831 0.933594 15.6248 1.72526 15.9831 3.53359C16.0415 3.86692 16.0831 4.20856 16.0831 4.60023Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5842 7.10033V11.392C18.5842 13.9587 17.1176 15.0587 14.9176 15.0587H7.59254C6.97588 15.0587 6.41755 14.9754 5.93422 14.792C4.94255 14.4254 4.26755 13.667 4.02588 12.4504C4.35921 12.5254 4.71754 12.5587 5.09254 12.5587H12.4176C14.6176 12.5587 16.0842 11.4587 16.0842 8.89202V4.60033C16.0842 4.20866 16.0509 3.85869 15.9842 3.53369C17.5676 3.86702 18.5842 4.98366 18.5842 7.10033Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.74835 8.95016C9.96338 8.95016 10.9484 7.96518 10.9484 6.75015C10.9484 5.53513 9.96338 4.55014 8.74835 4.55014C7.53333 4.55014 6.54834 5.53513 6.54834 6.75015C6.54834 7.96518 7.53333 8.95016 8.74835 8.95016Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.98291 4.9169V8.58359" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.5181 4.91714V8.58383" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Note: (
            <svg
                {...props}
                width={size ? size : "17"}
                height={size ? size : "18"}
                viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3281 1V3.38336" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.3002 6.16388V12.9167C15.3002 15.3001 14.1085 16.889 11.3279 16.889H4.97227C2.19168 16.889 1 15.3001 1 12.9167V6.16388C1 3.78051 2.19168 2.1916 4.97227 2.1916H11.3279C14.1085 2.1916 15.3002 3.78051 15.3002 6.16388Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.97266 8.15009H11.3283" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.97266 12.1225H8.15047" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Options: (
            <svg
                {...props}
                width={size ? size : "4"}
                height={size ? size : "14"}
                viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.66668 1.99992C3.66668 2.92039 2.92049 3.66659 2.00001 3.66659C1.07954 3.66659 0.333344 2.92039 0.333344 1.99992C0.333344 1.07944 1.07954 0.333252 2.00001 0.333252C2.92049 0.333252 3.66668 1.07944 3.66668 1.99992Z" fill="currentColor" />
                <path d="M3.66668 6.99992C3.66668 7.92039 2.92049 8.66658 2.00001 8.66658C1.07954 8.66658 0.333344 7.92039 0.333344 6.99992C0.333344 6.07944 1.07954 5.33325 2.00001 5.33325C2.92049 5.33325 3.66668 6.07944 3.66668 6.99992Z" fill="currentColor" />
                <path d="M2.00001 13.6666C2.92049 13.6666 3.66668 12.9204 3.66668 11.9999C3.66668 11.0794 2.92049 10.3333 2.00001 10.3333C1.07954 10.3333 0.333344 11.0794 0.333344 11.9999C0.333344 12.9204 1.07954 13.6666 2.00001 13.6666Z" fill="currentColor" />
            </svg>

        ),
        Plus: (
            <svg
                {...props}
                width={size ? size : "14"}
                height={size ? size : "14"}
                viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13.0001V1" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 7.00004L0.999963 7.00004" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        People: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 16.707C41.86 16.6837 41.6967 16.6837 41.5567 16.707C38.3367 16.5903 35.77 13.9537 35.77 10.687C35.77 7.35033 38.4533 4.66699 41.79 4.66699C45.1267 4.66699 47.81 7.37366 47.81 10.687C47.7867 13.9537 45.22 16.5903 42 16.707Z" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M39.5966 33.694C42.7933 34.2307 46.3166 33.6707 48.79 32.014C52.08 29.8207 52.08 26.2274 48.79 24.034C46.2933 22.3774 42.7233 21.8174 39.5266 22.3774" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.9299 16.707C14.0699 16.6837 14.2332 16.6837 14.3732 16.707C17.5932 16.5903 20.1599 13.9537 20.1599 10.687C20.1599 7.35033 17.4765 4.66699 14.1399 4.66699C10.8032 4.66699 8.11987 7.37366 8.11987 10.687C8.14321 13.9537 10.7099 16.5903 13.9299 16.707Z" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.3332 33.694C13.1365 34.2307 9.6132 33.6707 7.13986 32.014C3.84986 29.8207 3.84986 26.2274 7.13986 24.034C9.63653 22.3774 13.2065 21.8174 16.4032 22.3774" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 34.1367C27.86 34.1134 27.6967 34.1134 27.5567 34.1367C24.3367 34.02 21.77 31.3834 21.77 28.1167C21.77 24.78 24.4533 22.0967 27.79 22.0967C31.1267 22.0967 33.81 24.8034 33.81 28.1167C33.7867 31.3834 31.22 34.0434 28 34.1367Z" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.2099 41.4868C17.9199 43.6802 17.9199 47.2735 21.2099 49.4668C24.9433 51.9635 31.0566 51.9635 34.7899 49.4668C38.0799 47.2735 38.0799 43.6802 34.7899 41.4868C31.0799 39.0135 24.9433 39.0135 21.2099 41.4868Z" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        PencilWithLine: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.945 2.69992L3.7875 9.21742C3.555 9.46492 3.33 9.95242 3.285 10.2899L3.0075 12.7199C2.91 13.5974 3.54 14.1974 4.41 14.0474L6.825 13.6349C7.1625 13.5749 7.635 13.3274 7.8675 13.0724L14.025 6.55492C15.09 5.42992 15.57 4.14742 13.9125 2.57992C12.2625 1.02742 11.01 1.57492 9.945 2.69992Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.9175 3.7876C9.24 5.8576 10.92 7.4401 13.005 7.6501" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.25 16.5H15.75" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        ProfileDelete: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.9567 42.21L36.3767 48.79" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42.9567 48.79L36.3767 42.21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.3737 25.3637C28.1404 25.3403 27.8604 25.3403 27.6037 25.3637C22.0504 25.177 17.6404 20.627 17.6404 15.027C17.6404 9.31033 22.2604 4.66699 28.0004 4.66699C33.717 4.66699 38.3604 9.31033 38.3604 15.027C38.3371 20.627 33.927 25.177 28.3737 25.3637Z" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 50.8896C23.7533 50.8896 19.53 49.8163 16.31 47.6696C10.6633 43.8896 10.6633 37.7296 16.31 33.9729C22.7266 29.6796 33.25 29.6796 39.6666 33.9729" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Setting1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6 17H11.4C15.4 17 17 15.4 17 11.4V6.6C17 2.6 15.4 1 11.4 1H6.6C2.6 1 1 2.6 1 6.6V11.4C1 15.4 2.6 17 6.6 17Z" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.856 14.1997V11.0797" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.856 5.35999V3.79999" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.856 9.52017C13.0048 9.52017 13.936 8.58892 13.936 7.44017C13.936 6.29142 13.0048 5.36017 11.856 5.36017C10.7072 5.36017 9.776 6.29142 9.776 7.44017C9.776 8.58892 10.7072 9.52017 11.856 9.52017Z" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.14398 14.1998V12.6398" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.14398 6.91999V3.79999" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.14403 12.6397C7.29278 12.6397 8.22403 11.7084 8.22403 10.5597C8.22403 9.41092 7.29278 8.47968 6.14403 8.47968C4.99527 8.47968 4.06403 9.41092 4.06403 10.5597C4.06403 11.7084 4.99527 12.6397 6.14403 12.6397Z" stroke="currentColor" strokeWidth="1.42857" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        ),
        SmsNotification: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5C16.1046 5 17 4.10457 17 3C17 1.89543 16.1046 1 15 1C13.8954 1 13 1.89543 13 3C13 4.10457 13.8954 5 15 5Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 6L7.33003 7.60514C8.09678 8.13162 9.35484 8.13162 10.1216 7.60514L11 7.0016" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 6.76471V10.8824C17 13.7647 15.4 15 13 15H5C2.6 15 1 13.7647 1 10.8824V5.11765C1 2.23529 2.6 1 5 1H10.6" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Search: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.7847 15.1991C10.6462 17.6416 6.10654 17.4205 3.22181 14.5358C0.0976136 11.4116 0.0976136 6.34625 3.22181 3.22205C6.346 0.0978578 11.4113 0.0978578 14.5355 3.22205C17.4202 6.10677 17.6414 10.6464 15.1989 13.7849L19.4853 18.0713C19.8758 18.4618 19.8758 19.095 19.4853 19.4855C19.0948 19.876 18.4616 19.876 18.0711 19.4855L13.7847 15.1991ZM4.63602 13.1215C6.97917 15.4647 10.7782 15.4647 13.1213 13.1215C15.4644 10.7784 15.4644 6.97941 13.1213 4.63627C10.7782 2.29312 6.97917 2.29312 4.63602 4.63627C2.29288 6.97941 2.29288 10.7784 4.63602 13.1215Z" fill="currentColor" />
            </svg>
        ),
        Sort1: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.56206 16.7289L3.58789 12.7627" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.56201 3.27051V16.7288" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.2964 3.27051L16.2706 7.23676" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.2964 16.7288V3.27051" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Twitter: (
            <svg
                {...props}
                width={size ? size : "19"}
                height={size ? size : "16"}
                viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7363 4.59375C16.7363 4.76953 16.7363 4.91016 16.7363 5.08594C16.7363 9.97266 13.0449 15.5625 6.25977 15.5625C4.15039 15.5625 2.2168 14.9648 0.599609 13.9102C0.880859 13.9453 1.16211 13.9805 1.47852 13.9805C3.20117 13.9805 4.7832 13.3828 6.04883 12.3984C4.43164 12.3633 3.06055 11.3086 2.60352 9.83203C2.84961 9.86719 3.06055 9.90234 3.30664 9.90234C3.62305 9.90234 3.97461 9.83203 4.25586 9.76172C2.56836 9.41016 1.30273 7.93359 1.30273 6.14062V6.10547C1.79492 6.38672 2.39258 6.52734 2.99023 6.5625C1.9707 5.89453 1.33789 4.76953 1.33789 3.50391C1.33789 2.80078 1.51367 2.16797 1.83008 1.64062C3.6582 3.85547 6.40039 5.33203 9.45898 5.50781C9.38867 5.22656 9.35352 4.94531 9.35352 4.66406C9.35352 2.625 11.0059 0.972656 13.0449 0.972656C14.0996 0.972656 15.0488 1.39453 15.752 2.13281C16.5605 1.95703 17.3691 1.64062 18.0723 1.21875C17.791 2.09766 17.2285 2.80078 16.4551 3.25781C17.1934 3.1875 17.9316 2.97656 18.5645 2.69531C18.0723 3.43359 17.4395 4.06641 16.7363 4.59375Z" fill="#4D5464" />
            </svg>
        ),
        User: (
            <svg
                {...props}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.0999 10.6497C10.0416 10.6414 9.9666 10.6414 9.89993 10.6497C8.43327 10.5997 7.2666 9.39974 7.2666 7.92474C7.2666 6.41641 8.48327 5.19141 9.99993 5.19141C11.5083 5.19141 12.7333 6.41641 12.7333 7.92474C12.7249 9.39974 11.5666 10.5997 10.0999 10.6497Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.6166 16.1498C14.1333 17.5081 12.1666 18.3331 9.99997 18.3331C7.8333 18.3331 5.86663 17.5081 4.3833 16.1498C4.46663 15.3665 4.96663 14.5998 5.8583 13.9998C8.14163 12.4831 11.875 12.4831 14.1416 13.9998C15.0333 14.5998 15.5333 15.3665 15.6166 16.1498Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Users: (
            <svg
                {...props}
                // width="20"
                // height="20"
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M6.58231 9.0289C6.49768 9.02043 6.39613 9.02043 6.30304 9.0289C4.28891 8.96119 2.68945 7.31096 2.68945 5.27991C2.68945 3.20654 4.36507 1.52246 6.4469 1.52246C8.52027 1.52246 10.2043 3.20654 10.2043 5.27991C10.1959 7.31096 8.59643 8.96119 6.58231 9.0289Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.7179 3.21484C14.3597 3.21484 15.6799 4.54349 15.6799 6.1768C15.6799 7.77625 14.4105 9.07951 12.8279 9.13875C12.7602 9.13029 12.6841 9.13029 12.6079 9.13875" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.35093 12.1517C0.302947 13.5227 0.302947 15.7569 2.35093 17.1194C4.67817 18.6765 8.49486 18.6765 10.8221 17.1194C12.8701 15.7484 12.8701 13.5142 10.8221 12.1517C8.50333 10.6031 4.68664 10.6031 2.35093 12.1517Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.3511 16.7554C14.9604 16.6284 15.5359 16.383 16.0098 16.0191C17.33 15.029 17.33 13.3957 16.0098 12.4055C15.5443 12.0501 14.9773 11.8131 14.3765 11.6777" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Upload: (
            <svg
                {...props}
                width={size ? size : "16"}
                height={size ? size : "16"}
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z" />
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
            </svg>
        ),
        View: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"} viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.50021 0.166748C14.6085 0.166748 17.0258 3.59172 17.8768 5.1929C18.1477 5.70275 18.1477 6.29742 17.8768 6.80727C17.0258 8.40845 14.6085 11.8334 9.50021 11.8334C4.39188 11.8334 1.9746 8.40844 1.12363 6.80727C0.852669 6.29742 0.852669 5.70274 1.12363 5.1929C1.9746 3.59172 4.39188 0.166748 9.50021 0.166748ZM5.19716 3.06483C3.81361 3.98153 3.00572 5.20294 2.59536 5.97507C2.59078 5.98369 2.58889 5.98967 2.58807 5.99295C2.58724 5.99629 2.58708 6.00008 2.58708 6.00008C2.58708 6.00008 2.58724 6.00387 2.58807 6.00721C2.58889 6.01049 2.59078 6.01647 2.59536 6.0251C3.00572 6.79723 3.81361 8.01863 5.19716 8.93534C4.62594 8.09955 4.29188 7.08883 4.29188 6.00008C4.29188 4.91133 4.62594 3.90061 5.19716 3.06483ZM13.8033 8.93533C15.1868 8.01862 15.9947 6.79722 16.405 6.0251C16.4096 6.01647 16.4115 6.01049 16.4123 6.00721C16.4129 6.00504 16.4133 6.00199 16.4133 6.00199L16.4133 6.00008L16.413 5.99641L16.4123 5.99295C16.4115 5.98967 16.4096 5.98369 16.405 5.97507C15.9947 5.20294 15.1868 3.98154 13.8033 3.06484C14.3745 3.90062 14.7085 4.91134 14.7085 6.00008C14.7085 7.08882 14.3745 8.09954 13.8033 8.93533ZM5.95854 6.00008C5.95854 4.04407 7.5442 2.45841 9.50021 2.45841C11.4562 2.45841 13.0419 4.04407 13.0419 6.00008C13.0419 7.95609 11.4562 9.54175 9.50021 9.54175C7.5442 9.54175 5.95854 7.95609 5.95854 6.00008Z" fill="currentColor" />
            </svg>
        ),
        Video: (
            <svg
                {...props}
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.52 17.0999L16.74 15.1499V8.83989L19.52 6.88989C20.88 5.93989 22 6.51989 22 8.18989V15.8099C22 17.4799 20.88 18.0599 19.52 17.0999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Wallet: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8335 9.29199H5.8335" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.6665 9.29121V5.44121C1.6665 3.74121 3.04151 2.36621 4.74151 2.36621H9.42484C11.1248 2.36621 12.4998 3.42454 12.4998 5.12454" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.5665 10.1667C14.1498 10.5667 13.9498 11.1833 14.1165 11.8166C14.3248 12.5916 15.0915 13.0833 15.8915 13.0833H16.6665V14.2917C16.6665 16.1333 15.1748 17.625 13.3332 17.625H4.99984C3.15817 17.625 1.6665 16.1333 1.6665 14.2917V8.45833C1.6665 6.61667 3.15817 5.125 4.99984 5.125H13.3332C15.1665 5.125 16.6665 6.625 16.6665 8.45833V9.66663H15.7665C15.2998 9.66663 14.8748 9.84999 14.5665 10.1667Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3333 10.517V12.2337C18.3333 12.7003 17.95 13.0837 17.475 13.0837H15.8667C14.9667 13.0837 14.1417 12.4254 14.0667 11.5254C14.0167 11.0004 14.2167 10.5087 14.5667 10.167C14.875 9.85036 15.3 9.66699 15.7667 9.66699H17.475C17.95 9.66699 18.3333 10.0503 18.3333 10.517Z" stroke="currentColor" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        Whatsapp: (
            <svg
                {...props}
                width={size ? size : "16"}
                height={size ? size : "17"}
                viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3594 2.69531C14.8359 4.17188 15.75 6.10547 15.75 8.21484C15.75 12.5039 12.1641 16.0195 7.83984 16.0195C6.53906 16.0195 5.27344 15.668 4.11328 15.0703L0 16.125L1.08984 12.082C0.421875 10.9219 0.0351562 9.58594 0.0351562 8.17969C0.0351562 3.89062 3.55078 0.375 7.83984 0.375C9.94922 0.375 11.918 1.21875 13.3594 2.69531ZM7.83984 14.6836C11.4258 14.6836 14.4141 11.7656 14.4141 8.21484C14.4141 6.45703 13.6758 4.83984 12.4453 3.60938C11.2148 2.37891 9.59766 1.71094 7.875 1.71094C4.28906 1.71094 1.37109 4.62891 1.37109 8.17969C1.37109 9.41016 1.72266 10.6055 2.35547 11.6602L2.53125 11.9062L1.86328 14.2969L4.32422 13.6289L4.53516 13.7695C5.55469 14.3672 6.67969 14.6836 7.83984 14.6836ZM11.4258 9.83203C11.6016 9.9375 11.7422 9.97266 11.7773 10.0781C11.8477 10.1484 11.8477 10.5352 11.6719 10.9922C11.4961 11.4492 10.7227 11.8711 10.3711 11.9062C9.73828 12.0117 9.24609 11.9766 8.01562 11.4141C6.04688 10.5703 4.78125 8.60156 4.67578 8.49609C4.57031 8.35547 3.90234 7.44141 3.90234 6.45703C3.90234 5.50781 4.39453 5.05078 4.57031 4.83984C4.74609 4.62891 4.95703 4.59375 5.09766 4.59375C5.20312 4.59375 5.34375 4.59375 5.44922 4.59375C5.58984 4.59375 5.73047 4.55859 5.90625 4.94531C6.04688 5.33203 6.46875 6.28125 6.50391 6.38672C6.53906 6.49219 6.57422 6.59766 6.50391 6.73828C6.15234 7.47656 5.73047 7.44141 5.94141 7.79297C6.71484 9.09375 7.45312 9.55078 8.61328 10.1133C8.78906 10.2188 8.89453 10.1836 9.03516 10.0781C9.14062 9.9375 9.52734 9.48047 9.63281 9.30469C9.77344 9.09375 9.91406 9.12891 10.0898 9.19922C10.2656 9.26953 11.2148 9.72656 11.4258 9.83203Z" fill="url(#paint0_linear_70_482)" />
                <defs>
                    <linearGradient id="paint0_linear_70_482" x1="0" y1="8.25" x2="15.75" y2="8.25" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109423" stopColor="currentColor" />
                        <stop offset="1" stopColor="#7312F7" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    };

    return iconMap[name];
}

export default Icon;
