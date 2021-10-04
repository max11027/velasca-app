import React from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PATH } from "./routes/utils";
import { AppContext } from "./appContext";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  return (
    <div className="App">
      <AppContext.Provider value={{ products, cart, setProducts, setCart }}>
        <Router>
          <Switch>
            <Route path={PATH.CART} component={Cart} />
            <Route path={PATH.HOME} component={Home} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
