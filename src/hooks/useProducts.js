import { useEffect, useState } from "react";

/* Custom hook to fetch product list */
function useProducts() {

  // State to store products data
  const [products, setProducts] = useState([]);

  // State to store error message
  const [error, setError] = useState(null);

  useEffect(() => {

    // Fetch products from backend API
    fetch("http://localhost:3030/api/products")
      .then((res) => res.json())           // convert response to JSON
      .then((data) => setProducts(data))   // store products in state
      .catch(() => setError("Failed to load products")); // handle error

  }, []); // runs only once when component loads

  // Return products and error
  return { products, error };
}

export default useProducts;