"use client";
import ProductItem from "@/components/ProductItem/ProductItem";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();
  const pathname = usePathname();
  useEffect(() => {
    axios.get("http://localhost:3001/products/").then((res) => {
      let prod;
      res.data.map((el) => {
        if (el.id == pathname.split("/")[pathname.split("/").length - 1]) {
          prod = el;
        }
      });
      setProduct(prod);
    });
    /* axios.get("http://localhost:3001/categories/").then((res) => {
      let categories;
      res.data.map((el) => {
        if (el.id == pathname.split("/")[pathname.split("/").length - 1]) {
          categories = el;
        }
      });
      setCategory(categories);
    }); */
  }, []);
  return (
    <div>
      {product && product.id && product.title ? (
        <div>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            /* category={category.valueCategory} */
            phone={product.phone}
            userName={product.userName}
          />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default page;
