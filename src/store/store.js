import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice.js";

const store=configureStore({
    reducer:{
        signup:signupReducer,
    }
});
export default store;