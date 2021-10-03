import React from 'react';
import { fetchProducts } from '../../services/products.service';
import CustomContainer from '../../components/CustomContainer/CustomContainer';
import { withCustomPageWrapper } from "../../hoc/withCustomPageWrapper";
const Home = () => {
    const [products, setProducts] = React.useState([]);
    const [productsError, toggleProductsError] = React.useState(false);

    React.useEffect(() => {
        fetchProducts()
            .then(products => {
                //console.log(products);
                setProducts(products)
            })
            .catch(error => {
                toggleProductsError(true)
            })
    }, []);

    return (
        <div className="homePage">
            <div className="homePage__nav">
                My Store
            </div>
            <CustomContainer className="homePage__productList">
                <div className="homePageProductList__header">

                </div>
                <div>
                    {products?.length &&
                        products.map(product => (
                            <div className="homePage__productItem">
                                <div>
                                    <img src={product?.image} alt={product?.description || product?.title || ""} />
                                </div>
                                <div>{product?.title || ""}</div>
                            </div>
                        ))
                    }
                </div>
            </CustomContainer>
        </div>
    );
}
export default withCustomPageWrapper(Home);