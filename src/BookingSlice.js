import { createSlice } from "@reduxjs/toolkit";

const seatsGenerate = (nr, nc) => {
  let row = [];
  let seats = [];
  for (let n = 1; n < nr * nc; n++) {
    row.push([n, false]);
    if (n % nc === 0) {
      seats.push(row);
      row = [];
    }
  }
  return seats;
};

const initialState = {
  arrangement: seatsGenerate(8, 8),
  amount: 0,
};

 const bookingSlices = createSlice({
  name: "booking",
  initialState,
  reducers: {
    makeArrangement: (state, action) => {
        const r=parseInt(action.payload.row)
        const c=parseInt(action.payload.column)
        
        state.arrangement=seatsGenerate(r,c);
    },
    disableSeats:(state,action)=>{
      if(state.arrangement[action.payload.index][action.payload.index2][1]){
        state.arrangement[action.payload.index][action.payload.index2][1]=false
      }else{
        state.arrangement[action.payload.index][action.payload.index2][1]=999
      }

    },
    updateArrangement:(state,action)=>{
      if(state.arrangement[action.payload.index][action.payload.index2][1]!==999){
        state.arrangement[action.payload.index][action.payload.index2][1]=!state.arrangement[action.payload.index][action.payload.index2][1]
    }
    },
    calculateAmount:(state,action)=>{
      let x=[]
      state.arrangement.forEach((item,index)=>{item.forEach((item2,index2)=>{if(item2[1]===true && item2[1]!==999){x.push(index+1)}})})
      const factor=x.reduce((sum,n)=>{return sum+n})
      state.amount=100*factor
  }
  },
});

export default bookingSlices.reducer;
export const { makeArrangement,disableSeats,updateArrangement,calculateAmount } = bookingSlices.actions;
