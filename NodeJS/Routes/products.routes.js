// Import controller functions
import { createProduct, fetchProducts, fetchProductById, deleteProduct, updateProduct } from "../Controller/products.controller.js";

// Define product routes
export function routes(app) {

    // Create a new product
    app.post("/api/products", createProduct);

    // Get all products
    app.get("/api/products", fetchProducts);

    // Get single product by ID
    app.get("/api/products/:id", fetchProductById);

    // Update product by ID
    app.put("/api/products/:id", updateProduct);

    // Delete product by ID
    app.delete("/api/products/:id", deleteProduct);
}




