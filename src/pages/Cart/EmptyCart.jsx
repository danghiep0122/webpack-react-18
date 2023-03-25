import React from "react";
import { Link } from "react-router-dom";
import { EmptyCartIcon } from "../../icons/Icons";

export function EmptyCart() {
    return (
        <div className="empty-cart-wrapper">
            <div className="empty-picture-wrapper">
                <EmptyCartIcon />
            </div>
            <div className="empty-text-wrapper">
                <h3>Empty cart</h3>
                <p>
                    You currently have no products in your shopping cart. Take a
                    look around the menu to choose your favorite products,
                    Domino's Pizza has a lot of delicious dishes!
                </p>
                <Link to={"/menu"}>
                    <button className="empty-cart-button">Continue</button>
                </Link>
            </div>
        </div>
    );
}
