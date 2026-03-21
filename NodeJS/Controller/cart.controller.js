import cartModel from "../Model/cart.model.js";
import productModel from "../Model/products.model.js";


//   ADD TO CART (POST /api/cart)

export async function addToCart(req, res) {
    try {
        const { productId, quantity } = req.body;

        // Check if product exists
        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Check if item already in cart
        let cartItem = await cartModel.findOne({ productId });

        if (cartItem) {
            // If exists, update quantity
            cartItem.quantity += quantity || 1;
            await cartItem.save();
            return res.status(200).json(cartItem);
        }

        // Create new cart item
        const newCartItem = new cartModel({
            productId,
            quantity: quantity || 1
        });

        const savedItem = await newCartItem.save();
        res.status(201).json(savedItem);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// UPDATE CART ITEM (PUT /api/cart/:id)

export async function updateCart(req, res) {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const updatedItem = await cartModel.findByIdAndUpdate(
            id,
            { quantity },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json(updatedItem);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// DELETE CART ITEM (DELETE /api/cart/:id)

export async function deleteCart(req, res) {
    try {
        const { id } = req.params;

        const deletedItem = await cartModel.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json({ message: "Item removed from cart" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}