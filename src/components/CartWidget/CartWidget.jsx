import React from 'react';
import { ReactComponent as CartIcon } from "../../assets/custom/empty-cart.svg";

const CartWidget = ({ counter }) => {
    return (
        <div className={`cartWidget ${counter > 0 ? "highlight" : ""}`}>
            <div className={`cartWidget__icon`}>
                <CartIcon />
            </div>
            <div className={`cartWidget__counter`}>{counter}</div>
        </div>
    );
}

export default CartWidget;