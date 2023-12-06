import React from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { JobTypeAction } from '../../redux/slices/jobFilter';
import {IoFilterOutline} from "react-icons/io5"
import { useState } from 'react';
const Jobs = () => {
    const [mobileToggle,setmobileToggle] = useState(true)
    const dispatch1 = useDispatch()
    return ( 
        <>
        <div className="container pt-5">
            <div>
                <p className="pb-2 " style={{width:"fit-content",borderBottom:"1px solid #bf9b30"}}>Jobs</p>
                <p>6th June 2023</p>
            </div>
            <div className='d-flex justify-content-between align-items-center mb-3 flex-column flex-md-row'>
                <div>
                    <h3>Looking for a job ?</h3>
                    <p>Here you can find your best match between 1000s of <br></br> updated and available positions.</p>
                </div>
                <div  >
                    <div className='px-4 py-2 d-inline-block rounded-start' style={{backgroundColor:"#433d3d91"}}>
                        <AiOutlineSearch className='main-color h5 m-0 '/>
                        <input type='text'  className="--jobs-search-input bg-transparent border-0 ms-2 text-white"placeholder='Search for a job'/>  
                       
                    </div>
                   <div className=' d-flex justify-content-between align-items-center d-md-inline-block'>
                        <button className='px-4 --jobs-button rounded-end  mt-2 mt-md-0 py-2  border-0 main-color-bg text-white'>SEARCH</button>
                        <button className='small mt-2  border-0 d-sm-none  px-2 bg-black-mine main-color' onClick={()=>setmobileToggle((mobileToggle)=>!mobileToggle)} ><IoFilterOutline className='h1 fw-bold mt-2'/></button>
                   </div>
                </div>
            </div>
            {/* Nav */}
            <div className=" pt-4">
                <div className="row">
                    <div className={mobileToggle? "d-none d-sm-block col-md-3 col-12 bg-black-mine p-4 ":"col-md-3 col-12 bg-black-mine p-4" }>
                        {/* Headings */}
                        <div className='mb-4 d-flex justify-content-between align-items-center bg-black-mine px-3 py-2 rounded '>
                            <h3 className='fw-bold h4 m-0'>Filters</h3>
                            <button className='small bg-transparent border-0 d-none d-sm-block text-white' >Clear All</button>
                            <button className='small bg-transparent border-0 d-sm-none text-main-color '  ></button>                        
                        </div>
                        {/* Location */}
                        <div className='p-3' >
                            <h6 className=' '>Location</h6>
                            <div className='d-flex justify-content-center align-items-center'>
                                <select id='loc'
                                className="form-select bg-second border-0 text-white --job-selected-one m-0 d-inline-block  ps-2 "  alt="loc" defaultValue="Cairo" onChange={(e)=>dispatch1(JobTypeAction(e.target))} aria-label="Default select example">
                                    <option value="Cairo"    className='bg-secondaryColor-op p-2 ' >Cairo</option>
                                    <option value="Giza"   className='bg-secondaryColor-op p-2 fw-bold'>Giza</option>
                                    <option value="Alex"   className='bg-secondaryColor-op p-2 fw-bold'>Alex</option>
                                </select>
                            </div>
                        </div>
                        {/* Check boxes */}
                        <div className='p-3'>
                            {/* Job Type */}
                                <div className="form-check ps-0 " >
                                    <h5 className='small '>Job Type</h5>
                                    <div className='d-flex align-items-center'>
                                        <input className="form-check-input  m-0 --job-check-job" value="1"  alt='Type'  onChange={(e)=>dispatch1(JobTypeAction(e.target))}  type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3" htmlFor="flexCheckDefault">Full Time</label>
                                    </div>
                                    <div className="form-check ps-0 d-flex align-items-center">
                                        <input className="form-check-input  m-0 --job-check-job"  value="2" alt="Type" onChange={(e)=>dispatch1(JobTypeAction(e.target))} type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3"  htmlFor="flexCheckDefault">Part Time</label>
                                    </div>
                                    <div className="form-check ps-0 d-flex align-items-center">
                                        <input className="form-check-input  m-0 --job-check-job"  value="3" alt="Type" onChange={(e)=>dispatch1(JobTypeAction(e.target))}  type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3" htmlFor="flexCheckDefault">Remote</label>
                                    </div>
                                </div>
                            {/* Level */}
                                <div className="form-check ps-0 mt-4" >
                                    <h5 className='small '>Level</h5>
                                    <div className='d-flex align-items-center'>
                                        <input className="form-check-input  m-0 --job-check-job" value="1" alt="Level"  onChange={(e)=>dispatch1(JobTypeAction(e.target))}  type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3" htmlFor="flexCheckDefault">Entry Level</label>
                                    </div>
                                    <div className="form-check ps-0 d-flex align-items-center">
                                        <input className="form-check-input  m-0 --job-check-job" value="2"  alt="Level"  onChange={(e)=>dispatch1(JobTypeAction(e.target))} type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3" htmlFor="flexCheckDefault">Intermediate</label>
                                    </div>
                                    <div className="form-check ps-0 d-flex align-items-center">
                                        <input className="form-check-input  m-0 --job-check-job" value="3" alt="Level"  onChange={(e)=>dispatch1(JobTypeAction(e.target))}  type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3" htmlFor="flexCheckDefault">Expert</label>
                                    </div>
                                </div>
                                {/* Salary Range */}
                                <div className="form-check ps-0  mt-4 " >
                                    <h5 className='small    '>Salary Range</h5>
                                    <div className='d-flex align-items-center'>
                                        <input className="form-check-input  m-0 --job-check-job"  value="1" alt="Salary"  onChange={(e)=>dispatch1(JobTypeAction(e.target))} type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3" htmlFor="flexCheckDefault">Under 4000 </label>
                                    </div>
                                    <div className="form-check ps-0 d-flex align-items-center">
                                        <input className="form-check-input  m-0 --job-check-job" value="2"   onChange={(e)=>dispatch1(JobTypeAction(e.target))}  alt="Salary" type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3"  htmlFor="flexCheckDefault">Between 4000 & 10000 </label>
                                    </div>
                                    <div className="form-check ps-0 d-flex align-items-center">
                                        <input className="form-check-input  m-0 --job-check-job"   value="3" alt="Salary"  onChange={(e)=>dispatch1(JobTypeAction(e.target))}  type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label small ms-3" htmlFor="flexCheckDefault">More Than 10000 </label>
                                    </div>
                                </div>
                        </div>
                        <NavLink className="text-decoration-none d-none d-md-block main-color-bg d-block text-center py-2 px-4 rounded text-white" >CREATE YOUR CV</NavLink>
                    </div>
                    {/* Child */}
                    <div className="col-md-9 col-12">
                       <div className='row'>
                        {/* Jobs */}
                            <Outlet/>
                            
                       </div>
                    </div>
                </div>
        </div>
          
        </div>
        </>
     );
}
 
export default Jobs;