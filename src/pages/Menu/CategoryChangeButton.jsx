import React from "react";
import { useState } from "react";

const CategoryChangeButton = ({ setCategory }) => {
    const [isActive, setIsActive] = useState("all");

    const categoryChangeButtonData = [
        { id: 1, category: "all", title: "🍕 All Pizza" },
        { id: 2, category: "pork", title: "🐷 Pork" },
        { id: 3, category: "beef", title: "🐮 Beef" },
        { id: 4, category: "vegan", title: "🌿 Vegan" },
        { id: 5, category: "seafood", title: "🦐 Sea-food" },
    ];
    return (
        <div className="category-change-button-wrapper">
            {categoryChangeButtonData.map((item) => (
                <button
                    key={item.id}
                    className={isActive === item.category ? "active" : ""}
                    onClick={() => {
                        setCategory(item.category);
                        setIsActive(item.category);
                    }}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default CategoryChangeButton;
