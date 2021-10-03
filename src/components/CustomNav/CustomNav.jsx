import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../routes/utils';
import CartWidget from "../CartWidget/CartWidget";
const CustomNav = (props) => {
    return (
        <div className="customNav">
            <Link to={PATH.HOME}>
                <div className="customNav__header">
                    My Shop.
                </div>
            </Link>
            <Link to={PATH.CART}>
                <CartWidget />
            </Link>
        </div>
    );
}

export default CustomNav;