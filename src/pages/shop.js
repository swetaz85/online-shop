import React, { useState, useEffect } from "react";
import {ProductsList} from '../components/productList/productsList';
import {ProductsSearch} from '../components/productSearch/productSearch';
// import { data } from "../components/data/data";
import { fetchProducts } from "../utils/fetchProducts";
import {Preloader} from '../components/preoalder';

export const Shop = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetchProducts()
        .then(({products: goods}) => {
            setProducts(goods);
        })        
    }, []);

    return (
        <>
        {/* {products && <ProductsList products={products}/>}         */}
        {products ? <ProductsList products={products}/> : <Preloader/>}
        <ProductsSearch/>
        {/* <h1>Shop</h1>         */}
        <h2>{ProductsSearch}</h2>
        <h2>{ProductsList}</h2>
        </>
     );
};