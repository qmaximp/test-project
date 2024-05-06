"use client";
import ProductItem from "@/components/ProductItem/ProductItem";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [product, setProduct] = useState();
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
  }, []);

  return (
    <div>
      {product && product.id && product.title ? (
        <div>
          <ProductItem
            key={product.id}
            id={product.id}
            imageProduct={product.imageProduct}
            title={product.title}
            description={product.description}
            price={product.price}
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
