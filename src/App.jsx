import { Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Voucher from "./pages/Voucher";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import TrackingOrder from "./pages/TrackingOrder";
import Account from "./pages/Account";
import Promotion from "./pages/Promotion";
import Checkout from "./pages/Checkout";
import "./App.scss";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="voucher" element={<Voucher />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="tracking" element={<TrackingOrder />} />
            <Route path="menu" element={<Menu />} />
            <Route path="account-info" element={<Account />} />
            <Route path="*" element={<div>Hello World</div>} />
        </Routes>
    );
}

export default App;
