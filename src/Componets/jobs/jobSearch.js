import React from 'react';
import { logo_transparent } from '../../assets';
import {SlLocationPin} from"react-icons/sl"
import {TbClockHour3} from "react-icons/tb"
import {AiOutlineHome} from "react-icons/ai"
import {useSelector,useDispatch}  from 'react-redux';
import { detailAction } from '../../redux/slices/jobFilter';
import { NavLink } from 'react-router-dom';
const JobSearch = () => {
    const filterProductList = useSelector((state)=>state.jobFilter.filterProductList)
    const disp = useDispatch()
    return ( 
        <>
         {
          filterProductList.map((one)=>{
             return <div className={one.id===1 ?"":"pt-4"}  key={one.id}>
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
                        return  <span className='d-inline-block px-3  rounded py-1 me-2 ' style={{border:"1px solid #bf9b30"}}>{oneChild}</span>
                       })}
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-5 mt-md-3'>
                        <p className='m-0'> <TbClockHour3 className='h3 me-2 m-0 text-secondary'/>{one.lastView} h ago</p>
                        <NavLink className='text-decoration-none text-white px-3 py-1 main-color-bg d-inline-block rounded border-0' to={"jobDetails"} onClick={()=>{disp(detailAction(one))}}>VIEW DETAILS</NavLink>
                    </div>
                </div>
        </div>
    })
   }
        <NavLink className="mt-4 d-md-none d-block mb-4 text-decoration-none main-color-bg d-block text-center w-75  mx-auto py-2 px-4 rounded text-white p" >CREATE YOUR CV</NavLink>
        </>
     );
}
 
export default JobSearch;