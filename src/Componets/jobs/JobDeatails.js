import React from 'react';
import { logo_transparent } from '../../assets';
import {SlLocationPin} from"react-icons/sl"
import {TbClockHour3} from "react-icons/tb"
import {AiOutlineHome} from "react-icons/ai"
import {useSelector}  from 'react-redux';
import { NavLink } from 'react-router-dom';
const JobDetails = () => {
    const one = useSelector((state)=>state.jobFilter.jobDeatils)
    return ( 
        <>
         {
              <div className={one.id===1 ?"ps-4":"ps-4 pt-4"}  key={one.id}>
                <div className='p-4 bg-black-mine'>
                    <div className='d-flex justify-content-between flex-column flex-md-row'>
                        <div className='d-flex flex-column flex-md-row'>
                            <img style={{width:"50px",height:"50px"}} src={logo_transparent} alt='Sef'/>
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
                    <p style={{width:"80%"}} className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt ipsam molestiae earum nobis esse optio pariatur odio inventore minus fuga libero illum, quaerat aperiam id natus illo maiores soluta!</p>
                    <div>
                       {one.skill.map((oneChild)=>{
                        return <span className='d-inline-block px-3  rounded py-1 me-2 ' style={{border:"1px solid #bf9b30"}}>{oneChild}</span>
                       })}
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <p className='m-0'> <TbClockHour3 className='h3 me-2 m-0 text-secondary'/>{one.lastView} h ago</p>
                    </div>
                    <div className='mt-4' >
                       <h4>About us</h4>
                       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                       </p>
                    </div>
                    <div className='mt-4' >
                       <h4>Job Description</h4>
                       <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt ipsam molestiae earum nobis esse optio pariatur odio inventore minus fuga libero illum, quaerat aperiam id natus illo maiores soluta!                       </p>
                    </div>
                    <div className='mt-4' >
                       <h4>Job Requirments</h4>
                       <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt ipsam molestiae earum nobis esse optio pariatur odio inventore minus fuga libero illum, quaerat aperiam id natus illo maiores soluta!                       </p>
                    </div>
                    <div className='text-end mt-4'>
                    <NavLink href='#' className='text-decoration-none d-block text-white px-5 py-2 text-end main-color-bg text-center d-md-inline-block rounded border-0' to={"/jobs/jobAplly"} >APPLY</NavLink>
                    </div>
                </div>
        </div>
   }
        </>
     );
}
 
export default JobDetails;