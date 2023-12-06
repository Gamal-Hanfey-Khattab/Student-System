import { createSlice } from "@reduxjs/toolkit";
import { emp } from "../../dummy/dummydata";
export const JobFilter = createSlice({
    name:"Questions",
    initialState:{
        arrJobtype:[],
        arrLevel:[],
        arrSalary:[],
        filterProductList:emp ,
        emp,
        loc:"Cairo",
        jobDeatils:emp[0]
    },
    reducers:{
        detailAction:(state,target)=>{
            state.jobDeatils = target.payload
            console.log(target.payload);
        },
        JobTypeAction:(state,target)=>{
             let index = parseInt(target.payload.value)
            let value = target.payload.checked
            if(target.payload.id==="loc"){
                 state.loc = target.payload.value
            }
            if(target.payload.alt==="Type"){
                state.arrJobtype[index-1] = value
            }
            if(target.payload.alt==="Level"){
                state.arrLevel[index-1] = value
            }
            if(target.payload.alt==="Salary"){
                state.arrSalary[index-1] = value
            }
            const filtered = emp.filter((oneFilter)=>{
                let x = emp;
                let y = emp;
                let z = emp;
                    state.arrJobtype.forEach((item,index)=>{
                        if(item){
                            x |= (oneFilter.filterJobType === index + 1) 
                        }
                    })
                    state.arrLevel.forEach((item,index)=>{
                        if(item){
                            y |= (oneFilter.filterLevel === index + 1)  
                        }
                    })
                    state.arrSalary.forEach((item,index)=>{
                        if(item){
                            z |= (oneFilter.filterSalary === index + 1)
                        }
                    })
                return x && y && z && oneFilter.loc === state.loc;
            })
            state.filterProductList = filtered
        }
    }
})
export const {JobTypeAction,detailAction}= JobFilter.actions
export default JobFilter.reducer