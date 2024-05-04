import React, { useEffect, useState } from "react";
import css from "./ProductItem.module.scss";
import Image from "next/image";

const ProductItem = ({
  id,
  imageProduct,
  title,
  description,
  price,
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
