import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

// Import CSS for Checkout page
import "./Checkout.css";

function Checkout() {

  // Redux dispatch function
  const dispatch = useDispatch();

  // Handle order placement
  const handlePlaceOrder = () => {

    // Show success message
    alert("Order placed successfully!");

    // Clear cart after order
    dispatch(clearCart());
  };

  return (
    <div className="checkout-page">

      {/* Page Title */}
      <h2>Checkout</h2>

      {/* Order message */}
      <p className="checkout-message"> Review your order and place it. </p>

      {/* Place Order Button */}
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;