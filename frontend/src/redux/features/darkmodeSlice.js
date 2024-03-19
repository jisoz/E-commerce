import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isDarkMode: false,
}

const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState ,
    reducers:{
        toggleDarmode:(state ,_)=>{
           state.isDarkMode = !state.isDarkMode
        }
    }
})


export const {toggleDarmode} = darkmodeSlice.actions;
export default darkmodeSlice.reducer