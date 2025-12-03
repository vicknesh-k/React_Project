import { Link } from "react-router-dom";
import "../styles/product.css";

const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="product-link">
      <div className="product-card">
        <img
          src={item.image}
          alt={item.title}
          className="product-image"
        />

        <h3 className="product-title">
          {item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}
        </h3>

        <p className="product-price">₹{item.price}</p>

        <button className="btn">View Details</button>
      </div>
    </Link>
  );
};

export default ProductCard;
