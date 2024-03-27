import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    otpcode: null,
}

const otpSlice = createSlice({
    name: 'otpcode',
    initialState ,
    reducers:{
        setotp:(state ,action)=>{
            state.otpcode = action.payload;
        }
    }
})


export const {setotp} = otpSlice.actions;
export default otpSlice.reducer