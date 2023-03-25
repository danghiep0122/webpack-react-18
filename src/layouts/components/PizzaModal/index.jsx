import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./styles.module.scss";
import { XtimesIcon } from "../../../icons/Icons";
import images from "../../../assets/img/image";
import { formatVND } from "../../../ultilities/format";
import { onAddPizza } from "../../../feature/cartItem/cartItemSlice";

function PizzaModal({ data, toggleModal }) {
    const dispatch = useDispatch();
    const [itemQty, setItemQty] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
    const [priceSelected, setPriceSelected] = useState("");
    const [baseSelected, setBaseSelected] = useState("");
    const [baseTitleSelected, setBaseTitleSelected] = useState("");
    const [sizeSelected, setSizeSelected] = useState("");
    const [sizeTitleSelected, setSizeTitleSelected] = useState("");

    const handlePlusClick = () => {
        setItemQty((itemQty) => (itemQty += 1));
    };

    const handleMinusClick = () => {
        if (itemQty > 1) {
            setItemQty((itemQty) => (itemQty -= 1));
        }
    };

    const handleAddToCart = () => {
        data = {
            ...data,
            idOnCart: `${data.id}_${sizeSelected}_${baseSelected}`,
            size: sizeSelected,
            sizeTitle: sizeTitleSelected,
            qty: itemQty,
            base: baseSelected,
            baseTitle: baseTitleSelected,
            priceSelected,
        };
        if (sizeSelected && baseSelected) {
            toggleModal(false);
            dispatch(onAddPizza(data));
        } else {
            setErrorMessage("Pick Option Below");
        }
    };

    const basePizza = [
        { id: "slim", title: "Slim Base", describe: "Slim and crispy base" },
        { id: "thick", title: "Thick Base", describe: "Thick and foam base" },
        { id: "medium", title: "Medium Base", describe: "Medium base" },
    ];

    const sizePizza = [
        {
            id: "7Icnh",
            describe: "Size 7 Inch",
            price: data.prices.size7,
            logo: images.pizzaSize1,
        },
        {
            id: "9Icnh",
            describe: "Size 9 Inch",
            price: data.prices.size9,
            logo: images.pizzaSize2,
        },
        {
            id: "12Icnh",
            describe: "Size 12 Inch",
            price: data.prices.size12,
            logo: images.pizzaSize3,
        },
    ];

    return (
        data && (
            <>
                <div
                    onClick={() => toggleModal(false)}
                    className={styles.modalFadeOutside}
                />
                <div className={styles.modalWrapper}>
                    <div className={styles.imageWrapper}>
                        <img
                            className={styles.pizzaImage}
                            alt={data.title}
                            src={data.imgUrl}
                        />
                    </div>
                    <div className={styles.modalContent}>
                        <button
                            onClick={() => toggleModal(false)}
                            className={styles.offModalButton}
                        >
                            <XtimesIcon
                                height="32px"
                                width="32px"
                                fill="#fff"
                            />
                        </button>

                        <div className={styles.modalProductDescrWrapper}>
                            <div>
                                <h2 className={styles.productTitle}>
                                    {data.title}
                                </h2>
                                <p>{data.category.join(", ")}</p>
                            </div>
                            <hr className={styles.modalTitleSeperate} />
                            <div className={styles.productDescr}>
                                <div className={styles.productDescrSection}>
                                    <h3>Pick Base</h3>
                                    {!baseSelected && (
                                        <span
                                            style={{
                                                color: "#E31837",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {errorMessage}
                                        </span>
                                    )}
                                    <ul>
                                        {basePizza.map(
                                            ({ id, title, describe }) => (
                                                <div key={id}>
                                                    <li>
                                                        <div>
                                                            <label>
                                                                <input
                                                                    className={
                                                                        styles.inputScale
                                                                    }
                                                                    type="radio"
                                                                    name="base"
                                                                    value={id}
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setBaseSelected(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                        setBaseTitleSelected(
                                                                            title
                                                                        );
                                                                    }}
                                                                />
                                                                {describe}
                                                            </label>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.productDescrIcon
                                                            }
                                                        >
                                                            <img
                                                                alt={title}
                                                                src={
                                                                    images.pizzaBase
                                                                }
                                                            />
                                                        </div>
                                                    </li>
                                                    <hr />
                                                </div>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className={styles.productDescrSection}>
                                    <h3>Pick Size</h3>
                                    {!sizeSelected && (
                                        <span
                                            style={{
                                                color: "#E31837",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {errorMessage}
                                        </span>
                                    )}
                                    <ul>
                                        {sizePizza.map(
                                            ({ id, price, describe, logo }) => (
                                                <div
                                                    key={id}
                                                    style={
                                                        price
                                                            ? {}
                                                            : {
                                                                  display:
                                                                      "none",
                                                              }
                                                    }
                                                >
                                                    <li>
                                                        <div>
                                                            <label>
                                                                <input
                                                                    className={
                                                                        styles.inputScale
                                                                    }
                                                                    type="radio"
                                                                    name="size"
                                                                    value={id}
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setItemQty(
                                                                            itemQty
                                                                        );
                                                                        setSizeSelected(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                        setPriceSelected(
                                                                            price
                                                                        );
                                                                        setSizeTitleSelected(
                                                                            describe
                                                                        );
                                                                    }}
                                                                />
                                                                {describe} ={" "}
                                                                {formatVND(
                                                                    price
                                                                )}
                                                            </label>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.productDescrIcon
                                                            }
                                                        >
                                                            <img
                                                                alt={data.title}
                                                                src={logo}
                                                            />
                                                        </div>
                                                    </li>
                                                    <hr />
                                                </div>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.addToCartSection}>
                            <div className={styles.cartItemsQty}>
                                <button
                                    onClick={handleMinusClick}
                                    className={
                                        itemQty === 1
                                            ? styles.minusButtonDisable
                                            : ""
                                    }
                                >
                                    --
                                </button>
                                <input type="text" value={itemQty} readOnly />
                                <button onClick={handlePlusClick}>+</button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className={styles.addToCartButton}
                            >
                                <span style={{ marginRight: ".8rem" }}>
                                    Add to Cart
                                </span>
                                <span>
                                    {formatVND(priceSelected * itemQty)}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}

export default PizzaModal;
