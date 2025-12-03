import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../styles/ProductDetails.css';


const ProductDetails = () => {
  const { id } = useParams(); // URL id
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);



  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="center">Loading...</h2>;
  if (error) return <h2 className="center">Failed to load product.</h2>;

  return (
    <div className="details-page">
      <img src={product.image} alt={product.title} className="detail-image" />

      <div className="detail-info">
        <h2>{product.title}</h2>
        <h3>₹{product.price}</h3>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>


        <div className="detail-buttons">
        <button className="btn" onClick={() => addToCart(product)}>
        Add to Cart
        </button>

        <Link to="/checkout">
        <button className="btn buy-btn">Buy Now</button>
        </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
