import React, { Component } from 'react'
 class SimpleCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         toggle:false
      }
    }
    setToggle=()=>{
        this.setState((prev)=>({...prev,toggle:!prev.toggle}))
    }
    increment=()=>{
        this.setState((prev)=>{
            if(prev.toggle){
                return {
                    ...prev,
                    count:prev.count+1
                }
            }return prev
        })
    }
    
  render() {
    console.log("This is a simple Component")

    return (
      <div>
        <h1>Simple Component</h1>
        <p>{this.state.count}</p>
        <button onClick={this.setToggle}>SetToggle</button>
        <button onClick={this.increment}>Counter</button>
      </div>
    )
  }
}


export default SimpleCounter