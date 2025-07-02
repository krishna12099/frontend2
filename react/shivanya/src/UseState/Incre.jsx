import React, { useState } from 'react'
import "./style.css"

function Incre() {
    const [num,setNum]=useState(0)

    const increment=()=>{
         setNum(num+1)
    }
    const decrement=()=>{
        if(num==0){
            alert("0 can not decrease")
        }else{
            setNum(num-1)
        }
       
   }
  return (
    <>

    <div className='container'>
        <h1>{num}</h1>
        <div className='btn'>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>

    </>
  )
}

export default Incre