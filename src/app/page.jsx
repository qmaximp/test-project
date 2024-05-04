"use client";
import Catalog from "@/components/Catalog/Catalog";
import FilterCategory from "@/components/FilterCategory/FilterCategory";
import React, { useState } from "react";

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
      }}>
      <FilterCategory categorySetter={setSelectedCategory} />
      <Catalog
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default page;
