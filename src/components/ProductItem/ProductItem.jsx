import React from 'react';

const ProductItem = (props) => {
    return (
        <div className="productItem">
            <img src={props?.image} alt={props?.description || props?.title || ""} />
            <div>{props?.title || ""}</div>
        </div>
    );
}

export default ProductItem;