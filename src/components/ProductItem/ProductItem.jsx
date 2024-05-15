import React from "react";
import css from "./ProductItem.module.scss";

const ProductItem = ({
  id,
  urlImg,
  title,
  description,
  price,
  phone,
  userName,
}) => {
  return (
    <div className={css.productItem} id={id}>
      <div className={css.productItem__img}>
        <img alt="" src={urlImg}></img>
      </div>
      <div className={css.productItem__description}>
        <h2>{title}</h2>
        <p>
          <b>Описание:</b>&nbsp;{description}
        </p>
        <h3>
          <b>Цена:</b>&nbsp;{price}
        </h3>
        <p>
          <b>Телефон:</b>&nbsp;{phone}
        </p>
        <p>
          <b>ФИО:</b>&nbsp;{userName}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
