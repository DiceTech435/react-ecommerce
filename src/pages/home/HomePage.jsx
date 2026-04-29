// Libraries
import axios from "axios";
// React
import { useEffect, useState } from "react";
// Components
import { Header } from "../../components/Header";
import { ProductGrid } from "./ProductGrid";
// Styles
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();

    document.title = "Ecommerce Project";
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
