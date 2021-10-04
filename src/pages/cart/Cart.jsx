import React from 'react';
import { withCustomPageWrapper } from "../../hoc/withCustomPageWrapper";
import ProductItem from '../../components/ProductItem/ProductItem';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import { fetchProducts } from '../../services/products.service';
import { fetchCart } from '../../services/cart.service';
import CustomNav from '../../components/CustomNav/CustomNav';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import { ReactComponent as DeleteIcon } from "../../assets/zondicons/trash.svg"
import { ReactComponent as ContinueIcon } from "../../assets/zondicons/cheveron-outline-right.svg"
import { AppContext } from "../../appContext";
const Cart = () => {
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
    }, []);

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
                setCart(cart?.products || []);
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
            <div className="cartPage">
                <div className="cartPage__table">
                    <table>
                        <thead>

                        </thead>
                        <tr>
                            <th>Quantità</th>
                            <th>Prezzo</th>
                            <th>Articolo</th>
                            <th></th>
                        </tr>
                        <tbody>
                            {products?.length && cart?.length
                                ? cart.map((item, idx) => {
                                    const matchProduct = products.find(product =>
                                        product?.id == item?.productId
                                    );
                                    return (
                                        <tr key={"cart" + idx}>
                                            <td>{item.quantity}</td>
                                            <td>{matchProduct?.price}</td>
                                            <td>{matchProduct?.title}</td>
                                            <td>
                                                <div className="cartPageTable__deleteIcon">
                                                    <DeleteIcon />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }) : (
                                    <tr>
                                        <td colSpan={4}>Il carrello è vuoto</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="cartPage__footer">
                    <div>
                        Totale
                    </div>
                    <div>
                        <span>
                            Procedi con gli Acquisti
                        </span>
                        <ContinueIcon />
                    </div>
                </div>
            </div>
        </>

    );
}

export default withCustomPageWrapper(Cart);