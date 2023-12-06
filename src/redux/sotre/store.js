import {configureStore} from "@reduxjs/toolkit"
import timer from '../slices/timer';
import { QuestionsSlice } from '../slices/Questions';
import jobFilter from "../slices/jobFilter";
const Store = configureStore({
    reducer:{
        timer:timer,
        QuestionsSlice:QuestionsSlice.reducer,
        jobFilter : jobFilter
    }
})
export default Store;