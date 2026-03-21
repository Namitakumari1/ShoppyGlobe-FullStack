import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

// Import CSS for Cart page
import "./Cart.css";

function Cart() {

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total price of cart
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">

      {/* Page Title */}
      <h2>Your Cart</h2>

      {/* If cart is empty */}
      {cartItems.length === 0 ? (<h3 className="empty-cart"> Cart is empty</h3>) : (
        <>
          {/* Display cart items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item}/> 
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="cart-summary">

            {/* Total Price */}
            <h3 className="cart-total"> Total: ₹{total} </h3>

            {/* Checkout Button */}
            <Link to="/checkout"> <button className="checkout-btn"> Proceed to Checkout </button>
            </Link>
          </div>
        </>
      )}

    </div>
  );
}
export default Cart;