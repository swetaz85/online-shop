import React from "react";
import styles from './index.module.css';
import { AddToCartButton } from "../addToCartButton";

export const ProductItem= ({id, name, category, description, img,  price}) => {
    return (
       <div className={styles.wrapper}>
       <h1 className={styles.title}>{name}</h1>
       <p className={styles.category}>{category}</p>
       <div className={styles.productImage}>
                {/* <img src='https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg'/> */}
                <img src={img}/>
            </div>
       <p className={styles.description}>{description}</p>
       <div className={styles.priceWrapper}>
                <p className={styles.price}>{price} руб</p>
                {/* <button className={styles.addToCartButton}>
                    <img src={cartIcon} alt='cart' />
                </button> */}
                <AddToCartButton/>
            </div>
       </div>
    );
};