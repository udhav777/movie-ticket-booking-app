import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    
    <NavLink to="/" className="navbar-brand" aria-current="page"><img src="../image/Logo.webp" alt="" width="50" height="40" className="d-inline-block align-text-top"/>
      Movie Booking App</NavLink> 
      
    
  </div>
       

  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          
           <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink> 
        
        </li>
        <li className="nav-item">
          
          <NavLink to="admin" className="nav-link active" aria-current="page" >Admin</NavLink>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
