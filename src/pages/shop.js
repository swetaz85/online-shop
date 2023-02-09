import React, { useState, useEffect } from "react";
import {ProductsList} from '../components/productList/productsList';
// import { data } from "../components/data/data";
import { fetchProducts } from "../utils/fetchProducts";
import {Preloader} from '../components/preoalder';
import { ShopMainFilter } from "../components/shopMainFilter";

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
        <ShopMainFilter/>
        
        {/* {products && <ProductsList products={products}/>}         */}
        {products ? <ProductsList products={products}/> : <Preloader/>}
        
        </>
     );
};