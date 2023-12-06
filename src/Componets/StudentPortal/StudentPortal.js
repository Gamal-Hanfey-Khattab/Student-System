import React from 'react';
import {MdCheckCircleOutline} from "react-icons/md"
import { NavLink } from 'react-router-dom'
import {BiTimeFive} from "react-icons/bi"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const StudentPortal = () => {
    return ( 
    <>
     <div className="container pt-5">
            <div>
                <p className="pb-2 " style={{width:"fit-content",borderBottom:"1px solid #bf9b30"}}>Student Portal</p>
                <p>6th June 2023</p>
            </div>
            <div className='d-flex justify-content-between align-items-center mb-3 flex-column flex-md-row'>
                <h3>WELCOME BACK <span className='main-color'>BALQEES SABIR</span></h3>
                <NavLink className="text-decoration-none py-2 rounded text-white px-3 main-color-bg">VIEW PROFILE</NavLink>
            </div>
            <div className='row px-4  mb-3 flex-column flex-md-row bg-black-mine py-5'>
               <div className='col-4 '>
                    <span  className='py-2 px-4 rounded d-inline-block h1 fw-bold' style={{border:"1px solid #BF9B30"}}>1</span>
                    <span className='d-inline-block ms-3'>UPCOMIG <br></br> EXAMS</span>
               </div >
               <div className='col-4'>
                    <span  className='py-2 px-4 rounded d-inline-block h1 fw-bold' style={{border:"1px solid #BF9B30"}}>4</span>
                    <span className='d-inline-block ms-3'>REGISTERED <br></br> COURSES</span>
               </div>
               <div className='col-4'>
                    <span  className='py-2 px-4 rounded d-inline-block h1 fw-bold' style={{border:"1px solid #BF9B30"}}>2</span>
                    <span className='d-inline-block ms-3'>COMPLETED <br></br> COURSES</span>
               </div>
            </div>
            <div>
                <div>
                   <div className='mb-3 mt-5 d-flex justify-content-between'>
                        <h5 className='m-0' >LEVEL : 1</h5>
                        <p class="text-end me-2 mb-0">97%</p>
                   </div>
                    <div class="--student-portal-parent-progress">
                        <div class="--student-portal-child-progress" style={{width:"97%"}}>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center bg-second-op mt-3 py-3 px-4 rounded' style={{width:"fit-content"}}>
                <MdCheckCircleOutline className='d-inline-block me-2' style={{fontSize:"65px"}}/>
                <p className='d-inline-block m-0'>ALL CLEAR , YOU DON'T HAVE ANY EXAMS TODAY.</p>
            </div>

            <div className='d-flex justify-content-between' style={{marginTop:"80px"}}>
                <div style={{width:"45%"}} >
                    <h2 className='mb-5'>Registered Courses</h2>
                    <div className='bg-black-mine p-4 rounded'>
                        <h3>Introduction to React JS</h3>
                        <p><span style={{color:"#bf9b30"}}>Instructor </span> : Tariq Ali</p>
                        <div className='d-flex justify-content-between mt-4 align-items-center'>
                            <p className='h4 fw-bold'>Lev.1</p>
                            <NavLink className="text-decoration-none text-white py-2 px-3 main-color-bg rounded">VIEW DETAILS</NavLink>
                        </div>
                    </div>
                    <div className='bg-black-mine p-4 mt-4 rounded'>
                        <h3>Introduction to Data Analysis</h3>
                        <p><span style={{color:"#bf9b30"}}>Instructor </span> : Sarah Ahmed</p>
                        <div className='d-flex justify-content-between mt-4 align-items-center'>
                            <p className='h4 fw-bold'>Lev.1</p>
                            <NavLink className="text-decoration-none text-white py-2 px-3 main-color-bg rounded">VIEW DETAILS</NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Upcoming Exams</h2>
                    <div className='d-flex mt-5'>
                        <div className='py-2'>
                            <p className='m-0 bg-black-mine px-4 rounded-top fw-bold' >7TH <br></br>JUN</p>
                            <p className='m-0 main-color-bg px-4 rounded-bottom fw-bold' >WED</p>
                        </div>
                        <div className='ms-3'>
                            <h3 className='m-0'>Introduction to React JS</h3>
                            <p className='m-0'><span style={{color:"#bf9b30"}}>Instructor </span> : Tariq Ali</p>
                            <div className='d-flex justify-content-between  align-items-center'>
                                <p className='m-0 fw-bold'>Lev.1 Exam</p>
                                <p className='position-relative m-0'> <BiTimeFive className=' text-white h3 me-1' /> <span>12:30 PM</span> </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  >
                <h2 className='mt-5 mb-5'>Here's how you've been doing <br></br> for the <span className='main-color'>last month</span></h2>
                <div className='row gx-5'>
                    {/* First */}
                    <div className=' px-2  col-3'>
                    <div className='bg-black-mine py-4'>
                    <div className='position-relative m-auto ' style={{width:"150px",height:"150px"}}>
                            <CircularProgressbar  value={85}  className='w-100 h-100 position-absolute top-50 start-50 translate-middle'  text={`85%`}  strokeWidth={5}
                            styles={buildStyles({
                                pathColor:"#bf9b30",
                                textColor:"#fff",
                                trailColor:"#fff"
                            })}>
                            </CircularProgressbar>
                            <div style={{width:"80%",height:"80%"}} className='position-absolute top-50 start-50 translate-middle'>
                                <CircularProgressbar  value={85}   strokeWidth={5}
                                styles={buildStyles({
                                    pathColor:"#bf9b30",
                                    textColor:"#fff",
                                    trailColor:"#fff"
                                })}
                                
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h4 className='mt-4 mb-4'>Introduction to React JS</h4>
                            <p className='m-0 mb-3 h3 fw-bold'>LEV.1</p>
                            <p className='m-0 h5'>27/30 HOURS</p>
                        </div>
                    </div>
                    </div>
                    {/* sec */}
                    <div className=' px-2  col-3'>
                    <div className='bg-black-mine py-4'>
                    <div className='position-relative m-auto ' style={{width:"150px",height:"150px"}}>
                            <CircularProgressbar  value={85}  className='w-100 h-100 position-absolute top-50 start-50 translate-middle'  text={`85%`}  strokeWidth={5}
                            styles={buildStyles({
                                pathColor:"#bf9b30",
                                textColor:"#fff",
                                trailColor:"#fff"
                            })}>
                            </CircularProgressbar>
                            <div style={{width:"80%",height:"80%"}} className='position-absolute top-50 start-50 translate-middle'>
                                <CircularProgressbar  value={85}   strokeWidth={5}
                                styles={buildStyles({
                                    pathColor:"#bf9b30",
                                    textColor:"#fff",
                                    trailColor:"#fff"
                                })}
                                
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h4 className='mt-4 mb-4'>Introduction to React JS</h4>
                            <p className='m-0 mb-3 h3 fw-bold'>LEV.1</p>
                            <p className='m-0 h5'>27/30 HOURS</p>
                        </div>
                    </div>
                    </div>
                    {/* third */}
                    <div className=' px-2  col-3'>
                    <div className='bg-black-mine py-4'>
                    <div className='position-relative m-auto ' style={{width:"150px",height:"150px"}}>
                            <CircularProgressbar  value={85}  className='w-100 h-100 position-absolute top-50 start-50 translate-middle'  text={`85%`}  strokeWidth={5}
                            styles={buildStyles({
                                pathColor:"#bf9b30",
                                textColor:"#fff",
                                trailColor:"#fff"
                            })}>
                            </CircularProgressbar>
                            <div style={{width:"80%",height:"80%"}} className='position-absolute top-50 start-50 translate-middle'>
                                <CircularProgressbar  value={85}   strokeWidth={5}
                                styles={buildStyles({
                                    pathColor:"#bf9b30",
                                    textColor:"#fff",
                                    trailColor:"#fff"
                                })}
                                
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h4 className='mt-4 mb-4'>Introduction to React JS</h4>
                            <p className='m-0 mb-3 h3 fw-bold'>LEV.1</p>
                            <p className='m-0 h5'>27/30 HOURS</p>
                        </div>
                    </div>
                    </div>
                    {/* fourth */}
                    <div className=' px-2  col-3'>
                    <div className='bg-black-mine py-4'>
                    <div className='position-relative m-auto ' style={{width:"150px",height:"150px"}}>
                            <CircularProgressbar  value={85}  className='w-100 h-100 position-absolute top-50 start-50 translate-middle'  text={`85%`}  strokeWidth={5}
                            styles={buildStyles({
                                pathColor:"#bf9b30",
                                textColor:"#fff",
                                trailColor:"#fff"
                            })}>
                            </CircularProgressbar>
                            <div style={{width:"80%",height:"80%"}} className='position-absolute top-50 start-50 translate-middle'>
                                <CircularProgressbar  value={85}   strokeWidth={5}
                                styles={buildStyles({
                                    pathColor:"#bf9b30",
                                    textColor:"#fff",
                                    trailColor:"#fff"
                                })}
                                
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h4 className='mt-4 mb-4'>Introduction to React JS</h4>
                            <p className='m-0 mb-3 h3 fw-bold'>LEV.1</p>
                            <p className='m-0 h5'>27/30 HOURS</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Certificate */}
            <div className='pb-5'>
                <h2 className='mt-5 mb-5'>Earned Certificate</h2>
                <div className='d-flex justify-content-between align-items-center bg-black-mine p-3 rounded'>
                    <div>
                        <h4>Introduction to React js</h4>
                        <div>
                            <p className='m-0 d-inline-block'><span className='main-color'>Instructor : </span>Tariq Ali</p>
                            <p className='m-0 d-inline-block ms-3'><span className='main-color'>Data Acquired : </span>Monday , June 5th</p>
                        </div>
                    </div>
                    <div>
                        <button className='px-4 py-2 main-color-bg border-0 text-white rounded' >Download</button>
                    </div>
                </div>
            </div>
        </div>
    </> 
    );
}
 
export default StudentPortal;