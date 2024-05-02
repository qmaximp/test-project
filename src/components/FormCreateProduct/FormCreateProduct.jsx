"use client";

import React, { useEffect, useState } from "react";
import css from "./FormCreateProduct.module.scss";
import axios from "axios";
import FilterCategoryCreate from "../FilterCategory/FilterCategoryCreate";

const FormCreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    let data = {
      title,
      description,
      price,
      /*  category,
      phone,
      name, */
    };
    axios.post("http://localhost:3001/create/", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={css.formCreateProduct}>
      <input
        type="text"
        placeholder="загаловок"
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
        type="text"
        placeholder="цена"
        required
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <div>
        <FilterCategoryCreate />
      </div>
      <input
        type="phone"
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
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Разместить
      </button>
    </div>
  );
};

export default FormCreateProduct;
