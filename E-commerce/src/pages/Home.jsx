import React from 'react'
import ProductCard from "../components/ProductCard";
import "../styles/product.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");


  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search") || "";

  //fetch data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) =>
        
        res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="center">Loading...</h2>;
  if (error) return <h2 className="center">Failed to load products.</h2>;

 let filteredProducts = [...products];

// SEARCH FILTER (navbar)
  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

// Category filter
if (category !== "all") {
  filteredProducts = filteredProducts.filter((p) => p.category === category);
}

// RATING FILTER
if (ratingFilter) {
  filteredProducts = filteredProducts.filter(
    (p) => p.rating.rate >= ratingFilter
  );
}

// Sorting
if (sort === "low") {
  filteredProducts.sort((a, b) => a.price - b.price);
}

if (sort === "high") {
  filteredProducts.sort((a, b) => b.price - a.price);
}

if (sort === "rating") {
  filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
}


  return (
      <>
      <div className="filters">
      

      {/* Category */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="all">All</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      <option value="jewelery">Jewelery</option>
      <option value="electronics">Electronics</option>
      </select>

      {/* Sort */}
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
      <option value="">Sort</option>
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>
      <option value="rating">Rating: High → Low</option>
      </select>

      <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
        <option value="">Rating</option>
        <option value="4">4★ & above</option>
        <option value="3">3★ & above</option>
        <option value="2">2★ & above</option>
      </select>
      </div>

      

      <div className="products-container">
      {filteredProducts.map((item) => (
      <ProductCard key={item.id} item={item} />
      ))}
      </div>
      </>
  );
};

export default Home;