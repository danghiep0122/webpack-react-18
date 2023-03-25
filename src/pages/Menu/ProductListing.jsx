import React from "react";
import { useState } from "react";

import CategoryChangeButton from "./CategoryChangeButton";
import TypesOfPizza from "./TypesOfPizza";

function ProductListing() {
    const [category, setCategory] = useState("all");

    return (
        <div>
            <CategoryChangeButton setCategory={setCategory} />
            <TypesOfPizza category={category} />
        </div>
    );
}

export default ProductListing;
