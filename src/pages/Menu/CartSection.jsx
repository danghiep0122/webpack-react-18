import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { EmptyCartIcon } from "../../icons/Icons";
import { formatVND } from "../../ultilities/format";
import { onRemove } from "../../feature/cartItem/cartItemSlice";
import { useNavigate } from "react-router-dom";

function CartSection() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartList = useSelector((state) => state.CART_ITEM.value);
    const [promotionCodeInput, setPromotionCodeInput] = useState("");
    const [promotionCodeError, setPromotionCodeError] = useState("");

    const checkPromotionCode = () => {
        if (promotionCodeInput.trim() !== "") {
            setPromotionCodeError("");
        } else {
            setPromotionCodeError("Enter your E-voucher Please!");
        }
    };

    const itemsPrice = cartList.reduce(
        (a, b) => (a = a + b.qty * b.priceSelected),
        0
    );

    const handleClick = (event) => {
        event.preventDefault();
        setPromotionCodeInput("");
        promotionCodeInput.trim() !== "" &&
            alert("E-voucher is apply Successfully");
    };
    return (
        <div className="cart-section">
            {cartList.length === 0 ? (
                <div className="cart-empty-wrapper">
                    <EmptyCartIcon width="240px" height="240px" />
                    <h4>
                        Cart is empty. <br />
                        Please select from Menu
                    </h4>
                </div>
            ) : (
                <div className="cart-items-wrapper">
                    <div>
                        <div className="order-title">
                            <h3>Your Order</h3>
                            <h3>{cartList.length} item(s)</h3>
                        </div>
                        <section className="checkout-promotion-code">
                            <div className="checkout-promotion-code-wrapper">
                                <input
                                    value={promotionCodeInput}
                                    onChange={(e) =>
                                        setPromotionCodeInput(e.target.value)
                                    }
                                    onBlur={checkPromotionCode}
                                    placeholder="Enter your E-voucher"
                                />
                                <button onClick={handleClick}>Apply</button>
                            </div>
                            <span>{promotionCodeError}</span>
                        </section>
                        <section className="items-list">
                            <div className="items-list-container">
                                {cartList.map((item) => (
                                    <div key={item.id}>
                                        <div className="menu-cart-item">
                                            <span>{item.qty}</span>
                                            <span>x</span>
                                            <div className="menu-cart-item-description">
                                                <div className="menu-cart-item-title-price-wrapper">
                                                    <h4>{item.title}</h4>
                                                    <h4>
                                                        {formatVND(
                                                            item.priceSelected *
                                                                item.qty
                                                        )}
                                                    </h4>
                                                </div>
                                                <div className="menu-cart-item-detail-wrapper">
                                                    <div className="menu-cart-item-detail">
                                                        <p>{item.baseTitle}</p>
                                                        <p>{item.sizeTitle}</p>
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    alert(
                                                                        "Developing"
                                                                    )
                                                                }
                                                            >
                                                                Adjust
                                                            </button>
                                                            <span />
                                                            <button
                                                                onClick={() =>
                                                                    dispatch(
                                                                        onRemove(
                                                                            item
                                                                        )
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="menu-cart-item-image">
                                                        <img
                                                            alt={item.title}
                                                            src={item.imgUrl}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className="checkout-total-sticky">
                        <div className="checkout-total-row">
                            <p>Total</p>
                            <span>{formatVND(itemsPrice)}</span>
                        </div>
                        <div className="checkout-discount-row">
                            <p>Discount Promotion</p>
                            <span>{formatVND(0)}</span>
                        </div>
                        <div className="checkout-discount-row">
                            <p>Discount Voucher</p>
                            <span>{formatVND(0)}</span>
                        </div>
                        <div className="checkout-shipping-fee-row">
                            <p>Shipping Fee</p>
                            <span>{formatVND(0)}</span>
                        </div>
                        <button
                            onClick={() => {
                                const confirmBox = window.confirm(
                                    `Checkout with ${formatVND(itemsPrice)}`
                                );
                                if (confirmBox === true) {
                                    navigate("/checkout");
                                }
                            }}
                            className="checkout-btn"
                        >
                            <span style={{ marginRight: ".8rem" }}>
                                Check out
                            </span>
                            <span>{formatVND(itemsPrice)}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartSection;
