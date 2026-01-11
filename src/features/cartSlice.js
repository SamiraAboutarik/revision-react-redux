import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existing = state.items.find(p => p.id === action.payload.id);
      if (existing) {
        existing.qty++; // incrémenter si déjà présent
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    increment(state, action) {
      const product = state.items.find(p => p.id === action.payload);
      if (product) product.qty++;
    },
    decrement(state, action) {
      const product = state.items.find(p => p.id === action.payload);
      if (product && product.qty > 1) product.qty--;
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(p => p.id !== action.payload);
    }
  }
});

export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
