import React from "react";
import { ProductCard } from "./components/productCard/product-card";
import { products } from "./data/products";
import { Header } from "./components/header/header";

function App() {
  
  return (
    <>
      <Header />
      <div>
        <div>
          {products.map((item) => (
            <ProductCard key={item.id} {...item.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
