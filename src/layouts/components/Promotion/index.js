import React from "react";
import { useEffect, useState } from "react";

import fetch from "../../../apiServices/fetchService";
import ItemCard from "../ItemCard";
import { Link } from "react-router-dom";
import "./styles.scss";

function Promotion() {
    const [allPizza, setAllPizza] = useState([]);

    useEffect(() => {
        fetch("allPizza").then((response) => {
            setAllPizza(response);
        });
    }, []);

    const randomPizza = () =>
        [...allPizza].sort(() => 0.5 - Math.random()).slice(0, 4);

    let data = randomPizza();
    return (
        <div className="all-products-wrap">
            <div className="all-promotions-title">
                <h2>What's new today?</h2>
                <div className="promotions-tab">
                    <h4 className="promotion-title">
                        <a href="/promotion">Daily Promotion</a>
                    </h4>
                    <h4 className="promotion-title active">Best Sellers</h4>
                </div>
            </div>
            <div className="all-item-card">
                <ItemCard data={data} />
            </div>
            <div className="see-more-btn-wrapper">
                <Link to="/menu">
                    <button className="see-more-btn">See More</button>
                </Link>
            </div>
        </div>
    );
}

export default Promotion;
