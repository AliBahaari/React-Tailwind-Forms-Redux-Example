import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";

const store = configureStore({
    reducer: {
        formReducer: formSlice
    }
});

export default store;