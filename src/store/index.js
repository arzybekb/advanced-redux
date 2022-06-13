import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import uiSlice from "./slices/uiSlice";


const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store