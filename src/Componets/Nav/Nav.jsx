import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">


  <div class="collapse navbar-collapse container" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"/"} >Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link"  to={"/online"}>Online Exam</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link"  to={"/student"}>Student Information</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link"  to={"/jobs"}>Jobs</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}
