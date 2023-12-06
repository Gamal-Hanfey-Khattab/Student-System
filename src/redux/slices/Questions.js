import { createSlice } from "@reduxjs/toolkit";
import { Questions } from "../../dummy/dummydata";
export const QuestionsSlice = createSlice({
    name:"Questions",
    initialState:{
        NumberOfAnsweredTrue : 0,
        NumberOfAnswered:0,
        NumberOfQuestions:Questions.length

    },
    reducers:{
        answerTrue:(state)=>{
            state.NumberOfAnsweredTrue +=1
        },
        answer:(state)=>{
            state.NumberOfAnswered +=1
        }
    }
})
export const {answer,answerTrue}= QuestionsSlice.actions
export default QuestionsSlice.reducer