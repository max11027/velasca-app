import React from 'react';
import { withCustomPageWrapper } from "../../hoc/withCustomPageWrapper";
import ProductItem from '../../components/ProductItem/ProductItem';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import CustomNav from '../../components/CustomNav/CustomNav';
import CustomAlert from '../../components/CustomAlert/CustomAlert';

const Cart = () => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [productsCount, setProductsCount] = React.useState(20);
    const [error, toggleError] = React.useState(false);

    return (
        <>
            <CustomNav />
            <CustomAlert show={error} />
        </>
    );
}

export default withCustomPageWrapper(Cart);