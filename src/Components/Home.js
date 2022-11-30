import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className='card1'>
     <div className="card" style={{width: "18rem"}}>
  <img src="../image/image1.webp" className="card-img-top" alt="..." style={{width: "18rem" , height:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title">Drisyam2</h5>
    
    
    <NavLink to="/booking" className="btn btn-primary"> Book Now</NavLink>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="../image/image3.jpg" className="card-img-top" alt="..."  style={{width: "18rem" , height:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title">Bhediya</h5>
    
    <NavLink to="/booking" className="btn btn-primary"> Book Now</NavLink>
  </div>
</div>
    </div>
  )
}

export default Home
