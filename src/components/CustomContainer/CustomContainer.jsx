import React from 'react';

const CustomContainer = ({ className = "", children, ...props }) =>(
    <div className={`customContainer ${className}`}>
        {children}
    </div>);

export default CustomContainer;