"use client";
import React, { useState } from "react";
import css from "./FormCreateProduct.module.scss";
import axios from "axios";
import FilterCategoryCreate from "../FilterCategory/FilterCategoryCreate";
import UploadImageComponent from "../UploadImageComponent/UploadImageComponent";

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
    <form action={"http://localhost:3000"} className={css.formCreateProduct}>
      <UploadImageComponent setter={setUrl} />
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
