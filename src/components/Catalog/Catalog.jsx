"use client";
import React, { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./Catalog.module.scss";
import axios from "axios";

const Catalog = ({ selectedCategory = 0, setSelectedCategory }) => {
  const [product, setProduct] = useState();
  const [filtredProducts, setFiltredProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products/").then((res) => {
      let prod;
      prod = res.data;
      setProduct(prod);
      setSelectedCategory(0);
    });
  }, []);
  useEffect(() => {
    if (selectedCategory != 0) {
      let newProducts = [];
      product.map((el) => {
        if (el?.valueCategory && el?.valueCategory == selectedCategory) {
          newProducts.push(el);
        }
      });
      setFiltredProducts(newProducts);
    } else {
      setFiltredProducts(product);
    }
  }, [selectedCategory, product]);
  return (
    <div className={css.catalog}>
      {filtredProducts &&
        filtredProducts.map((cartProduct) => (
          <CatalogItem
            key={cartProduct.id}
            id={cartProduct.id}
            urlImg={cartProduct.url}
            title={cartProduct.title}
            price={cartProduct.price}
          />
        ))}
    </div>
  );
};
export default Catalog;
