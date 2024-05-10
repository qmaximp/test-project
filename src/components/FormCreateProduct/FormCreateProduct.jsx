"use client";
import React, { useCallback, useState } from "react";
import css from "./FormCreateProduct.module.scss";
import axios from "axios";
import FilterCategoryCreate from "../FilterCategory/FilterCategoryCreate";

const FormCreateProduct = () => {
  const [data, setData] = useState({
    selectedFile: "",
    responseArray: "",
    loading: false,
  });
  const [img, setImg] = useState("");
  /* const handleInputChange = (event) => {
    console.log("event", event.target.files);
    setData({ ...data, loading: true });
    img = event.target.files[0];
    const info = new FormData();
    info.append("file", img);
    axios.post("http://localhost:3001/uploadImage/", info, {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });
  }; */

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [valueCategory, setCategory] = useState("1");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = () => {
    let data = {
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
      {/*  <input
        type="file"
        required
        onChange={(e) => {
          setImg(e.target.files);
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
    </div>
  );
};

export default FormCreateProduct;
