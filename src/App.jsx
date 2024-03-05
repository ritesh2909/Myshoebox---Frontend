import React from "react";
import AppRoutes from "./config/AppRoutes";
import { Context } from "./context/Context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { appRoutes } from "./config/endpoint";
import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import SingleProduct from "./pages/SingleProduct";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProfileEdit from "./pages/ProfileEdit";
import Failure from "./pages/Failure";
import GetHelp from "./pages/GetHelp";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import StripeSuccess from "./pages/StripeSuccess";
import StripeCheckout from "./pages/StripeCheckout";
import StripeCancel from "./pages/StripeCancel";
import NotFound from "./pages/NotFound"

function App() {
  const { token } = useContext(Context);
  return (
    <>
      <Router>
        <Routes>
        <Route
            path={appRoutes.Register}
            element={!token ? <Register /> : <Navigate to={appRoutes.Home} />}
          />
          <Route
            path={appRoutes.Login}
            element={!token ? <Login /> : <Navigate to={appRoutes.Home} />}
          />
          <Route path={appRoutes.SingleProduct} element={<SingleProduct />} />
          <Route
            path={appRoutes.SignIn}
            element={!token ? <SignIn /> : <Navigate to={appRoutes.Home} />}
          />
          <Route path={appRoutes.Home} element={<Home />} />
          <Route
            path={appRoutes.Wishlist}
            element={token ? <Wishlist /> : <Navigate to={appRoutes.SignIn} />}
          />
          <Route
            path={appRoutes.Cart}
            element={token ? <Cart /> : <Navigate to={appRoutes.SignIn} />}
          />
          <Route
            path={appRoutes.ProfileEdit}
            element={token ? <ProfileEdit /> : <Navigate to={appRoutes.SignIn} />}
          />
          <Route path={appRoutes.Failure} element={<Failure />} />
          <Route path={appRoutes.GetHelp} element={<GetHelp />} />
          <Route path={appRoutes.ProductsList} element={<Products />} />
          <Route path={appRoutes.Checkout} element={<Checkout />} />
          <Route path={appRoutes.StripeSuccess} element={<StripeSuccess />} />
          <Route path={appRoutes.StripeCancel} element={<StripeCancel />} />
          <Route path={appRoutes.StripeCheckout} element={<StripeCheckout />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
