import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Handle search on Enter key
  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      navigate(`/?search=${search}`);
    }
  };

  // Handle search by button click
  const handleSearchBtn = () => {
    navigate(`/?search=${search}`);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">ShopEZ</h2>

      {/* Search Bar */}
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearchKey}
        />
        <button onClick={handleSearchBtn}>Search</button>
      </div>

      {/* Nav Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>

        {user ? (
          <>
            <span className="username">Hi {user.username}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
