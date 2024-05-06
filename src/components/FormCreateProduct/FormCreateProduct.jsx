"use client";

import React, { useState } from "react";
import css from "./FormCreateProduct.module.scss";
import axios from "axios";
import FilterCategoryCreate from "../FilterCategory/FilterCategoryCreate";

const FormCreateProduct = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [valueCategory, setCategory] = useState("1");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const handleSubmit = () => {
    let data = {
      image,
      title,
      description,
      price,
      valueCategory,
      phone,
      userName,
    };
    axios.post("http://localhost:3001/create/", data, {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
  };

  return (
    <form action={"http://localhost:3000"} className={css.formCreateProduct}>
      {/*  <form className={css.formCreateProduct}>  */}
      {/*   <input
        type="file"
        accept="image/*"
        required
        filename={image}
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      /> */}
      <input
        type="text"
        placeholder="заголовок"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="описание"
        required
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="цена"
        required
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <FilterCategoryCreate categorySetter={setCategory} />
      <input
        type="number"
        placeholder="Укажите ваш телефон"
        required
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Укажите ваше ФИО"
        required
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />

      <button type="submit" onClick={handleSubmit}>
        Разместить
      </button>
    </form>
  );
};

export default FormCreateProduct;
