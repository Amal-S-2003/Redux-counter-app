import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./Redux/slice/counterSlice";

function Counter() {
  const count=useSelector((state)=>state.counterReducer.count)
  const dispatch=useDispatch()
  const [amount, setAmount] = useState("");
  console.log(amount);
  const handleIncrement=()=>{
    if(amount==""){
      alert("Please provide values")
    }else{
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }
  
  return (
    <>
      <h1 className="text-danger fw-bolder text-center mt-5">Counter-Application</h1>
      <div className="conatiner  col-8 m-auto border border-5 rounded-3 mt-5 p-5 ">
        <h1 className="fw-bolder text-center mt-5" style={{fontSize:"50px"}}>{count}</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-5">
          <button className="btn btn-success" onClick={()=>dispatch(increment())}>Increament</button>
          <button className="btn btn-danger" onClick={()=>dispatch(reset())}>Reset</button>
          <button className="btn btn-warning" onClick={()=>dispatch(decrement())}>Decreament</button>
        </div>
        <div className="d-flex mt-5">
            <input type="text" className="form-control" value={amount||""} placeholder="Enter Amount To Be Incremented" onChange={e=>setAmount(e.target.value)}/>
            <button className="btn btn-primary ms-3 col-3" onClick={handleIncrement}>Increment Amount</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
