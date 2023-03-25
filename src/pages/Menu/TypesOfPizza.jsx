import React from "react";
import fetch from "../../apiServices/fetchService";
import { useEffect } from "react";
import {
    PizzaLargeIcon,
    PizzaMediumIcon,
    PizzaSmallIcon,
} from "../../icons/Icons";
import ItemCard from "../../layouts/components/ItemCard";
import { useState } from "react";
import { formatVND } from "../../ultilities/format";

function TypesOfPizza({ category }) {
    const [allPizza, setAllPizza] = useState([]);
    // const [favPrice, setFavPrice] = useState(0)

    useEffect(() => {
        fetch("allPizza").then((response) => {
            setAllPizza(response);
        });
    }, []);

    const allPremiumPizza = allPizza.filter((x) => x.tag === "premium");
    const allFavoritePizza = allPizza.filter((x) => x.tag === "favorite");
    const allSignaturePizza = allPizza.filter((x) => x.tag === "signature");

    let premiumCategoryPizza;
    category === "all"
        ? (premiumCategoryPizza = allPremiumPizza)
        : (premiumCategoryPizza = allPremiumPizza.filter((x) =>
              x.category.find((x) => x === `${category}`)
          ));

    let favoriteCategoryPizza;
    category === "all"
        ? (favoriteCategoryPizza = allFavoritePizza)
        : (favoriteCategoryPizza = allFavoritePizza.filter((x) =>
              x.category.find((x) => x === `${category}`)
          ));

    let signatureCategoryPizza;
    category === "all"
        ? (signatureCategoryPizza = allSignaturePizza)
        : (signatureCategoryPizza = allSignaturePizza.filter((x) =>
              x.category.find((x) => x === `${category}`)
          ));

    const allPizzaData = [
        {
            tagName: "premium",
            data: allPremiumPizza,
            title: "⭐ Premium Pizza ⭐",
            dataByCategory: premiumCategoryPizza,
            size7: true,
        },
        {
            tagName: "favorite",
            data: allFavoritePizza,
            title: "⭐ Favorite Pizza ⭐",
            dataByCategory: favoriteCategoryPizza,
            size7: true,
        },
        {
            tagName: "signature",
            data: allSignaturePizza,
            title: "🌟 Signature Pizza 🌟",
            dataByCategory: signatureCategoryPizza,
            size7: false,
        },
    ];

    return (
        <>
            {allPizzaData.map((type) => (
                <section
                    key={type.tagName}
                    className="section-product-list"
                    style={
                        type.dataByCategory.length !== 0
                            ? {}
                            : { display: "none" }
                    }
                >
                    <div>
                        <hr />
                        <h2 style={{ textAlign: "center" }}>{type.title}</h2>
                        <div className="pizza-size-price-wrapper">
                            <ul>
                                <li
                                    style={
                                        type.size7 ? {} : { display: "none" }
                                    }
                                >
                                    <PizzaSmallIcon />
                                    <p>{`Small (7"):`}</p>
                                    <span>
                                        {type.data[0] === undefined
                                            ? "0"
                                            : formatVND(
                                                  type.data[0].prices.size7
                                              )}
                                    </span>
                                </li>
                                <li>
                                    <PizzaMediumIcon />
                                    <p>{`Medium (9"):`}</p>
                                    <span>
                                        {type.data[0] === undefined
                                            ? "0"
                                            : formatVND(
                                                  type.data[0].prices.size9
                                              )}
                                    </span>
                                </li>
                                <li>
                                    <PizzaLargeIcon />
                                    <p>{`Large (12"):`}</p>
                                    <span>
                                        {type.data[0] === undefined
                                            ? "0"
                                            : formatVND(
                                                  type.data[0].prices.size12
                                              )}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-item-wrapper-100">
                        {category !== "all" ? (
                            <ItemCard data={type.dataByCategory} />
                        ) : (
                            <ItemCard data={type.data} />
                        )}
                    </div>
                </section>
            ))}
        </>
    );
}

export default TypesOfPizza;
