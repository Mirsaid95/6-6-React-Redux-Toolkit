import React from "react";
import { useSelector } from "react-redux";
import { selectedProduct } from "../selectedProduct/selectedProduct";
import { nanoid } from "@reduxjs/toolkit";

export const Cart = () => {
  const { productList } = useSelector((state) => state.product);

  return (
    <div>
      {productList?.map((itme) => {
        return <selectedProduct key={nanoid()} {...item} />;
      })}
    </div>
  );
};
