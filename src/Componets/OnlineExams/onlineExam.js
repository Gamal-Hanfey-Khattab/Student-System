import React from 'react';
import {CgCalendarDates} from "react-icons/cg"
import {BiTimeFive} from "react-icons/bi"
import {ImAlarm} from"react-icons/im"
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
const OnlineExam = () => {
    // Function Redux
    const submit = useSelector((state)=>state.timer.submited)
    // End timer Redux
    // Get Date 
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    const dateObject = new Date();
    let date = dateObject.toLocaleString("en-IN",options);
    let dayWeek = date.substring(0, date.lastIndexOf(","));
    // End Date

    // Timer Redux
    const timeBysec = useSelector((state)=>state.timer.timerSec)
    const timeBymin = useSelector((state)=>state.timer.timerMin)
    // End Timer Redux
    return ( 
        <>
        <div className="container pt-5">
            <div>
                <p className="pb-2 " style={{width:"fit-content",borderBottom:"1px solid #bf9b30"}}>{submit?"Online Exam ":"Online Exam Results "}</p>
                <p>6th June 2023</p>
            </div>
            <div className='d-flex justify-content-between mb-3 flex-column flex-md-row'>
                <div>
                    <h3>Introduction to React JS</h3>
                    <p>Lev. 1, 20 Marks</p>
                    <p><span style={{color:"#bf9b30"}}>Instructor </span> : Tariq Ali</p>
                </div>
                <div className='d-flex py-3 px-5 rounded flex-wrap ' style={{backgroundColor:"#00000075"}} >
                    <div className='me-5 mb-3 mb-md-0 --online-exam-time ' >
                        <p className='position-relative'> <CgCalendarDates className='position-absolute ' style={{top:"4px",left:"-25px",color:"#bf9b30"}}/> Date</p>
                        <p>{dayWeek}</p>
                    </div>
                    <div className='me-0 me-md-5 --online-exam-duration ' >
                        <p className='position-relative'> <BiTimeFive className='position-absolute ' style={{top:"4px",left:"-25px",color:"#bf9b30"}}/> Time</p>
                        <p>12:30 PM</p>
                    </div>
                    <div className='--online-exam-duration ps-5' >
                        <p className='position-relative'> <ImAlarm className='position-absolute ' style={{top:"4px",left:"-25px",color:"#bf9b30"}}/> Duration</p>
                        <p>1 Hour</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-end me-2'>{timeBymin}:{timeBysec}</p>
                <div>
                    <div className='--online-exam-parent-progress'>
                        <div className={submit?'--online-exam-child-progress':"child-progress-paused"}></div>
                    </div>
                </div>
            </div>

            {/* Questions */}
            <Outlet/>
          
        </div>
        </>
     );
}
 
export default OnlineExam;