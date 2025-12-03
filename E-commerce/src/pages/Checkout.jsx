import React, { useState,useEffect  } from "react";
import { useCart } from "../context/CartContext";
import "../styles/checkout.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "COD",
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simple validation
  const validate = () => {
    const errs = {};


    useEffect(() => {
    if (!user) navigate("/login");
    }, [user]);

    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Valid email required";
    if (form.phone.length < 10) errs.phone = "Phone must be 10 digits";
    if (!form.address.trim()) errs.address = "Address required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle Order
  const placeOrder = () => {
    if (!validate()) return;

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <h1>Order Placed Successfully 🎉</h1>
        <p>Thank you for your purchase!</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h2>Checkout</h2>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <select
          name="payment"
          value={form.payment}
          onChange={handleChange}
        >
          <option value="COD">Cash on Delivery</option>
          <option value="CARD" disabled>Card Payment (Coming soon)</option>
        </select>

        <button className="btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>

      <div className="checkout-summary">
        <h3>Order Summary</h3>

        {cart.map((item) => (
          <div key={item.id} className="summary-item">
            <img src={item.image} alt="" />
            <div>
              <p>{item.title}</p>
              <p>Qty: {item.qty}</p>
            </div>
            <p>₹{item.price * item.qty}</p>
          </div>
        ))}

        <h2>Total: ₹{totalPrice}</h2>
      </div>
    </div>
  );
};

export default Checkout;
