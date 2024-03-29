import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    id: null,
    token: null,
}

const verifySlice = createSlice({
    name: 'verify',
    initialState ,
    reducers:{
        setverify:(state ,action)=>{
            state.id = action.payload.id;
            state.token = action.payload.token;
            
        }
    }
})


export const { setverify} = verifySlice.actions;
export default verifySlice.reducer