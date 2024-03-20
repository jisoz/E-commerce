import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";
import darkmodeReducer from "./features/darkmodeSlice";
import loginclickReducer from "./features/FormloginSlice";

const store = configureStore({
    reducer: {
       [apiSlice.reducerPath]: apiSlice.reducer,  
       auth: authReducer, 
       darkmode: darkmodeReducer,
       loginclick: loginclickReducer,

    } ,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), devTools:true,
});

setupListeners(store.dispatch);
export default store;