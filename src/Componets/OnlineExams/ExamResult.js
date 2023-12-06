import React from 'react';
import { useSelector } from 'react-redux';
import { Questions } from '../../dummy/dummydata';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ExamResult = () => {
    const timeBysec = useSelector((state)=>state.timer.timerSec)
    const timeBymin = useSelector((state)=>state.timer.timerMin)
    const NumberOfAnsweredTrue = useSelector((state)=>state.QuestionsSlice.NumberOfAnsweredTrue)
    const NumberOfAnswered = useSelector((state)=>state.QuestionsSlice.NumberOfAnswered)
    const NumberOfQuestions = useSelector((state)=>state.QuestionsSlice.NumberOfQuestions)
    const precentage =NumberOfAnsweredTrue / NumberOfQuestions *100
    return ( 
        <>
            <div className='p-5 mt-5' style={{background:"#00000075"}}>
                <div className='d-flex justify-content-between flex-column flex-md-row'>
                    <div className='position-relative' style={{width:"300px",height:"300px"}}>
                        <CircularProgressbar  value={precentage}  className='w-100 h-100 position-absolute top-50 start-50 translate-middle'  text={`${NumberOfAnsweredTrue}/${NumberOfQuestions}`}  strokeWidth={5}
                        styles={buildStyles({
                            pathColor:"#bf9b30",
                            textColor:"#fff",
                            trailColor:"#fff"
                        })}>
                        </CircularProgressbar>
                        <div style={{width:"80%",height:"80%"}} className='position-absolute top-50 start-50 translate-middle'>
                            <CircularProgressbar  value={precentage}   strokeWidth={5}
                            styles={buildStyles({
                                pathColor:"#bf9b30",
                                textColor:"#fff",
                                trailColor:"#fff"
                            })}
                            
                            />
                        </div>
                     </div>
                    <button  className='px-5 mt-5 py-2  d-block rounded d-md-inline-block text-white text-decoration-none border-0 self-md-base' style={{backgroundColor:"#bf9b30"}}>VIEW ANSWERS</button>
                </div>
                <div className='d-flex justify-content-between mt-5 flex-column flex-md-row' >
                    <p>Number of questions answered: </p>
                    <p className='px-5 py-2 rounded flex-column flex-md-row text-center ' style={{background:"#00000075"}}>{NumberOfAnswered} Questions</p>
                </div>
                <div className='d-flex justify-content-between flex-column flex-md-row'>
                    <p>Number of questions not answered: </p>
                    <p className='px-5 py-2 rounded text-center' style={{background:"#00000075"}}>{Questions.length - NumberOfAnswered} Questions</p>
                </div>
                <div className='d-flex justify-content-between flex-column flex-md-row'>
                    <p>Number of questions answered correctly: </p>
                    <p className='px-5 py-2 rounded text-center' style={{background:"#00000075"}}>{NumberOfAnsweredTrue} Questions</p>
                </div>
                <div className='d-flex justify-content-between flex-column flex-md-row' >
                    <p>Number of wrong answers: </p>
                    <p className='px-5 py-2 rounded text-center' style={{background:"#00000075"}}>{NumberOfAnswered - NumberOfAnsweredTrue} Answer</p>
                </div>
                <div className='d-flex justify-content-between flex-column flex-md-row'>
                    <p>Time Taken: </p>
                    <p className='px-5 py-2 rounded text-center' style={{background:"#00000075"}}>{timeBymin} : {timeBysec} Minutes</p>
                </div>
            </div>
        </>
     );
}
 
export default ExamResult;