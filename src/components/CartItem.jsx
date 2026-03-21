import { useDispatch } from "react-redux";
import { removeFromCart,increaseQuantity,decreaseQuantity} from "../redux/cartSlice";

// Import CSS for CartItem styles
import "./CartItem.css";

function CartItem({ item }) {

  // Redux dispatch function
  const dispatch = useDispatch();

  return (
    <div className="cart-item">

      {/* Product Image */}
      <img src={item.thumbnail} alt={item.title} className="cart-image"/>

      {/* Product Details */}
      <div className="cart-details">

        {/* Product Title */}
        <h4 className="cart-title"> {item.title} </h4>

        {/* Product Price */}
        <p className="cart-price"> ₹{item.price} </p>

        {/* Quantity Controls */}
        <div className="quantity-controls">

          {/* Decrease quantity */}
          <button className="qty-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          {/* Current quantity */}
          <span className="quantity"> {item.quantity} </span>

          {/* Increase quantity */}
          <button className="qty-btn" onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>

        </div>

      </div>

      {/* Remove item from cart */}
      <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>

    </div>
  );
}

export default CartItem;