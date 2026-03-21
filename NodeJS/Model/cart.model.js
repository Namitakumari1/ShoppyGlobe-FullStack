// Import mongoose to create schema and model
import mongoose from "mongoose";

/* 
   Cart Schema
   Stores items added to the cart
*/
const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId, // stores product _id
        ref: "products", // reference to products collection
        required: true
    },
    quantity: {
        type: Number,   
        required: true,
        default: 1      
    }
});

// Create model for cart collection
const cartModel = mongoose.model("cart", cartSchema);

// Export model to use in controller
export default cartModel;


