import React, { PureComponent } from 'react'

 class PureCounter extends PureComponent {
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
    console.log("This is a pure Component")
    return (
      <div>
        <h1>Pure Component</h1>
        <p>{this.state.count}</p>
        <button onClick={this.setToggle}>SetToggle</button>
        <button onClick={this.increment}>Counter</button>
      </div>
    )
  }
}

export default PureCounter