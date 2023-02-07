import React from "react";
import { ProductItem } from "../productItem/productItem";
import styles from './index.module.css';

export const ProductsList = ({products}) => {
    return (
        <div className={styles.productList}>
       {/* <h1>ProductsList</h1> */}
       {products.map((product) =>
       (<ProductItem key={product.id} {...product}/>) )}
       </div>
    );
};