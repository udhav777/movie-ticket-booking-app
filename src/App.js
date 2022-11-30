import "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Admin from "./Components/Admin";
import Booking from "./Components/Booking";
import Payment from "./Components/Payment";

function App() {
  return <div className="App">
      <Navbar/>
    <Routes>
    
     <Route path="/" element={<Home/>}/> 
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/payment" element={<Payment/>}/>
    </Routes>


  </div>;
}

export default App;
