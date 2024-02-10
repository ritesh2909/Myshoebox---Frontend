import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import SingleProduct from "./pages/SingleProduct";
import Wishlist from "./pages/Wishlist";
import { useContext } from "react";
import { Context } from "./context/Context";
import Bag from "./pages/Bag";
import ProfileEdit from "./pages/ProfileEdit";
import Failure from "./pages/Failure";
import GetHelp from "./pages/GetHelp";
import V2Home from "./pages/V2Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import StripeSuccess from "./pages/StripeSuccess";
import StripeCheckout from "./pages/StripeCheckout";
import StripeCancel from "./pages/StripeCancel";

function App() {
  const { token } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/:id" element={<SingleProduct />} />
        <Route
          path="/signin"
          element={!token ? <SignIn /> : <Navigate to="/" />}
        />
        <Route
          path="/otp-login"
          element={!token ? <Otp /> : <Navigate to="/" />}
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/wishlist"
          element={token ? <Wishlist /> : <Navigate to="/signin" />}
        />
        <Route
          path="/bag"
          element={token ? <Bag /> : <Navigate to="/signin" />}
        />
        <Route
          path="/profile-edit"
          element={token ? <ProfileEdit /> : <Navigate to="/signin" />}
        />
        <Route path="/error" element={<Failure />} />
        <Route path="/get-help" element={<GetHelp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<StripeSuccess />} />
        <Route path="/cancel" element={<StripeCancel />} />
        <Route path="/stripe" element={<StripeCheckout />} />
      </Routes>
    </Router>
  );
}

export default App;
