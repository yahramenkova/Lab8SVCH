import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    cartItems: [],
    totalPrice: 0,
    isPurchaseCompleted: false,
  },
  reducers: {
    initializeCart: (state, action) => {
      state.cartItems = action.payload;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.isPurchaseCompleted = false;
    },
    buyItems: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.isPurchaseCompleted = true;
    },
   
  },
});

export const { initializeCart, removeFromCart, clearCart, buyItems } = basketSlice.actions;

export default basketSlice.reducer;
