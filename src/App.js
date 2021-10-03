import React from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PATH } from "./routes/utils";

function App() {
  const AppContext = React.createContext({
    cart: [],
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={PATH.CART} component={Cart} />
          <Route path={PATH.HOME} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
