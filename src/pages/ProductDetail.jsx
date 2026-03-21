import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

// Import CSS for Product Detail page
import "./ProductDetail.css";

function ProductDetail() {

  // Get product id from URL
  const { id } = useParams();

  // State to store product data
  const [product, setProduct] = useState(null);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Fetch product details from API
  useEffect(() => {
    fetch(`http://localhost:3030/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  // Show loading message while data loads
  if (!product) {
    return <p className="loading">Loading product...</p>;
  }

  // Add product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-detail">

      {/* Product Image */}
      <img src={product.thumbnail} alt={product.title} className="detail-image"/>

      {/* Product Information */}
      <div className="detail-info">

        {/* Product Title */}
        <h2 className="detail-title"> {product.title} </h2>

        {/* Product Price */}
        <p className="detail-price"> ₹{product.price} </p>

        {/* Product Description */}
        <p className="detail-description"> {product.description} </p>

        {/* Add to Cart Button */}
        <button className="detail-cart-btn" onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
}
export default ProductDetail;