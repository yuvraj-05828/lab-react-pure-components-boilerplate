import React, { Component } from 'react'
import PureCounter from './components/PureCounterComponents'
import SimpleCounter from './components/SimpleCounterComponent'
import './App.css'
class App extends Component {
  
  render() {
    return (
      <div>
        <SimpleCounter/>
        <PureCounter/>
      </div>
    )
  }
}
export default App