import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";
import darkmodeReducer from "./features/darkmodeSlice";
import loginclickReducer from "./features/FormloginSlice";
import otpReducer from "./features/auth/otpSlice";

const store = configureStore({
    reducer: {
       [apiSlice.reducerPath]: apiSlice.reducer,  
       auth: authReducer, 
       darkmode: darkmodeReducer,
       loginclick: loginclickReducer,
       otpcode:otpReducer,

    } ,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), devTools:true,
});

setupListeners(store.dispatch);
export default store;