import {configureStore} from "@reduxjs/toolkit"
import bookingSlices from "./BookingSlice"

export const store=configureStore({
    reducer:{
        bookingSlices:bookingSlices
    }
})