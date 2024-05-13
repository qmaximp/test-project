"use client";
import React, { useState } from "react";
import css from "./FormCreateProduct.module.scss";
import axios from "axios";
import FilterCategoryCreate from "../FilterCategory/FilterCategoryCreate";

const FormCreateProduct = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [valueCategory, setCategory] = useState("1");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = () => {
    let data = {
      url,
      title,
      description,
      price,
      valueCategory,
      phone,
      userName,
    };
    console.log(data);
    axios.post("http://localhost:3001/create/", data, {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
  };

  return (
    <div className={css.formCreateProduct}>
      {/*  <form action={"http://localhost:3000"} className={css.formCreateProduct}>  */}
      <input
        type="file"
        required
        filename={url}
        onChange={(e) => {
          setUrl(e.target.files);
        }}
      />
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
    </div>
  );
};

export default FormCreateProduct;
