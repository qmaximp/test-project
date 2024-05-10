import Image from "next/image";
import React from "react";
import { placeholder } from "../../../public/imageProduct/image-placeholder.png";
import css from "./CatalogItem.module.scss";
import Link from "next/link";

const CatalogItem = ({ id, urlImg, title, price }) => {
  return (
    <Link href={`/product/${id}/`} className={css.link__CatalogItem}>
      <div className={css.CatalogItem}>
        <div>
          <img alt="" src={urlImg}></img>
          <h3>{title}</h3>
          <p>
            <b>цена:</b>&nbsp;{price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CatalogItem;
