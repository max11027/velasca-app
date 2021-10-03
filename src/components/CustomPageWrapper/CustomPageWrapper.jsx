import React from 'react';

const CustomPageWrapper = ({ className = "", children, ...props }) =>(
    <div className={`customPageWrapper ${className}`}>
        {children}
    </div>);

export default CustomPageWrapper;