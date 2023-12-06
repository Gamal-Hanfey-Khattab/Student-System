import React from 'react';
import {MdCheckCircleOutline} from "react-icons/md"
import { NavLink } from 'react-router-dom'
import {BiTimeFive} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {LuEdit} from "react-icons/lu"
import{HiOutlineClipboardList} from "react-icons/hi"
import{LuCalendarDays} from "react-icons/lu"
const InstructorPortal = () => {
    return ( 
        <>
     <div className="container pt-5">
            <div>
                <p className="pb-2 " style={{width:"fit-content",borderBottom:"1px solid #bf9b30"}}>Instructor Portal</p>
                <p>6th June 2023</p>
            </div>
            <div className='d-flex justify-content-between align-items-center mb-3 flex-column flex-md-row'>
                <h3>WELCOME BACK <span className='main-color'>TARIK ALI</span></h3>
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
            <div className='d-flex align-items-center bg-second-op mt-3 py-3 px-4 rounded' style={{width:"fit-content"}}>
                <MdCheckCircleOutline className='d-inline-block me-2' style={{fontSize:"65px"}}/>
                <p className='d-inline-block m-0'>ALL CLEAR , YOU DON'T HAVE ANY EXAMS TODAY.</p>
            </div>

            <div className='d-flex justify-content-between' style={{marginTop:"80px"}}>
                <div style={{width:"45%"}} >
                    <h2 className='mb-5'>Ongoing Courses</h2>
                    <div className='bg-black-mine p-4 rounded'>
                        <h3>Introduction to React JS</h3>
                        <div className='d-flex justify-content-between mt-4 align-items-center mt-5'>
                            <p className='h4 fw-bold m-0'>Lev.1</p>
                            <div>
                                <p className='d-inline-block m-0'><AiOutlineUser className=' main-color h3 me-1' />20 Students</p>
                                <NavLink className="text-decoration-none d-inline-block text-white py-1 px-2 main-color-bg rounded ms-3">VIEW DETAILS</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className='bg-black-mine p-4 rounded mt-4'>
                        <h3>Introduction to Data Analysis</h3>
                        <div className='d-flex justify-content-between mt-4 align-items-center mt-5'>
                            <p className='h4 fw-bold m-0'>Lev.1</p>
                            <div>
                                <p className='d-inline-block m-0'><AiOutlineUser className=' main-color h3 me-1' />20 Students</p>
                                <NavLink className="text-decoration-none d-inline-block text-white py-1 px-2 main-color-bg rounded ms-3">VIEW DETAILS</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between'>
                        <h2 className='m-0' >Upcoming Exams</h2>
                        <NavLink style={{lineHeight:"200%"}} className="px-3 py-1 main-color-bg text-white rounded text-decoration-none" >CREATE NEW</NavLink>
                    </div>
                    <div className='d-flex mt-5'>
                        <div className='py-2'>
                            <p className='m-0 bg-black-mine px-4 rounded-top fw-bold' >7TH <br></br>JUN</p>
                            <p className='m-0 main-color-bg px-4 rounded-bottom fw-bold' >WED</p>
                        </div>
                        <div className='ms-3'>
                            <h3 className='m-0'>Introduction to React JS <NavLink className="main-color ms-4"><LuEdit/></NavLink></h3>
                            <p className='m-0'><span style={{color:"#bf9b30"}}>Instructor </span> : Tariq Ali</p>
                            <div className='d-flex justify-content-between  align-items-center'>
                                <p className='m-0 fw-bold'>Lev.1 Exam</p>
                                <p className='position-relative m-0'> <BiTimeFive className=' text-white h3 me-1' /> <span>12:30 PM</span> </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Certificate */}
            <div className='pb-5'>
                <h2 className='mt-5 mb-5'>Upcoming Courses</h2>
                <div className='d-flex justify-content-between align-items-center  p-3 rounded'>
                    <div className='d-flex'>
                        {/* First */}
                        <div className='me-3 d-flex'>   
                            <div className='--instructor-portal-img rounded-start'>
                                <p className='h4'>LEV.1</p>
                            </div>
                            <div className='bg-black-mine ps-4 pt-4 pe-3 pb-3 rounded-end ' style={{height:"150px"}}>
                                <h4>Python For Beginners</h4>
                               <div className='d-flex align-items-center'>
                                <div >
                                        <p style={{fontSize:"13px"}}><LuCalendarDays className='main-color me-2'/> <span>Wednesady , June 7th</span></p>
                                        <p style={{fontSize:"13px"}}><HiOutlineClipboardList className='main-color me-2'/> <span>12 Lessons</span></p>
                                    </div>
                                    <div className='ms-3'>
                                        <button style={{fontSize:"13px"}} className='p-2 main-color-bg text-white border-0 rounded'>VEIEW DETAILS</button>
                                    </div>
                               </div>
                            </div>
                        </div>  
                        {/* Sec */}
                        <div className='me-3 d-flex'>   
                            <div className='--instructor-portal-img rounded-start'>
                                <p className='h4'>LEV.1</p>
                            </div>
                            <div className='bg-black-mine ps-4 pt-4 pe-3 pb-3 rounded-end ' style={{height:"150px"}}>
                                <h4>Python For Beginners</h4>
                               <div className='d-flex align-items-center'>
                                <div >
                                        <p style={{fontSize:"13px"}}><LuCalendarDays className='main-color me-2'/> <span>Wednesady , June 7th</span></p>
                                        <p style={{fontSize:"13px"}}><HiOutlineClipboardList className='main-color me-2'/> <span>12 Lessons</span></p>
                                    </div>
                                    <div className='ms-3'>
                                        <button style={{fontSize:"13px"}} className='p-2 main-color-bg text-white border-0 rounded'>VEIEW DETAILS</button>
                                    </div>
                               </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </> 
     );
}
 
export default InstructorPortal;