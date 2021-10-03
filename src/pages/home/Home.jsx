import React from 'react';
import { fetchProducts } from '../../services/products.service';
import CustomContainer from '../../components/CustomContainer/CustomContainer';
import { withCustomPageWrapper } from "../../hoc/withCustomPageWrapper";
import ProductItem from '../../components/ProductItem/ProductItem';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import CustomNav from '../../components/CustomNav/CustomNav';
const Home = () => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [productsCount, setProductsCount] = React.useState(20);
    const [productsError, toggleProductsError] = React.useState(false);

    React.useEffect(() => {
        doFetchProducts(productsCount)
        document.addEventListener("scroll", handleScrollY);
        return () => {
            document.removeEventListener("scroll", handleScrollY);
        }
    }, []);

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
        fetchProducts(size)
            .then(products => {
                setLoading(false);
                setProducts(products);
            })
            .catch(error => {
                setLoading(false);
                toggleProductsError(true);
            })
    };

    return (
        <>
            <CustomNav />
            {loading && <CustomLoader />}
            <div className="homePage">
                <div className="homePage__productList">
                    {!!products?.length &&
                        products.map((product, idx) => (
                            <div key={idx}>
                                <ProductItem {...product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
export default withCustomPageWrapper(Home);