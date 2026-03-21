import { useState } from "react";
import ProductItem from "./ProductItem";
import useProducts from "../hooks/useProducts";

// Import CSS for ProductList styles
import "./ProductList.css";

function ProductList() {

  // Get products using custom hook
  const { products, error } = useProducts();

  // State for search input
  const [search, setSearch] = useState("");

  // Filter products based on search text
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Show error message if API fails
  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="product-list">

      {/* Page Title */}
      <h2>Products</h2>

      {/* Search input */}
      <input type="text" placeholder="Search products..." className="search-bar" value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Product Grid */}
      <div className="product-grid">

        {filteredProducts.length === 0 ? (<p>No products found</p>) : 
          (filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          )))
        }
      </div>

    </div>
  );
}
export default ProductList;