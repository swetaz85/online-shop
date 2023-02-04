import React from "react";
import {ProductsList} from '../components/productList';
import {ProductsSearch} from '../components/productsSearch';

export const Shop = () => {
    return (
        <>
        <ProductsList/>
        <ProductsSearch/>
        <h1>Shop</h1>
        <h2>{ProductsList}</h2>
        <h2>{ProductsSearch}</h2>
        </>
     );
};