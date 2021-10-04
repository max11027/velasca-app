import React from 'react';
import commonTools from "../../tools/common";
import { ReactComponent as AddIcon } from "../../assets/custom/shopping-bag.svg";
import Ellipsis from 'react-ellipsis-pjs';

const ProductItem = (props) => {
    const [isHovered, toggleHovered] = React.useState(false);
    const handleMouseEnter = (e) => {
        setTimeout((e) =>
            toggleHovered(true)
            , 200)
    }
    const handleMouseLeave = (e) => {
        setTimeout((e) =>
            toggleHovered(false)
            , 200)
    }

    return (
        <div
            className="productItem"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <div className="productItem__content">
                <div className="productItem__image">
                    <img src={props?.image} alt={props?.title || ""} />
                    <div className={`productItem__actionBar ${isHovered ? "active" : ""}`}>
                        <div>
                            <div>
                                <div className="productItemActionBar__price">
                                    {commonTools.euroFormatter(props?.price)}
                                </div>
                                <div 
                                className="productItemActionBar__add"
                                onClick={(e)=>props.onAddProduct(props.id)}
                                >
                                    <AddIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`productItem__title ${isHovered ? "active" : ""}`}>
                <Ellipsis text={props?.title} lines={2} /> 

                </div>
            </div>
        </div>

    );
}

export default ProductItem;