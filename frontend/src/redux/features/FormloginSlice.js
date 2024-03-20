import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoginclick: false,
}

const loginSlice = createSlice({
    name: 'loginclick',
    initialState ,
    reducers:{
        togglelogin:(state ,_)=>{
           state.isLoginclick = !state.isLoginclick
        }
    }
})


export const {togglelogin} = loginSlice.actions;
export default loginSlice.reducer