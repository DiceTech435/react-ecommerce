import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
// import { products } from '../../data/products';
import { ProductGrid } from "./ProductGrid";
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
