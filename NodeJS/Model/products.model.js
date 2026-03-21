// Import mongoose to create schema and model
import mongoose from "mongoose";

/* 
   Product Schema
   Defines the structure of product data in MongoDB
*/
const productSchema = new mongoose.Schema({
    title: String,        
    thumbnail: String,    
    price: Number,        
    description: String   
});

// Create model using schema (represents 'products' collection)
const productModel = mongoose.model("products", productSchema);

// Export model to use in controller
export default productModel;