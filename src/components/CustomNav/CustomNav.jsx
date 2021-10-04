import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../routes/utils';
import CartWidget from "../CartWidget/CartWidget";
const CustomNav = (props) => {
    const getCount = (cart) => {
        let count = 0;
        if (cart && cart.length > 0) {
            cart.forEach(item => {
                if(item?.quantity)
                count += item.quantity
            })
        }
        return count;

    }
    return (
        <div className="customNav">
            <Link to={PATH.HOME}>
                <div className="customNav__header">
                    My Shop.
                </div>
            </Link>
            <Link to={PATH.CART}>
                <CartWidget counter={getCount(props.cart)} />
            </Link>
        </div>
    );
}

export default CustomNav;