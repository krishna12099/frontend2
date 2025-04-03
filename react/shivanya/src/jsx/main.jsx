import React from 'react'

// import './mycss.css';

import './main.css';

function main_jsx() {

    var name ="Raj";
    const myElement =<h1>
        React is {5+5} time better with JSX
    </h1>;

    const myDiv = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    )

    var myStyle = {
        color:"red",textDecoration:'uppercase',backgroundColor:'pink'
    }

    const x = 50;
    let text = "Goodbye";
    if (x<10){
        text = "Hello";
    }

  return (
    <div>
        <h1>Hi i am jsx </h1>
        <h1>{name}</h1>
        {myElement}
        {5+5}
        {myDiv}

        <hr></hr>

        <h1 style = {{color:"red",backgroundColor:'yellow'}} Hi i am css ></h1>

        <h1 style={myStyle}>Hi i am css with variable</h1>

        <h1 className ='box'>Hi i am external css </h1>

        <h1 className ='box'>Hi i am external css</h1>

        <hr></hr>

        <h1>{text}</h1>

    </div>
  )
}


export default main_jsx;