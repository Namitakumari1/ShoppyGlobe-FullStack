import { createProduct, fetchProducts, fetchProductById, deleteProduct, updateProduct } from "../Controller/products.controller.js";

export function routes(app) {
    //app.post("path", controller)
    app.post("/api/products", createProduct);
    app.get("/api/products", fetchProducts);
    app.get("/api/products/:id", fetchProductById);
    app.put("/api/products/:id", updateProduct);
    app.delete("/api/products/:id", deleteProduct);
}




