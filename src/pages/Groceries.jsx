import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("/dummy-data/products.json");

        // set the state of the groceries to the response.data
        setProducts(response.data);
      } catch (err) {
        console.error("something went wrong fetching groceries", err);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    // console.log(groceries);
    sessionStorage.setItem("products", JSON.stringify(products));
    console.log(JSON.parse(sessionStorage.getItem("products")));
  }, [products]);
  return (
    <div>
      <h1>Products</h1>
      <GroceryList items={products} />
    </div>
  );
}
