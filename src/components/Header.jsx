import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import CSS file for Header styles
import "./Header.css";

function Header() {

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total quantity of items in cart
  const totalItems = cartItems.reduce( (sum, item) => sum + item.quantity, 0 );

  return (
    <header className="header">

      {/* Website Logo */}
      <h2 className="logo">
        <Link to="/">ShoppyGlobe</Link>
      </h2>

      {/* Navigation Links */}
      <nav className="nav-links">

        {/* Home Page Link */}
        <Link to="/">Home</Link>

        {/* Cart Page Link */}
        <Link to="/cart" className="cart-link">
          🛒 Cart

          {/* Cart item count badge */}
          {totalItems > 0 && (<span className="cart-badge"> {totalItems}</span>)}

        </Link>

      </nav>

    </header>
  );
}

export default Header;