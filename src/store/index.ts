import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/userSlice";

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>