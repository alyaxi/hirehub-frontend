import React from "react";

function Badge({ children }) {
    const bgColor = (_children) => {
        const lowercaseStatus = _children?.toLowerCase(); // Use optional chaining to handle undefined status
        switch (lowercaseStatus) {
            case "active":
                return "bg-green-3";
            case "deactive":
            case "rejected":
                return "bg-red-3";
            case "hold":
            case "pending":
                return "bg-warning-3";
            case "new application":
            case "application":
            case "screening":
            case "job offer":
            case "hire":
            case "screening":
            case "interview":
            case "interested":
            case "not interested":
            case "selection":
            case "qualified":
            case "unqualified":
            case "new":
            case "connected":
            case "attempted to contact":
            case "on hold":
                return "bg-gray-10";
            default:
                return "";
        }
    };
    const textColor = (_children) => {
        const lowercaseStatus = _children?.toLowerCase(); // Use optional chaining to handle undefined status
        switch (lowercaseStatus) {
            case "active":
                return "text-green-2";
            case "deactive":
            case "rejected":
                return "text-red-2";
            case "hold":
            case "pending":
                return "text-warning-2";
            case "new application":
            case "application":
            case "screening":
            case "job offer":
            case "hire":
            case "screening":
            case "interview":
            case "interested":
            case "not interested":
            case "selection":
            case "qualified":
            case "unqualified":
            case "new":
            case "connected":
            case "attempted to contact":
            case "on hold":
                return "text-gray-6";
            default:
                return "";
        }
    };

    return (
        <p className={`inline-flex justify-center items-center max-h-[42px] ${textColor(children)} text-[13px] leading-[20px] capitalize font-semibold rounded-full ${bgColor(children)} py-1.5 px-4`}>
            {children}
        </p>

    );
};

export default Badge;
