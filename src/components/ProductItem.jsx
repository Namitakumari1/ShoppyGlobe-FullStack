import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

// Import CSS for ProductItem styles
import "./ProductItem.css";

function ProductItem({ product }) {

  // Redux dispatch function
  const dispatch = useDispatch();

  // Add product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">

      {/* Product Image */}
      <img src={product.thumbnail} alt={product.title} className="product-image"/>

      {/* Product Title */}
      <h3 className="product-title">
        {product.title}
      </h3>

      {/* Product Price */}
      <p className="product-price">
        ₹{product.price.toLocaleString("en-IN")}
      </p>

      {/* Link to Product Details Page */}
      <Link to={`/product/${product._id}`} className="details-link">
        View Details
      </Link>

      {/* Add to Cart Button */}
      <button className="add-cart-btn" onClick={handleAddToCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductItem;