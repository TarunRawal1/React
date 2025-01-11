import { createSlice } from "@reduxjs/toolkit";

const cartSLice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.total -= action.payload.price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSLice.actions;
export const cartReducer = cartSLice.reducer;
