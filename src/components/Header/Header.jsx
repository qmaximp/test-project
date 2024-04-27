"use client";
import React, { useState } from "react";
import css from "./Header.module.scss";
import Link from "next/link";
import categories_data from "../module.contants";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.header__link}>
        <Link href={"/"}>catalog</Link>
        <Link href={"/createProduct/"}>create ad</Link>
      </div>
      <div className={css.header__logo}>
        <h1>WIVATO</h1>
      </div>
    </div>
  );
};

export default Header;
