import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Payment = () => {

const state=useSelector(state=>state.bookingSlices);

  return (
    <div>
        <header> <h2>Payment Window</h2></header>

        <div>
            Seate Booked are : { state.arrangement.map((item,index)=>{
                    return <span key={index}>
                        {
                            item.map((item2,index2)=>{
                                if(item2[1]==true && item2[1]!=999){
                                    return item2[0]+ " , "
                                }else{
                                    return null
                                }
                            })
                        }
                    </span>
            })}

        </div>

        <div>

            Total Amount: Rs{state.amount}


        </div>
        <NavLink to="/booking"> Go Back</NavLink>
    </div>
  )
}

export default Payment
