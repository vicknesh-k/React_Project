import { useCart } from "../context/CartContext";
import "../styles/cart.css";
import {Link} from "react-router-dom";
const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalItems,
    totalPrice
  } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart ({totalItems} items)</h2>

      {cart.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "20px",
              borderBottom: "1px solid #ddd",
              padding: "15px 0"
            }}
          >
            <img
              src={item.image}
              width="100"
              height="100"
              style={{ objectFit: "contain" }}
            />

            <div>
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>

              <div>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                style={{ marginTop: "10px", color: "red" }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <h2>Total Price: ₹{totalPrice}</h2>
    

    <Link to="/checkout">
            <button className="btn buy-btn">Buy Now</button>
            </Link>
    </div>
  );
};

export default Cart;
