// Import authentication controller functions
import { register, login } from "../Controller/auth.controller.js";

// Define authentication routes
export function authRoutes(app) {

    // Register new user
    app.post("/api/register", register);

    // Login user and generate token
    app.post("/api/login", login);
}