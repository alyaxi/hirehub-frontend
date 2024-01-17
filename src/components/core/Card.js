function Card({ children, w840, className, border }) {
    const defaultClasses = `
        ${w840 && 'max-w-[840px]'}       
        bg-white rounded-[8px] shadow-[0_3px_5px_-2px_rgba(0,0,0,0.2)]
        ${border && 'border-[1px] border-gray-11'}
    `;

    return (
        <div className={`${defaultClasses} ${className}`}>
            {children}
        </div>
    )
}

export default Card