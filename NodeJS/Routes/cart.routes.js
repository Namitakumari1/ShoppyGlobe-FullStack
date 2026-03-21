// Import cart controller functions
import { addToCart, updateCart, deleteCart } from "../Controller/cart.controller.js";

// Import middleware to verify JWT token
import { verifyToken } from "../Middleware/auth.middleware.js";

// Define cart routes
export function cartRoutes(app) {

    // Add product to cart (requires login)
    app.post("/api/cart", verifyToken, addToCart);

    // Update cart item quantity by ID (requires login)
    app.put("/api/cart/:id", verifyToken, updateCart);

    // Delete cart item by ID (requires login)
    app.delete("/api/cart/:id", verifyToken, deleteCart);
}