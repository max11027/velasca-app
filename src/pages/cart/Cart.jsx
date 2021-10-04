import React from 'react';
import { withCustomPageWrapper } from "../../hoc/withCustomPageWrapper";
import ProductItem from '../../components/ProductItem/ProductItem';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import { fetchProducts } from '../../services/products.service';
import { fetchCart, patchCart } from '../../services/cart.service';
import CustomNav from '../../components/CustomNav/CustomNav';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import { ReactComponent as DeleteIcon } from "../../assets/zondicons/trash.svg"
import { ReactComponent as ContinueIcon } from "../../assets/zondicons/cheveron-outline-right.svg"
import { AppContext } from "../../appContext";
import commonTools from "../../tools/common";
import CustomContainer from '../../components/CustomContainer/CustomContainer';

const Cart = () => {
    const [loading, setLoading] = React.useState(false);
    const [productsCount, setProductsCount] = React.useState(20);
    const [total, setTotal] = React.useState(0);
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

    React.useEffect(() => {
        if (cart && cart?.length) {
            let newTotal = 0;
            cart.forEach(item => {
                const matchProduct = products.find(product =>
                    product?.id == item?.productId
                );
                if (matchProduct && parseFloat(matchProduct?.price) != NaN)
                    newTotal += parseFloat(matchProduct.price);
            })
            setTotal(newTotal);
        }
    }, [cart]);

    const handleDelete = (productId) => {
        const newCart = [...cart],
            productIndex = newCart.findIndex(item => item?.productId == productId),
            product = newCart[productIndex];
        if (productIndex >= 0) {
            if (newCart[productIndex]?.quantity == 1)
                newCart.splice(productIndex, 1);
            else newCart[productIndex].quantity -= 1
        }
        setCart(newCart);
    }

    const handleSubmit = (e) => {
        if (cart && cart.length) {
            setLoading(true);
            patchCart(cart)
                .then(res => {
                    setLoading(false);
                    setCart(cart)
                })
                .catch(error => {
                    setLoading(false);
                    toggleError(true);
                })
        }
    }

    const doFetchProducts = (size) => {
        setLoading(true);
        /**REMOVED INFINITE SCROLL FEATURE */
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
            <CustomNav cart={cart} />
            <CustomAlert show={error} />
            {loading && <CustomLoader />}
            <div className="cartPage">
                <CustomContainer>
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
                                                <td>{commonTools.euroFormatter(matchProduct?.price)}</td>
                                                <td>{matchProduct?.title}</td>
                                                <td>
                                                    <div
                                                        className="cartPageTable__deleteIcon"
                                                        onClick={(e) => handleDelete(matchProduct?.id)}
                                                    >
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
                            Totale: {commonTools.euroFormatter(total)}
                        </div>
                        <div onClick={handleSubmit}>
                            <span>
                                Procedi con gli Acquisti
                        </span>
                            <ContinueIcon />
                        </div>
                    </div>
                </CustomContainer>
            </div>
        </>

    );
}

export default withCustomPageWrapper(Cart);