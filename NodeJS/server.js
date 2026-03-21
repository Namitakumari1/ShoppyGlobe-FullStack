// Import express
import express from "express";

// Import mongoose for database connection
import mongoose from "mongoose";

// Import routes
import { routes } from "./Routes/products.routes.js";
import { cartRoutes } from "./Routes/cart.routes.js";
import { authRoutes } from "./Routes/auth.routes.js";

// Import CORS to allow frontend requests
import cors from "cors";

// Create express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Enable CORS
app.use(cors());

// Start server on port 3030
app.listen(3030, () => {
    console.log("Server is running on port no. 3030");
});

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;

// Check database connection status
db.on("open", () => {
    console.log("Database connection is successful");
});

db.on("error", () => {
    console.log("Database connection is not successful");
});

// Use product routes
routes(app);

// Use cart routes (protected)
cartRoutes(app);

// Use authentication routes
authRoutes(app);