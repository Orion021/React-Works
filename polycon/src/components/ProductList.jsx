import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  let stateArray = useState([
    { name: "Laptop", price: 55000 },
    { name: "Headphones", price: 2000 },
    { name: "Smartphone", price: 30000 },
    { name: "Earphone", price: 30000 },
    { name: "Watch", price: 10000 },
  ]);

  let products = stateArray[0];

  return (
    <div>
      {products.map(function (product) {
        return (
          <ProductCard name={product.name} price={product.price}></ProductCard>
        );
      })}
    </div>
  );
}

export default ProductList;

/*
import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  var stateArray = useState([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Smartphone", price: 30000 },
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 2000 },

  ]);

  var products = stateArray[0];

  return (
    <div>
      {products.map(function (product) {
        return (
          <ProductCard key={product.id} name={product.name} price={product.price}/>
        );
      })}
    </div>
  );
}

export default ProductList;
*/
