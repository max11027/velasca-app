import React from 'react';
import { fetchProducts } from '../../services/products.service';
import { fetchCart } from '../../services/cart.service';
import { withCustomPageWrapper } from "../../hoc/withCustomPageWrapper";
import ProductItem from '../../components/ProductItem/ProductItem';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import CustomContainer from '../../components/CustomContainer/CustomContainer';
import CustomNav from '../../components/CustomNav/CustomNav';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import { AppContext } from "../../appContext";

const Home = () => {
    const [loading, setLoading] = React.useState(false);
    const [productsCount, setProductsCount] = React.useState(20);
    const [error, toggleError] = React.useState(false);

    const {
        products,
        cart,
        setProducts,
        setCart
    } = React.useContext(AppContext);

    React.useEffect(() => {
        if (!products?.length)
            doFetchProducts(productsCount);
        if (!cart?.length)
            doFetchCart();
        // document.addEventListener("scroll", handleScrollY);
        // return () => {
        //     document.removeEventListener("scroll", handleScrollY);
        // }
    }, []);

    React.useEffect(() => {
        if (error == true)
            setTimeout(() => toggleError(false), 1000);
    }, [error]);

    const handleScrollY = () => {
        if (window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight) {
            const newCount = productsCount + 20;
            doFetchProducts(newCount);
            setProductsCount(newCount);
        }
    }

    const doFetchProducts = (size) => {
        setLoading(true);
        //fetchProducts(size)
        fetchProducts()
            .then(products => {
                setLoading(false);
                setProducts(products);
            })
            .catch(error => {
                setLoading(false);
                toggleError(true);
            })
    };

    const doFetchCart = () => {
        setLoading(true);
        fetchCart()
            .then(cart => {
                /** IGNORING MOCKED RESPONSE */
                //setCart(cart?.products || []);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                toggleError(true);
            })
    };

    return (
        <>
            <CustomNav />
            <CustomAlert show={error} />
            {loading && <CustomLoader />}
            <div className="homePage">
                <CustomContainer>
                    <div className="homePage__productList">
                        {!!products?.length &&
                            products.map((product, idx) => (
                                <div key={idx}>
                                    <ProductItem {...product} />
                                </div>
                            ))
                        }
                    </div>
                </CustomContainer>
            </div>
        </>
    );
}
export default withCustomPageWrapper(Home);