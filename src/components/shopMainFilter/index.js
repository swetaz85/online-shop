import React from "react";
import { ProductFilter } from "../productFilter/productFilter";
import { ProductsSearch } from "../productSearch/productSearch";
import styles from './index.module.css';

export const ShopMainFilter = () => {
    return (
        <div className={styles.searchWrapper}>
            <ProductsSearch/>
            <ProductFilter/>
        </div>
    );
};