import React, { Component } from 'react'

export class MainClassState extends Component {
    constructor(){
        super();
        this.state = {
            name:"rajesh",
            Number:1,
        }
    }

    plus = () => {
        this.setState ({Number:this.state.Number + 1})
    }

    minus = () => {
        this.setState ({Number:this.state.name - 1})
    }
  render() {
    return (
      <div>
        <button onClick={()=> this.setState ({name:"Akash"})}>change</button>
        <h1>Hii my name is:{this.state.name}</h1>
        <hr/>

        <button onClick={this.plus}>+</button>
        <h1>{this.state.Number}</h1>

        <button onClick={this.minus}>-</button>


      </div>
    )
  }
}

export default MainClassState