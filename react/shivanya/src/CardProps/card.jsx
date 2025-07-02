import React from 'react'
import "./style.css"
function Card(props) {
   console.log(props);
    return (
        <>
            <div className='card'>
            <img src={props.img} alt='doll'/>
            <h3>Doll {props.title} Image</h3>
            </div>
        </>
    )
}

export default Card