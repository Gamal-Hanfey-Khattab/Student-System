import React, { useEffect } from 'react';
import { Questions } from '../../dummy/dummydata';
import { useDispatch, useSelector } from 'react-redux';
import { answer, answerTrue } from '../../redux/slices/Questions';
import { increament, sumbitedAction } from '../../redux/slices/timer';
import { NavLink } from 'react-router-dom';
const ExamQuestion = () => {
    let animation = document.querySelector(".child-progress")
   
    const dispatch1 = useDispatch()
    const handleAnswer=(e,isCorrect)=>{
        if(isCorrect){
            dispatch1(answerTrue())
            e.target.style.backgroundColor ="green"
        }
        else{
            e.target.style.backgroundColor ="red"
        }
        e.target.setAttribute("disabled",true)
        dispatch1(answer())
    }
    const Inc=()=>{
        dispatch1(increament())
    }
    const submit = useSelector((state)=>state.timer.submited)
    useEffect(()=>{
        let interval;
        if(!submit){
            animation.style.animationPlayState = "paused"
            return;
        }
        else{
           interval= setInterval(Inc,1000)
        }
        return () => clearInterval(interval);
  
    },[submit])
    return ( <>
        {
            Questions.map((one)=>{
                return <div className='p-4 mt-5' style={{background:"#00000075"}}>
                    <p>Question {Questions.indexOf(one)+1}</p>
                    <h4 className='mb-5'>{one.questionText}</h4>
                    {one.imgSrc ? <img alt= "Question"src={one.imgSrc} className='img-fluid d-inline-block mb-3' style={{width:"50%"}}></img>:""}
                    <div>
                        {one.answerOptions.map((one)=>{
                            return <button className='--exam-question-btn-que d-block' onClick={(e)=>handleAnswer(e,one.isCorrect)}>{one.answerText}</button>
                        })}
                    </div>
                    <p className='text-end'>{one.mark} Marks</p>
                    
                </div>
            
            })
        }
         <div   className='text-end mt-5 pb-5'>
                <NavLink className="text-white px-5 text-decoration-none py-2 rounded d-block text-center me-md-3 d-md-inline-block text-md-left" style={{backgroundColor:"#bf9b30"}} to={"/online/res"} onClick={()=>dispatch1(sumbitedAction())}>SUBMIT</NavLink>
                <NavLink className="text-white px-5 text-decoration-none py-2 rounded   d-md-inline-block text-md-left mt-md-0 d-block text-center mt-4" style={{backgroundColor:"grey"}} >CANCEL</NavLink>
        </div>
    </>

     );
}
 
export default ExamQuestion;