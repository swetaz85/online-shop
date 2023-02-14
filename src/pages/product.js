import React from "react";
import { useParams } from "react-router";

import { AddToCartButton } from "../components/addToCartButton";

export const Product = () => {
    const {productId} = useParams();
    
    return (
        <div>
            <h2>Tovar {productId}</h2>
            <div>Price</div>
            <div>Description</div>
            {/* <button>add to cart button</button> */}
            <AddToCartButton size="m"/>
        </div>
    )
};