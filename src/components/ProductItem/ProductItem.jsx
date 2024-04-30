import React from "react";
import css from "./ProductItem.module.scss";
import Image from "next/image";
import placeholder from "../../../public/image-placeholder.png";

const ProductItem = ({ id, title, description, price, phone, userName }) => {
  return (
    <div className={css.productItem} id={id}>
      <div className={css.productItem__img}>
        <Image alt="" src={placeholder}></Image>
      </div>
      <div className={css.productItem__description}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>
          <b>Цена:</b> {price}
        </h3>
        <h3>Категория: машины</h3>
        <p>{phone}</p>
        <p> {userName}</p>
      </div>
    </div>
  );
};

export default ProductItem;
