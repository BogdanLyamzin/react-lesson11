import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from "../client/Cart/reducer/cartReducer";
import cartReducer from "../client/Cart/reducer/cartSlice";

// import rootReducer from "./reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
