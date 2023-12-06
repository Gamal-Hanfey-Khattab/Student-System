import { createSlice } from "@reduxjs/toolkit";
export const timer = createSlice({
    name:"timer",
    initialState:{
        timerSec : 0,
        timerMin:0,
        submited:true
    },
    reducers:{
        increament:(state)=>{
            if(state.timerSec===59){
                state.timerSec=0
                state.timerMin+=1
            }   
            state.timerSec +=1
        },
        sumbitedAction:(state)=>{
            state.submited = false
        }
    }
})
export const {increament,sumbitedAction}= timer.actions
export default timer.reducer