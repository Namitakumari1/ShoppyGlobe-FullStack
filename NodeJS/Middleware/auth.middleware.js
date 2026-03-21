import jwt from "jsonwebtoken";

/*
   AUTH MIDDLEWARE
   This will verify JWT token
*/
export function verifyToken(req, res, next) {

    // Get token from headers
    const token = req.headers["authorization"];

    // If no token
    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided" });
    }

    try {
        // Remove "Bearer " from token
        const actualToken = token.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(actualToken, "secretkey");

        // Attach user info to request
        req.user = decoded;

        next(); // move to next function

    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}