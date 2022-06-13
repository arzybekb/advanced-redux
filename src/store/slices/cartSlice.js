// {
//     productId: 0,
//     name: '',
//     price: '',
//     totatPrice: '',
//     quantity: 0,
// }

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) { // type: 'kfdksgf'
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.itemId === newItem.id);
      state.totalQuantity++
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.itemId === id);
      state.totalQuantity--
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      if(existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.itemId !== id)
      } else {
        existingItem.quantity--
      }
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;