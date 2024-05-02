"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FilterCategory = ({ categorySetter }) => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/categories/").then((res) => {
      /* const newRes = Array.isArray(res.data) ? res.data.slice(1) : []; */
      let category;
      category = res.data;
      setCategories(category);
    });
  }, []);
  return (
    <div>
      <p>Выберите категорию:</p>
      <select
        name="category"
        id="1"
        onChange={(e) => {
          categorySetter ? categorySetter(e.target.value) : null;
        }}>
        {categories &&
          categories.map((category) => {
            return (
              <option key={category.idCategory} value={category.valueCategory}>
                {category.nameCategory}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default FilterCategory;
