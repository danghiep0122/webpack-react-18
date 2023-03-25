import React from "react";
import CommonLayout from "../../layouts/commonLayout/CommonLayout";
import "./styles.scss";

import ProductListing from "./ProductListing";
import CartSection from "./CartSection";

function Menu() {
    return (
        <CommonLayout>
            <div className="menu-page">
                <div className="menu-page-container">
                    <div className="menu-page-top-sticky-menu">
                        <div className="address-delivery">Address</div>
                        <div className="menu-select-list-wrapper">
                            <ul className="menu-select-list">
                                <li>Daily Promotion</li>
                                <li>Pizza</li>
                                <li>Spagetti</li>
                                <li>Add-On</li>
                                <li>Dessert</li>
                                <li>Drink</li>
                            </ul>
                        </div>
                    </div>
                    <ProductListing />
                </div>
                <CartSection />
            </div>
        </CommonLayout>
    );
}

export default Menu;
