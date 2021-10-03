import React from 'react';
import { ReactComponent as LoaderIcon } from "../../assets/custom/loader.svg"

const CustomLoader = (active = false) => {
    return (
        <div className={`customLoader ${active ? "active" : ""}`}>
            <div className="customLoader__spinner">
                <LoaderIcon />
            </div>
        </div>
    );
}

export default CustomLoader;