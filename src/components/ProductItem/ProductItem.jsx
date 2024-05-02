import React, { useEffect, useState } from "react";
import css from "./ProductItem.module.scss";
import Image from "next/image";
/* import placeholder from "../../../public/image-placeholder.png"; */
/* import placeholder from "../../../"; */

const ProductItem = ({
  id,
  imageProduct,
  title,
  description,
  price,
  valueCategory,
  phone,
  userName,
}) => {
  return (
    <div className={css.productItem} id={id}>
      <div className={css.productItem__img}>
        {/*  <Image
          alt=""
          src="../../../public/imageProduct/"
          {...imageProduct}></Image> */}
      </div>
      <div className={css.productItem__description}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>
          <b>Цена:</b> {price}
        </h3>
        <h3>Категория: {valueCategory}</h3>
        <p>
          <b>Телефон:</b>
          {phone}
        </p>
        <p>
          <b>ФИО:</b> {userName}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
