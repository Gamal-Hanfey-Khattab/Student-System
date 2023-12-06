import React from 'react';
import { logo_transparent } from '../../assets';
import {SlLocationPin} from"react-icons/sl"
import {AiOutlineHome} from "react-icons/ai"
import {useSelector}  from 'react-redux';
import { NavLink } from 'react-router-dom';
const JobApply = () => {
    const one = useSelector((state)=>state.jobFilter.jobDeatils)
    return ( 
        <>
         {
              <div className={one.id===1 ?"ps-4":"ps-4 pt-4"}  key={one.id}>
                <div className='p-4 bg-black-mine'>
                    <div className='d-flex justify-content-between flex-column flex-md-row '>
                        <div className='d-flex flex-column flex-md-row'>
                            <img style={{width:"50px",height:"50px"}} src={logo_transparent } alt='Sef'/>
                            <div className='d-inline-block ms-1'>
                                <h4>{one.title}</h4>
                                <p className='small'>Eptikar IT Solutions , {one.loc} City <br></br> <span className='fw-bold'>Level : {one.level}</span></p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between d-md-block'>
                            <p>{one.Salary} EGP Per Month</p>
                            <p className='text-end'> {one.jobType !=="Remote"?<p>{one.jobType} <SlLocationPin className='main-color me-1'/>On Site</p> :<p><AiOutlineHome className='main-color me-1'/>Remote</p> }</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h4>Balqees Hamdi Sabir</h4>
                        <p>Computer science , international islamic <br></br> university</p>
                    </div>
                    <div className='d-md-inline-block d-block --job-apply-boxes  me-md-3' >
                        <label className='d-block mb-2'>Email</label>
                        <input type='text'  style={{outline:"none"}} className='w-100 p-2 bg-second-op text-white d-inline-block rounded border-0 outline-0'/>
                    </div>
                    <div className='d-md-inline-block d-block mt-3 mt-md-0 '>
                        <label className='d-block mb-2'>Years Of Experience</label>
                        <input type='text'  style={{outline:"none"}} className='w-100 p-2 bg-second-op text-white d-inline-block rounded border-0 outline-0'/>
                    </div>
                    <div className='mt-3'>
                        <label className='d-block mb-3'>Mobile Number</label>
                        <input type='text'  style={{outline:"none"}} className='--job-apply-boxes  p-2 bg-second-op text-white d-inline-block rounded border-0 outline-0'/>
                    </div>
                    <div   className='text-end mt-5'>
                        <NavLink className="text-white px-5 text-decoration-none py-2 rounded d-block text-center me-md-3 d-md-inline-block text-md-left" style={{backgroundColor:"#bf9b30"}}  >SUBMIT</NavLink>
                        <NavLink className="text-white px-5 text-decoration-none py-2 rounded   d-md-inline-block text-md-left mt-md-0 d-block text-center mt-4" style={{backgroundColor:"grey"}} >CANCEL</NavLink>
                    </div>
                </div>
        </div>
   }
        </>
     );
}
 
export default JobApply;