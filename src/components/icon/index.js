const Icon = ({ name, size, ...props }) => {
    const iconMap = {
        App: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H5.5C6.88071 0 8 1.11929 8 2.5V5.5C8 6.88071 6.88071 8 5.5 8H2.5C1.11929 8 0 6.88071 0 5.5V2.5ZM2.5 2H5.5C5.77614 2 6 2.22386 6 2.5V5.5C6 5.77614 5.77614 6 5.5 6H2.5C2.22386 6 2 5.77614 2 5.5V2.5C2 2.22386 2.22386 2 2.5 2Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C10 1.11929 11.1193 0 12.5 0H15.5C16.8807 0 18 1.11929 18 2.5V5.5C18 6.88071 16.8807 8 15.5 8H12.5C11.1193 8 10 6.88071 10 5.5V2.5ZM12.5 2H15.5C15.7761 2 16 2.22386 16 2.5V5.5C16 5.77614 15.7761 6 15.5 6H12.5C12.2239 6 12 5.77614 12 5.5V2.5C12 2.22386 12.2239 2 12.5 2Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C11.1193 10 10 11.1193 10 12.5V15.5C10 16.8807 11.1193 18 12.5 18H15.5C16.8807 18 18 16.8807 18 15.5V12.5C18 11.1193 16.8807 10 15.5 10H12.5ZM15.5 12H12.5C12.2239 12 12 12.2239 12 12.5V15.5C12 15.7761 12.2239 16 12.5 16H15.5C15.7761 16 16 15.7761 16 15.5V12.5C16 12.2239 15.7761 12 15.5 12Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.5C0 11.1193 1.11929 10 2.5 10H5.5C6.88071 10 8 11.1193 8 12.5V15.5C8 16.8807 6.88071 18 5.5 18H2.5C1.11929 18 0 16.8807 0 15.5V12.5ZM2.5 12H5.5C5.77614 12 6 12.2239 6 12.5V15.5C6 15.7761 5.77614 16 5.5 16H2.5C2.22386 16 2 15.7761 2 15.5V12.5C2 12.2239 2.22386 12 2.5 12Z" fill="currentColor" />
            </svg>
        ),
        Briefcase: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66685 18.3333H13.3335C16.6835 18.3333 17.2835 16.9917 17.4585 15.3583L18.0835 8.69167C18.3085 6.65833 17.7252 5 14.1668 5H5.83351C2.27518 5 1.69185 6.65833 1.91685 8.69167L2.54185 15.3583C2.71685 16.9917 3.31685 18.3333 6.66685 18.3333Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.6665 5.00033V4.33366C6.6665 2.85866 6.6665 1.66699 9.33317 1.66699H10.6665C13.3332 1.66699 13.3332 2.85866 13.3332 4.33366V5.00033" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.6668 10.8333V11.6667C11.6668 11.675 11.6668 11.675 11.6668 11.6833C11.6668 12.5917 11.6585 13.3333 10.0002 13.3333C8.35016 13.3333 8.3335 12.6 8.3335 11.6917V10.8333C8.3335 10 8.3335 10 9.16683 10H10.8335C11.6668 10 11.6668 10 11.6668 10.8333Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.0415 9.16699C16.1165 10.567 13.9165 11.4003 11.6665 11.6837" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.18311 9.3916C4.05811 10.6749 6.17477 11.4499 8.33311 11.6916" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        BriefcaseTick: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 36.4004C28.4183 36.4004 32 32.8187 32 28.4004C32 23.9821 28.4183 20.4004 24 20.4004C19.5817 20.4004 16 23.9821 16 28.4004C16 32.8187 19.5817 36.4004 24 36.4004Z" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.8799 28.5996L22.1799 29.8996C22.5599 30.2796 23.1799 30.2796 23.5599 29.9196L27.1199 26.6396" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.9999 44H31.9999C40.0399 44 41.4799 40.78 41.8999 36.86L43.3999 20.86C43.9399 15.98 42.5399 12 33.9999 12H13.9999C5.4599 12 4.0599 15.98 4.5999 20.86L6.0999 36.86C6.5199 40.78 7.9599 44 15.9999 44Z" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 12V10.4C16 6.86 16 4 22.4 4H25.6C32 4 32 6.86 32 10.4V12" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M43.3 22C39.84 24.52 36 26.28 32.02 27.28" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.23999 22.54C8.57999 24.82 12.22 26.44 16 27.36" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Bell1: (
            <svg  {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0005 6.99902V9.9985" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M12.0186 3C8.70385 3 6.01963 5.68422 6.01963 8.99896V10.8905C6.01963 11.503 5.76742 12.4218 5.45216 12.9442L4.30822 14.8538C3.60564 16.0338 4.09204 17.3489 5.38911 17.7812C9.69467 19.2134 14.3515 19.2134 18.6571 17.7812C19.8731 17.3759 20.3955 15.9527 19.738 14.8538L18.594 12.9442C18.2788 12.4218 18.0266 11.494 18.0266 10.8905V8.99896C18.0175 5.70223 15.3153 3 12.0186 3Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M15 18.1504C15 19.7988 13.6489 21.1499 12.0005 21.1499C11.1808 21.1499 10.4242 20.8076 9.88377 20.2671C9.34332 19.7267 9.00104 18.9701 9.00104 18.1504" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
            </svg>
        ),
        Bell2: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V1.57088C3.60769 2.0561 0.999966 4.97352 0.999966 8.5V13.5L0.282371 14.7558C-0.289049 15.7558 0.433002 17 1.58474 17H4.12602C4.57006 18.7252 6.13616 20 8 20C9.86384 20 11.4299 18.7252 11.874 17H14.4152C15.5669 17 16.289 15.7558 15.7176 14.7558L15 13.5V8.5C15 4.97354 12.3923 2.05614 9 1.57089V1ZM2.99997 14.0311L2.44633 15H13.5536L13 14.0311V8.5C13 5.73858 10.7614 3.5 7.99997 3.5C5.23854 3.5 2.99997 5.73858 2.99997 8.5V14.0311ZM8 18C7.25972 18 6.61337 17.5978 6.26756 17H9.73244C9.38663 17.5978 8.74028 18 8 18Z" fill="currentColor" />
            </svg>
        ),
        Book: (
            <svg
                {...props}
                width={size ? size : "16"}
                height={size ? size : "18"}
                viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13.9412V4.88236C1 1.58824 1.82353 0.764709 5.11765 0.764709H10.8824C14.1765 0.764709 15 1.58824 15 4.88236V13.1177C15 13.2329 15 13.3482 14.9918 13.4635" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.34706 11.4706H15V14.3529C15 15.9423 13.7071 17.2353 12.1176 17.2353H3.88235C2.29294 17.2353 1 15.9423 1 14.3529V13.8176C1 12.5247 2.05412 11.4706 3.34706 11.4706Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.70587 4.88235H11.2941" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.70587 7.76471H8.82352" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
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
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 1.66699V4.16699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3335 1.66699V4.16699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.9165 7.5752H17.0832" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 7.08366V14.167C17.5 16.667 16.25 18.3337 13.3333 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.99607 11.4167H10.0036" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.91209 11.4167H6.91957" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.91209 13.9167H6.91957" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Calender2: (
            <svg
                {...props}
                width={size ? size : "22"}
                height={size ? size : "22"}
                viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33301 1.83334V4.58334" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M14.667 1.83334V4.58334" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M3.20801 8.33281H18.7913" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M19.25 7.79167V15.5833C19.25 18.3333 17.875 20.1667 14.6667 20.1667H7.33333C4.125 20.1667 2.75 18.3333 2.75 15.5833V7.79167C2.75 5.04167 4.125 3.20834 7.33333 3.20834H14.6667C17.875 3.20834 19.25 5.04167 19.25 7.79167Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M14.3849 12.5581H14.3932" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M14.3849 15.3081H14.3932" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M10.9953 12.5581H11.0035" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M10.9953 15.3081H11.0035" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M7.60271 12.5581H7.61095" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M7.60271 15.3081H7.61095" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>

        ),
        Cross: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8747 9.99361C11.2001 10.319 11.2001 10.8467 10.8747 11.1721C10.5492 11.4975 10.0216 11.4975 9.69615 11.1721L5.7021 7.17812L1.70816 11.1721C1.38273 11.4976 0.855089 11.4976 0.529649 11.1721C0.204209 10.8467 0.204204 10.3191 0.529639 9.99362L4.52357 5.99962L0.52948 2.00559C0.20404 1.68015 0.204041 1.15252 0.529481 0.827084C0.85492 0.50165 1.38256 0.501649 1.708 0.827083L5.70208 4.8211L9.696 0.827098C10.0214 0.501658 10.5491 0.501655 10.8745 0.827089C11.2 1.15252 11.2 1.68016 10.8745 2.0056L6.8806 5.9996L10.8747 9.99361Z" fill="#858D9D" />
            </svg>
        ),
        ChevronLeft: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67257 0.41107C6.99801 0.736507 6.99801 1.26414 6.67257 1.58958L2.26183 6.00033L6.67257 10.4111C6.99801 10.7365 6.99801 11.2641 6.67257 11.5896C6.34713 11.915 5.8195 11.915 5.49406 11.5896L0.199432 6.29495C0.0367131 6.13223 0.0367129 5.86842 0.199431 5.7057L5.49406 0.41107C5.8195 0.0856329 6.34713 0.0856329 6.67257 0.41107Z" fill="url(#paint0_linear_2452_28216)" />
                <defs>
                    <linearGradient id="paint0_linear_2452_28216" x1="0.0773926" y1="6.00033" x2="6.91665" y2="6.00033" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109423" stop-color="#8913FF" />
                        <stop offset="1" stop-color="#7312F7" />
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
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.327329 0.41107C0.00189281 0.736507 0.00189281 1.26414 0.327329 1.58958L4.73807 6.00033L0.327329 10.4111C0.00189281 10.7365 0.00189281 11.2641 0.327329 11.5896C0.652766 11.915 1.1804 11.915 1.50584 11.5896L6.80047 6.29495C6.96319 6.13223 6.96319 5.86842 6.80047 5.7057L1.50584 0.41107C1.1804 0.0856329 0.652766 0.0856329 0.327329 0.41107Z" fill="#8913FF" />
            </svg>


        ),
        Chat1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3 4.82494V9.41492C19.3 10.5579 18.922 11.5209 18.247 12.1869C17.581 12.8619 16.618 13.2399 15.475 13.2399V14.8689C15.475 15.4809 14.791 15.8499 14.287 15.5079L13.414 14.9319C13.495 14.6529 13.531 14.3469 13.531 14.0229V10.36C13.531 8.52396 12.307 7.29994 10.471 7.29994H4.35999C4.23399 7.29994 4.117 7.30896 4 7.31796V4.82494C4 2.52994 5.53 0.999939 7.825 0.999939H15.475C17.77 0.999939 19.3 2.52994 19.3 4.82494Z" stroke="currentColor" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.231 10.36V14.023C13.231 14.347 13.195 14.653 13.114 14.932C12.781 16.255 11.683 17.083 10.171 17.083H7.723L5.005 18.892C4.6 19.171 4.05999 18.874 4.05999 18.388V17.083C3.14199 17.083 2.377 16.777 1.846 16.246C1.306 15.706 1 14.941 1 14.023V10.36C1 8.65001 2.062 7.47101 3.7 7.31801C3.817 7.30901 3.93399 7.29999 4.05999 7.29999H10.171C12.007 7.29999 13.231 8.52401 13.231 10.36Z" stroke="currentColor" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Download: (
            <svg
                {...props}
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Document1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7.4H13.8C11.4 7.4 10.6 6.6 10.6 4.2V1L17 7.4Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 10H9.8" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 13H8.2" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 7.4V11.4C17 15.4 15.4 17 11.4 17H6.6C2.6 17 1 15.4 1 11.4V6.6C1 2.6 2.6 1 6.6 1H10.6" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        DocumentText: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 5.83341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V5.83341C2.5 3.33341 3.75 1.66675 6.66667 1.66675H13.3333C16.25 1.66675 17.5 3.33341 17.5 5.83341Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.0833 3.75V5.41667C12.0833 6.33333 12.8333 7.08333 13.7499 7.08333H15.4166" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.66675 10.8333H10.0001" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.66675 14.1667H13.3334" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Delete: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.1375 6.85547L13.65 14.408C13.5675 15.5855 13.5 16.5005 11.4075 16.5005H6.59255C4.50005 16.5005 4.43255 15.5855 4.35005 14.408L3.86255 6.85547" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.74756 12.375H10.2451" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.125 9.375H10.875" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Edit: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3047 5.81991C16.281 4.8436 16.281 3.26069 15.3047 2.28438L14.7155 1.69512C13.7391 0.718813 12.1562 0.718813 11.1799 1.69512L1.69097 11.1841C1.34624 11.5288 1.10982 11.9668 1.01082 12.4442L0.341106 15.6735C0.219324 16.2607 0.739063 16.7805 1.32629 16.6587L4.55565 15.989C5.03302 15.89 5.47103 15.6536 5.81577 15.3089L15.3047 5.81991ZM14.1262 3.46289L13.5369 2.87363C13.2115 2.5482 12.6839 2.5482 12.3584 2.87363L11.4745 3.75755L13.2423 5.52531L14.1262 4.6414C14.4516 4.31596 14.4516 3.78833 14.1262 3.46289ZM12.0638 6.70382L10.296 4.93606L2.86948 12.3626C2.75457 12.4775 2.67577 12.6235 2.64277 12.7826L2.23082 14.769L4.21721 14.3571C4.37634 14.3241 4.52234 14.2453 4.63726 14.1303L12.0638 6.70382Z" fill="currentColor" />
            </svg>

        ),
        Envelope: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6L10.496 7.60514C9.672 8.13162 8.32 8.13162 7.496 7.60514L5 6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13 15H5C2.6 15 1 13.7647 1 10.8824V5.11765C1 2.23529 2.6 1 5 1H13C15.4 1 17 2.23529 17 5.11765V10.8824C17 13.7647 15.4 15 13 15Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        FileAttachment: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "20"}
                viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_986_95061)">
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
        Tick: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1318 3.52892C15.0855 2.16791 13.6716 1.13477 12.057 0.551547C10.4424 -0.0316789 8.69464 -0.140627 7.02013 0.237575C5.34562 0.615776 3.81435 1.46533 2.60716 2.68588C1.39998 3.90642 0.567325 5.44696 0.207574 7.12553C0.122848 7.50679 0.0889693 7.90077 0.0338976 8.28627C0.0338976 8.34981 0.0127089 8.41336 0 8.47267V9.5275C0.0465992 9.87064 0.080475 10.2138 0.144019 10.5485C0.359374 11.8292 0.853466 13.047 1.59135 14.1158C2.32923 15.1846 3.2929 16.0782 4.41421 16.7334C5.601 17.4603 6.94794 17.885 8.33702 17.9704C8.38271 17.9779 8.42797 17.9877 8.47258 18.0001H9.52741C9.87055 17.9535 10.2137 17.9196 10.5526 17.8603C12.5752 17.5184 14.4159 16.4835 15.759 14.933C17.1351 13.3709 17.9249 11.3786 17.9929 9.29789C18.0609 7.21717 17.403 5.17761 16.1318 3.52892ZM13.59 6.88406C13.5353 6.95434 13.4758 7.02087 13.4121 7.08318L8.41751 12.0778C8.33886 12.1854 8.23589 12.273 8.11701 12.3334C7.99812 12.3938 7.86669 12.4252 7.73335 12.4252C7.60001 12.4252 7.46855 12.3938 7.34967 12.3334C7.23079 12.273 7.12785 12.1854 7.04919 12.0778C6.20194 11.2305 5.35468 10.3832 4.50742 9.53598C4.4264 9.46621 4.35993 9.38115 4.31182 9.28566C4.26371 9.19018 4.2349 9.08615 4.22703 8.97953C4.21916 8.8729 4.23237 8.76577 4.26595 8.66426C4.29952 8.56275 4.35279 8.46887 4.42269 8.38796C4.55606 8.22483 4.74863 8.12118 4.95825 8.09974C5.16787 8.0783 5.37745 8.14081 5.54108 8.27357C5.60481 8.32522 5.66562 8.38039 5.72323 8.43879L7.59991 10.3155C7.64687 10.3768 7.6907 10.4404 7.73123 10.5061C7.7838 10.4338 7.84036 10.3645 7.90067 10.2985L12.2979 5.90123C12.4227 5.75266 12.5947 5.65142 12.7851 5.61441C12.9756 5.5774 13.173 5.60687 13.3443 5.6979C13.445 5.75338 13.5327 5.82969 13.6016 5.92171C13.6704 6.01374 13.7189 6.1194 13.7438 6.23163C13.7686 6.34386 13.7693 6.46009 13.7457 6.57259C13.7221 6.68509 13.6748 6.79126 13.607 6.88406H13.59Z" fill="currentColor" />
            </svg>
        ),
        Keyboard: (
            <svg
                {...props}
                width={size ? size : "22"}
                height={size ? size : "22"}
                viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.87502 3.66699H15.125C15.6934 3.66699 16.1975 3.68533 16.6467 3.74949C19.0575 4.01533 19.7084 5.15199 19.7084 8.25033V13.7503C19.7084 16.8487 19.0575 17.9853 16.6467 18.2512C16.1975 18.3153 15.6934 18.3337 15.125 18.3337H6.87502C6.30669 18.3337 5.80252 18.3153 5.35335 18.2512C2.94252 17.9853 2.29169 16.8487 2.29169 13.7503V8.25033C2.29169 5.15199 2.94252 4.01533 5.35335 3.74949C5.80252 3.68533 6.30669 3.66699 6.87502 3.66699Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.375 9.16699H15.5833" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.41669 14.208H6.43502H15.5834" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.25341 9.16634H9.26164" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.50341 9.16634H6.51164" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Logout: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 12H3.62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        Lock1: (
            <svg
                {...props}
                width={size ? size : "16"}
                height={size ? size : "16"}
                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6.66683V5.3335C4 3.12683 4.66667 1.3335 8 1.3335C11.3333 1.3335 12 3.12683 12 5.3335V6.66683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.00001 12.3333C8.92048 12.3333 9.66668 11.5871 9.66668 10.6667C9.66668 9.74619 8.92048 9 8.00001 9C7.07954 9 6.33334 9.74619 6.33334 10.6667C6.33334 11.5871 7.07954 12.3333 8.00001 12.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.3333 14.6665H4.66668C2.00001 14.6665 1.33334 13.9998 1.33334 11.3332V9.99984C1.33334 7.33317 2.00001 6.6665 4.66668 6.6665H11.3333C14 6.6665 14.6667 7.33317 14.6667 9.99984V11.3332C14.6667 13.9998 14 14.6665 11.3333 14.6665Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Message: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.375 14.25H6C3 14.25 1.5 13.5 1.5 9.75V6C1.5 3 3 1.5 6 1.5H12C15 1.5 16.5 3 16.5 6V9.75C16.5 12.75 15 14.25 12 14.25H11.625C11.3925 14.25 11.1675 14.3625 11.025 14.55L9.9 16.05C9.405 16.71 8.595 16.71 8.1 16.05L6.975 14.55C6.855 14.385 6.5775 14.25 6.375 14.25Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25 6H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25 9.75H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        Note: (
            <svg
                {...props}
                width={size ? size : "17"}
                height={size ? size : "18"}
                viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3281 1V3.38336" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.3002 6.16388V12.9167C15.3002 15.3001 14.1085 16.889 11.3279 16.889H4.97227C2.19168 16.889 1 15.3001 1 12.9167V6.16388C1 3.78051 2.19168 2.1916 4.97227 2.1916H11.3279C14.1085 2.1916 15.3002 3.78051 15.3002 6.16388Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.97266 8.15009H11.3283" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.97266 12.1225H8.15047" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Options: (
            <svg
                {...props}
                width={size ? size : "4"}
                height={size ? size : "14"}
                viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.66668 1.99992C3.66668 2.92039 2.92049 3.66659 2.00001 3.66659C1.07954 3.66659 0.333344 2.92039 0.333344 1.99992C0.333344 1.07944 1.07954 0.333252 2.00001 0.333252C2.92049 0.333252 3.66668 1.07944 3.66668 1.99992Z" fill="#858D9D" />
                <path d="M3.66668 6.99992C3.66668 7.92039 2.92049 8.66658 2.00001 8.66658C1.07954 8.66658 0.333344 7.92039 0.333344 6.99992C0.333344 6.07944 1.07954 5.33325 2.00001 5.33325C2.92049 5.33325 3.66668 6.07944 3.66668 6.99992Z" fill="#858D9D" />
                <path d="M2.00001 13.6666C2.92049 13.6666 3.66668 12.9204 3.66668 11.9999C3.66668 11.0794 2.92049 10.3333 2.00001 10.3333C1.07954 10.3333 0.333344 11.0794 0.333344 11.9999C0.333344 12.9204 1.07954 13.6666 2.00001 13.6666Z" fill="#858D9D" />
            </svg>

        ),
        Plus: (
            <svg
                {...props}
                width={size ? size : "14"}
                height={size ? size : "14"}
                viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13.0001V1" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13 7.00004L0.999963 7.00004" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        People: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 16.707C41.86 16.6837 41.6967 16.6837 41.5567 16.707C38.3367 16.5903 35.77 13.9537 35.77 10.687C35.77 7.35033 38.4533 4.66699 41.79 4.66699C45.1267 4.66699 47.81 7.37366 47.81 10.687C47.7867 13.9537 45.22 16.5903 42 16.707Z" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M39.5966 33.694C42.7933 34.2307 46.3166 33.6707 48.79 32.014C52.08 29.8207 52.08 26.2274 48.79 24.034C46.2933 22.3774 42.7233 21.8174 39.5266 22.3774" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.9299 16.707C14.0699 16.6837 14.2332 16.6837 14.3732 16.707C17.5932 16.5903 20.1599 13.9537 20.1599 10.687C20.1599 7.35033 17.4765 4.66699 14.1399 4.66699C10.8032 4.66699 8.11987 7.37366 8.11987 10.687C8.14321 13.9537 10.7099 16.5903 13.9299 16.707Z" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.3332 33.694C13.1365 34.2307 9.6132 33.6707 7.13986 32.014C3.84986 29.8207 3.84986 26.2274 7.13986 24.034C9.63653 22.3774 13.2065 21.8174 16.4032 22.3774" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 34.1367C27.86 34.1134 27.6967 34.1134 27.5567 34.1367C24.3367 34.02 21.77 31.3834 21.77 28.1167C21.77 24.78 24.4533 22.0967 27.79 22.0967C31.1267 22.0967 33.81 24.8034 33.81 28.1167C33.7867 31.3834 31.22 34.0434 28 34.1367Z" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.2099 41.4868C17.9199 43.6802 17.9199 47.2735 21.2099 49.4668C24.9433 51.9635 31.0566 51.9635 34.7899 49.4668C38.0799 47.2735 38.0799 43.6802 34.7899 41.4868C31.0799 39.0135 24.9433 39.0135 21.2099 41.4868Z" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        PencilWithLine: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.945 2.69992L3.7875 9.21742C3.555 9.46492 3.33 9.95242 3.285 10.2899L3.0075 12.7199C2.91 13.5974 3.54 14.1974 4.41 14.0474L6.825 13.6349C7.1625 13.5749 7.635 13.3274 7.8675 13.0724L14.025 6.55492C15.09 5.42992 15.57 4.14742 13.9125 2.57992C12.2625 1.02742 11.01 1.57492 9.945 2.69992Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.9175 3.7876C9.24 5.8576 10.92 7.4401 13.005 7.6501" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.25 16.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        ProfileDelete: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.9567 42.21L36.3767 48.79" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42.9567 48.79L36.3767 42.21" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28.3737 25.3637C28.1404 25.3403 27.8604 25.3403 27.6037 25.3637C22.0504 25.177 17.6404 20.627 17.6404 15.027C17.6404 9.31033 22.2604 4.66699 28.0004 4.66699C33.717 4.66699 38.3604 9.31033 38.3604 15.027C38.3371 20.627 33.927 25.177 28.3737 25.3637Z" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 50.8896C23.7533 50.8896 19.53 49.8163 16.31 47.6696C10.6633 43.8896 10.6633 37.7296 16.31 33.9729C22.7266 29.6796 33.25 29.6796 39.6666 33.9729" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Setting1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6 17H11.4C15.4 17 17 15.4 17 11.4V6.6C17 2.6 15.4 1 11.4 1H6.6C2.6 1 1 2.6 1 6.6V11.4C1 15.4 2.6 17 6.6 17Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.856 14.1997V11.0797" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.856 5.35999V3.79999" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.856 9.52017C13.0048 9.52017 13.936 8.58892 13.936 7.44017C13.936 6.29142 13.0048 5.36017 11.856 5.36017C10.7072 5.36017 9.776 6.29142 9.776 7.44017C9.776 8.58892 10.7072 9.52017 11.856 9.52017Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.14398 14.1998V12.6398" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.14398 6.91999V3.79999" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.14403 12.6397C7.29278 12.6397 8.22403 11.7084 8.22403 10.5597C8.22403 9.41092 7.29278 8.47968 6.14403 8.47968C4.99527 8.47968 4.06403 9.41092 4.06403 10.5597C4.06403 11.7084 4.99527 12.6397 6.14403 12.6397Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        SmsNotification: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5C16.1046 5 17 4.10457 17 3C17 1.89543 16.1046 1 15 1C13.8954 1 13 1.89543 13 3C13 4.10457 13.8954 5 15 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 6L7.33003 7.60514C8.09678 8.13162 9.35484 8.13162 10.1216 7.60514L11 7.0016" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 6.76471V10.8824C17 13.7647 15.4 15 13 15H5C2.6 15 1 13.7647 1 10.8824V5.11765C1 2.23529 2.6 1 5 1H10.6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Search: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7847 15.1991C10.6462 17.6416 6.10654 17.4205 3.22181 14.5358C0.0976136 11.4116 0.0976136 6.34625 3.22181 3.22205C6.346 0.0978578 11.4113 0.0978578 14.5355 3.22205C17.4202 6.10677 17.6414 10.6464 15.1989 13.7849L19.4853 18.0713C19.8758 18.4618 19.8758 19.095 19.4853 19.4855C19.0948 19.876 18.4616 19.876 18.0711 19.4855L13.7847 15.1991ZM4.63602 13.1215C6.97917 15.4647 10.7782 15.4647 13.1213 13.1215C15.4644 10.7784 15.4644 6.97941 13.1213 4.63627C10.7782 2.29312 6.97917 2.29312 4.63602 4.63627C2.29288 6.97941 2.29288 10.7784 4.63602 13.1215Z" fill="currentColor" />
            </svg>
        ),
        Sort1: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.56206 16.7289L3.58789 12.7627" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.56201 3.27051V16.7288" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.2964 3.27051L16.2706 7.23676" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.2964 16.7288V3.27051" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
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
                <path d="M10.0999 10.6497C10.0416 10.6414 9.9666 10.6414 9.89993 10.6497C8.43327 10.5997 7.2666 9.39974 7.2666 7.92474C7.2666 6.41641 8.48327 5.19141 9.99993 5.19141C11.5083 5.19141 12.7333 6.41641 12.7333 7.92474C12.7249 9.39974 11.5666 10.5997 10.0999 10.6497Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.6166 16.1498C14.1333 17.5081 12.1666 18.3331 9.99997 18.3331C7.8333 18.3331 5.86663 17.5081 4.3833 16.1498C4.46663 15.3665 4.96663 14.5998 5.8583 13.9998C8.14163 12.4831 11.875 12.4831 14.1416 13.9998C15.0333 14.5998 15.5333 15.3665 15.6166 16.1498Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
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
                <path d="M6.58231 9.0289C6.49768 9.02043 6.39613 9.02043 6.30304 9.0289C4.28891 8.96119 2.68945 7.31096 2.68945 5.27991C2.68945 3.20654 4.36507 1.52246 6.4469 1.52246C8.52027 1.52246 10.2043 3.20654 10.2043 5.27991C10.1959 7.31096 8.59643 8.96119 6.58231 9.0289Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.7179 3.21484C14.3597 3.21484 15.6799 4.54349 15.6799 6.1768C15.6799 7.77625 14.4105 9.07951 12.8279 9.13875C12.7602 9.13029 12.6841 9.13029 12.6079 9.13875" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.35093 12.1517C0.302947 13.5227 0.302947 15.7569 2.35093 17.1194C4.67817 18.6765 8.49486 18.6765 10.8221 17.1194C12.8701 15.7484 12.8701 13.5142 10.8221 12.1517C8.50333 10.6031 4.68664 10.6031 2.35093 12.1517Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.3511 16.7554C14.9604 16.6284 15.5359 16.383 16.0098 16.0191C17.33 15.029 17.33 13.3957 16.0098 12.4055C15.5443 12.0501 14.9773 11.8131 14.3765 11.6777" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        View: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99996 0.166992C14.1083 0.166992 16.5256 3.59196 17.3765 5.19314C17.6475 5.70299 17.6475 6.29766 17.3765 6.80751C16.5256 8.40869 14.1083 11.8337 8.99996 11.8337C3.89164 11.8337 1.47436 8.40869 0.623389 6.80751C0.352425 6.29766 0.352425 5.70299 0.62339 5.19314C1.47436 3.59196 3.89164 0.166992 8.99996 0.166992ZM4.69692 3.06507C3.31336 3.98178 2.50548 5.20318 2.09512 5.97531C2.09054 5.98393 2.08865 5.98991 2.08783 5.9932C2.08699 5.99654 2.08683 6.00033 2.08683 6.00033C2.08683 6.00033 2.08699 6.00411 2.08783 6.00745C2.08865 6.01074 2.09054 6.01672 2.09512 6.02534C2.50548 6.79747 3.31336 8.01887 4.69692 8.93558C4.1257 8.09979 3.79163 7.08907 3.79163 6.00033C3.79163 4.91158 4.1257 3.90086 4.69692 3.06507ZM13.303 8.93557C14.6866 8.01887 15.4944 6.79747 15.9048 6.02534C15.9094 6.01672 15.9113 6.01074 15.9121 6.00745C15.9126 6.00529 15.913 6.00223 15.913 6.00223L15.9131 6.00033L15.9128 5.99666L15.9121 5.9932C15.9113 5.98991 15.9094 5.98393 15.9048 5.97531C15.4944 5.20318 14.6866 3.98179 13.303 3.06508C13.8742 3.90086 14.2083 4.91158 14.2083 6.00033C14.2083 7.08907 13.8742 8.09979 13.303 8.93557ZM5.4583 6.00033C5.4583 4.04432 7.04396 2.45866 8.99997 2.45866C10.956 2.45866 12.5416 4.04432 12.5416 6.00033C12.5416 7.95633 10.956 9.54199 8.99997 9.54199C7.04396 9.54199 5.4583 7.95633 5.4583 6.00033Z" fill="currentColor" />
            </svg>
        ),
        Video: (
            <svg
                {...props}
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.52 17.0999L16.74 15.1499V8.83989L19.52 6.88989C20.88 5.93989 22 6.51989 22 8.18989V15.8099C22 17.4799 20.88 18.0599 19.52 17.0999Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Wallet: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8335 9.29199H5.8335" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.6665 9.29121V5.44121C1.6665 3.74121 3.04151 2.36621 4.74151 2.36621H9.42484C11.1248 2.36621 12.4998 3.42454 12.4998 5.12454" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.5665 10.1667C14.1498 10.5667 13.9498 11.1833 14.1165 11.8166C14.3248 12.5916 15.0915 13.0833 15.8915 13.0833H16.6665V14.2917C16.6665 16.1333 15.1748 17.625 13.3332 17.625H4.99984C3.15817 17.625 1.6665 16.1333 1.6665 14.2917V8.45833C1.6665 6.61667 3.15817 5.125 4.99984 5.125H13.3332C15.1665 5.125 16.6665 6.625 16.6665 8.45833V9.66663H15.7665C15.2998 9.66663 14.8748 9.84999 14.5665 10.1667Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.3333 10.517V12.2337C18.3333 12.7003 17.95 13.0837 17.475 13.0837H15.8667C14.9667 13.0837 14.1417 12.4254 14.0667 11.5254C14.0167 11.0004 14.2167 10.5087 14.5667 10.167C14.875 9.85036 15.3 9.66699 15.7667 9.66699H17.475C17.95 9.66699 18.3333 10.0503 18.3333 10.517Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),

    };

    return iconMap[name];
}

export default Icon;
