import mongoose from "mongoose";

/*
   USER SCHEMA
   Stores user login details
*/
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true   // no duplicate emails
    },
    password: {
        type: String,
        required: true
    }
});

// Create model for users collection
const userModel = mongoose.model("users", userSchema);

export default userModel;