import { createSlice } from "@reduxjs/toolkit";

/* Get cart data from localStorage */
const storedCart = localStorage.getItem("cartItems");

/* Initial cart state */
const initialState = {
  cartItems: storedCart ? JSON.parse(storedCart) : [],
};

/* Create cart slice */
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    // Add product to cart
    addToCart: (state, action) => {

      const item = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // Save updated cart in localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // Remove product from cart
    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // Increase product quantity
    increaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );

      if (item) item.quantity += 1;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // Decrease product quantity (not below 1)
    decreaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // Clear cart after order
    clearCart: (state) => {

      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

/* Export cart actions */
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

/* Selector to access cart items from store */
export const selectCartItems = (state) => state.cart.cartItems;

/* Export reducer */
export default cartSlice.reducer;