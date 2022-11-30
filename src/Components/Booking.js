import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { NavLink } from 'react-router-dom'
import styles from "./Button.module.css"
import { updateArrangement,calculateAmount } from '../BookingSlice'
const Booking = () => {
  const state=useSelector(state=>state.bookingSlices)
  const dispatch=useDispatch();
  
  return (
    <div>
      <header> 
      <h2> Select Your Seats</h2>
      </header>

    <main>
    <table>
    <tbody>
    {
        state.arrangement.map((item,index)=>{
          return <tr key={index}>
            {
              item.map((item2,index2)=>{
                if(index2===0){
                  return <td><td>Rs {100*(index+1)}</td>
                    <td key={index2}>
                      <button className={item2[1]?((item2[1]===999)?styles.buttonGray:styles.buttonGreen):styles.buttonRed} onClick={()=>{dispatch(updateArrangement({index:index,index2:index2}))}}>{item2[0]} </button>
                    </td>
                  
                  </td>
                }
                else{
                  return <td key={index2}>

                    <button className={item2[1]?((item2[1]===999)?styles.buttonGray:styles.buttonGreen):styles.buttonRed} onClick={()=>{
                      dispatch(updateArrangement({index:index,index2:index2}))
                    }}>{ item2[0]} </button>
                  </td>
                }
              })
            }
          </tr>
        })


    }






    </tbody>

    </table>

    <div>
    <NavLink to="/">Go Back</NavLink>
    <NavLink to="/payment" > <button onClick={()=>{dispatch(calculateAmount(1))}}>Proceed</button></NavLink>


    </div>


    </main>
      



    </div>
  )
}

export default Booking
